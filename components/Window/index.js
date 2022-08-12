import React, {useState} from 'react'
import { Circle, Container, Content, Header, IconWrapper, List, ListItem, Title, Transition } from './styles'

import Image from 'next/image'

const Window = ({children, title, icon, colorIcon, width, height, background, hover, bg}) => {

  const [open, setOpen] = useState(false)

 return (
  <Container width={width} height={height} background={background} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} bg={bg}>
    <Header height={height}>
      <Circle color={"#E2202C"}/>
      <Circle color={"#FEE94E"}/>
      <Circle color={"#35B736"}/>
      <Title>
        {title}
      </Title>
    </Header>
    <Content>  
      {
        background &&
        <Image
          src={background}
          alt="Picture of the author"
          layout={"fill"}
        />
      }
      {
        hover ?
          <Transition open={open}>
            {children }
          </Transition>
        :
        children
      }
    </Content>
  </Container>
 )
}

export default Window