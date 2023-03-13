import styled from "styled-components";

export const IconDiv = styled.div`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  :hover{
      background-color: ${({theme}) => theme.purple};
  }
`