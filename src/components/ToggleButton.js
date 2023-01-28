import React from "react";
import { useResultContext } from "../context/ContextProvider";

const ToggleButton = () => {
  
  const { toggle, setToggle,setPostPerPage,postPerPage } = useResultContext();
  const toggleFunction = () =>{
    setToggle(!toggle)
    toggle ? setPostPerPage(postPerPage-1) : setPostPerPage(postPerPage+1)

  }
  

  return (
    <div
      id="shadow"
      style={{
        width: "70%",
        backgroundColor: "white",
        height: "150px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0px 20px 0px 5px",
        flexDirection: "column",
        marginTop: "20px",
        cursor: "pointer",
      }}
    >
      <h3>View Toggle</h3>
      <div
        onClick={toggleFunction}
        style={{
          width: "80%",
          height: "45%",
          display: "flex",
        }}
      >
        {/* Verticl */}
        <div
          className={toggle ? "on" : "off"}
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px 0px 0px 8px",
          }}
        >
          <span
            id={toggle ? "imageOn" : "imageOff"}
            className="material-symbols-outlined"
          >
            wysiwyg
          </span>
        </div>

        {/* Horizontal */}
        <div
          className={!toggle ? "on" : "off"}
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 8px 8px 0px",
          }}
        >
          <span
            id={!toggle ? "imageOn" : "imageOff"}
            className="material-symbols-outlined"
          >
            toc
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
