import React from 'react';
import './RepoListItem.scss';

const RepoListItem = ({repoItem}) => {
  const { full_name, html_url, description } = repoItem
  return (
    <li className="repo-list-item">
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {full_name}
        </a>
      </h3>
      <p>{description}</p>
    </li>
  );
}

export default RepoListItem;