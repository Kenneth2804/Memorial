import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Register from './Components/login/Register';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <Routes>
    <Route path='/' exact element={<Landing/>}></Route>
    <Route path='/register' exact element={<Register/>}></Route>
    <Route path='/login' exact element={<Login/>}></Route>
    <Route path='/home' exact element={<Home/>}></Route>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;