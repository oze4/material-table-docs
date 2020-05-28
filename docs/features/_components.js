import React from 'react';
import Link from '@docusaurus/Link';
import { Button } from '@material-ui/core';
import useBaseUrl from '@docusaurus/useBaseUrl';

const MoreInfoLink = ({ to = '/', title = '' }) => {
  return (
    <Link to={useBaseUrl(to)}>
      {title}
    </Link>
  );
}

export {
  MoreInfoLink,
}