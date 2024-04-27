import AllRoutes from './Components/Mainpages/AllRoutes'
import Navbar from './Components/Mainpages/Navbar';
import Footer from './Components/Mainpages/Footer';

import  Profile  from './Components/UserData/Profile';
import ProductPage from './Components/Products/Products';
import FullProduct from './Components/Products/FullProduct';

function App() {
  return (
    <>
      <div>

      <AllRoutes/>
      {/* <ProductPage/> */}
      {/* <FullProduct/> */}
      {/* <Profile/> */}
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
