import styled from "styled-components";
interface UIInputErrorProps {
    top: string;
  }

export const UIInputError = styled.p<UIInputErrorProps>`
    position: absolute;
    left: 50%;
    top: ${props => props.top};
    color: red;
    transform: translate(-50%, -50%);
    padding: 5px;
`