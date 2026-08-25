import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon, ArrowRightIcon, DownloadIcon } from '../../../icons';
import profile from '../../../../data/profile';

const ICONS = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Twitter: TwitterIcon, MailOutline: MailIcon };

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="section__inner hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{profile.locationNote}</p>
          <h1>
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <h2 className="hero__role">{profile.role}</h2>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href={profile.resume} target="_blank" rel="noreferrer">
              <DownloadIcon size={17} /> Download Résumé
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch <ArrowRightIcon size={17} />
            </a>
          </div>

          <div className="hero__socials">
            {profile.socials.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.name}
                  className="hero__social-link"
                  title={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={profile.photo} alt={`${profile.name}, ${profile.role}`} />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to new opportunities
          </div>
        </div>
      </div>

      <div className="hero__stats">
        {profile.highlights.map((item) => (
          <div className="stat" key={item.label}>
            <span className="stat__value">{item.value}</span>
            <span className="stat__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
