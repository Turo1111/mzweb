import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1 ;
    grid-row: 3;
    padding: 15px;
    color: #d9d9d9;
    @media only screen and (max-width: 768px) {
        display: contents;
    }
`

export const List = styled.ul `
    margin: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        height: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }   
`

export const ListItem = styled.li`
    list-style: none;
    font-family: CairoRegular;
    margin: 0 5px;
    border: 1px solid #d9d9d9;
    padding: 0 5px;
    font-size: 15px;
    width: max-content;
    @media only screen and (min-width: 1440px) {
     font-size: 20px;
    }
    @media only screen and (max-width: 1023px) {
        font-size: 12px;
    }
`

export const Title = styled.div `
    font-family: CairoRegular;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #d9d9d9;
    @media only screen and (min-width: 1440px) {
     font-size: 22px;
    }
    @media only screen and (max-width: 1023px) {
        font-size: 14px;
    }
`