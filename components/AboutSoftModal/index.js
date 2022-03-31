import React from "react"
import { Container, Description, Link, List, ListItem, Title } from "./styles"

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
            <Link>Go to web</Link>
        </Container>
    )
}

export default AboutSoft