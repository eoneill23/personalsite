import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../../utils/api-calls'
import './Content.scss';
import pageContent from '../../content'
import RepoListItem from '../RepoListItem/RepoListItem';
import mockGhData from '../../utils/mockGHData'


const Content = () => {
  const [githubRepos, setGitHubRepos] = useState([]);
  const {homeContent, aboutContent} = pageContent;

  const getGitHubRepos = async () => {
    //let repos = await fetchRepos();
    let repos = mockGhData;
    if (repos.length) {
      repos = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 9);
      const styledRepos = repos.map((repo, index) => {
        return <RepoListItem key={index} repoItem={repo} />
      });
      setGitHubRepos(styledRepos)
    }
  }

  useEffect(()  => {
    getGitHubRepos();
  }, []);

  return (
    <section>
      <section className="main-content"> 
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
      </section >
      <section className="github-repo-list-container">
        <h3>Check out my recent work on GitHub:</h3>
        <ul className="github-repo-list">
          {githubRepos}
        </ul>
      </section>
    </section>
  );
}

export default Content;