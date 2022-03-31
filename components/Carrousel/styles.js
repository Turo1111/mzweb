import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100%;
    grid-column: 1;
    grid-row: 1/3;
    position: relative;
    @media only screen and (max-width: 768px) {
      grid-column: 1;
      grid-row: 1;
    }
    @media only screen and (max-width: 425px) {
      height: 40%;
    }
`
export const Img = styled.div `
    width: 100%;
    height: 100%;
    display: ${props => props.active ? "flex" : "none"};
    opacity: ${props => props.active ? "1" : "0"};
    justify-content: center;
    /* background-color: ${props => props.bg && props.bg}; */
    background-image: ${props => props.src && `url(${props.src})`};
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    transition: all 1500ms;
`

export const Circle = styled.div `
     width: 10px;
     height: 10px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: ${props => props.active && "#494949"};
     margin: 0 5px;
     border: 1px solid #494949;
     :hover{
        width: 12px;
        height: 12px;
     }
`

export const ContainerCircle = styled.div `
    display: flex;
    position: absolute;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -50%);
`

export const ContainerArrow = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  padding: 5px;
  color: #494949;
  height: 100%;
  :hover{
    font-size: 30px;
  }
`