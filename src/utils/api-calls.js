export const fetchRepos = async () => {
  try {
    const response = await fetch('https://api.github.com/users/eoneill23/repos')
    const repos = await response.json()
    return repos
  }
  catch(error) {
    console.log(error)
  }
}