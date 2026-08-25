import React from 'react';
import useReveal from '../../hooks/useReveal';
import profile from '../../../../data/profile';

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section reveal" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">Engineering products, not just tickets</h2>
        <div className="about__grid">
          <p className="about__text">{profile.summary}</p>
          <ul className="about__facts">
            <li>
              <strong>{profile.location}</strong>
              <span>{profile.locationNote}</span>
            </li>
            <li>
              <strong>Currently</strong>
              <span>SDE-IV, leading platform architecture at Bhanzu</span>
            </li>
            <li>
              <strong>Focus</strong>
              <span>Full-stack product engineering + applied Generative AI</span>
            </li>
            <li>
              <strong>Reachable at</strong>
              <span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
