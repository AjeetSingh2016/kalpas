import React from "react";
import { useResultContext } from "../context/ContextProvider";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard";




const News = ({ data }) => {


  const { toggle ,loading } =
    useResultContext();

  return (
    <div
      className={
        !toggle ? "NewsContainerForHorizontal" : "NewsContainerForVertical"
      }
    >
      {!loading ? (
        data?.map((news) =>
          toggle ? (
            <VerticalCard key={news.id} data={news}/>
          ) : (
            <HorizontalCard key={news.id} data={news} />
          )
        )
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default News;

