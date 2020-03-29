import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function IncidentValue({ children, margin }) {
  return <Container margin={margin}>{children}</Container>;
}

IncidentValue.defaultProps = {
  margin: true,
};

IncidentValue.propTypes = {
  children: PropTypes.string.isRequired,
  margin: PropTypes.bool,
};
