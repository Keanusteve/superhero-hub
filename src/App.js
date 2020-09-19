import React from "react";
import "./App.css";
import CharacterList from "./containers/CharacterList";
import { getCharacters, createCharacter, updateCharacter } from "./CharactersService";
import AddEditCharacterForm from "./components/AddEditCharacterForm";

import Character from "./components/Character";

function App() {
  

  const[currentCharacter, setCurrentCharacter] = React.useState(null);
    
  function handleAddNewCharacterClick() {
    setCurrentCharacter(null);
    //todo: scroll to bottom of page""javascript programatically scroll to bottom of page"
  }
 
  

  const [characters, setCharacters] = React.useState(() => {
    fetchCharacters();

    return [
      {
        _id: "5f602db5ac73c47e180834e7",
        name: "Superman",
        strength: 9000,
        durability: 9000,
        speed: 9000,
        power_level: 9500,
        fighting_skill: 6000,
        xfactor: 2000,
        alignment: "Hero",
        universe: "DC",
        imageUrl: "Superman.jpg",
      },
      {
        _id: "",
        name: "Hulk",
        strength: 9000,
        durability: 9000,
        speed: 7000,
        power_level: 9500,
        fighting_skill: 5000,
        xfactor: 7000,
        alignment: "Hero",
        universe: "Marvel",
        imageUrl: "Hulk.jpg",
      },
    ];
  });

  function fetchCharacters() {
    getCharacters()
      .then((response) => {
        setCharacters(response.data);
      })

      .catch((error) => {
        debugger;
      });
  }

  function handleCreateCharacter(character) {
    createCharacter(character)
      .then((response) => {
       setCurrentCharacter(null);
        alert("SUCCESSFULLY CREATE NEW CHARACTER");
        fetchCharacters();
      })
      .catch((error) => {
        alert(error);
      });
      
  }

  function handleEditCharacter(character) {
    setCurrentCharacter(character);
    
  }

  function handleUpdateCharacter(character){
    updateCharacter(character._id, character)
    .then((response) => {
      setCurrentCharacter(null);
      alert("SUCCESSFULLY UPDATED CHARACTER")
      fetchCharacters();
    })
      .catch((error )=> {
        alert(error);
      });
    }
  return (
    //CharacterList is creating an instance of character list

    <div className="App">
      <h1> SUPERHERO CENTRAL</h1>

      <button onClick={handleAddNewCharacterClick}> ADD NEW CHARACTER </button>
      <CharacterList characters={characters} handleEditCharacter={handleEditCharacter} />
    
          <AddEditCharacterForm
            existingCharacter={currentCharacter}
            handleCreateCharacter={handleCreateCharacter}
            handleUpdateCharacter={handleUpdateCharacter}
          />
      
    </div>
  );
}

export default App;
