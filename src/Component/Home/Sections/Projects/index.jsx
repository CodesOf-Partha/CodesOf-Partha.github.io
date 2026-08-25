import React from 'react';
import useReveal from '../../hooks/useReveal';
import profile from '../../../../data/profile';

const Projects = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="section reveal" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Selected Work</p>
        <h2 className="section__title">Products &amp; platforms I've built</h2>
        <div className="projects__grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card__head">
                <h3>{project.name}</h3>
                <span className="pill">{project.tag_label}</span>
              </div>
              <p>{project.blurb}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span className="tag tag--sm" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
