
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
