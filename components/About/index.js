import React from "react"
import Title from "../Title"
import Window from "../Window"
import {AiFillStar, AiOutlineLoading3Quarters} from 'react-icons/ai'
import {FiLoader} from 'react-icons/fi'
import { Container, IconWrapper, List, ListItem } from "./styles"

const About = () => {

    const skills = ["Responsive design", "HTML5, CSS and JS", "ReactJS and NextJS", "CSS Grid and Flexbox", "Styled components", "English basic"]
    const progress = ["React Native", "Project Management", "Platzi English Academy"]

    return (
        <>
            <Title/>
            <Container >
              <Window title={"SKILLS"} icon={<AiFillStar/>} colorIcon={"#FEE94E"}
              >
                <List>
                  {
                    skills.map(item => <ListItem key={item}><IconWrapper><AiFillStar/></IconWrapper>{item}</ListItem>)
                  }
                </List>
              </Window>
              <Window title={"IN PROGRESS"} icon={<FiLoader/>} colorIcon={"#4E89AE"} 
              >
                <List>
                  {
                    progress.map(item => <ListItem key={item}><IconWrapper style={{color: "#00AFC1"}}><AiOutlineLoading3Quarters/></IconWrapper>{item}</ListItem>)
                  }
                </List>
              </Window>
            </Container>
        </>
    )
}

export default About