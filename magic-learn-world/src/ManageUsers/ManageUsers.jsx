import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Css/ManageUser.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();  // ✅ useNavigate hook

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:5000/admin/users", {
        withCredentials: true,
      });
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="manage-users">
      <h2 className="manage-title">Manage Users</h2>


      <table className="manage-table">
        <thead className="manage-thead">
          <tr className="manage-tr">
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Joined At</th>
          </tr>
        </thead>
        <tbody className="manage-tbody">
          {users.map((u, i) => (
            <tr key={u._id}>
              <td data-label="No">{i + 1}</td>
              <td data-label="Name">{u.username}</td>
              <td data-label="Email">{u.email}</td>
              <td data-label="Joined At">
                {new Date(u.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        🔙 Back
      </button>
    </div>
  );
};

export default ManageUsers;
