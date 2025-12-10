import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../Css/Addchapter.css";

const AddChapter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [chapterLink, setChapterLink] = useState("");
  const [chapterImg, setChapterImg] = useState("");
  const [chapterDesc, setChapterDesc] = useState("");
  const [chapterButton, setChapterButton] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setSubjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    if (location.state?.subjectId) setSelectedSubject(location.state.subjectId);
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSubject || !chapterName || !chapterLink) {
      return alert("⚠️ Fill all required fields!");
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/books/${selectedSubject}/addChapter`,
        {
          name: chapterName,
          link: chapterLink,
          img: chapterImg,
          description: chapterDesc,
          buttonName: chapterButton,
        }
      );
      alert(res.data.message || "Chapter added successfully!");
      navigate(chapterLink.startsWith("/") ? chapterLink : `/${chapterLink}`);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || " Error adding chapter");
    }
  };

  return (
    <div className="add-chapter-container">
      <h2>Add New Chapter</h2>
      <form onSubmit={handleSubmit}>
        <label>Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          required
        >
          <option value="" disabled>--Select Subject--</option>
          {subjects.map((subj) => (
            <option key={subj._id} value={subj._id}>
              {subj.subject}
            </option>
          ))}
        </select>

        <label>Chapter Name:</label>
        <input
          type="text"
          placeholder="e.g., Verb"
          value={chapterName}
          onChange={(e) => setChapterName(e.target.value)}
          required
        />

        <label>Chapter URL:</label>
        <input
          type="text"
          placeholder="/Verb"
          value={chapterLink}
          onChange={(e) => setChapterLink(e.target.value)}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          placeholder="Enter image URL"
          value={chapterImg}
          onChange={(e) => setChapterImg(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          placeholder="Enter description"
          value={chapterDesc}
          onChange={(e) => setChapterDesc(e.target.value)}
        />

        <label>Button Name:</label>
        <input
          type="text"
          placeholder="Open Chapter"
          value={chapterButton}
          onChange={(e) => setChapterButton(e.target.value)}
        />

        <button type="submit">Add Chapter</button>
      </form>

      {/* 🔹 Back Button */}
      <div>
        <button
          onClick={() => navigate("/manage-book")}
          className="back-button"
        >
          Back to Manage Books
        </button>
      </div>
    </div>
  );
};

export default AddChapter;
