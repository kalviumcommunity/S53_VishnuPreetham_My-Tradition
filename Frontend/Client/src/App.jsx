import AllRoutes from './Components/Mainpages/AllRoutes'
import Navbar from './Components/Mainpages/Navbar';
import Footer from './Components/Mainpages/Footer';

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
      <Footer/>
    </>
  )
}

export default App
