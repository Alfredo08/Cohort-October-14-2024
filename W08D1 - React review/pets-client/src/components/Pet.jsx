
const Pet = ({pet, baseURL, handleRemovePet}) => {

    const deletePet = async () => {
        const URL = baseURL + "/remove/pet/" + pet.id;
        const settings = {
            method: "DELETE"
        };
        
        const response = await fetch(URL, settings);
        console.log(response);

        // Remove this pet from the state
        handleRemovePet(pet.id);
    }

    return (
        <>
            <h2> Name: {pet.name} <button onClick={deletePet}> Delete </button> </h2>
            <ul>
                <li> Species: {pet.species} </li>
                <li> Breed: {pet.breed} </li>
            </ul>
        </>
    );
}

export default Pet;