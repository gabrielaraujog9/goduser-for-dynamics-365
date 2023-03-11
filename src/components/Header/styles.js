import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.background};
  height: 5rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 1rem;
`