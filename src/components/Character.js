import React from "react";
import"./Character.css";

 
function Character({ characterInfo, handleEditCharacter, handleDeleteCharacter}) {

    return(
        <div className="character-details">
            <img
            src={`./thumbnails/${characterInfo.image_url}` } 
            alt={characterInfo.name} 
            onError={(e) => (e.target.src ="./place-holder.jpg" )}
            className="character-image"/>
            
            <div className="character-info-label">Name: {characterInfo.name}</div><br/>
            <div className="character-info-label">Strength Level: {characterInfo.strength}</div><br/>
            <div className="character-info-label">Durability: {characterInfo.durability}</div><br/>
            <div className="character-info-label">Speed: {characterInfo.speed}</div><br/>
            <div className="character-info-label">Power Level:{characterInfo.power_level}</div> <br/>
            <div className="character-info-label">Fighting Skill: {characterInfo.fighting_skill}</div><br/>
            <div className="character-info-label">X-Factor: {characterInfo.xfactor}</div><br/>
            <div className="character-info-label">Alignment: {characterInfo.alignment}</div><br/>
            <div className="character-info-label">Universe: {characterInfo.universe}</div><br/>
            <br></br>
            
            <button onClick={()=> handleEditCharacter(characterInfo)}>
                EDIT </button>
            <button onClick={()=> handleDeleteCharacter(characterInfo)}>
                DELETE</button>
            
            
        </div>
    )

}

export default Character;