import React, { createContext, useContext, useReducer } from 'react'
import { pantryList } from '../../constants/mock.data'

const AppStateContext = createContext()
const AppActionsContext = createContext()
const AppDispatchContext = createContext()

const initialState = {
  pantryList: pantryList,
}

function AppProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useActions(state, dispatch)

  return (
    <AppStateContext.Provider value={state}>
      <AppActionsContext.Provider value={actions}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </AppActionsContext.Provider>
    </AppStateContext.Provider>
  )
}

const SET_PANTRY_LIST = 'SET_PANTRY_LIST'

function reducer (state, action) {
  switch (action.type) {
    case SET_PANTRY_LIST:
      return {...state, pantryList: action.payload }
    default:
      return state
  }
}

function useActions (state, dispatch) {
  return {
    setPantryList: (list) => dispatch({ type: SET_PANTRY_LIST, payload: list }),
  }
}

function useApp () {
  return {
    state: useContext(AppStateContext),
    actions: useContext(AppActionsContext),
    dispatch: useContext(AppDispatchContext),
  }
}

export {
  AppProvider,
  useApp,
}