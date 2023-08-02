import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Nav from './components/Nav';

const App = () => (
  <div className="App">
    <Nav />

    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default App;
