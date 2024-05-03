import AllRoutes from './Components/Mainpages/AllRoutes'
import Navbar from './Components/Mainpages/Navbar';
import Footer from './Components/Mainpages/Footer';

import  Profile  from './Components/UserData/Profile';
import ProductPage from './Components/Products/Products';
import FullProduct from './Components/Products/FullProduct';
import Signup from './FireBaseLogin/Signup';
import Signin from './FireBaseLogin/Signin';

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
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
