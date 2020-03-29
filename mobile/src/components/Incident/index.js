import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Incident({ children }) {
  return <Container>{children}</Container>;
}

Incident.propTypes = {
  children: PropTypes.node.isRequired,
};
