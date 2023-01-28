import React, { useEffect} from "react";
import Movies from "./Movies";
import Paginations from "./Paginations";
import { useResultContext } from "../context/ContextProvider";

const MainMain = () => {
  const {
    newsData,
    setNewsData,
    setLoading,
    currentPage,
    postPerPage,
  } = useResultContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const res = await data.json();
      setNewsData(res);
      setLoading(false);
      console.log(res);

    };
    fetchData();
  }, [setNewsData, setLoading]);

  
  // Get current post

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = newsData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div
      style={{
        width: "75%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "25%",
        zIndex: -1,
        height: "100%",
      }}
    >
      <Movies data={currentPost}/>
      <Paginations postPerPage={postPerPage} totalPost={newsData.length}/>
    </div>
  );
};

export default MainMain;
