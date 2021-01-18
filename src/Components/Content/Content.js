import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../../utils/api-calls'
import './Content.scss';
import pageContent from '../../content'
import RepoListItem from '../RepoListItem/RepoListItem';

const Content = () => {
  const [githubRepos, setGitHubRepos] = useState([])
  const {homeContent, aboutContent} = pageContent

  const getGitHubRepos = async () => {
    const repos = await fetchRepos();
    if (repos.length) {
      const styledRepos = repos.map((repo) => {
        return <RepoListItem repoitem = {repo} />
      });
      setGitHubRepos(styledRepos)
    }
  }

  useEffect(()  => {
    getGitHubRepos();
  }, []);

  return (
    <section className = "main-content"> 
      <h2 className="">{homeContent.title}</h2>
      <p>
        {homeContent.content}
        {/* TODO: Add headshot/image */}
      </p>
      <p>
        {aboutContent.secondaryContent}
      </p>
      <p>
        {aboutContent.tertiaryContent}
      </p>
      <section>
        <h3>Check out my GitHub Repos:</h3>
        <ul>
          {githubRepos}
        </ul>
      </section>
    </section >
  );
}

export default Content;