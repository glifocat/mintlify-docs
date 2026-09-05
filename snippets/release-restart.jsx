// Conceptual illustration verified against container-runner.ts and docker-driver.ts @ b76fcb3d.
export const ReleaseRestart = () => (
  <figure className="not-prose release-flow">
    <div className="release-flow-label">What happens during a service restart</div>
    <ol>
      <li><span className="release-flow-number">1</span><strong>Assistant working</strong><span>A session is running.</span></li>
      <li><span className="release-flow-number">2</span><strong>Service restarts</strong><span>The session keeps running.</span></li>
      <li><span className="release-flow-number">3</span><strong>Session reconnects</strong><span>NanoClaw adopts the work.</span></li>
    </ol>
    <figcaption>Illustration of session recovery. Containers started before v2.3.0 cannot be adopted and are removed at the first upgraded startup.</figcaption>
  </figure>
);
