import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rockets from "./components/Rockets";
import Missions from "./components/Missions";
import MyProfile from "./components/MyProfile";
import './index.css'

const App = () => {
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
