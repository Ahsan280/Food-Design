import React from "react";
import Header from "../../components/FranchisingComponents/Header/Header";
import NewLook from "../../components/FranchisingComponents/NewLook/NewLook";
import Pourus from "../../components/FranchisingComponents/Pourus/Pourus";

const Franchising = () => {
  return (
    <>
      <Header />
      <NewLook text={"Intriducing New look"} />
      <Pourus />
      <NewLook text={"We Are Now in Bristol"} />
      <Pourus />
      <div className="my-20 h-[10vh]"></div>
    </>
  );
};

export default Franchising;
