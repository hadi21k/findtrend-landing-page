import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar.jsx";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
