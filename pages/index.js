import Menu from '../components/Menu'
import Title from '../components/Title'
import Window from '../components/Window'
import { ContainerIndex } from '../styles/styles'
import {AiFillStar} from 'react-icons/ai'
import {FiLoader} from 'react-icons/fi'

export default function Home() {
  return (
    <ContainerIndex>
      <Title/>
      <Menu></Menu>
      <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: "10%", gridArea: 'space4'}}>
        <Window title={"SKILLS"} icon={<AiFillStar/>} colorIcon={"#FEE94E"}
          items={["Responsive design", "HTML5, CSS and JS", "ReactJS and NextJS", "CSS Grid and Flexbox", "Styled components", "English basic"]}
        />
        <Window title={"IN PROGRESS"} icon={<FiLoader/>} colorIcon={"#4E89AE"} 
          items={["React Native", "Project Management", "Platzi English Academy"]}
        />
      </div>
    </ContainerIndex>
  )
}
