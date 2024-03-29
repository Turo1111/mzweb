import styled from "styled-components";

export const Container = styled.div `
 width: ${props => props.width ? props.width : "40%"};
 height: ${props => props.height ? props.height : "60vh"};
 background: ${props => props.bg ? props.bg : "#494949"};
 grid-area: space4;
 box-shadow: 1px 1px 5px black;
 margin: 10px 0;
 position: relative;/* 
 background-image: ${props => props.background && `url(${props.background})`};
 background-size: cover;
 background-position-y: -25%; */
 @media only screen and (max-width: 1024px) {
   width: ${props => props.width ? props.width : "45%"};
}
 @media only screen and (max-width: 767px) {
    width: ${props => props.width ? props.width : "auto"};
 }
 @media only screen and (max-width: 480px) {
    width: ${props => props.width ? "100%" : "auto"};
    height: auto;
    padding-bottom: 5px;
 }
 @media only screen and (max-width: 375px) {
    width: ${props => props.width ? "95%" : "auto"};
 }
`

export const Header = styled.div `
 width: 100%;
 height: 40px;
 background-color: #D9D9D9;
 display: flex;
 align-items: center;
 padding: 0 10px;
 @media only screen and (min-width: 1920px) {
   height: ${props => props.height ? "40px" : "60px"};
 }
 @media only screen and (max-width: 1366px) {
   height: ${props => props.height ? "40px" : "50px"};
 }
 @media only screen and (max-width: 1024px) {
   height: 40px;
 }
`

export const Content = styled.div`
  width: 100%;
  height: 84%;
  position: relative;
`

export const Circle = styled.div `
     width: 10px;
     height: 10px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: ${props => props.color && props.color};
     margin: 0 5px;
`

export const Title = styled.div `
 font-family: CairoRegular;
 font-size: 16px;
 margin: 0 10px;
 display: flex;
 align-items: center;
 color: #333333;
 @media only screen and (min-width: 1440px) {
  font-size: 20px;
 }
 @media only screen and (max-width: 1366px) {
   font-size: 18px;
 }
 @media only screen and (max-width: 1024px) {
   font-size: 16px;
 }
 @media only screen and (max-width: 425px) {
   font-size: 14px;
 }
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #1A1C20;
  padding: 5px;
  color: ${props => props.color ? props.color : "#333333"};
`

export const Transition = styled.div `
   /* display: ${props => props.open ? "block" : "none"}; */
   opacity: ${props => props.open ? "1" : "0"};
   transition: all 1000ms;
`