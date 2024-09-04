
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
import UserDashboard from './components/userdashboard';
import Allcourses from './components/allcourses';
import Favcourses from './components/favouritecourses';
import Recomendedcourses from './components/recomendedcourses';
import Profileset from './components/profilesetting';
import Updatepassword from './components/updatepassword';
import Login from './components/login';

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
        <Route path='/userDash' element={<UserDashboard />} />
        <Route path='/allcourses' element={<Allcourses />} />
        <Route path='/Favcourses' element={<Favcourses />} />
        <Route path='/recomdcourse' element={<Recomendedcourses />} />
        <Route path='/profilesetting' element={<Profileset />} />
        <Route path='/updatePass' element={<Updatepassword />} />
        <Route path='/login' element={<Login />} />



        <Route path='/ScourseDetail/:course_id' element={<SinglecourseDetail />} />

      </Routes>

      <Footer />


    </div>
  );
}

export default App;
