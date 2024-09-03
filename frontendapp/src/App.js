
import './App.css';
import Homepage from './components/Home'
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from './components/MainNav';
import Myaccount from './components/Myaccount';
import Plans from './components/Plans';
import Footer from './components/footer';
import SinglecourseDetail from './components/singlecoursedetail';
import Userreg from './components/userregister';

function App() {
  return (
    <div className="App">

      <CustomNavbar />

      {/* <NavDropdownExample /> */}


      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/myaccount' element={<Myaccount />} />
        <Route path='/plan' element={<Plans />} />
        <Route path='/userreg' element={<Userreg />} />
        <Route path='/ScourseDetail/:course_id' element={<SinglecourseDetail />} />

      </Routes>

      <Footer />


    </div>
  );
}

export default App;
