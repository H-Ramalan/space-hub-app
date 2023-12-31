import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './index.css';
import { getMissions } from './redux/mission/missionSlice';
import { fetchRockets } from './redux/rocket/rocketSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
