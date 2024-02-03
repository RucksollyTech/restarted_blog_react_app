import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AllBlogs from "./AllBlogs";
import BlogDetail from "./BlogDetail";

function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/all_blog" element={<AllBlogs />} />
                    <Route path="/blog_detail/:id" element={<BlogDetail />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
