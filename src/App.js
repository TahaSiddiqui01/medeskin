import React from "react";
import "./assets/css/app.css";
import "./assets/css/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import AdminLogin from "./pages/auth/AdminLogin";
import ScrollToTop from "./ScrollToTop";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import AdminBlogs from "./pages/admin/blogs/Blogs";
import AddBlog from "./pages/admin/blogs/AddBlog";
import Blogs from "./pages/Blogs";
import SearchResults from "./pages/SearchResults";
import CategoryBlogs from "./pages/CategoryBlogs";
// import Footer from "./components/Footer";
import Product from "./pages/Product";
import Ethics from "./pages/Ethics";
import SingleBlog from "./pages/SingleBlog";
import EditBlog from "./pages/admin/blogs/EditBlog";
import Register from "./pages/auth/Register";
import NotFound from './pages/NotFound';
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/search/:text" element={<SearchResults />} />
            <Route path="/blogs/category/:text" element={<CategoryBlogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* <Route path="/admin/register" element={<Register />} /> */}
            <Route path="/admin" element={<Admin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="blogs" element={<AdminBlogs />} />
              <Route path="blogs/add-blog" element={<AddBlog />} />
              <Route path="blogs/edit-blog/:id" element={<EditBlog />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
