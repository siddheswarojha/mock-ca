import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "./Result.css";
import logoca from "./logoca.png";
import { message } from "antd";

const Result = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the provided path
  };

  const handleLogout = () => {
    message.success("Logout Success");
    handleNavigation("/");
  };

  return (
    <div className="result-container">
      <header className="header">
        <img src={logoca} alt="ICAI Logo" className="logo" />
        <div className="header-content">
          <h1 className="header-title">
            The Institute of Chartered Accountants of India
          </h1>
          <p className="header-subtitle">Examination Results, November 2025</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="main-content">
        <h2 className="main-title">Final Examination Results, November 2025</h2>

        <div className="result-card">
          <div className="result-row">
            <div className="result-label">Roll Number</div>
            <div className="result-label">646719</div>
          </div>
          <div className="result-row">
            <div className="result-label1">Name</div>
            <div className="result-label1">Swapna Singh</div>
          </div>
        </div>

        <h3 className="group-title">Group I (New Scheme)</h3>

        <div className="result-card">
          <div className="result-row">
            <div className="result-label1">Financial Reporting</div>
            <div className="result-label1">042</div>
          </div>
          <div className="result-row">
            <div className="result-label">Advanced Financial Management</div>
            <div className="result-label">054</div>
          </div>
          <div className="result-row">
            <div className="result-label1">
              Advanced Auditing, Assurance and Professional Ethics
            </div>
            <div className="result-label1">056</div>
          </div>
          {/* <div className="result-row">
            <div className="result-label">Strategic Management</div>
            <div className="result-label">035</div>
          </div> */}
          <div className="result-row">
            <div className="result-label">Total</div>
            <div className="result-label">152</div>
          </div>
          <div className="result-row">
            <div className="result-label1">Result</div>
            <div className="result-label1 failed">PASS</div>
          </div>
          <div className="result-row">
            <div className="result-label">Grand Total</div>
            <div className="result-label">152</div>
          </div>
        </div>

        <div className="notes">
          <p className="note-text">
            'E' Indicates Marks obtained in an earlier attempt
          </p>
          <p className="note-text">
            '*' Indicates passed under CA Regulations, 1988.
          </p>
          <p className="note-text">
            '50E' Indicates permanent exemption in paper(s) with the condition
            of minimum 50% marks in each of the remaining paper(s).
          </p>
        </div>

        <hr className="divider" />

        <div className="links">
          <button onClick={() => handleNavigation("/")} className="link">
            Check Another Roll Number
          </button>
          <span>|</span>
          <button onClick={() => handleNavigation("/")} className="link">
            Check Merit
          </button>
          <span>|</span>
          <button onClick={() => handleNavigation("/")} className="link">
            Home
          </button>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Hosted by National Informatics Centre</p>
        <hr className="footer-divider" />
        <p className="footer-note">
          Disclaimer: The result given is correct at the time of release of the
          result by the Institute, which accepts no responsibility thereafter
          for errors or omissions caused as a result of their transmission via
          the Internet or their downloading or printing by the user. No material
          from this website can be copied, reproduced, published, uploaded,
          posted, transmitted, or distributed or dealt with in any manner unless
          expressly authorized. Users are not permitted to change, modify or
          prepare derivative works from the content. For any clarifications /
          confirmation please address your enquiries to Joint Secretary
          (Examinations), The Institute of Chartered Accountants of India, "ICAI
          BHAWAN", Post Box No. 7112, Indraprastha Marg, New Delhi - 110 002.
        </p>
      </footer>
    </div>
  );
};

export default Result;
