import styled, { css } from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;
