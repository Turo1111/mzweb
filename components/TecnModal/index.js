import React from "react"
import { Container, List, ListItem, Title } from "./styles"

const TecnModal = ({items}) => {
    console.log("tech",items);
    return(
        <Container>
            <Title>Technology</Title>
            <List>
                {
                    items.map(item=><ListItem key={item}>{item}</ListItem>)
                }
            </List>
        </Container>
    )
}

export default TecnModal