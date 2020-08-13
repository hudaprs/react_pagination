import React from "react"
import "./App.css"

// redux
import { Provider } from "react-redux"
import store from "./redux/store"

// Components
import Role from "./components/role/Role"

function App() {
  return (
    <Provider store={store}>
      <Role />
    </Provider>
  )
}

export default App
