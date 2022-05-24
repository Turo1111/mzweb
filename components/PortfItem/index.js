import React, {useState} from "react"
import Modal from "../Modal"
import TecnModal from "../TecnModal"
import AboutSoft from "../AboutSoftModal"
import Carrousel from "../Carrousel"
import { Container, GridModal, List, ListItem, ViewMore } from "./styles"
import useClickAway from "../../hooks/useClickAway"
import { useRef } from "react"

const PortfItem = ({item}) => {

    const [open, setOpen] = useState(false)

    const ModalItem = useRef()
    useClickAway(ModalItem, ()=>setOpen(false))

    return(
        <Container >
            <List>
                {
                    item.tech.map(el => <ListItem key={el}>{el}</ListItem>)
                }
            </List>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ViewMore onClick={()=>setOpen(true)}>VIEW MORE...</ViewMore>
            </div>
            <Modal open={open} borderRadius={true} width="95%" height='92%' title={item.title || "desconocido"} eClose={()=>setOpen(false)} el={ModalItem} >
                <GridModal>
                    <Carrousel imgs={item.img} mobile={item.mobile}/>
                    <AboutSoft description={item.description} feature={item.feature} link={item.link} title={item.title} />
                    <TecnModal items={item.tech}/>
                </GridModal>
            </Modal>
        </Container>
    )
}

export default PortfItem