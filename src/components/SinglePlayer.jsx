import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePlayer } from '../API'

export default function SinglePlayer() {
    const { id } = useParams()
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        async function updatePlayer() {
            try {
                const player = await getSinglePlayer()
                setPlayer(player)

            } catch(e) {
                console.error(e)
            }
        }
        updatePlayer()
    }, [])

    if (!player) {
        return <div>Loading player {id}...</div>
    }

    return <article key={player.id}>
        <h2>
    <img src={player.imageUrl} />
        {player.name}
        </h2>
        <h3>{player.breed}</h3>
</article>
}