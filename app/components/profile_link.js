// @flow
import React from 'react';

type Props = {
  username: string,
};

type LinkProps = {
  children?: any,
  href: string,
};

const onLinkClick = (href) => {
  window.location.replace(href);
};

const Link = (props: LinkProps) => (
  <span
    style={{ color: 'blue', cursor: 'pointer' }}
    onClick={() => onLinkClick(props.href)}
  >
    {props.children}
  </span>
);

export default (props: Props) => (
  <Link href={`https://www.github.com/${props.username}`}>
    {props.username}
  </Link>
);
