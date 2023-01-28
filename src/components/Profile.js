import React from 'react'
import {assets} from '../constants'
const Profile = () => {
  return (
    <div
        id="shadow"
        style={{
          width: "70%",
          backgroundColor: "white",
          height: "70px",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0px 20px 0px 5px",
          // backgroundColor: "red"
        }}
      >
    
        <img style={{width:"50px"}} src={assets.man} alt="" />
    
        <div id="center" style={{
            flexDirection: "column",
        }}>
            <h3>Hi Viewers,</h3>
            <h4>Here's your Movies!</h4>
        </div>
        
      </div>
  )
}

export default Profile