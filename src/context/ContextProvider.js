import React, { useState, createContext, useContext} from "react";

const ResultContext = createContext();

export const ContextProvider = ({ children }) => {
  // True for vertical and false for horizontal  positioning
  const [toggle, setToggle] = useState(true);

  // State for News Data
  const [newsData, setNewsData] = useState([]);

  // Iframe Indicator

  const [iFrame, setIFrame] = useState(false)

  // State for Loading
  const [loading, setLoading] = useState(false);

  // State for Current Page
  const [currentPage, setCurrentPage] = useState(1);

  // State for Post per Page
  const [postPerPage, setPostPerPage] = useState(6);

  const [detail, setDetail] = useState({})
  

  // FeedBack Indicator

  const [feedBack, setFeedBack] = useState(false)

  const iFrameController = () =>{
    setIFrame(!iFrame);
  }
  const feedBackController = () =>{
    setFeedBack(!feedBack);
  }
  const DataUpdateController = (id)=>{
    const upDatedData = newsData.filter((value)=>{
      return id !== value.id;
    })
    setNewsData(upDatedData);
   
  }

  const setDetails = (data) =>{
    setDetail(data)
  }

  return (
    <ResultContext.Provider
      value={{ toggle, setToggle, newsData, setNewsData, setLoading, loading, currentPage, postPerPage, setCurrentPage, setPostPerPage, iFrame, setIFrame,iFrameController,feedBack, setFeedBack,feedBackController,DataUpdateController, setDetails, detail}}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
