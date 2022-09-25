import React from "react";
import { useResultContext } from "../context/ContextProvider";

const FeedBack = () => {
  const {feedBack, setFeedBack,feedBackController} = useResultContext();
  return (
    <div
      id="shadow"
      style={{
        backgroundColor: "white",
        height: "140px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0px 20px 0px 5px",
        width: "70%",
        flexDirection: "column",
        marginTop: "20px"
      }}
    >
      <h3>FeedBack</h3>
      <button
      onClick={feedBackController}
        style={{
          height: "45%",
          backgroundColor: "lightgreen",
          width: "80%",
          borderStyle: "none",
          borderRadius: "8px",
          cursor: "pointer",
  
        }}
      >
        <h3>We're Listening</h3>
      </button>
    </div>
  );
};

export default FeedBack;
