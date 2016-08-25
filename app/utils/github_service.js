// @flow
import Github from 'github-api';

const github: Object = new Github({
});

/**
 * get two github users
 * @param  {[string]} first the first user name
 * @param  {[string]} second the second user name
 * @return {[users profile info as promise]} the users info wrapped in a promise
 */
const getUsers = (first: string, second: string) => (
  Promise.all([first, second].map((name) => (
    github.getUser(name)
      .getProfile()
      .then(response => response.data)
    )))
    .catch(error => {
      console.warn('Failed to fetch users:', error);
    })
);

/**
 * Get the battle scores of two users as promise of arrays
 * @param {[Object[]]} array of users
 * @return {[Promise<Int[]>]} promise for array of integers
 */
export const battle = (players: Object[]) => (
  Promise.all(players.map((player) => (
    github.getUser(player.login)
      .listRepos()
      .then(response =>
        response.data.filter(repo => !repo.fork)
          .reduce((stars, repo) => stars + repo.stargazers_count, 0))
    )))
    .catch(error => {
      console.warn('Failed to get battle results:', error);
    })
);

export default getUsers;
