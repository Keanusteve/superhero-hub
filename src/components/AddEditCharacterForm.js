import React from "react";
import"./AddEditCharacterForm.css";
import universes from "../universe.json";
import alignments from "../alignment.json";


function AddEditCharacterForm({handleCloseModal, handleCreateCharacter, existingCharacter,handleUpdateCharacter}) {
    const[name,setName] =React.useState(existingCharacter ? existingCharacter.name : "");
    const[strength,setStrength] =React.useState(existingCharacter ? existingCharacter.strength : 1);
    const[durability,setDurability] =React.useState(existingCharacter ? existingCharacter.durability : 1);
    const[speed, setSpeed] =React.useState(existingCharacter ? existingCharacter.speed: 1);
    const[powerLevel,setPowerLevel] =React.useState(existingCharacter ? existingCharacter.powerLevel : 1);
    const[fightingSkill,setFightingSkill] =React.useState(existingCharacter ? existingCharacter.fightingSkill : 1);
    const[xFactor,setXFactor] =React.useState(existingCharacter ? existingCharacter.xFactor : 1);
    const[alignment,setAlignment] =React.useState(existingCharacter ? existingCharacter.alignment : "");
    const[universe,setUniverse] =React.useState(existingCharacter ? existingCharacter.universe: "");

    const [errors,setErrors] = React.useState({
       name: null,
       strength: null,
       durability: null,
       speed: null,
       powerLevel: null,
       fightingSkill: null,
       xFactor: null,
       alignment: null,
       universe: null
   });

    function handleSubmit(event) {
        event.preventDefault();

        const errors = {
       name: null,
       strength: null,
       durability: null,
       speed: null,
       powerLevel: null,
       fightingSkill: null,
       xFactor: null,
       alignment: null,
       universe: null
        };
        if(name.length ===0) {
            errors.name = "Character Name cannot be empty";
        }
        if(strength <=1) {
            errors.strength = "Strength must be greater than or equal to 1";
        }
        if(durability <=1) {
            errors.durability = "Durability must be greater than or equal to 1";
        }
        if(speed <=1) {
            errors.speed = "SPeed must be greater than or equal to 1";
        }
        if(powerLevel <=1) {
            errors.powerLevel = "Power Level must be greater than or equal to 1";
        }
        if(fightingSkill <=1) {
            errors.fightingSkill = "Fighting Skill must be greater than or equal to 1";
        }
        if(xFactor <=1) {
            errors.xFactor = "X Factor must be greater than or equal to 1";
        }
                if(!alignment || alignment === "all") {
             errors.alignment = "Character alignment must not be empty";
        }
        if(!universe || universe ==="all") {
            errors.universe = "Universe cannot be empty";
        }
        
        if(errors.name || errors.strength || errors.durability || errors.speed || 
            errors.powerLevel || errors.fightingSkill || errors.xFactor || 
            errors.alignment || errors.universe) {
                setErrors(errors);
                return;
            }
            const character = {
                name: name,
                strength:strength,
                durability:durability,
                speed:speed,
                powerLevel:powerLevel,
                fightingSkill:fightingSkill,
                xFactor:xFactor,
                alignment:alignment,
                universe:universe
            };
//this else if statement will only create a ew character if not updating
            if(existingCharacter){
                character._id= existingCharacter._id;
                handleUpdateCharacter(character);
            } else {
                handleCreateCharacter(character);
            }
         }


    return <div className="add-edit-character-form-container">
    <h1>{existingCharacter ? "Edit Character": "Add Character"}</h1>
    <form onSubmit={ handleSubmit } className="character-form">
         
             <span className="required">*</span>
        <label htmlFor="Name">
        Name
        <input type="text"
         value={name}
          onChange={ (e) => setName(e.target.value)}
          className={errors.name ? "invalid": ""}
         />
         {errors.name ? <span className="required">{errors.name}</span> :null}
         </label>
      

      
         <span className="required">*</span>
        <label htmlFor="Strength">
        Strength
        <input type="number"
        value={strength}
          onChange={ (e) => setStrength(e.target.value)}
          className={errors.strength ? "invalid": ""}
          />
         {errors.strength ? <span className="required">{errors.strength}</span> :null}
         </label>
      

        <span className="required">*</span>
        <label htmlFor="Durability">
        Durability
        <input type="number"
        value={durability}
        onChange={ (e) => setDurability(e.target.value)}
        className={errors.durability ? "invalid" :""}
         />
        {errors.durability ? <span className="required">{errors.durability}</span>: null}
         </label>
      

      
        <span className="required">*</span>
        <label htmlFor="Speed">
        Speed
        <input type="number"
        value={speed}
        onChange={ (e) => setSpeed(e.target.value)}
        className={errors.speed ? "invalid" : ""}
        />
        {errors.speed ? <span className="required">{errors.speed}</span>: null}
         </label>
         
     
      <span className="required">*</span>
        <label htmlFor="Power Level">
        Power Level
        <input type="number"
        value={powerLevel}
        onChange={ (e) => setPowerLevel(e.target.value)}
        className={errors.powerLevel ? "invalid" : ""}
        />
        {errors.powerLevel ? <span className="required">{errors.powerLevel}</span>: null}
        </label>
      

      
      <span className="required">*</span>
        <label htmlFor="Fighting Skill">
        Fighting Skill
        <input type="number"
        value={fightingSkill}
        onChange={ (e) => setFightingSkill(e.target.value)}
        className={errors.fightingSkill ? "invalid" : ""}
        />
        {errors.fightingSkill ? <span className="required">{errors.fightingSkill}</span>: null}
            
        </label>
    

       <span className="required">*</span>
        <label htmlFor="X Factor">
        X Factor
        <input type="number"
        value={xFactor}
        onChange={ (e) => setXFactor(e.target.value)}
        className={errors.xFactor ? "invalid" : ""}
        />
        {errors.xFactor ? <span className="required">{errors.xFactor}</span>: null}
       </label>
      

      
      <span className="required">*</span>      
         <label htmlFor="Alignment">
        Alignment         
     <select value={alignment}
         onChange={(e) => setAlignment(e.target.value)}
         className={errors.alignment ? "invalid" : ""}
         >
             <option value=""></option >
             
            {
            alignments.map((alignment) => {
                return (
                <option value={alignment.value} key={alignment.value}>
                    {alignment.label
                    }
                </option>
                );
            })};           
             </select>
             {errors.universe ? <span className="required">{errors.universe}</span>: null}
             </label> 
    

        <span className="required">*</span>
        <label htmlFor="Universe">
        Universe
     <select value={universe}
      onChange={(e) => setUniverse(e.target.value)}
      className={errors.universe ? "invalid" : ""}
      >
         <option value=""></option >
         { 
         universes.map((universe) => {
             return (
                 <option value={universe.value} key={universe.value}>
                     {universe.label
                     }
                 </option>
             );
         })};
         </select>
         {errors.universe ? <span className="required">{errors.universe}</span>: null}
         </label> 
         
    

     <button>{existingCharacter ? "SAVE & CLOSE" : "CREATE & CLOSE"}</button>
    </form>
    <button onClick={handleCloseModal}>CLOSE</button>
    </div>;
    
 }



export default AddEditCharacterForm;
