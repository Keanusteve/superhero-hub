import React from "react";
import "./CharacterList.css";
import Character from "../components/Character";
import "./CharacterList.css";


function CharacterList({characters, handleEditCharacter, handleDeleteCharacter }) {
  

  return (
    <div>
      <h1>CHARACTER LIST</h1>
      <div className="character-list">

      {characters && characters.length >0 ? characters.map((character) => {
        return <Character characterInfo={character} key={character._id} handleEditCharacter={handleEditCharacter} handleDeleteCharacter={handleDeleteCharacter}/>;
      }) :null}
    

      </div>
    </div>
  );
}
//ES6 method of exprting
export default CharacterList;
