import { useResultContext } from "../context/ContextProvider";

const IFram = () => {
    const {iFrameController} = useResultContext();
  return (
    <div onClick={iFrameController} className="Iframe-container">
      <iframe
        style={{
            width: "80%",
             height: "70%",
              borderWidth: "10px",
              borderRadius: "10px",
              borderStyle: "solid",
              borderColor: "gray"
            }}
        src="https://kalpas.in/"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </div>
  );
};

export default IFram;
