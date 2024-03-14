import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import LoginButton from './ComponentsLogin/LoginButton'
import LogoutButton from './ComponentsLogin/LogoutButton'
import Profile from './ComponentsLogin/Profile'

function App() {
  return (
    <>
      {/* <LoginButton />
      <LogoutButton/>
      <Profile /> */}
      <Navbar/>
      <Home/>
      {/* <Footer/> */}
    </>
  )
}

export default App
