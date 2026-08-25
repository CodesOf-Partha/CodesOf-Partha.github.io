import React from 'react';
import useReveal from '../../hooks/useReveal';
import profile from '../../../../data/profile';

const Skills = () => {
  const ref = useReveal();

  return (
    <section id="skills" className="section reveal" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Skills</p>
        <h2 className="section__title">A full-stack, AI-native toolkit</h2>
        <div className="skills__grid">
          {profile.skills.map((group) => (
            <div className="skills__card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
