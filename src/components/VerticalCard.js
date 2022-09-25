import React from "react";
import { useResultContext } from "../context/ContextProvider";

const VerticalCard = ({ data }) => {
  const { iFrameController,DataUpdateController} = useResultContext();


  return (
    <div  id="shadow" className="VerticalCard">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          height: "10%",
        }}
      >
        <span
          onClick={ ()=>{DataUpdateController(data.id)}}
          style={{ cursor: "pointer", color: "red" }}
          className="material-symbols-outlined"
        >
          close
        </span>
      </div>

      <div
      onClick={iFrameController}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "white",
          height: "40%",
        }}
      >
        <h3 style={{ textTransform: "capitalize" }}>
          {data.title.length > 20
            ? `${data.title.slice(0, 20)}...`
            : data.title}
        </h3>
        <p>{`${data.body.slice(0, 45)}...`}</p>
        <p style={{ color: "gray", fontSize: "17px" }}>
          Mon, 21 Dec 2020 14:57 GMT
        </p>
      </div>

      <div
        style={{
          height: "50%",
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="https://img.icons8.com/color/48/000000/image.png" alt="img" />
      </div>
    </div>
  );
};
export default VerticalCard;
