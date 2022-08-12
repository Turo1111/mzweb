import React from "react"
import { Container, List, ListItem, Title } from "./styles"

const TecnModal = ({items}) => {
    ("tech",items);
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