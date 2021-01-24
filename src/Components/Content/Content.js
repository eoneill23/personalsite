import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../../utils/api-calls';
import './Content.scss';
import Skill from '../Skill/Skill';
import { pageContent, skills } from '../../content';
import RepoListItem from '../RepoListItem/RepoListItem';
import mockGhData from '../../utils/mockGHData';

const Content = () => {
  const [githubRepos, setGitHubRepos] = useState([]);
  const [skillList, setSkills] = useState([]);
  const { homeContent, aboutContent } = pageContent;

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

  const displaySkills = () => {
    const skillComponents = skills.map((skill, index) => {
      return <Skill key={index} skill={skill}/>
    });
    setSkills(skillComponents)
  }

  useEffect(()  => {
    getGitHubRepos();
    displaySkills();
  }, []);

  return (
    <section>
      <section className="main-content" id="home"> 
        <h2 className="">{homeContent.title}</h2>
        <p>
          {homeContent.content}
          {/* TODO: Add headshot/image */}
        </p>
        <p>
          {aboutContent.content}
        </p>
        <p>
          {aboutContent.secondaryContent}
        </p>
        <p>
          {aboutContent.tertiaryContent}
        </p>
      </section >
      <section className="skills">
        <ul className="skills-list">
          {skillList}
        </ul>
      </section>
      <section className="github-repo-list-container" id="skills-github">
        <h3>Check out my recent work on GitHub:</h3>
        <ul className="github-repo-list">
          {githubRepos}
        </ul>
      </section>
    </section>
  );
}

export default Content;