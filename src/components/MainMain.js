import React, { useEffect} from "react";
import News from "./News";
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
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await data.json();
      setNewsData(res);
      setLoading(false);

    };
    fetchData();
  }, []);

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
      <News data={currentPost}/>
      <Paginations postPerPage={postPerPage} totalPost={newsData.length}/>
    </div>
  );
};

export default MainMain;
