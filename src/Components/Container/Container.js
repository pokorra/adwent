import React from "react";
// import Modal from '../Modal/Modal';
import Window from "../Window/Window";

const Container = () => {
  const date = new Date();
  const currentDate = date.getDate();

  return (
    <div className="main-container">
        <div className="main-container__leaves1"></div>
        <div className="main-container__leaves2"></div>
        <div className="main-container__leaves3"></div>
        <div className="main-container__leaves4"></div>
        <div className="main-container__leaves5"></div>
        <Window currentDate={currentDate} thisDay={5} />
        <Window currentDate={currentDate} thisDay={21} />
        <Window currentDate={currentDate} thisDay={19} />
        <Window currentDate={currentDate} thisDay={17} />
        <Window currentDate={currentDate} thisDay={1} />
        <Window currentDate={currentDate} thisDay={23} />
        <Window currentDate={currentDate} thisDay={2} />
        <Window currentDate={currentDate} thisDay={15} />
        <Window currentDate={currentDate} thisDay={10} />
        <Window currentDate={currentDate} thisDay={3} />
        <Window currentDate={currentDate} thisDay={9} />
        <Window currentDate={currentDate} thisDay={7} />
        <Window currentDate={currentDate} thisDay={12} />
        <Window currentDate={currentDate} thisDay={20} />
        <Window currentDate={currentDate} thisDay={13} />
        <Window currentDate={currentDate} thisDay={6} />
        <Window currentDate={currentDate} thisDay={14} />
        <Window currentDate={currentDate} thisDay={22} />
        <Window currentDate={currentDate} thisDay={18} />
        <Window currentDate={currentDate} thisDay={11} />
        <Window currentDate={currentDate} thisDay={16} />
        <Window currentDate={currentDate} thisDay={4} />
        <Window currentDate={currentDate} thisDay={8} />
        <Window currentDate={currentDate} thisDay={24} />
    </div>
  );
};

export default Container;
