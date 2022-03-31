import { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import Portfolio from '../components/Portfolio'
import { ContainerIndex } from '../styles/styles'


export default function Home() {

  const [about, setAbout] = useState({name: "about", active: true})
  const [portfolio, setPortfolio] = useState({name: "portfolio", active: false})
  const [contact, setContact] = useState({name: "contact", active: false})

  const onHandleTab = (tab) => {
    if(tab === "about") {
      setAbout({...about, active: true})
      setPortfolio({...portfolio, active: false})
      setContact({...contact, active: false})
    }
    if(tab === "portfolio") {
      setAbout({...about, active: false})
      setPortfolio({...portfolio, active: true})
      setContact({...contact, active: false})
    }
    if(tab === "contact") {
      setAbout({...about, active: false})
      setPortfolio({...portfolio, active: false})
      setContact({...contact, active: true})
    }
  }

  return (
    <ContainerIndex>
      <Menu items={[about, portfolio, contact]} onHandleTab={onHandleTab} />
      {
        about.active && <About/>
      }
      {
        portfolio.active && <Portfolio/>
      }
      {
        contact.active && <Contact/>
      }
    </ContainerIndex>
  )
}
