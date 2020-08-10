import React, { useEffect, useState } from 'react';
//import { fetch, fetchLazy } from 'fetch-github-repositories';
import './Content.scss';

const Content = ({pageContent}) => {
  const [githubRepos, setGitHubRepos] = useState([])
  const {title, content, secondaryContent, tertiaryContent} = pageContent

  const getRepos = () => {
    fetch('https://api.github.com/users/eoneill23/repos')
      .then(response => response.json())
      .then(data => console.log('AHHHHHH', data))
    //console.log('AHHHHHHH', repos)
  }

  useEffect(() => {
    getRepos()
    // for (const repo of fetchLazy("fraxken")) {
    //   console.log(repo.full_name);
    // }

  });

  return (
    <section className = "main-content">
      <h2 className="">{title}</h2>
      <p>
        {content}
      </p>
        {secondaryContent && <p>
          {secondaryContent}
        </p>}
      {tertiaryContent && <p>
        {tertiaryContent}
      </p>}
    </section >
  );
}

export default Content;