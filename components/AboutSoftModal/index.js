import React from "react"
import { Container, Description, IconWrapper, Link, List, ListItem, Title } from "./styles"
import {BsGithub} from "react-icons/bs"


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
            <Link>
                <IconWrapper>
                    <BsGithub/>
                </IconWrapper>
                Go to GitHub
            </Link>
        </Container>
    )
}

export default AboutSoft