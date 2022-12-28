// lib
import { Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/Home";
import Playground from "./pages/Play";
import AboutPage from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/play" element={<Playground />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
