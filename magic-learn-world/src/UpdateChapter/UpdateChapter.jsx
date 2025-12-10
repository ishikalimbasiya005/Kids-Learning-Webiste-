// UpdateChapter.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../Css/Addchapter.css"; // same styling as AddChapter

const UpdateChapter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const chapterData = location.state?.chapter; // chapter object from ManageChapters
  const subjectsList = location.state?.subjects; // subjects array from ManageChapters

  const [subjects, setSubjects] = useState(subjectsList || []);
  const [selectedSubject, setSelectedSubject] = useState(chapterData?.subjectId || "");
  const [chapterName, setChapterName] = useState(chapterData?.name || "");
  const [chapterLink, setChapterLink] = useState(chapterData?.link || "");
  const [chapterImg, setChapterImg] = useState(chapterData?.img || "");
  const [chapterDesc, setChapterDesc] = useState(chapterData?.description || "");
  const [chapterButton, setChapterButton] = useState(chapterData?.buttonName || "");

  const chapterId = chapterData?._id;

  useEffect(() => {
    // if subjects not passed, fetch from backend
    if (!subjects.length) {
      axios.get("http://localhost:5000/books")
        .then(res => setSubjects(res.data))
        .catch(err => console.error(err));
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!chapterName || !chapterLink || !selectedSubject) {
      return alert("⚠️ Fill all required fields!");
    }

    try {
      await axios.put(`http://localhost:5000/books/${selectedSubject}/chapter/${chapterId}`, {
        name: chapterName,
        link: chapterLink,
        img: chapterImg,
        description: chapterDesc,
        buttonName: chapterButton,
        subjectId: selectedSubject,
      });

      alert("Chapter updated successfully!");
      navigate("/manage-book"); // back to manage page
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error updating chapter");
    }
  };

  return (
    <div className="add-chapter-container">
      <h2>Update Chapter</h2>
      <form onSubmit={handleUpdate}>
        <label>Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          required
        >
          <option value="" disabled>--Select Subject--</option>
          {subjects.map(subj => (
            <option key={subj._id} value={subj._id}>{subj.subject}</option>
          ))}
        </select>

        <label>Chapter Name:</label>
        <input
          type="text"
          value={chapterName}
          onChange={(e) => setChapterName(e.target.value)}
          required
        />

        <label>Chapter URL:</label>
        <input
          type="text"
          value={chapterLink}
          onChange={(e) => setChapterLink(e.target.value)}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={chapterImg}
          onChange={(e) => setChapterImg(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={chapterDesc}
          onChange={(e) => setChapterDesc(e.target.value)}
        />

        <label>Button Name:</label>
        <input
          type="text"
          value={chapterButton}
          onChange={(e) => setChapterButton(e.target.value)}
        />

        <button type="submit">Update Chapter</button>
        <button type="button" onClick={() => navigate("/manage-book")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateChapter;
