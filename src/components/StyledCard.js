import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: lightgrey;
  padding: 20px;
`;

export const CardAuthor = styled.h2`
  margin: 0;
`;

export const CardText = styled.p`
  margin: 0;
`;
