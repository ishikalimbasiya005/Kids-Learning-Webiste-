import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// Pages
import House from "./Links/House";
import Books from "./Learn/Books";
import Abouts from "./Links/Abouts";
import Contact from "./ContactUs/Contact";
import Admin from "./Admin/Admin";
import Dashboard from "./Dashboard/Dashboard";
import FeedbackAdmin from "./Feedback/feedback";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// English
import Englishbooks from "./English/Englishbooks";
import Alphabets from "./English/Alphabets";
import Colors from "./English/Colors";
import Animals from "./English/Animals";
import Verb from "./English/Verb";

// Science
import Sciencebook from "./Science/Sciencebook";
import Planets from "./Science/Planets";
import Weather from "./Science/Weather";
import Nature from "./Science/Nature";
import Trees from "./Science/Trees";

// Math
import MathBook from "./Math/Mathbook";
import Numbers from "./Math/Numbers";
import Shape from "./Math/Shape";
import Sign from "./Math/Sign";
import Addition from "./Math/Addition";

// Life Skills
import SkillBook from "./Skills/SkillBook";
import Habits from "./Skills/Habits";
import Manner from "./Skills/Manner";
import Discipline from "./Skills/Discipline";
import Honest from "./Skills/Honest";


// Search
import SearchBar from "./Search/SearchBar";
import BookPage from "./Search/BookPage";


// Manage Books
import ManageBook from "./Manage_Book/Managebook";
import AddChapter from "./AddChapters/AddChapter";
import UpdateChapter from "./UpdateChapter/UpdateChapter";
import ManageUsers from "./ManageUsers/ManageUsers";


// Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter =
    ["/dashboard", "/dashboard/feedback", "/manage-book", "/", "/register", "/add-chapter" , "/update-chapter", "/Admin", "/ManageUsers"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {!hideHeaderFooter && <SearchBar />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/house" element={<House />} />
      <Route path="/books" element={<Books />} />
      
      {/* English */}
      <Route path="/Englishbooks" element={<Englishbooks />} />
      <Route path="/Alphabets" element={<Alphabets />} />
      <Route path="/Colors" element={<Colors />} />
      <Route path="/Animals" element={<Animals />} />
      <Route path="/Verb" element={<Verb />} />

      {/* Science */}
      <Route path="/Sciencebook" element={<Sciencebook />} />
      <Route path="/Planets" element={<Planets />} />
      <Route path="/Weather" element={<Weather />} />
      <Route path="/Nature" element={<Nature />} />
      <Route path="/Trees" element={<Trees />} />

      {/* Math */}
      <Route path="/MathBook" element={<MathBook />} />
      <Route path="/Numbers" element={<Numbers />} />
      <Route path="/Shape" element={<Shape />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/Addition" element={<Addition />} />

      {/* Life Skills */}
      <Route path="/SkillBook" element={<SkillBook />} />
      <Route path="/Habits" element={<Habits />} />
      <Route path="/Manner" element={<Manner />} />
      <Route path="/Discipline" element={<Discipline />} />
      <Route path="/Honest" element={<Honest />} />

      
      {/* Other pages */}
      <Route path="/Abouts" element={<Abouts />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/feedback" element={<FeedbackAdmin />} />

      {/* Login/Register */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Manage Books */}
      <Route path="/manage-book" element={<ManageBook />} />
      <Route path="/add-chapter" element={<AddChapter />} />
      <Route path="/update-chapter" element={<UpdateChapter />} />
      <Route path="/ManageUsers" element={<ManageUsers />} />

      {/* Search Page */}
      <Route path="/book/:subject/:book" element={<BookPage />} />

    </Routes>

  </Layout>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
