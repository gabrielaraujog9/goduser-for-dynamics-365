import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.background};
  border: 2px solid black;
  height: 5rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const IconDiv = styled.div`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`