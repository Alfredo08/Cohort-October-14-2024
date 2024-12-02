import { useEffect, useState } from 'react';
import './App.css';
import Pet from './components/Pet';
import PetForm from './components/PetForm';

const App = () => {
  const [pets, setPets] = useState([]);
  const [baseURL, setBaseURL] = useState("http://localhost:8080");

  useEffect(() => {
    const fetchPets = async () => {
      const URL = baseURL + "/pets";
      const response = await fetch(URL);
      const data = await response.json();
      setPets(data);
    }
    fetchPets();
  }, [])

  const handleNewPet = (newPet) => {
    setPets([...pets, newPet]);
  }

  const handleRemovePet = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
  }

  return (
    <>
      <h1> Pets client </h1>
      <PetForm baseURL={baseURL} handleNewPet={handleNewPet}/>
      {
        pets.map((pet, index) => {
          return (<Pet 
            pet={pet} 
            key={index} 
            baseURL={baseURL} 
            handleRemovePet={handleRemovePet}/>)
        })
      }
    </>
  );
}

export default App
