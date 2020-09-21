import axios from "axios";

//URL for our Node Express APP running locally
const BASE_URL = "http://localhost:3005";
//const BASE_URL = "https://superhero-hub.herokuapp.com";
const getCharacters = ()=> {
    return axios.get(`${BASE_URL}/api/characters`);
};


const createCharacter = (character) =>{
    return axios.post(`${BASE_URL}/api/characters`, character);
};

const updateCharacter = (characterId, character) => {
return axios.put(`${BASE_URL}/api/characters/${characterId}`, character);
};

const deleteCharacter = (characterId) =>{
    return axios.delete(`${BASE_URL}/api/characters/${characterId}`);
}
export {getCharacters, createCharacter, updateCharacter, deleteCharacter}; 
