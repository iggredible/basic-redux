import {ADD_NOTE, DELETE_NOTE} from "./types";
let id = 0;

export const addNote = note => {
  id++;
  return {
    type: ADD_NOTE,
    notes: {...note, id: id}
  }
}

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
})

