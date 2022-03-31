import React, {useState} from 'react'
import { Circle, Container, Header, IconWrapper, List, ListItem, Title, Transition } from './styles'

const Window = ({children, title, icon, colorIcon, width, height, background, hover, bg}) => {

  const [open, setOpen] = useState(false)

 return (
  <Container width={width} height={height} background={background} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} bg={bg}>
    <Header>
      <Circle color={"#E2202C"}/>
      <Circle color={"#FEE94E"}/>
      <Circle color={"#35B736"}/>
      <Title>
        {title}
      </Title>
    </Header>
    {
      hover ?
        <Transition open={open}>{children }</Transition>
      :
      children
    }
  </Container>
 )
}

export default Window