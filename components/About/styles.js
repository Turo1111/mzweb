import styled from "styled-components"

export const List = styled.ul `
 width: 100%;
 height: 100%;
 padding: 15px;
 text-align: center;
 @media only screen and (max-width: 767px) {
  padding: 0 15px;
 }
 
`

export const ListItem = styled.li `
 color: #D9D9D9;
 font-size: 22px;
 font-family: CairoRegular;
 list-style: none;
 margin: 5px 0;
 display: flex;
 @media only screen and (min-width: 1440px) {
  font-size: 26px;
 }
 @media only screen and (min-width: 1880px) {
  font-size: 32px;
 }
 @media only screen and (max-width: 1024px) {
  font-size: 16px;
 }
 @media only screen and (max-width: 425px) {
  font-size: 16px;
 }
`

export const Container = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: space4;
  @media only screen and (max-width: 1023px) {
    grid-column: 1/3;
    grid-row: 2;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    padding: 15px 20%;
  }
  @media only screen and (max-width: 425px) {
    padding: 10px 10%;
 }
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #1A1C20;
  padding: 5px;
  margin-right: 15px;
  color: #FFD93D;
  @media only screen and (max-width: 425px) {
    font-size: 20px;
 }
`