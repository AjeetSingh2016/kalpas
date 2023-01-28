import React from "react";
import { useResultContext } from "../context/ContextProvider";

const Paginations = ({ postPerPage, totalPost }) => {
    const {setCurrentPage} = useResultContext();

  const paginate = (pageNumber) =>{
      console.log("Hello");
      setCurrentPage(pageNumber)
  }
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        width: "50%",
        height: "5%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={()=>paginate(number)}
          style={{
            backgroundColor: "white",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >{`${number}`}</button>
      ))}
    </div>
  );
};

export default Paginations;
