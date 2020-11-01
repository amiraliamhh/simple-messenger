import React from 'react'
import {
  Sidebar,
  Chat,
  NewChat
} from './components'
import { StateProvider } from './Store'
import './App.css'

function App() {
  return (
    <div className="container">
      <StateProvider>
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <Chat />
        <NewChat />
      </StateProvider>
    </div>
  )
}

export default App;
