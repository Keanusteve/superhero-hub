import React from "react";
import "./CharacterList.css";
import Character from "../components/Character";
import "./CharacterList.css";


function CharacterList({characters, handleEditCharacter }) {
  

  return (
    <div>
      <h1>CHARACTER LIST</h1>
      {characters && characters.length >0 ? characters.map((character) => {
        return <Character characterInfo={character} key={character._id} handleEditCharacter={handleEditCharacter} />;
      }) :null}
    
    </div>
  );
}
//ES6 method of exprting
export default CharacterList;
