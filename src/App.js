import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home/Home";
import NavigationBar from "./pages/Shared/NavigationBar/NavigationBar";
import Footer from "./pages/Shared/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
