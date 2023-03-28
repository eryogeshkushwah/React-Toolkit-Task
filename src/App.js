import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListTask />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
