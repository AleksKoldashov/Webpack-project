import styled from "styled-components";

export const UIInput= styled.input`
position: relative;
display: inline-block;
width: 500px;
height: 45px;
padding: 10px;
border: 2px solid #1E90FF; 
border-radius: 5px; 
font-size: 16px; 
outline: none;
transition: border-color 0.3s; 

&:focus {
  border-color: #1E90FF;
}

&::placeholder {
  color: #999; 
}
`;