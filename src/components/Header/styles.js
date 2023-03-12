import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.background};
  width: 100%;
  max-width: 50rem;
  height: 3rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
`