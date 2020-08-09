import React from 'react';
import './Content.scss';

const Content = ({pageContent}) => {
  const {content, title} = pageContent
  return (
    <section className = "main-content">
      <h2 className="">{title}</h2>
      <p>
        {content}
      </p>
    </section >
  )
}

export default Content;