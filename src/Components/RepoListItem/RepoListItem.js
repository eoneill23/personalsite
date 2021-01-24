import React, { useEffect, useState } from "react";
import { fetchRepoLanguages } from "../../utils/api-calls";
import './RepoListItem.scss';

const RepoListItem = ({repoItem}) => {
  const [repoLanguages, setRepoLanguages] = useState([]);
  const { full_name, html_url, description, languages_url, repoLangs } = repoItem;

  const splitFullName = full_name.split('/')
  const shortenedFullName = splitFullName[1].charAt(0).toUpperCase() + splitFullName[1].slice(1);
  // const getGitHubLanguages = async () => {
  //   const response = await fetchRepoLanguages(languages_url);
  //   const repoLanguages = Object.keys(response)
  //   setRepoLanguages(repoLanguages)
  // }

  // useEffect(() => {
  //   getGitHubLanguages();
  // }, []);

  return (
    <li className="repo-list-item">
      <header className="repo-list-item-header">
          <h3 className="repo-list-item-h3">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-list-item-link"
              >
              {shortenedFullName}
            </a>
          </h3>
        </header>
        <section className="repo-list-item-content">
          <p>{description}</p>
          <h3>Built with:</h3>
          <ul className="repo-languages">
            {repoLangs.map((language, index) => {
              return <li key={index}>{language}</li>;
            })}
          </ul>
        </section>
    </li>
  );
}

export default RepoListItem;