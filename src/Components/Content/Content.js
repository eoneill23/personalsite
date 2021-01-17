import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../../utils/api-calls'
import './Content.scss';
import pageContent from '../../content'
import RepoListItem from '../RepoListItem/RepoListItem';

const Content = () => {
  //{pageContent}
  const [githubRepos, setGitHubRepos] = useState([])
  const {homeContent, aboutContent} = pageContent

  const getGitHubRepos = async () => {
    const repos = await fetchRepos();
    console.log('AHHHH', repos)
    // const styledRepos = repos.map((repo) => {
    //   return <RepoListItem repoitem = {repo} />
    // });
    //setGitHubRepos(styledRepos)
  }

  useEffect(()  => {
    getGitHubRepos();
  });

  return (
    <section className = "main-content"> 
      <h2 className="">{homeContent.title}</h2>
      <p>
        {homeContent.content}
      </p>
      <p>
        {aboutContent.secondaryContent}
      </p>
      <p>
        {aboutContent.tertiaryContent}
      </p>
      <ul>
        {githubRepos}
      </ul>
      <section>
        Github
        LinkedIn
    </section>
    </section >
  );
}

export default Content;