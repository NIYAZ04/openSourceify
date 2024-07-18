// @ts-nocheck
import Navbar from './pages/navbar/navbar';
import './App.css'
import Contactus from './pages/contactus/contactus';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home/home';
import Learning from './pages/learning/learning';
import Projects from './pages/projects/projects';
import Login from './pages/registerAndLogin/Login'
import Footer from './pages/footer/footer'
import Register from './pages/registerAndLogin/register'
import VerifyEmail from './pages/registerAndLogin/VerifyEmail'
import ForgotPassword from './pages/registerAndLogin/ForgotPassword'
import ResetPassword from './pages/registerAndLogin/ResetPassword'
import AppContainer from './components/AppContainer'
import Settings from './pages/registerAndLogin/Setting'
import Profile from './pages/userProfile/Profile'
import { setNavigate } from './lib/navigation';
function App(){
  const navigate=useNavigate();
  setNavigate(navigate)
  return (
   <>
      <Navbar />
      <div className="mainItemStartsFromHere">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/projects" element={<Projects/>} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/about" element={<Contactus />} />

          {/*  */}
          <Route path="/login" element={<Login/>}/>
          <Route path ="/register" element={<Register/> }  />
          <Route path ="/email/verify/:code" element={<VerifyEmail/> }  />
          <Route path ="/password/forgot" element={<ForgotPassword/> }  />
          <Route path ="/password/reset" element={<ResetPassword/> }  />
          <Route element={<AppContainer />}>
         
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />

          </Route>
        </Routes>
      
      </div>
     <Footer/>
     </>
  );
}
export default App