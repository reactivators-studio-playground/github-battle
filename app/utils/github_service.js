// @flow
import Github from 'github-api';

const github: Object = new Github();

const getUser = (name: string) => (
  github.getUser(name)
);

/**
 * get two github users
 * @param  {[string]} first the first user name
 * @param  {[string]} second the second user name
 * @return {[users profile info as promise]} the users info wrapped in a promise
 */
const getUsers = (first: string, second: string) => (
  Promise.all([first, second].map((name) =>
    (getUser(name)
      .getProfile()
      .then(response => response.data))))
    .catch(error => {
      console.warn("Failed to fetch users:", error);
    })
);

export default getUsers;
