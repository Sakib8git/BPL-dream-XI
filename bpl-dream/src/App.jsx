import { Suspense } from "react";
import "./App.css";

import AvailablePlayers from "./Components/Available players/Available-Players";
import NavBar from "./Components/Nav/NavBar";
import Selectedplayers from "./Components/Selected Players/Selected-players";

const promisePlayers = fetch("/players.json").then((res) => res.json());
// console.log(promisePlayers);

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
      </Suspense>
      {/* <Selectedplayers></Selectedplayers> */}
    </>
  );
}

export default App;
