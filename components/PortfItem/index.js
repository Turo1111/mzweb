import React, {useState} from "react"
import Modal from "../Modal"
import TecnModal from "../TecnModal"
import AboutSoft from "../AboutSoftModal"
import Carrousel from "../Carrousel"
import { Container, GridModal, List, ListItem, ViewMore } from "./styles"

const PortfItem = ({item}) => {

    const [open, setOpen] = useState(false)

    console.log("portfitem",item.tech);

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
            <Modal open={open} borderRadius={true} width="95%" height='92%' title={item.title || "desconocido"} eClose={()=>setOpen(false)} >
                <GridModal>
                    <Carrousel imgs={item.img}/>
                    <AboutSoft description={item.description} feature={item.feature} link={item.link} title={item.title} />
                    <TecnModal items={item.tech}/>
                </GridModal>
            </Modal>
        </Container>
    )
}

export default PortfItem