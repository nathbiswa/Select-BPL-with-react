import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}) => {
    console.log(selectedPlayers, "selectedPlayer");

    const deleteSelectedPlayer = (player)=>{
        console.log(player, "deletedPlayer")
        const filterPlayer = selectedPlayers.filter(
            (selectedPlayer)=> selectedPlayer.playerName !== player.playerName,
        );
        // console.log(filterPlayer);
        setSelectedPlayers(filterPlayer);
    };
    return (
        <div>
            <div className='space-y-3'>
                {selectedPlayers.map((player,ind)=>{
                        return(
                            <div key={ind} className='flex justify-between items-center gap-3'>
                                <div className='flex items-center gap-2'>
                                    <img className='h-[100px] w-auto rounded' src={player.picture} alt="player.playerName"/>
                                    <div>
                                        <h2>{player.playerName}</h2>
                                        <p>{player.type}</p>
                                    </div>
                                    
                                </div>
                                <button className='btn text-red-500' onClick={()=> deleteSelectedPlayer(player)}>
                                <MdDelete/>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;