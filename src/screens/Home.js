import React from 'react'
import { MainMenu, SideMenu } from '../components'
import { useResultContext } from '../context/ContextProvider'
import IFrame from './IFrame'
import FeedBackForm from './FeedBackForm'

const Home = () => {

  const {iFrame,feedBack} = useResultContext();

  return (
    <div>
      <div style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#EBF2F7",
          position: "absolute",
          zIndex: -1,
          width: "100%",
          }}>
          <SideMenu />

          {feedBack ? <FeedBackForm /> : ""}
          
          <MainMenu />
      </div>
      {iFrame ? <IFrame />: ""}
    </div>
  )
}

export default Home