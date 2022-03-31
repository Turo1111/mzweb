import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    grid-column: 2;
    grid-row: 1/3;
    @media only screen and (max-width: 768px) {
      grid-column: 1;
      grid-row: 2;
    }
    @media only screen and (max-width: 425px) {
      height: auto;
    }
`

export const Title = styled.div `
    font-family: CairoRegular;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #d9d9d9;
`

export const Description = styled.div `
    font-family: CairoRegular;
    font-size: 12px;
    margin: 5px 0;
`

export const List = styled.ul `
    margin: 0;
    padding: 10px;
`

export const ListItem = styled.li`
    font-family: CairoRegular;
    margin: 5px;
    padding: 0 5px;
    font-size: 12px;
`

export const Link = styled.div `
    font-family: CairoRegular;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    width: 100%;
    color: #4D96FF;
    :hover{
        text-decoration: underline;
    }
`