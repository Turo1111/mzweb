import styled from "styled-components";

export const ContainerIndex = styled.div `
 display: grid;
 height: 100vh;
 grid-template-columns: 40% 60%;
 grid-template-rows: 25% 75% ;
 grid-template-areas:
 "space1 space2"
 "space3 space4 " ;
`