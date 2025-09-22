import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const Selectedplayers = ({ playerSelected,removePlayer }) => {
  // console.log(playerSelected);
  return (
    <div className="max-w-[1200px] mx-auto">
      {playerSelected.map((purchedPlayer) => (
        <SelectedCard purchedPlayer={purchedPlayer} removePlayer={removePlayer}></SelectedCard>
      ))}
    </div>
  );
};

export default Selectedplayers;
