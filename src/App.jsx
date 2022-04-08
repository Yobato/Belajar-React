// import logo from './logo.svg';
import "./App.css";
// import Header from './components/header';
// import { Button } from 'bootstrap';
import { useState } from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Detail from "./pages/Home/Detail";
import Post from "./components/Post";
import Product from "./components/Product";
import ProtectedRoute from "./routes/ProtectedRoute";
import Axios from "./pages/Home/Axios";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/login"}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/axios" element={<Axios />} />
        <Route
          path="/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        >
          <Route path={"post"} element={<Post />} />
          <Route path={"product"} element={<Product />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default Halo;
export default App;
