import React from "react";

import Cart from "../Ui/Cart";

const AvailablePlayers = ({ palayers }) => {
  const avalablePlayers = palayers;
  console.log(avalablePlayers);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {avalablePlayers.map((player) => {
       return (
        <Cart player={player}></Cart>
    //    <div className="card bg-base-100 shadow-sm">
    //       <figure>
    //         <img
    //           src={player.picture}
    //           alt="player img" className="w-full h-[250px] rounded"
    //         />
    //       </figure>
    //       <div className="card-body">
    //         <div className="cart-title-wrap flex items-center gap-3">
    //           <FaUser />
    //           <h2 className="card-title">{player.playerName}</h2>
    //         </div>
    //         <div className="country-info flex justify-between items-center">
    //           <div className="flag flex items-center gap-2">
    //             <FaFlag />
    //             <p>{player.country}</p>
    //           </div>
    //           <div className="btn">{player.type}</div>
    //         </div>
    //         <div className="divider"></div>

    //         <h2 className="font-bold">Ratting: {player.rating}</h2>

    //         <div className="flex justify-between items-center gap-10 font-bold">
    //           <p>{player.hand}</p>
    //           <p className="text-right">{player.bowlingStyle}</p>
    //         </div>
    //         <div className="card-actions justify-between items-center gap-5">
    //           <p className="font-semibold">Price:$ {`${player.price}`}</p>
    //           <button className="btn">Choose Player</button>
    //         </div>
    //       </div>
    //     </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
