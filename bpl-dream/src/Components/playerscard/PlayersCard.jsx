import React, { useState } from "react";
import { toast } from "react-toastify";

const PlayersCard = ({
  player,
  setAvailAbleBalance,
  availAbleBalance,
  playerSelected,
  setPlayerSelected,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    if (availAbleBalance < playerData.price) {
      alert("Not enough balance");
      return;
    } else {
      if (playerSelected.length === 6) {
        alert("You can't buy more than 6 players");
        return;
      }
      setIsSelected(true),
        setAvailAbleBalance(availAbleBalance - playerData.price);
      setPlayerSelected([...playerSelected, playerData]);
    }
  };
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          className="rounded-2xl w-full h-[300px] object-cover"
          src={player.img}
          alt="Shoes"
        />
      </figure>
      <div className=" mt-4">
        <h2 className="card-title ml-2">👤 {player.name}</h2>
        <div className=" flex justify-between items-center border-b-1 border-gray-200 pb-2">
          <div>
            <span className="ml-2">{player.flag} {player.country}</span>
          </div>
          <div>
            <button className="btn">{player.role}</button>
          </div>
        </div>

        <div className="flex justify-between font-bold px-2">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between  px-2 mt-4">
          <span className="font-bold">{player.battingStyle}</span>
          <span>{player.bowlingStyle}</span>
        </div>

        <div className="card-actions mt-3 justify-between items-center">
          <div className="font-bold px-2">
            <span>Price: $</span>
            <span>{player.price}</span>
          </div>
          <button
            disabled={isSelected === true}
            onClick={() => {
              handleSelected(player);
            }}
            className={`btn ${isSelected === true ? "bg-[#E7FE29] " : ""}`}
          >
            {isSelected === true ? "Selected " : "Choose Player"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
