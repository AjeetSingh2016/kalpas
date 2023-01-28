import React from "react";
import { useLocation } from "react-router-dom";
import { MovieBanner } from "../components";
import { htmlToText } from "html-to-text";
import { useResultContext } from "../context/ContextProvider";
import Form from "./Form"

const BookTicket = ({ route, navigation }) => {
  const { iFrame} = useResultContext();

  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <MovieBanner data={state} />
        <div>
          <div
            style={{
              height: "30%",
              width: "100%",
              paddingLeft: "150px",
              paddingRight: "100px",
              paddingTop: "30px",
            }}
          >
            <h1 style={{ marginBottom: "15px" }}>About the movie</h1>
            <div style={{ color: "#3B444B", fontSize: "18px" }}>
              {htmlToText(state.show.summary)}
            </div>
          </div>
        </div>
      </div>
      {iFrame ? <Form /> : ""}
    </div>
  );
};

export default BookTicket;
