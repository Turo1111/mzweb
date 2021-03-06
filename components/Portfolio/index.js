import React, {useState, useEffect} from "react"
import PortfItem from "../PortfItem"
import Window from "../Window"
import { Container, Cosa, GridModal } from "./styles"
import useFetch from './../../hooks/useFetch';
import Spinner from "../Spinner";
const axios = require('axios').default;

const Portfolio = () => {

    const apps = useFetch('/api')

    console.log( apps );

    return (
        <Container>
            {
                apps.load ? <Spinner/> :
                apps.data.map(item =>
                    <Window key={item.title || item} width={"300px"} height={"250px"} title={item.title || "desconocido"} background={item.principalimg} hover={true}>
                        <PortfItem item={item} />
                    </Window>
                )
            }
            
        </Container>
    )
}

export default Portfolio