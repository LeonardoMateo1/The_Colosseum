import './App.css';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sign_Up" element={<SignUp/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
