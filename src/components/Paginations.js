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
        justifyContent: "space-around",
      }}
    >
      {pageNumbers.map((number) => (
        <a
          key={number}
          onClick={()=>paginate(number)}
          style={{
            backgroundColor: "white",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          href="!#"
        >{`${number} `}</a>
      ))}
    </div>
  );
};

export default Paginations;
