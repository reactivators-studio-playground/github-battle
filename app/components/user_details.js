import React, { PropTypes } from 'react';

const UserDetails = (user) => {
  const {
    avatar_url,
    name,
    login,
    location,
    company,
    followers,
    following,
    public_repos,
    blog,
  } = user.info;

  return (
    <div>
      {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
      <li className="list-group-item">
        <img
          src={avatar_url}
          className="img-rounded img-responsive"
          alt="avatar"
        />
      </li>
      {name && <li className="list-group-item">Name: {name}</li>}
      <li className="list-group-item">Username: {login}</li>
      {location && <li className="list-group-item">Location: {location}</li>}
      {company && <li className="list-group-item">Company: {company}</li>}
      <li className="list-group-item">Folloers: {followers}</li>
      <li className="list-group-item">Following: {following}</li>
      <li className="list-group-item">Public repos: {public_repos}</li>
      {blog && <li className="list-group-item">Blog: <a href={blog}>{blog}</a></li>}
    </div>
  );
};

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  }),
};

export default UserDetails;
