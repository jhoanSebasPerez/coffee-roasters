import { GlobalStyles } from "./globalStyles";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Subscribe } from "./pages/Subscribe";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
