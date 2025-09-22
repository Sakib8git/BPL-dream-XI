import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvailablePlayers from "./Components/Available players/Available-Players";
import NavBar from "./Components/Nav/NavBar";
import Selectedplayers from "./Components/Selected Players/Selected-players";

const promisePlayers = fetch("/players.json").then((res) => res.json());
// console.log(promisePlayers);

function App() {
  const [availAbleBalance, setAvailAbleBalance] = useState(60000000);
  const [playerSelected, setPlayerSelected] = useState([]);
  // console.log(playerSelected);
  const removePlayer = (p) => {
    const filteredData = playerSelected.filter((ply) => ply.id !== p.id);
    console.log(filteredData);
    setPlayerSelected(filteredData);
    setAvailAbleBalance(availAbleBalance + p.price);
  };

  const [toggle, setToggle] = useState(true);
  return (
    <>
      <NavBar availAbleBalance={availAbleBalance}></NavBar>
      <div className=" max-w-[1200px] mx-auto flex justify-between items-center ">
        <h1 className="font-bold text-2xl">
          {" "}
          {toggle === true
            ? "Available Players"
            : `Selected Players (${playerSelected.length}/6) `}{" "}
        </h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`btn py-3 px-4 border-gray-200 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } `}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn py-3 px-4 border-gray-200 rounded-l-2xl border-r-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            } `}
          >
            Selected <span>{playerSelected.length}</span>{" "}
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            playerSelected={playerSelected}
            setPlayerSelected={setPlayerSelected}
            setAvailAbleBalance={setAvailAbleBalance}
            promisePlayers={promisePlayers}
            availAbleBalance={availAbleBalance}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Selectedplayers
            playerSelected={playerSelected}
            removePlayer={removePlayer}
          ></Selectedplayers>
        </Suspense>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
