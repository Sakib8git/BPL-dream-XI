import navImg from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <span>600000000</span>
          <span> Coin 🪙</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
