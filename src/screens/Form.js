import { useResultContext } from "../context/ContextProvider";

const Form = () => {
  const { iFrameController, detail } = useResultContext();
  return (
    <div className="Iframe-container">
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          height: "70%",
          borderWidth: "10px",
          borderRadius: "10px",
          borderStyle: "solid",
          borderColor: "gray",
          display: "flex",
          paddingTop: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <span
          onClick={iFrameController}
            style={{ paddingRight: "15px", color: "red", cursor: "pointer" }}
            class="material-symbols-outlined"
          >
            close
          </span>
        </div>
        <h1>Book tickets!</h1>
        <form >
          <label for="fname">Movie Name</label>
          <br />
          <input type="text" id="fname" name="fname" value={detail.show.name} />
          <br />
          <label for="lname">Langauge</label>
          <br />
          <input type="text" id="lname" name="lname" value={detail.show.language}/>
          <br />
          <label for="date">Date</label>
          <br />
          <input type="date" id="lname" name="date" />
          <br />
          <input className="form-btn" type="submit"  />
        </form>
      </div>
    </div>
  );
};

export default Form;
