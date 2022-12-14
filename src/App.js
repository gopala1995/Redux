import React from "react";
import "./styles.css";
import { incNumber } from "../src/Redux/Action";
import { decNumber } from "../src/Redux/Action";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="container">
          {/* <h1>Increment/Decrement counter</h1> */}
          {/* <h4>using React and Redux</h4> */}

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
              href
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={changeTheNumber}
            />
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(2))}
              href
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
