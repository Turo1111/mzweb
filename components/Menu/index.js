import React, { useState } from 'react'
import { useResize } from '../../hooks/useResize'
import { Container, IconWrapper, MenuAbsolute, MenuItem } from './styles'
import {AiOutlineMenu} from "react-icons/ai"

const Menu = ({items, onHandleTab}) => {

  const {ancho,alto} = useResize()

  const [openMenu, setOpenMenu] = useState(false)

 return (
  <Container area={ancho < 1024 && true}>
    {
      ancho < 1024 ? 
        <IconWrapper onClick={()=>setOpenMenu(!openMenu)}>
          <AiOutlineMenu/>
          {
            openMenu && 
            <MenuAbsolute>
              {
                items.map(item=> 
                  <MenuItem active={item.active} key={item.name}
                    onClick={()=>onHandleTab(item.name)}
                  >{item.name}</MenuItem>
                )
              }
            </MenuAbsolute>
          }
        </IconWrapper>
      :
        items.map(item=> 
          <MenuItem active={item.active} key={item.name}
            onClick={()=>onHandleTab(item.name)}
          >{item.name}</MenuItem>
        )
    }
  </Container>
 )
}

export default Menu