
import './App.css';
import Navbar from './Components/Navbar';
// import Searchbar from './Components/Searchbar';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
 import AdminLogin from './Components/Admin/AdminLogin';
import UserLogin from './Components/Login/UserLogin';
// import UserLogin from './Components/User/UserLogin';
// import UserSignUp from './Components/User/UserSignUp';
// import CurdHotel from './Components/CurdHotel';
import CarouselComponent from './Components/CarouselComponent';

// import AdminSignUp from './Components/Admin/AdminSignUp';
import Register from './Components/Login/Register'


function App() {
  return (
    <>
      <Router>
        <Navbar />

        {/* <Routes>

           <Route exact path='/' element={<> <Searchbar /> <CarouselComponent /> <Footer /> </> } /> 
          <Route exact path='/about' element={<Footer />} />
           
          <Route exact path='/userlogin' element={<UserLogin/>} />
          <Route exact path='/userregister' element={<UserSignUp/>} />
          <Route exact path='/curdhotel' element={<CurdHotel/>} /> 
          <Route exact path='/ads' element={<AdminSignUp/>} /> 

        </Routes> */}
        <Routes>
        <Route exact path='/' element={<>  <CarouselComponent /> <Footer /> </> } /> 
          {/* <Route exact path='/about' element={<Footer />}/> */}
          <Route exact path='/adminlogin' element={<AdminLogin/>} />
          <Route exact path='/userlogin' element={<UserLogin/>} />
          <Route exact path='/userresgister' element={<Register/>} />
          
         
          
        </Routes>

      </Router>
    </>
  );
}

export default App;
