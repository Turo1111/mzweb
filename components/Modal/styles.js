import styled from "styled-components"

export const Container = styled.div `
  display: ${props => props.open ? 'flex': 'none'};
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
  font-family: CairoRegular;
`


export const Content = styled.div `
  background-color: rgba(250, 250, 250);
  /* margin: 10% auto; /* 15% from the top and centered */
  /* padding: 20px; */
  border: 1px solid #888;
  width: ${props => props.width && props.width }; /* Could be more or less, depending on screen size */
  height: ${props => props.height && props.height };
  border-radius: ${props => props.borderRadius ? '10px': '0'};
  position: relative;
`

export const IconWrapper = styled.div `
    margin: 0 10px;
    font-size: 15px;
    text-align: end;
    :hover{
        color: #FF7878;
    }
`

export const ModalContent = styled.div `
  width: 100%;
  height: inherit;
  padding: 5px 20px;
  @media only screen and (max-width: 425px) {
    padding: 5px;  
    overflow-y: scroll;
  }
`

export const ModalButton = styled.div `
  display: ${props => props.modalButton ? "flex" : "none" };
  justify-content: end;
  position: absolute;
  bottom: 0;
  width: 94%;
  margin-bottom: 5px;
`

export const Button = styled.button `
    padding: 10px 30px;;
    font-size: 12px;
    color: #FF7878;
    border: 1px solid #FF7878;
    background: transparent;
    border-radius: 10px;
    margin: 5px;
    :hover{
        background-color: #FF7878;
        color: white;
    }
`

export const ModalHeader = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: #D9D9D9;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
 /*  border-radius-top: 10px; */
`

export const Header = styled.div `
 width: 100%;
 height: 40px;
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