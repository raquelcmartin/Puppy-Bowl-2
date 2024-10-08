// not using export default
// were just going to export multiple things
// and no special default export

import axios from "axios"

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/raquelcmartin/players'

// could do: export funtion getAllPlayers() {
    export const getAllPlayers = async () => {
        const { data } = await axios.get(BASE_URL)
        console.log('data', data)
        return data.data.players
    }


    export const getSinglePlayer = async (playerId) => {
        const { data } = await axios.get(BASE_URL + '/' + playerId)
        console.log('data', data)
        return data.data.player
    }

    export const deletePlayer = async (playerId) => {
        try {
            const { data } = await axios.delete(BASE_URL + '/' + playerId);
            console.log('Deleted player data', data);
            return data;
        } catch (error) {
            console.error('Error deleting player:', error);
            throw error;
        }
    }