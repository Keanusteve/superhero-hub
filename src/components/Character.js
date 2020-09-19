import React from "react";
import"./Character.css";

 
function Character({ characterInfo, handleEditCharacter}) {

    return(
        <div className="character-details">
            <img
            src={`./thumbnails/${characterInfo.imageUrl}` } 
            alt={characterInfo.name} 
            onError={(e) => (e.target.src ="./place-holder.jpg" )}
            className="character-image"/>
            
            <div>Name: {characterInfo.name}</div>
            <div>Strength Level: {characterInfo.strength}</div>
            <div>Durability: {characterInfo.durability}</div>
            <div>Speed: {characterInfo.speed}</div>
            <div>Power Level:{characterInfo.power_level}</div> 
            <div>Fighting Skill: {characterInfo.fighting_skill}</div>
            <div>X-Factor: {characterInfo.xfactor}</div>
            <div>Alignment: {characterInfo.alignment}</div>
            <div>Universe: {characterInfo.universe}</div>
            <button onClick={()=> handleEditCharacter(characterInfo)}>
                EDIT </button>
            
            
        </div>
    )

}

export default Character;