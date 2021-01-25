import React from 'react';
import './Skill.scss';

const Skill = ({skillObj}) => {
  const { skill, image } = skillObj;
  return (
    <li className="skill-list-item">
      {skill}
      <img src={image} className="skill-logo"/>
    </li>
  )
}

export default Skill;