import styled from "styled-components";


export const Button = styled.button`
  height: 3rem;
  width: 100%;
  background-color: ${({theme}) => theme.purple};
  border: none;
  border-radius: 5px;
  color: ${({theme}) => theme.foreground};
  font-weight: 500;

  :hover{
    background-color: ${({theme}) => theme.background};
    border: 1px solid ${({theme}) => theme.purple};
    color:${({theme}) => theme.purple};
  }
`

