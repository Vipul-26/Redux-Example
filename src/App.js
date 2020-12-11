import React, { useRef } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "./action.js";
const App = () => {
  const image = useSelector((state) => state.imgurl);
  const dispatch = useDispatch();
  const userRef = useRef(null);
  return (
    <>
      <div className="mainDiv">
         <h1>WHAT DOES YOUR NAME SAY ABOUT YOUR PERSONALITY</h1>
         <div className="centerDiv">
          <div className="details">
            <label>ENTER YOUR NAME</label>
            <br />
            <input type="text" id="nameid" ref={userRef} />
          </div>
          <div className="imgdiv">
            <img src={image} className="imgchange" alt="image" />
          </div>
            <button onClick={()=>dispatch(getImage(userRef.current.value))}>Click Me</button>
         </div>
      </div>
    </>
  );
};
export default App;

