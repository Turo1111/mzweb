import React from 'react'
import { Container, MenuItem } from './styles'

const Menu = () => {
 return (
  <Container>
    <MenuItem active={true}>about</MenuItem>
    <MenuItem>portfolio</MenuItem>
    <MenuItem>contact</MenuItem>
  </Container>
 )
}

export default Menu