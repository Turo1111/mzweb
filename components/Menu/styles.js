import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  grid-area: ${props => props.area ? "space1" : "space3"};
  padding-top: 15%;
  z-index: 8;
  display: ${props => props.area && "flex"};
  justify-content: ${props => props.area && "center"};
  align-items: ${props => props.area && "center"};
`

export const MenuItem = styled.div `
 color: ${props => props.active ? "#444941" : "#D9D9D9"};
 background-color: ${props => props.active && "#D9D9D9"};
 font-size: 46px;
 width: 65%;
 padding-left: ${props => props.active ? "30%" : "15%"};
 font-family: CairoRegular;
 margin: 10px 0;
 :hover{
  color: #444941;
  background-color: #D9D9D9;
  padding-left: 30%;
 }
 @media only screen and (max-width: 1023px) {
    width: 100%!important;
    font-size: 40px;
    color: #444941;
  }
 @media only screen and (max-width: 1280px) {
    width: 70%;
    font-size: 40px;
  }
  @media only screen and (min-width: 1441px) {
    font-size: 58px;
 }
 transition: background-color 1500ms;
`

export const IconWrapper = styled.span `
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #d9d9d9;
  padding: 5px;
  :hover{
    background-color: rgb(217,217,217, 0.8);
    border-radius: 50%;
    padding: 15px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 20px;
    align-items: start;
  }
`

export const MenuAbsolute = styled.div `
  position: absolute;
  top: 60%;
  left: 5%;
  background-color: white;
  width: 250px;
  border-end-start-radius: 15px;
  border-end-end-radius: 15px;
`