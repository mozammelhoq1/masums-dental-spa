import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home/Home";
import NavigationBar from "./pages/Shared/NavigationBar/NavigationBar";
import Footer from "./pages/Shared/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import CheckOut from "./pages/CheckOut/CheckOut";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout/:serviceId" element={<CheckOut />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
