import "./App.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Home from "./pages/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import LoginTest from "./pages/login/Login2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<LoginTest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
