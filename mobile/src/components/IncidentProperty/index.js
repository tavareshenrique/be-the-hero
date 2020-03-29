import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function IncidentProperty({ children }) {
  return <Container>{children}</Container>;
}

IncidentProperty.propTypes = {
  children: PropTypes.string.isRequired,
};
