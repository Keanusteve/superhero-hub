import React from "react";
import "./App.css";
import CharacterList from "./containers/CharacterList";
import { getCharacters, createCharacter, updateCharacter, deleteCharacter } from "./CharactersService";
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

    return [ ];
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
        alert("SUCCESSFULLY CREATED NEW CHARACTER");
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
    debugger
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

    function handleDeleteCharacter(character){
    deleteCharacter(character._id)
    .then((respones) => {
      alert("SUCESSFULLY DELETED CHARACTER");
      fetchCharacters();
    })
      .catch((errors) => {
        alert(errors);
      });
    }




  return (
    //CharacterList is creating an instance of character list

    <div className="App">
      <body className="body" > 
     
      <div className="emptyspace">
        <img src="" alt=""/> </div>
      <div className="superhero-central"><h1>SUPERHERO CENTRAL</h1></div>
      <div className="emptyspace"> </div>

      <div className="buttonbacking">
      <div className="nav-buttons"> 
        <button>BIOGRAPHIES</button>
        <button>ARENA</button>  
        <button>HOME</button>
        <button>FAN ART</button>
        <button>CONTACT US</button>

      </div>
      </div>
      <div className="emptyspace"> </div>
      <button onClick={handleAddNewCharacterClick} > 
      ADD NEW CHARACTER </button>
      <CharacterList characters={characters} handleEditCharacter={handleEditCharacter} handleDeleteCharacter={handleDeleteCharacter} />
    
          <AddEditCharacterForm
            existingCharacter={currentCharacter}
            handleCreateCharacter={handleCreateCharacter}
            handleUpdateCharacter={handleUpdateCharacter}
            handleDeleteCharacter={handleDeleteCharacter}
          />
      <br></br>
      </body>
    </div>
  );
}

export default App;
