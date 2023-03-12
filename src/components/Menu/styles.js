import styled from "styled-components";
import { rgba } from "polished";

export const Container = styled.nav`
  background-color: ${({theme}) => theme.background};
  height: 100%;
  width: 250px;
  position: fixed;
  top: 3rem;
  left: 0;
 
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
  cursor: pointer;
  border-radius: 0 0 5px 5px;
  padding: 1rem;
  border-bottom: 1px solid ${({theme}) => theme.foreground};
  :hover{
    
    background: ${({theme}) => `linear-gradient(0deg, ${rgba(theme.purple, 0.25)} 0%, ${rgba(theme.purple, 0)} 100%)`};
    //${({theme}) => theme.purple};
    //border-bottom: 1px solid ${theme => theme.currentLine};
  }
`
