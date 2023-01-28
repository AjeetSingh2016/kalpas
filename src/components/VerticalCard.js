import React from "react";
import { useNavigate } from "react-router-dom";

const VerticalCard = ({ data }) => {

  const navigate = useNavigate();


  return (
    <div onClick={()=>{
      navigate("/booking", {state: data})
    }} id="shadow" className="VerticalCard">
      <div
        style={{
          height: "90%",
        }}
      >
        <img
          className="image-card"
          src={
            data.show.image
              ? data.show.image.medium
              : "https://img.icons8.com/color/48/000000/image.png"
          }
          alt="img"
        />
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "10%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ paddingRight: "15px" }}
          >
            star
          </span>
          <h4>{`Rating ${
            data.show.rating.average ? data.show.rating.average : "Null"
          }`}</h4>
        </div>
        <p style={{ color: "gray", fontSize: "17px" }}>
          {`${data.show.premiered ? data.show.premiered : "No data"}`}
        </p>
      </div>
    </div>
  );
};
export default VerticalCard;
