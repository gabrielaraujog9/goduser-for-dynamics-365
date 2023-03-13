import styled from "styled-components";
import { rgba } from "polished";

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
  box-shadow: 0 3px 5px black;
`

export const Menu = styled.nav`
  background-color: ${({theme}) => theme.background};
  height: 100%;
  position: fixed;
  top: 3rem;
  width: 0;
  left: 0;
  pointer-events: none;
  transition: 0.5s;
  box-shadow: 3px 3px 5px black;
  ${props => {
    if(props.open){
      return `pointer-events: auto;
              width: 15.625rem;`;
    }else{
      return `pointer-events: none;
              width: 0;`;
    }
  }}

  li{
    cursor: pointer;
    border-radius: 0 0 5px 5px;
    padding: 0;
    opacity: 0;
    border-bottom: 1px solid ${({theme}) => theme.foreground};
    :hover{   
      background: ${({theme}) => `linear-gradient(0deg, ${rgba(theme.purple, 0.25)} 0%, ${rgba(theme.purple, 0)} 100%)`};
    }
    ${props => {
    if(props.open){
      return `pointer-events: auto;
              opacity: 1;
              padding: 1rem;`;
    }else{
      return `pointer-events: none;
              opacity: 0;
              padding: 0;`;
    }
  }}
  }
`


