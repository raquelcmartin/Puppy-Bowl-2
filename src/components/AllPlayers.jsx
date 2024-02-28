import{ useEffect, useState } from 'react'
import { getAllPlayers } from "../API/index";
import { useNavigate } from 'react-router-dom';


export default function AllPlayers() {
    const navigate = useNavigate()
    const [players, setPlayers] = useState([])

    useEffect(() => {
        async function updatePlayers() {
            try {
                const players = await getAllPlayers()
                console.log('players', players)
                setPlayers(players)

            } catch (e) {
                console.error(e)
            }
        }
        updatePlayers()
    }, [])

    return <main>{
        players.map((player) => {
            return <article key={player.id}>
                <h2 onClick={() => navigate(`/players/${player.id}`)}>
                <img src={player.imageUrl} />
                    {player.name}
                    </h2>
            </article>
        })
        }</main>
}