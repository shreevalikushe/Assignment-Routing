import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Men } from "./components/Men";
import { Navbar } from "./components/Navbar";
import { Women } from "./components/Women";

function App() {
  return (
    <div className="App">
      {" "}
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
