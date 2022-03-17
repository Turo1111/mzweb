import styled from "styled-components";

export const Container = styled.div `
 width: 40%;
 height: 70%;
 background: #494949;
 grid-area: space4;
`

export const Header = styled.div `
 width: 100%;
 height: 40px;
 background-color: #D9D9D9;
 display: flex;
 align-items: center;
 padding: 0 10px;
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

export const List = styled.ul `
 width: 100%;
 height: 100%;
 padding: 15px;
 text-align: center;
`

export const ListItem = styled.li `
 color: #D9D9D9;
 font-size: 22px;
 font-family: CairoRegular;
 list-style: none;
 margin: 5px 0;
`