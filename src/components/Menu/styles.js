import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({theme}) => theme.background};
  height: 100%;
  width: 250px;
  position: absolute;
  top: 5rem;
  left: 0;
  padding: 1rem;
  ${props => {
    switch (props.display) {
      case "none":
        return `display: none;`;
      default:
        return `display: block;`;
    }
  }}
`

export const Ul = styled.ul`
  
`
export const Li = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${theme => theme.currentLine};
`
