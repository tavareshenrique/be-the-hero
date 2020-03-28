import React from 'react';
import PropTypes from 'prop-types';

import { Route, useHistory } from 'react-router-dom';

export default function PrivateRoute({ path, component }) {
  const history = useHistory();

  return (
    <>
      {localStorage.getItem('ongId') ? (
        <Route path={path} component={component} />
      ) : (
        <>{history.push('/')}</>
      )}
    </>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
