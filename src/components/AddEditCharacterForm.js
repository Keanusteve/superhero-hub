import React from "react";
import "./AddEditCharacterForm.css";
import universes from "../universe.json";
import alignments from "../alignment.json";

function AddEditCharacterForm({
  handleCreateCharacter,
  existingCharacter,
  handleUpdateCharacter,
  handleDeleteCharacter,
}) {
  const [name, setName] = React.useState(
    existingCharacter ? existingCharacter.name : ""
  );
  const [strength, setStrength] = React.useState(
    existingCharacter ? existingCharacter.strength : 1
  );
  const [durability, setDurability] = React.useState(
    existingCharacter ? existingCharacter.durability : 1
  );
  const [speed, setSpeed] = React.useState(
    existingCharacter ? existingCharacter.speed : 1
  );
  const [powerLevel, setPowerLevel] = React.useState(
    existingCharacter ? existingCharacter.power_level : 1
  );
  const [fightingSkill, setFightingSkill] = React.useState(
    existingCharacter ? existingCharacter.fighting_skill : 1
  );
  const [xFactor, setXFactor] = React.useState(
    existingCharacter ? existingCharacter.xfactor : 1
  );
  const [alignment, setAlignment] = React.useState(
    existingCharacter ? existingCharacter.alignment : ""
  );
  const [universe, setUniverse] = React.useState(
    existingCharacter ? existingCharacter.universe : ""
  );
  React.useEffect(() => {
    setName(existingCharacter ? existingCharacter.name : "");
    setStrength(existingCharacter ? existingCharacter.strength : "");
    setDurability(existingCharacter ? existingCharacter.durability : "");
    setSpeed(existingCharacter ? existingCharacter.speed : "");
    setPowerLevel(existingCharacter ? existingCharacter.power_level : "");
    setFightingSkill(existingCharacter ? existingCharacter.fighting_skill : "");
    setXFactor(existingCharacter ? existingCharacter.xfactor : "");
    setAlignment(existingCharacter ? existingCharacter.alignment : "");
    setUniverse(existingCharacter ? existingCharacter.universe : "");
  }, [existingCharacter]);
  const [errors, setErrors] = React.useState({
    name: null,
    strength: null,
    durability: null,
    speed: null,
    powerLevel: null,
    fightingSkill: null,
    xFactor: null,
    alignment: null,
    universe: null,
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
      universe: null,
    };
    if (name.length === 0) {
      errors.name = "Character Name cannot be empty";
    }
    if (strength < 1 || strength > 10000) {
      errors.strength = "Strength must be between 1 and 10,000";
    }
    if (durability < 1 || durability > 10000) {
      errors.durability = "Durability must be between 1 and 10,000";
    }
    if (speed < 1 || speed > 10000) {
      errors.speed = "Speed must be between 1 and 10,000";
    }
    if (powerLevel < 1 || powerLevel > 10000) {
      errors.powerLevel = "Power Level must be between 1 and 10,000";
    }
    if (fightingSkill < 1 || fightingSkill > 10000) {
      errors.fightingSkill = "Fighting must be between 1 and 10,000";
    }
    if (xFactor < 1 || xFactor > 10000) {
      errors.xFactor = "X Factor must be between 1 and 10,000";
    }
    if (!alignment || alignment === "all") {
      errors.alignment = "Character alignment must not be empty";
    }
    if (!universe || universe === "all") {
      errors.universe = "Universe cannot be empty";
    }

    if (
      errors.name ||
      errors.strength ||
      errors.durability ||
      errors.speed ||
      errors.powerLevel ||
      errors.fightingSkill ||
      errors.xFactor ||
      errors.alignment ||
      errors.universe
    ) {
      setErrors(errors);
      return;
    }
    const character = {
      name: name,
      strength: strength,
      durability: durability,
      speed: speed,
      power_level: powerLevel,
      fighting_skill: fightingSkill,
      xfactor: xFactor,
      alignment: alignment,
      universe: universe,
    };
    //this else if statement will only create a ew character if not updating
    if (existingCharacter) {
      character._id = existingCharacter._id;
      handleUpdateCharacter(character);
    } else {
      handleCreateCharacter(character);
    }
  }

  return (
    <div>
      <h1>{existingCharacter ? "Edit Character" : "Add Character"}</h1>
      <form onSubmit={handleSubmit} className="character-form">

          <h1> CREATE NEW CHARACTER</h1>
        <span className="required">*</span>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "invalid" : ""}
            
          />
          {errors.name ? <span className="required">{errors.name}</span> : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Strength">
          Strength
          <input
            type="number"
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            className={errors.strength ? "invalid" : ""}
          />
          {errors.strength ? (
            <span className="required">{errors.strength}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Durability">
          Durability
          <input
            type="number"
            value={durability}
            onChange={(e) => setDurability(e.target.value)}
            className={errors.durability ? "invalid" : ""}
          />
          {errors.durability ? (
            <span className="required">{errors.durability}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Speed">
          Speed
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className={errors.speed ? "invalid" : ""}
          />
          {errors.speed ? (
            <span className="required">{errors.speed}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Power Level">
          Power Level
          <input
            type="number"
            value={powerLevel}
            onChange={(e) => setPowerLevel(e.target.value)}
            className={errors.powerLevel ? "invalid" : ""}
          />
          {errors.powerLevel ? (
            <span className="required">{errors.powerLevel}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Fighting Skill">
          Fighting Skill
          <input
            type="number"
            value={fightingSkill}
            onChange={(e) => setFightingSkill(e.target.value)}
            className={errors.fightingSkill ? "invalid" : ""}
          />
          {errors.fightingSkill ? (
            <span className="required">{errors.fightingSkill}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="X Factor">
          X Factor
          <input
            type="number"
            value={xFactor}
            onChange={(e) => setXFactor(e.target.value)}
            className={errors.xFactor ? "invalid" : ""}
          />
          {errors.xFactor ? (
            <span className="required">{errors.xFactor}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Alignment">
          Alignment
          <select
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
            className={errors.alignment ? "invalid" : ""}
          >
            <option value=""></option>
            {alignments.map((alignment) => {
              return (
                <option value={alignment.value} key={alignment.value}>
                  {alignment.label}
                </option>
              );
            })}
            ;
          </select>
          {errors.universe ? (
            <span className="required">{errors.universe}</span>
          ) : null}
        </label>

        <span className="required">*</span>
        <label htmlFor="Universe">
          Universe
          <select
            value={universe}
            onChange={(e) => setUniverse(e.target.value)}
            className={errors.universe ? "invalid" : ""}
          >
            <option value=""></option>
            {universes.map((universe) => {
              return (
                <option value={universe.value} key={universe.value}>
                  {universe.label}
                </option>
              );
            })}
            ;
          </select>
          {errors.universe ? (
            <span className="required">{errors.universe}</span>
          ) : null}
        </label>

        <button className="close-button">
          {existingCharacter ? "SAVE & CLOSE" : "CREATE & CLOSE"}
        </button>
      </form>
      {existingCharacter ? (
        <button onClick={() => handleDeleteCharacter(existingCharacter)}>
          {" "}
          DELETE
        </button>
      ) : null}
    </div>
  );
}

export default AddEditCharacterForm;
