import { ADD_CHARACTER } from '../actions';
import { REMOVE_HERO } from '../actions'
import { createCharacter } from './helpers.js';


function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_HERO:
            heroes = state.filter(item => item.id !== action.id);
        return heroes;
        default:
            return state;
    }
}

export default heroes;