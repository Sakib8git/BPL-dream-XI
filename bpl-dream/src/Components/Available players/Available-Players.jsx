import React, { use } from "react";
// import groupImg from "../../assets/Group.png"
const AvailablePlayers = ({ promisePlayers }) => {
  const dataPlayers = use(promisePlayers);
  // console.log(dataPlayers);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {dataPlayers.map((player) => (
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
                <span className="ml-2">🏴 {player.country}</span>
              </div>
              <div>
                <button className="btn">All rounder</button>
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
              <button className="btn ">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;

