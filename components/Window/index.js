import React from 'react'
import { Circle, Container, Header, IconWrapper, List, ListItem, Title } from './styles'

const Window = ({title, icon, colorIcon, items=[]}) => {
 return (
  <Container>
    <Header>
      <Circle color={"#E2202C"}/>
      <Circle color={"#FEE94E"}/>
      <Circle color={"#35B736"}/>
      <Title>
        {title}
        <IconWrapper color={colorIcon}>
          {icon}
        </IconWrapper>
      </Title>
    </Header>
    <List>
      {
        items.map((item)=>(
          <ListItem>
            {item}
          </ListItem>
        ))
      }
    </List>
  </Container>
 )
}

export default Window