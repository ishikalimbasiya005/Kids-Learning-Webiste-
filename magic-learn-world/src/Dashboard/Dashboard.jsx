import React, { useEffect, useState } from "react";
import '../Css/Dashboard.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

     useEffect(() => {
            window.scrollTo(0, 0);
            }, []);
            
    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await axios.get("http://localhost:5000/admin/check", { withCredentials: true });
                if (!res.data.isAdmin) {
                    navigate("/Admin"); 
                } else {
                    setLoading(false); 
                }
            } catch (err) {
                navigate("/Admin");
            }
        };
        checkAdmin();
    }, [navigate]);

    const handleLogout = async () => {
        await axios.post("http://localhost:5000/admin/logout", {}, { withCredentials: true });
        navigate("/");
    };

    if (loading) return <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h3>;

    return(
        <>
            <div className="dashboard-body">
            <div className="dashboard-banner">
                <img src="assets/dashboard-image-removebg-preview.png" alt="dashboard-banner" className="dashboard-img" />
            </div>

            <div className="logout-container">
                    <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
            </div>

            <div className="dashboard-outer">
                <div className="container">
                    <div className="dshboard-inner">
                        <div className="dashboard-block">

                            <div className="dashboard-card">
                                <div className="dashboard-img">
                                    <img src="assets/manage-book.jpg" alt="manage-book-img" className="dashboard-card-img"/>
                                </div>
                                <div className="dashboard-text">
                                    <Link to="/manage-book" className="dashboard-names">📚 Manage Books</Link>
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="dashboard-img">
                                    <img src="assets/contact-dashboard.jpg" alt="feedback-img" className="dashboard-card-img"/>
                                </div>
                                <div className="dashboard-text">
                                    <Link to="/dashboard/feedback" className="dashboard-names">📨 Feedbacks</Link>
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="dashboard-img">
                                    <img src="assets/user-login.jpg" alt="feedback-img" className="dashboard-card-img"/>
                                </div>
                                <div className="dashboard-text">
                                    <Link to="/ManageUsers" className="dashboard-names">👤 Manage Users</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Dashboard;
