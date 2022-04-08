import React from "react"
import { Circle, Container, ContainerArrow, ContainerCircle, IconWrapper, Img } from "./styles"
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"
import { useState, useEffect } from "react"
import Image from 'next/image'

const Carrousel = ({imgs}) => {

    const [indexActive, setIndexActive] = useState(1)

    const setArrowLeft = () => {
        const index = indexActive-1
        if (index===-1) {
            index = imgs.length-1
        }
        setTimeout(()=>setIndexActive(index), 1000)
        
    }

    const setArrowRight = () => {
        const index = indexActive+1
        if (index===imgs.length) {
            index = 0
        }
        setTimeout(()=>setIndexActive(index), 1000)
    }

    return(
        <Container>
            {
                imgs.map((item, index)=>{
                    return(
                        <Img
                            key={item}
                            active={indexActive === index ? true : false}
                        >
                            <Image
                            src={item}
                            alt="Picture of the author"
                            width={300}
                            height={500} 
                            layout={"intrinsic"}
                            />
                        </Img>
                        
                    )
                })
            }
            {/* <Img
                            key={item}
                            src={item}
                            active={indexActive === index ? true : false}
                        /> */}
            
            <ContainerArrow>
                <IconWrapper onClick={()=>setArrowLeft()}>
                    <MdKeyboardArrowLeft/>
                </IconWrapper>
                <IconWrapper onClick={()=>setArrowRight()}>
                    <MdKeyboardArrowRight/>
                </IconWrapper>
            </ContainerArrow>
            <ContainerCircle>
            {
                imgs.map((item, index)=>{
                    return(
                        <Circle
                            key={item}
                            onClick={()=>setIndexActive(index)}
                            active={indexActive === index ? true : false}
                        />
                    )
                })
            }
            </ContainerCircle>
        </Container>
    )
}

export default Carrousel