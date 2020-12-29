import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import homeImg from "../assets/images/home.png";
import { path } from "../utils/information";
import "./head-nav.less";

const HeadNav = ({ history }) => {
  const [name, setName] = useState("");
  const handleClick = () => {
    history.replace('/home');
  };

  useEffect(() => {
    const getName = () => {
      let pathname = history.location.pathname;
      let obj = { ...path.find(item => Object.values(item).includes(pathname)) };
      if(obj.value === pathname) {
        setName(obj.text);
      }
    };
    getName();
  }, []);

  return (
    <div className="head-container">
      <div onClick={handleClick}>
        <button className="back-btn">
          <img src={homeImg} alt="" />
        </button>
      </div>
      <div className="page-title">{name}</div>
    </div>
  );
};

export default withRouter(HeadNav);
