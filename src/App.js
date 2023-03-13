// import logo from './store/logo.png';
// import './App.css';
// import { useNavigate } from "react-router-dom";
// import Maps from './components/Maps';
import React from "react";
import App1 from "./App1"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maps from "./components/Maps";
import DMaps from "./components/DMaps";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App1 />} />
        <Route  exact path="/hospitals" element={<Maps />} />
        <Route exact path="/doctors" element={<DMaps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
