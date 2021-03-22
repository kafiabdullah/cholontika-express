import React from "react";
import RootContainer from "../Layout/RootContainer";
import Transports from "../Transports/Transports";
import "./Home.css";

const Home = () => (
  <div className="home">
    <div className="container">
      <RootContainer>
        <Transports />
      </RootContainer>
    </div>
  </div>
);

export default Home;
