#!/usr/bin/env python3
"""Print a repository coverage snapshot; does not assess product correctness.

Run from the repository root: python3 scripts/docs-inventory.py > docs/editorial/readiness/inventory.md
Scans tracked public MDX (including staged files), respecting this repo's simple
.mintignore directory/glob rules. Not a general Mintlify/MDX parser.
"""
import fnmatch
import json
import re
import subprocess
from pathlib import Path


def navigation_pages(value):
    if isinstance(value, dict):
        for key, child in value.items():
            if key == 'pages':
                for item in child:
                    if isinstance(item, str):
                        yield item
                    else:
                        yield from navigation_pages(item)
            else:
                yield from navigation_pages(child)
    elif isinstance(value, list):
        for child in value:
            yield from navigation_pages(child)


def ignored(path, patterns):
    return any(path.startswith(p) if p.endswith('/') else fnmatch.fnmatch(path, p)
               for p in patterns)


def cell(text):
    return text.replace('|', '\\|').replace('\n', ' ').strip()


def main():
    config = json.loads(Path('docs.json').read_text())
    nav = set(navigation_pages(config['navigation']))
    patterns = [p.strip() for p in Path('.mintignore').read_text().splitlines()
                if p.strip() and not p.lstrip().startswith('#')]
    files = subprocess.check_output(['git', 'ls-files', '-z'], text=True).split('\0')
    pages = sorted(p for p in files if p.endswith('.mdx') and
                   not p.startswith(('.', 'docs/', 'node_modules/')) and not ignored(p, patterns))
    rows = []
    for name in pages:
        text = Path(name).read_text()
        front = re.match(r'^---\s*\n(.*?)\n---', text, re.S)
        desc = re.search(r'^description:\s*(.*)$', front[1], re.M) if front else None
        body = text[front.end():] if front else text
        stamps = re.findall(r'\{/\*\s*verified-against\b(.*?)\*/\}', body, re.S)
        prose = re.sub(r'\{/\*.*?\*/\}', '', body, flags=re.S)
        images = len(re.findall(r'<img\b|!\[[^\]]*\]\(', prose))
        video = len(re.findall(r'<(?:video|iframe)\b', prose, re.I))
        prereq = re.findall(r'^#{2,3}\s+(.*(?:[Pp]rerequisites|[Rr]equirements|[Bb]efore you start).*)$', prose, re.M)
        route = name[:-4]
        if route.startswith('reference/'):
            audience, pattern, assumed = 'Operator / contributor', 'Reference', 'CLI or implementation knowledge'
        elif route.startswith('changelog/'):
            audience, pattern, assumed = 'Existing user', 'Changelog', 'Installed version or change of interest'
        elif route in ('introduction', 'quickstart', 'templates/getting-started'):
            audience, pattern, assumed = 'New user', ('Orientation' if route == 'introduction' else 'Tutorial'), 'Ordinary app use'
        elif route.startswith('concepts/'):
            audience, pattern, assumed = 'Operator / contributor', 'Explanation', 'Working install; technical terms'
        elif route in ('templates/building', 'templates/submitting', 'extend/writing-skills'):
            audience, pattern, assumed = 'Contributor', 'How-to', 'Development tools and working install'
        elif route.endswith('/overview'):
            audience, pattern, assumed = 'User choosing a path', 'Orientation', 'Varies; review opening'
        else:
            audience, pattern, assumed = 'Existing user / operator', ('Troubleshooting' if route.endswith('troubleshooting') else 'How-to'), 'Working install; review page-specific requirements'
        reviewed = route in ('introduction','quickstart','templates/getting-started')
        priority = 'P1' if route in ('installation','channels/overview','channels/telegram','channels/whatsapp','channels/discord','guides/first-agent','guides/customize-an-agent','guides/scheduled-tasks','operate/troubleshooting','templates/using-templates') else ('P3' if route.startswith(('reference/','changelog/','concepts/')) else 'P2')
        status = 'Historical pilot review at 62c5a5a; current changes and reader success unassessed' if reviewed else 'Inventory only; source freshness unassessed'
        shas = sorted(set(re.findall(r'\b[0-9a-f]{7,40}\b', ' '.join(stamps))))
        rows.append([f'[{name}](../../../{name})', 'Yes' if route in nav else 'No', audience+'; '+pattern, assumed, (desc[1].strip('"\'') if desc else 'MISSING description'), ', '.join(prereq) or 'No matching heading (not proof of absence)', f'{images} image embeds; {video} video/iframe embeds', ', '.join(shas) or 'No SHA extracted', status, 'P1 reader test' if reviewed else priority])
    missing = sorted(p for p in nav if not Path(p+'.mdx').is_file())
    print('# Page inventory\n')
    print('Generated with `python3 scripts/docs-inventory.py` from tracked public MDX and `docs.json`. Refresh after adding, removing, or editing pages. Stage new pages before generating.\n')
    print(f'{len(pages)} public MDX files; {len(nav)} unique navigation page entries; {sum(p[:-4] not in nav for p in pages)} outside the page navigation; {len(missing)} missing navigation targets. Global links and redirect destinations are checked by the normal site review, not counted as page entries here.\n')
    print('Audience, pattern, assumed knowledge, and priority are **initial routing suggestions**, not per-page usability verdicts. Purpose is copied from frontmatter, not an independently verified promise. Prerequisite detection only recognizes headings; requirements may be in prose. Counts omit commented-out markup but count light/dark embeds separately; images may be diagrams, not screenshots. Source SHAs are recorded provenance, **not proof of current verification**. Full findings and acceptance criteria live in [the backlog](backlog.md).\n')
    print('| Page | In navigation | Suggested reader / pattern | Assumed knowledge to confirm | Declared purpose | Prerequisite heading | Visual markup | Recorded source SHAs | Review status | Triage |')
    print('| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |')
    for row in rows:
        print('| '+' | '.join(cell(c) for c in row)+' |')
    if missing:
        raise SystemExit('Missing navigation targets: '+', '.join(missing))


if __name__ == '__main__':
    main()
