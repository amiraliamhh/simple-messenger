import React, { createContext, useReducer, Props } from 'react'
import {
  User
} from './models'

const myFriends = [
  new User('John', 1),
  new User('Sarah', 2)
]

const initialValue = {
  friends: myFriends,
  currentChat: myFriends[0]
}

export const store = createContext<ContextValue>({ state: initialValue, dispatch: () => {} })
const { Provider } = store

const reducer = (state: ContextType, action: Action) => {
  switch(action.type) {
    case 'changeChat':
      return Object.assign({}, state, { currentChat: action.chat })
    case 'sendMessage':
      state.currentChat.sendMessage(action.message)
      return Object.assign({}, state)
    case 'newChat':
      return Object.assign(
        {},
        state,
        {
          friends: state.friends.concat(new User(action.name, state.friends.length + 1))
        }
      )
    default:
      return state
  }
}

export const StateProvider = ({ children }: Props<any>) => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return <Provider value={{ state, dispatch }}>{ children }</Provider>
};

interface ContextValue {
  state: ContextType
  dispatch: React.Dispatch<Action>
}

interface ContextType {
  friends: User[]
  currentChat: User
}

interface Action {
  type: string
  [key: string]: any
}
