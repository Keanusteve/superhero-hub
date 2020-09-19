import axios from "axios";

//URL for our Node Express APP running locally
const BASE_URL = "http://localhost:3000";

const getCharacters = ()=> {
    return axios.get(`${BASE_URL}/api/characters`);
};


const createCharacter = (character) =>{
    return axios.post(`${BASE_URL}/api/characters`, character);
};

const updateCharacter = (characterId, character) => {
return axios.put(`${BASE_URL}/api/characters/${characterId}`);
};


export {getCharacters, createCharacter, updateCharacter}; 
