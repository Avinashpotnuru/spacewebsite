import "./App.css";
import HomePage from "./pages/home";

import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar";
import CrewPage from "./pages/crew";
import DestinationPage from "./pages/destination";
import TechnologyPage from "./pages/technology";
function App() {
  return (
    <>
      <div className=" w-full ">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/destination" element={<DestinationPage />} />
          <Route exact path="/crew" element={<CrewPage />} />
          <Route exact path="/technology" element={<TechnologyPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
