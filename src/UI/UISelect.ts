import styled from "styled-components";
interface UISelectProps {
    margintop: string;
  }

export const UISelect = styled.select<UISelectProps>`
    padding: 10px;
    height: 50px;
    border: 2px solid #1E90FF; 
    border-radius: 5px; 
    font-size: 16px;
    outline: none; 
    transition: border-color 0.3s; 
    margin-left: 10px; 
    margin: ${props => props.margintop};
    &:focus {
        border-color: #1E90FF;
    }
`;

export const UIOption = styled.option`
  padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
    
    &:focus {
        background-color: #d0d0d0;
    }
`