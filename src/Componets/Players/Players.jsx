
import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayer/SelectedPlayers';

const Players = ({playersPromise, setCoin, coin}) => {
    // console.log(playersPromise);
    const palayers = use(playersPromise);
    // console.log(palayers)
    const [selectedType, setSelectedType] = useState('availabel');
    // console.log(selectedType, 'selectedType');
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center my-5'>
             {  selectedType === 'availabel' ? <h1 className='font-bold text-2xl'>Availabel Players</h1> : <h1 className='font-bold text-2xl'>Selected Players</h1>}
                <div>
                    <button onClick={()=> setSelectedType('availabel')}  className={`btn ${selectedType === "availabel" ? "bg-[#E7FE29]" : ""} 
                     rounded-r-none rounded-l-full`}>Available</button>
                    <button onClick={()=> setSelectedType('selected')}  className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} 
                     rounded-l-none rounded-r-full`}>Selected (0)</button>
                </div>
            </div>
            { selectedType === 'availabel' ? 
            <AvailablePlayers palayers={palayers} setCoin={setCoin} coin={coin}></AvailablePlayers> : 
            <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;