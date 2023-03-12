import styled from "styled-components";


export const Container = styled.div`
  background-color: ${({theme}) => theme.foreground};
  height: 100%;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: flex-start;
`
