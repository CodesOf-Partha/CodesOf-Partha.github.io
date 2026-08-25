import React from 'react';
import profile from '../../../../data/profile';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section__inner footer__inner">
        <span>
          © {year} {profile.name}. Built with React.
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
