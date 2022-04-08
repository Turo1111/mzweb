import styled from "styled-components";

export const Container = styled.div `
 grid-area:space2 ;
 text-align:center;
`

export const Hi = styled.div `
 font-size: 50px;
 font-family: CairoRegular ;
 color: #D9D9D9 ;
 @media only screen and (min-width: 1600px) {
  font-size: 56px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 25px;
    }
  @media only screen and (max-width: 320px) {
    font-size: 20px;
  }
`
export const Job = styled.div `
 font-size: 36px;
 font-family: CairoRegular ;
 color: #D9D9D9 ;
 @media only screen and (min-width: 1600px) {
  font-size: 42px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 30px;
  }
 @media only screen and (max-width: 767px) {
  font-size: 18px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 16px;
  }
`