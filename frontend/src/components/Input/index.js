import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { TInput, TTextArea } from './styles';

export default function Input({ name, error, multiline, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {multiline ? (
        <TTextArea
          ref={inputRef}
          error={error}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <TInput
          ref={inputRef}
          error={error}
          defaultValue={defaultValue}
          {...rest}
        />
      )}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};
