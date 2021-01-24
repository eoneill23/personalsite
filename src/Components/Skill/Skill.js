import React from 'react';
import './Skill.scss';
import HTML from '../../assets/HTML.svg';

const Skill = ({skillObj}) => {
  const { skill, image } = skillObj;
  return (
    <li>
      {skill}
      <img src={image} className="skill-logo"/>
    </li>
  )
}

export default Skill;