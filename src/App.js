import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Account from "./screens/Account";
import Addbook from "./screens/Addbook";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createuser" element={<Signup />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/addbook" element={<Addbook />} />
      </Routes>
    </Router>
  );
}

export default App;
