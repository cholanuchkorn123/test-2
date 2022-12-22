import "./App.css";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Movie } from "./pages/Movie";
import { Home } from "./pages/Home";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="App">
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/">
            <Route index element={<Home search={search} />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="movie">
              <Route path=":id" element={<Movie />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
