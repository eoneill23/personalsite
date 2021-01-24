import React, { useEffect, useState } from "react";
import { fetchRepoLanguages } from "../../utils/api-calls";
import './RepoListItem.scss';

const RepoListItem = ({repoItem}) => {
  const [repoLanguages, setRepoLanguages] = useState([]);
  const { full_name, html_url, description, languages_url } = repoItem;

  const getGitHubLanguages = async () => {
    const response = await fetchRepoLanguages(languages_url);
    const repoLanguages = Object.keys(response)
    setRepoLanguages(repoLanguages)
  }

  useEffect(() => {
    getGitHubLanguages();
  }, []);

  return (
    <li className="repo-list-item">
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {full_name}
        </a>
      </h3>
      <p>{description}</p>
      <h3>Built with:</h3>
      <ul className="repo-languages">
        {repoLanguages.map((language, index) => {
          return <li key={index}>{language}</li>
        })}
      </ul>
    </li>
  );
}

export default RepoListItem;