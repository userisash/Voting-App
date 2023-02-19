import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './login.css'
import Register from './Components/Register'
import Login from './Components/Login'
import CardList from './Components/cards.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSuccessfulLogin() {
    setLoggedIn(true);
  }
  
  return (
    <div className="App">
      {loggedIn ? <CardList/> : <Login onSuccessfulLogin={handleSuccessfulLogin}/>}
    </div>
  )
}

export default App
