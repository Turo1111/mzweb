
import Head from 'next/head';
import React from "react"
import Window from "../Window"
import { Center, Container, IconWrapper, Item } from "./styles"
import { HiOutlineMail } from "react-icons/hi"
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Contact = () => {
    return(
        <Container>
            <Head>
              <title>Contact - Zurita Matias</title>
              <link rel="icon" href="/contact.ico" />
            </Head>
            <Window width={"70%"} title={"Redes "} height={"auto"} >
            <Center>
                <Item >
                    <IconWrapper>
                        <HiOutlineMail/>
                    </IconWrapper>
                    matiaszurita1998@gmail.com
                </Item>
                <Item >
                    <IconWrapper>
                        <BsLinkedin/>
                    </IconWrapper>
                    linkedin.com/in/jose-matias-zurita-4ab0661ba/
                </Item>
                <Item>
                    <IconWrapper>
                        <BsGithub/>
                    </IconWrapper>
                    github.com/Turo1111
                </Item>
            </Center>
            </Window>
        </Container>
    )
}

export default Contact