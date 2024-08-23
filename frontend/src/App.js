import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ResumeDashboard from './components/ResumeDashboard';
import AdminLogin from './components/AdminLogin';
import UserForm from './components/Form';
import Register from './components/Registration';

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/register' element={<Register/>}/> 
            <Route path='/admindashboard' element={<ResumeDashboard/>}/>
            <Route path='/adminlogin' element={<AdminLogin/>}/>       
            <Route path='/form' element={<UserForm/>}/>                
          </Routes>
      </BrowserRouter>
    ); 
}


export default App;
