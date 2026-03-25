
import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    // console.log(playersPromise);
    const palayers = use(playersPromise);
    console.log(palayers)
    return (
        <div className='container mx-auto'>
            Player: {palayers.length}
            <AvailablePlayers palayers={palayers}></AvailablePlayers>
        </div>
    );
};

export default Players;