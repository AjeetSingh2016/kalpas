import React from "react";
import { Profile, ToggleButton, FeedBack } from ".";
import { useResultContext } from "../context/ContextProvider";

const SideMenu = () => {
  const {feedBack} = useResultContext();
  return (
    <div
    id="shadow"
      style={{
        borderRadius: "15px",
        width: "25%",
      }}
    >
      <div
        style={{
          height: "65%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <Profile />
        {!feedBack ? <ToggleButton />: ""}
      
        <FeedBack />
      </div>
    </div>
  );
};

export default SideMenu;
