import React from 'react';
import { SchoolIcon, TrophyIcon, BadgeIcon, ArticleIcon } from '../../../icons';
import useReveal from '../../hooks/useReveal';
import profile from '../../../../data/profile';

const Education = () => {
  const ref = useReveal();

  return (
    <section id="education" className="section reveal" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Education &amp; Recognition</p>
        <h2 className="section__title">Roots &amp; milestones</h2>

        <div className="education__grid">
          <div className="info-card">
            <div className="info-card__icon">
              <SchoolIcon size={18} />
            </div>
            <h3>Education</h3>
            {profile.education.map((edu) => (
              <div key={edu.degree} className="info-card__row">
                <strong>{edu.degree}</strong>
                <span>
                  {edu.school} · {edu.period}
                </span>
                <span className="muted">{edu.note}</span>
              </div>
            ))}
          </div>

          <div className="info-card">
            <div className="info-card__icon">
              <TrophyIcon size={18} />
            </div>
            <h3>Awards</h3>
            <ul className="info-card__list">
              {profile.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <div className="info-card__icon">
              <BadgeIcon size={18} />
            </div>
            <h3>Certifications</h3>
            <ul className="info-card__list info-card__list--certs">
              {profile.certifications.map((cert) => (
                <li key={cert.name}>
                  <strong>{cert.name}</strong>
                  <span className="muted">
                    {cert.issuer} · {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <div className="info-card__icon">
              <ArticleIcon size={18} />
            </div>
            <h3>Publication</h3>
            <ul className="info-card__list">
              {profile.publications.map((pub) => (
                <li key={pub.title}>{pub.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
