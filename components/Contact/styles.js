import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100%;
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      grid-column: 1/3;
      grid-row: span 2;
    }
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #d9d9d9;
  padding: 5px;
  @media only screen and (min-width: 1441px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
`

export const Item = styled.div `
  display: flex;
  font-family: CairoRegular;
  font-size: 20px;
  color: #d9d9d9;
  margin: 25px 0;
  @media only screen and (min-width: 1441px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 15px;
  }
`

export const Center = styled.div `
  text-align: center;
  height: 100%;
  padding: 0 10%;
  @media only screen and (max-width: 425px) {
    padding: 0 1%;
  }
`