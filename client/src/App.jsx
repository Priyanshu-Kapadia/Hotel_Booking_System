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
import Success from "./pages/Success";
import Booking from "./pages/Booking";
import AllHotel from "./pages/AllHotel/AllHotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel" element={<AllHotel/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<LoginTest/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
