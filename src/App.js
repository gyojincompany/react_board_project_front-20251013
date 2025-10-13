import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BoardWrite from "./pages/BoardWrite";
import BoardDetail from "./pages/BoardDetail";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/write' element={<BoardWrite />} />
        <Route path='/board/:id' element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
