import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Registration from "./components/pages/Registration";
import DisplayUsers from "./components/pages/DisplayUsers";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/registration-form" element={<Registration />} />
          <Route path="/display-user" element={<DisplayUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
