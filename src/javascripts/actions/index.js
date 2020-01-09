import {ADD_NOTE, DELETE_NOTE} from "./types";
let id = 0;

export const addNote = payload => {
  id++;
  return {
  type: ADD_NOTE,
    payload: {...payload, id: id}
  }
}

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
})

