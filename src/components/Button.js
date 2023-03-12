import styled from "styled-components";


export const Button = styled.button`
  height: 3rem;
  width: 100%;
  background-color: ${({theme}) => theme.currentLine};
  border-radius: 5px;
  color: ${({theme}) => theme.foreground};
  font-weight: 500;
`

