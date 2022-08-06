import styled from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: lightgrey;
  border-radius: 10px;
  color: black;

  &:hover {
    background-color: lightcoral;
    cursor: pointer;
  }
`;

export default StyledButton;
