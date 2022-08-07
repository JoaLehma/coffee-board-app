import styled from "styled-components";

const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: lightgrey;
  border-radius: 10px;
  color: black;
  box-shadow: 2px 2px 5px black;
  margin: 10px 0px 10px 0px;

  &:hover {
    background-color: lightcoral;
    cursor: pointer;
  }
`;

export default StyledButton;
