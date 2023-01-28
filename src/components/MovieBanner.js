import React, { useEffect } from "react";
import { useResultContext } from "../context/ContextProvider";

const MovieBanner = ({ data }) => {
  const {setDetails, iFrameController} =
    useResultContext();

  useEffect(() => {
    setDetails(data);
  }, [data,setDetails ]);

  return (
    <div
      style={{
        backgroundColor: "#272727",
        height: "70%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ height: "100%" }}>
        <img
          style={{ aspectRatio: 1, height: "100%" }}
          src={
            data.show.image
              ? data.show.image.original
              : "https://img.icons8.com/color/48/000000/image.png"
          }
          alt=""
        />
      </div>
      <div
        style={{
          width: "70%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          paddingLeft: "20px",
          height: "93%",
        }}
      >
        <h1>{data.show.name}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            className="material-symbols-outlined"
            style={{ paddingRight: "15px", color: "#F84464" }}
          >
            star
          </span>
          <h3>{`Rating ${
            data.show.rating.average ? data.show.rating.average : "Null"
          }`}</h3>
        </div>

        <div
          className="review-card"
          style={{
            backgroundColor: "#34434D",
            height: "20%",
            display: "flex",
            borderRadius: "10px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Add your rating & review</h3>
            <h4>Your ratings matter</h4>
          </div>

          <a
            href={data.show.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: "50%",
              width: "100px",
              borderRadius: "10px",
              borderStyle: "none",
              backgroundColor: "#F84464",
              color: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Rate Now
          </a>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "auto",
              backgroundColor: "lightgray",
              color: "black",
              padding: "8px",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {`${data.show.status ? data.show.status : "Null"}`}
          </div>
          <div
            style={{
              marginLeft: "20px",
              height: "auto",
              backgroundColor: "lightgray",
              color: "black",
              padding: "8px",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {`${data.show.language ? data.show.language : "Null"}`}
          </div>
        </div>

        <div>
          <h4>
            {`${data.show.runtime} Min . ${data.show.genres[0]} 
            . ${data.show.premiered}`}
          </h4>
        </div>
        <div style={{ height: "20%" }}>
          <button
            onClick={iFrameController}
            style={{
              height: "60%",
              width: "200px",
              borderRadius: "10px",
              borderStyle: "none",
              backgroundColor: "#F84464",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Book ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
