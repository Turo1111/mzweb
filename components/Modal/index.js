import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { Button, Circle, Container, Content, Header, IconWrapper, ModalButton, ModalContent, ModalHeader, Title } from "./styles"

const Modal = ({
    children,
    open = false,
    eClose,
    title,
    modalButton = false,
    onButton1,
    onButton2,
    borderRadius = false,
    width = "30%",
    height = "35%"
}) => {
    return (
        <Container open={open}>
            <Content
                borderRadius = {borderRadius}
                width = {width}
                height = {height}
            >   
                <ModalHeader title={title}>
                    <Header>
                      <Circle color={"#E2202C"}/>
                      <Circle color={"#FEE94E"}/>
                      <Circle color={"#35B736"}/>
                      <Title>
                        {title}
                      </Title>
                    </Header>
                    <IconWrapper onClick={eClose} >
                        <AiOutlineClose/>
                    </IconWrapper>
                </ModalHeader>
                <ModalContent>
                    {children}
                </ModalContent>
                <ModalButton modalButton={modalButton}>
                    <Button onClick={onButton1} >Cancelar</Button>
                    <Button onClick={onButton2} >Aceptar</Button>
                </ModalButton>
            </Content>
        </Container>
    )
}

export default Modal