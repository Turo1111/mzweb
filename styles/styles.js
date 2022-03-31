import styled from "styled-components";

export const ContainerIndex = styled.div `
 display: grid;
 height: 100vh;
 grid-template-columns: 40% 60%;
 grid-template-rows: 25% 75% ;
 grid-template-areas:
 "space1 space2"
 "space3 space4 " ;
 @media only screen and (max-width: 1023px) {
  grid-template-columns: 15% auto;
  grid-template-rows: 20% auto ;
  grid-template-areas:
  "space1 space2"
  "space3 space4 " ;
 }
 @media only screen and (max-width: 767px) {
  grid-template-columns: 15% auto;
  grid-template-rows: 10% auto ;
  grid-template-areas:
  "space1 space2"
  "space3 space4 " ;
 }
`