import React from "react";

import TextCard from "./TextCard";

const Cards = ({ checked, setIsChecked }) => {
  return (
    <div className="cards">
      <TextCard checked={checked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default Cards;
