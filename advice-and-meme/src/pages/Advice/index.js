import "./styles.css";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { adviceData } from "./data";

function Advice() {
  // state var
  const [num, setNum] = useState(0);
  const [advice, setAdvice] = useState(
    "Never give up, in the end, in one way or another you’ll resolve it. There are bad days, but they’ll pass."
  );

  // onClick function for new advice button
  const newAdviceOnClick = () => {
    setNum(Math.floor(Math.random() * adviceData.length));
    setAdvice(adviceData[num].advice);
  };

  // Render
  return (
    <div className="advice_page">
      <div className="advice_page_nav">
        <Link to="/advice">
          <h1>A&amp;M</h1>
        </Link>
        <Link to="/meme">
          <p>Laugh at Memes</p>
        </Link>
      </div>
      <div className="advice_page_container">
        <div className="advice_page_content">
          <div className="advice_page_content_info">
            <h6>ADVICE #{num + 1}</h6>
            <p>{advice}</p>
            <div className="advice_page_content_info_divider">
              <div className="advice_page_content_info_divider_first" />
              <div className="advice_page_content_info_divider_second" />
              <div className="advice_page_content_info_divider_third" />
              <div className="advice_page_content_info_divider_forth" />
            </div>
          </div>
          <div className="advice_page_circle">
            <div className="advice_page_square">
              <div className="advice_page_dot" />
            </div>
          </div>
        </div>
        <div className="advice_page_button">
          <button onClick={newAdviceOnClick}>New Advice</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export { Advice };
