import React from "react"
import { Container, Description, IconWrapper, LinkGit, List, ListItem, Title } from "./styles"
import {BsGithub} from "react-icons/bs"
import Link from "next/link"


const AboutSoft = ({description, title, feature, link}) => {
    return(
        <Container>
            <Title>Description</Title>
            <Description>
            {description}
            </Description>  
            <Title>Feature</Title>
            <List>
                {
                    feature.map(item=><ListItem key={item}>{item}</ListItem>)
                }
                
            </List>
            {/* <Link href={link}> */}
                <LinkGit  href={link} target="_blank">
                    <IconWrapper>
                        <BsGithub/>
                    </IconWrapper>
                    Go to GitHub
                </LinkGit>
            {/* </Link> */}
        </Container>
    )
}

export default AboutSoft