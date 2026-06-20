import { Link } from 'react-router-dom';
import { featuredProjects } from '../../data/projects';

// Selected-work teaser on the home page: each project is a row with a short
// summary (the full description lives on the Experience page).
const ProjectsHome = () => (
  <section className="section">
    <div className="wrap">
      <div className="sec-head">
        <div>
          <div className="sec-kicker">▸ Selected work</div>
          <h2 className="sec-title">Projects</h2>
        </div>
        <Link className="sec-cta" to="/experience">
          More work ▸
        </Link>
      </div>
      <p className="sec-desc">A few things I&rsquo;ve designed and built — across hardware, audio, and software.</p>

      <div className="proj-strips">
        {featuredProjects.map((proj) => (
          <a className="proj-strip" key={proj.id} href={proj.link} target="_blank" rel="noopener noreferrer">
            <div className="proj-strip-head">
              <div className="proj-strip-left">
                <div className="proj-strip-title">{proj.title}</div>
                {proj.date && <div className="proj-strip-date">{proj.date}</div>}
              </div>
              <div className="proj-strip-right">
                {proj.category && <div className="proj-strip-cat">{proj.category}</div>}
                {proj.technologies && <div className="proj-strip-tech">{proj.technologies}</div>}
              </div>
            </div>
            <p className="proj-strip-summary">{proj.summary || proj.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsHome;
