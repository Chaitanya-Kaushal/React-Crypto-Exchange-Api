import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
      <div>
        <Link to='/exchange'>
          <img
            src="https://t4.ftcdn.net/jpg/01/39/43/63/360_F_139436311_iFpMinslMRYyu2lMUX5WkDtHTq0LE0Kn.jpg"
            className="animate-pulse"
            alt="crypto"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
