import './App.css'
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import useToken from './components/useToken'


function App() {

  const { token, setToken } = useToken();


  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
