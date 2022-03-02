import React from "react";
import Container from "../Container/Container";

const Background = () => {
  return (
    <div className="background">
      <Container />
      <div className="background__leaves background__leaves--top-left"></div>
      <div className="background__leaves background__leaves--top-right"></div>
      <div className="background__leaves background__leaves--top-right-lower"></div>
      <div className="background__leaves background__leaves--right-bottom"></div>
      <div className="background__leaves background__leaves--left-bottom"></div>
      
      <div className="background__tree background__tree--left"></div>
      <div className="background__tree background__tree--right"></div>
    </div>
  );
};

export default Background;
