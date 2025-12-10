import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Managebook.css";

const ManageChapters = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/books");
      setSubjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  const handleDeleteChapter = async (subjectId, chapterId) => {
    const confirmDelete = window.confirm(
      "Are you sure to delete this chapter?"
    );
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(
        `http://localhost:5000/books/${subjectId}/chapter/${chapterId}`
      );

      console.log(res.data.message); // "Chapter deleted successfully!"

      setSubjects((prevSubjects) =>
        prevSubjects.map((sub) =>
          sub._id === subjectId
            ? {
                ...sub,
                chapters: sub.chapters.filter((c) => c._id !== chapterId),
              }
            : sub
        )
      );
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error deleting chapter!");
    }
  };


  const handleEditChapter = (chapter, subjects) => {
    navigate("/update-chapter", { state: { chapter, subjects } });
  };

  const handleAddChapter = (subjectId) => {
    navigate("/add-chapter", { state: { subjectId } });
  };

  return (
    <div className="managebook">
      <img
        src="assets/manage-banner.jpg"
        alt="manage-banner"
        className="manage-banner-img"
      />

      {subjects.map((sub) => (
  <div key={sub._id} className="managebook-table">
    <h3>{sub.subject}</h3>
    <table border="1">
      <thead>
        <tr>
          <th>Chapter Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sub.chapters?.map((chapter) => (
          <tr key={chapter._id}>
            <td>{chapter.name}</td>
            <td>
              <button onClick={() => handleEditChapter(chapter, subjects)}>
                Update Chapter
              </button>
              <button
  onClick={() => handleDeleteChapter(sub._id, chapter._id.toString())}
>
  Delete Chapter
</button>

            </td>
          </tr>
        ))}
        <tr className="add-chapter-row">
          <td colSpan="2" style={{ textAlign: "center" }}>
            <button
              onClick={() => handleAddChapter(sub._id)}
              className="add-chapter-button"
            >
              Add Chapter +
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
))}

      <button className="back-button" onClick={() => navigate("/dashboard")}>
        Back
      </button>
    </div>
  );
};

export default ManageChapters;
