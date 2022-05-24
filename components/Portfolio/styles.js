import styled from "styled-components";

export const Container = styled.div `
    grid-column: 2;
    grid-row: span 2;
    width: 100%;
    height: 100%;
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
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