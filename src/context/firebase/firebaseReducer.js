import { ADD_NOTE, FETCH_NOTES, REMOVE_NOT, SHOW_LOADER } from "../types"

const handlers = {
  [SHOW_LOADER]: state =>({...state, loading: true}),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
     notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, {payload})=>({...state, notes: payload, loading: false}),
    [REMOVE_NOT]: (state, {payload})=>({
      ...state,
       notes: state.notes.filter(note => note.id !== payload)
      }),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handle.DEFAULT
  return handle(state, action)
}