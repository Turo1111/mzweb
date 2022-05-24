import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100%;
    background-color: rgb(217, 217, 217, 0.8);  
    transition: all 1500ms;
    position: absolute;
`

export const List = styled.ul `
    margin: 0;
    padding: 10px;
`

export const ListItem = styled.li`
    list-style: none;
    font-family: CairoRegular;
    margin: 5px;
    border: 1px solid black;
    padding: 0 5px;
    /* background-color: rgb(117, 117, 117); */
    font-size: 12px;
    width: max-content;
`

export const ViewMore = styled.button`
    font-family: CairoRegular;
    margin: 5px;
    border: 1px solid black;
    padding: 0 5px;
    /* background-color: rgb(117, 117, 117); */
    font-size: 12px;
    text-align: center;
    width: max-content;
`



export const GridModal = styled.div `
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 20% 62% 18%;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 4fr;
    }
    @media only screen and (max-width: 425px) {
        display: block;
    }
`