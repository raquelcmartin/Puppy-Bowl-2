import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewPlayer() {

    const [name, setName] = useState()
    const [breed, setBreed] = useState()
    const [imageUrl, setimageUrl] = useState()

    const navigate = useNavigate()

    function clearForm() {
        setName('')
        setBreed('')
        setimageUrl('')
    }

    async function handleSubmit(event) {
        event.preventDefault() // STOP PAGE REFRESH

        const payload = {
                name,
                breed,
                imageUrl
            }

            try {
                const { data } = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/raquelcmartin/players', payload)
    
                // navigate to the AllItems page
                navigate('/')
    
            } catch (err) {
                console.error(err)
            }

        }
    

    return (
        <form onSubmit={handleSubmit}>
            <label >
                Name:
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label >
                Breed:
                <input value={breed} onChange={(e) => setBreed(e.target.value)} />
            </label>
            <label >
                ImageUrl:
                <input value={imageUrl} onChange={(e) => setimageUrl(e.target.value)} />
            </label>

            <button type='button' onClick={clearForm}>Clear Form</button>
            <button type='submit'>Add Player</button>



        </form>
    )
    }
