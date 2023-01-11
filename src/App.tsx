import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Strength from './pages/Strength';
import Login from './pages/Auth/Login';
import Board from './pages/Board';
import Post from './pages/Post';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/strength" element={<Strength />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
    </>
  );
};

export default App;
