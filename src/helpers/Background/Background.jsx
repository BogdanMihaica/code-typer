import React from "react";
import "./Background.css";

const Background = ({ color }) => {
  return <div className="background" style={{ backgroundColor: color }}></div>;
};

export default Background;
