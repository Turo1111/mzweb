import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  grid-area: space3;
  margin-top: 25%;
`

export const MenuItem = styled.div `
 color: ${props => props.active ? "#444941" : "#D9D9D9"};
 background-color: ${props => props.active && "#D9D9D9"};
 font-size: 46px;
 width: 60%;
 padding-left: ${props => props.active ? "30%" : "15%"};
 font-family: CairoRegular;
`