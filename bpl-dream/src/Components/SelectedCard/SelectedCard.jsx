const SelectedCard = ({ purchedPlayer, removePlayer }) => {

const handlearemoved=()=>{
    removePlayer(purchedPlayer)
}

  
  return (
    <div className="border-2 border-gray-300 flex justify-between items-center rounded-2xl px-4">
      <div className="flex items-center gap-3 py-4">
        <img className="w-[120px] rounded-3xl" src={purchedPlayer.img} alt="" />
        <div>
          <h3>{purchedPlayer.name}</h3>
          <p className="text-xs mt-2">{purchedPlayer.role}</p>
        </div>
      </div>
      <div onClick={handlearemoved} className="cursor-pointer text-2xl">
        🗑️
      </div>
    </div>
  );
};

export default SelectedCard;
