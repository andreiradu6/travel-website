
import Navbar from './Components/Navbar.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/pages/Home.js';
import SignUp from './Components/pages/SignUp.js';
import Services from './Components/pages/Services'
import Products from './Components/pages/Products.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
