import React from 'react';

const RepoListItem = ({repoListItem}) => {
  const { fullname, url, description } = repoListItem
  return (
    <li>
      {fullname}
    </li>
  )
}

export default RepoListItem;