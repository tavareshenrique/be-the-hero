import styled from 'styled-components/native';

export const Container = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: ${(props) => (props.margin ? '24px' : '0px')};
  color: #737380;
`;
