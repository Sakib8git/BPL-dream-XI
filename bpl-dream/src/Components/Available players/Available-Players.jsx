import React, { use } from "react";
import PlayersCard from "../playerscard/PlayersCard";
// import groupImg from "../../assets/Group.png"
const AvailablePlayers = ({ promisePlayers,availAbleBalance,setAvailAbleBalance,playerSelected,setPlayerSelected }) => {
  const dataPlayers = use(promisePlayers);
  // console.log(dataPlayers);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {dataPlayers.map((player) => <PlayersCard setAvailAbleBalance={setAvailAbleBalance} availAbleBalance={availAbleBalance} player={player} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected}></PlayersCard> )}
    </div>
  );
};

export default AvailablePlayers;

