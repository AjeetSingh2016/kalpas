import React from "react";
import { useResultContext } from "../context/ContextProvider";

const HorizontalCard = ({ data }) => {
  const { iFrameController,DataUpdateController} = useResultContext();

  return(
    <div  className="HorizontalCard">
    <div
      id="shadow"
      style={{
        borderRadius: "10px",
        width: "90%",
        backgroundColor: "white",
      }}
    >
      <div
      onClick={iFrameController}
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-around",
          alignItems: "center",

        }}
      >
        <div
          style={{
            backgroundColor: "lightgray",
            width: "6%",
            borderRadius: "50%",
            height: "57%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://img.icons8.com/color/48/000000/image.png" alt="img"/>
        </div>

        <div
          style={{
            // backgroundColor: "pink",
            width: "90%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h3>{`${data.title}...`}</h3>
          <p>{`${data.body.slice(0, 120)}...`}</p>
          <p style={{ color: "gray", fontSize: "17px" }}>
            Mon, 21 Dec 2020 14:57 GMT
          </p>
        </div>
      </div>
    </div>

    <div
    onClick={ ()=>{DataUpdateController(data.id)}}
      style={{
        height: "100%",
        width: "10%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        display: "flex",
      }}
    >
      <span
        style={{
          fontSize: "40px",
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          color: "red",
        }}
        className="material-symbols-outlined"
      >
        close
      </span>
    </div>
  </div>
  )
};

export default HorizontalCard;
