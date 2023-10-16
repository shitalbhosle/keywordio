import Text from "./components/Text";
import Navbar from "./components/Navbar";
import Media from "./components/Media";
import { Routes, Route } from "react-router-dom";
import TextCard from "./components/TextCard";
import MediaCard from "./components/MediaCard";
import { Card } from "@mui/material";
import Cards from "./components/Cards";
import { useState } from "react";
import BasicTable from "./components/BasicTable";
import Dashboard from "./components/Dashboard";
import BasicModal from "./components/BasicModal";
function App() {
  const [checked, setIsChecked] = useState({ first: false, second: false });
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/text" element={<Text />}></Route>
        <Route exact path="/media" element={<Media />}></Route>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route
          exact
          path="/cards"
          element={
            <Cards checked={checked} setIsChecked={setIsChecked} />
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
