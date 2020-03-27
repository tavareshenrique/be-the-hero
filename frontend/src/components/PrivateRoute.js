import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function PrivateRoute({ path, component }) {
  return (
    <>
      {localStorage.getItem('ongId') ? (
        <Route path={path} component={component} />
      ) : (
        <>
          <h1>VOCÊ NÃO TEM PERMISSÃO!</h1>
        </>
      )}
    </>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
