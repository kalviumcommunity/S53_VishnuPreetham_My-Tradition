import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import LoginButton from './ComponentsLogin/LoginButton'
import LogoutButton from './ComponentsLogin/LogoutButton'
import Profile from './ComponentsLogin/Profile'
import AllRoutes from './Components/AllRoutes'
function App() {
  return (
    <>
      <Navbar/>
      <div>
      <AllRoutes/>
      </div>
      {/* <LoginButton />
      <LogoutButton/>
      <Profile /> */}
      {/* <Home/> */}
    </>
  )
}

export default App
