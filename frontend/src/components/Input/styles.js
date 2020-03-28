import styled from 'styled-components';

export const TInput = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid ${(props) => (props.error ? '#F44336' : '#dcdce6')};
  border-radius: 3px;
  padding: 0 24px;
`;

export const TTextArea = styled.textarea`
  border: 1px solid ${(props) => (props.error ? '#F44336' : '#dcdce6')} !important;
`;
