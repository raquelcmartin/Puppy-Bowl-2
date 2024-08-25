import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSinglePlayer, deletePlayer } from '../API'

export default function SinglePlayer() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function updatePlayer() {
            try {
                const player = await getSinglePlayer(id); // passed id to getSinglePlayer
                setPlayer(player);
            } catch(e) {
                console.error(e);
            }
        }
        updatePlayer();
    }, [id]);

    async function deleteHandler(playerId) {
        await deletePlayer(playerId);
        navigate('/');
    }

    function backHome() {
        navigate('/');
    }



    if (!player) {
        return <h1>Loading player {id}...</h1>
    }
    return (
        <section className='all-players'>
         <div key={player.id} className='player-card'>
            <img src={player.imageUrl} alt=''/>
            <h2>{player.name}</h2>
            <h3>Breed: {player.breed}</h3>
            <h3>Status: {player.status}</h3>
            <p>Created at: {new Date(player.createdAt).toLocaleString()}</p>
            <p>Updated at: {new Date(player.createdAt).toLocaleString()}</p>
            <p>Team Id: {player.teamId}</p>
            <p>Cohort Id: {player.cohortId}</p>
            <button onClick={backHome}>Return to Home</button>
            <button
            onClick={() => {
                if (confirm('Do you want to delete this puppy?')) {
                    deleteHandler(player.id);
                } else {
                    return false;
                }
            }}
            >
                Remove Puppy
            </button>
         </div>
        </section>
    );
}