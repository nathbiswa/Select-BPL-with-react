import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Cart = ({ player, setCoin, coin }) => {
  const [isSelected, setSelected] = useState(false);

  const handleChoosePrice = () => {
               
                let newCoin = coin - player.price;
                if(newCoin >= 0){
                  setCoin(coin - player.price);
                } else{
                  alert('Your coin is not available');
                  return;
                }

                alert(`${player.playerName} is selected`)
                 setSelected(true);
              }

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={player.picture}
            alt="player img"
            className="w-full h-[250px] rounded"
          />
        </figure>
        <div className="card-body">
          <div className="cart-title-wrap flex items-center gap-3">
            <FaUser />
            <h2 className="card-title">{player.playerName}</h2>
          </div>
          <div className="country-info flex justify-between items-center">
            <div className="flag flex items-center gap-2">
              <FaFlag />
              <p>{player.country}</p>
            </div>
            <div className="btn">{player.type}</div>
          </div>
          <div className="divider"></div>

          <h2 className="font-bold">Ratting: {player.rating}</h2>

          <div className="flex justify-between items-center gap-10 font-bold">
            <p>{player.hand}</p>
            <p className="text-right">{player.bowlingStyle}</p>
          </div>
          <div className="card-actions justify-between items-center gap-5">
            <p className="font-semibold">Price:$ {`${player.price}`}</p>
            <button
              onClick={handleChoosePrice}
              disabled={isSelected ? true : false}
              className="btn"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
