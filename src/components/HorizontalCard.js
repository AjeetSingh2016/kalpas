import React from "react";
import { useNavigate } from "react-router-dom";

const HorizontalCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="HorizontalCard">
      <div
        id="shadow"
        style={{
          borderRadius: "10px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            
            // backgroundColor: "red",
          }}
        >
          <div
            style={{
              width: "90%",
              display: "flex",
              height: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                // backgroundColor: "lightgray",
                width: "150px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "95%",
                  borderRadius: "60px",
                  aspectRatio: 1,
        
                }}
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
                // backgroundColor: "pink",
                paddingLeft: "10px",
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h3>{data.show.name}</h3>
              <p>{`Rating ${
                data.show.rating.average ? data.show.rating.average : "Null"
              }`}</p>
              <p style={{ color: "gray", fontSize: "17px" }}>
                {`Premiered On ${
                  data.show.premiered ? data.show.premiered : "No data"
                }`}
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%',
            
          }}>
            <button
            onClick={()=>{
              navigate("/booking", {state: data})
            }}
             style={{
              backgroundColor: "lightgreen",
              width: "80%",
              height: "30%",
              borderStyle: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
