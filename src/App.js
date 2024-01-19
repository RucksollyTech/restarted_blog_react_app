import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <h1>Footer</h1>
            </Router>
        </div>
    );
}

export default App;
