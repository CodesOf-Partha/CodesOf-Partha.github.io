import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon, PhoneIcon, DownloadIcon } from '../../../icons';
import useReveal from '../../hooks/useReveal';
import profile from '../../../../data/profile';

const ICONS = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Twitter: TwitterIcon, MailOutline: MailIcon };

const Contact = () => {
  const ref = useReveal();

  return (
    <section id="contact" className="section reveal" ref={ref}>
      <div className="section__inner">
        <div className="contact__card">
          <div>
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">Let's build something worth shipping</h2>
            <p className="contact__lead">
              Open to senior full-stack and applied-AI roles. Reach out directly, or grab the résumé for the full picture.
            </p>

            <div className="contact__details">
              <a href={`mailto:${profile.email}`}>
                <MailIcon size={17} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
                <PhoneIcon size={17} /> {profile.phone}
              </a>
            </div>

            <div className="contact__cta">
              <a className="btn btn--primary" href={profile.resume} target="_blank" rel="noreferrer">
                <DownloadIcon size={17} /> Download Résumé
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                Say hello
              </a>
            </div>
          </div>

          <div className="contact__socials">
            {profile.socials.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a key={social.name} href={social.url} target={social.url.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                  <Icon size={18} />
                  <span>{social.handle}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
