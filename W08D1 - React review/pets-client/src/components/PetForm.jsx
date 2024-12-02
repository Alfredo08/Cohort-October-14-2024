import { useState } from "react";
import axios from "axios";

const PetForm = ({baseURL, handleNewPet}) => {
    const defaultValues = {
        name: "",
        species: "",
        breed: "",
        user_id: 1
    };

    const [newPet, setNewPet] = useState(defaultValues);

    const updateField = (event) => {
        setNewPet({
            ...newPet,
            [event.target.name]: event.target.value
        });
    }

    const addPet = async (event) => {
        event.preventDefault();
        const URL = baseURL + "/new/pet";
        /*
        const settings = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPet)
        }
        */
        const response = await axios.post(URL, newPet);
        //const response = await fetch(URL, settings);
        //const data = await response.json();
        
        handleNewPet(response.data);
        setNewPet(defaultValues);
    }

    return (
        <>
            <h2> New pet </h2>
            <form onSubmit={addPet}>
                <div>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text"
                           name="name"
                           id="name"
                           onChange={(e) => updateField(e)}
                           value={newPet.name} />    
                </div>    
                <div>
                    <label htmlFor="breed">
                        Breed:
                    </label>
                    <input type="text"
                           name="breed"
                           id="breed"
                           onChange={(e) => updateField(e)}
                           value={newPet.breed} />    
                </div>    
                <div>
                    <label htmlFor="species">
                        Species:
                    </label>
                    <input type="text"
                           name="species"
                           id="species"
                           onChange={(e) => updateField(e)}
                           value={newPet.species} />    
                </div>    
                <div>
                    <label htmlFor="user_id">
                        User Id:
                    </label>
                    <input type="number"
                           name="user_id"
                           id="user_id"
                           onChange={(e) => updateField(e)}
                           value={newPet.user_id} />    
                </div>    
                <button>
                    Add pet
                </button>
            </form>  
        </>
    );
}

export default PetForm;