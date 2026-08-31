import React from 'react';
import useReveal from '../../hooks/useReveal';
import profile from '../../../../data/profile';

const Experience = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="section reveal" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Experience</p>
        <h2 className="section__title">7+ years of shipping production systems</h2>
        <ol className="timeline">
          {profile.experience.map((job) => (
            <li className="timeline__item" key={`${job.role}-${job.period}`}>
              <div className={`timeline__marker ${job.current ? 'timeline__marker--current' : ''}`} />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  {job.current && <span className="pill pill--live">Current</span>}
                </div>
                <p className="timeline__meta">
                  {job.company} · {job.location} · {job.period}
                </p>
                <ul className="timeline__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
