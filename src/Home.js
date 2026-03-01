import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import logoca from "./logoca.png";

export default function Home() {
  const [rollNumber, setRollNumber] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = () => {
    setRollNumber("");
    setDob("");
    message.info("Form reset");
  };

  const handleMeritList = () => {
    message.error("Server Issue. Please Try again later");
  };

  const handleViewResults = () => {
    if (rollNumber === "676891" && dob === "1999-12-30") {
      console.log("rollNumber", rollNumber);
      console.log("dob", dob);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/result");
      }, 10000);
    } else {
      message.error("Invalid roll number or date of birth");
    }
  };

  return (
    <div>
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={logoca}
            alt="ICAI Logo"
            className="logo"
            style={{ marginRight: "20px" }} // Add space between the image and text
          />
          <div>
            <h2>The Institute of Chartered Accountants of India</h2>
            <p className="subtitle" style={{ margin: 0 }}>
              Examination Results 2024
            </p>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h3>CHECK RESULTS</h3>
          <div>
            <label>Roll Number</label>
            <input
              type="number"
              placeholder="Enter your roll number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />

            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <p>
              <strong>Final :</strong> Nov 2024
            </p>
            <p className="announcement">Old Scheme</p>
          </div>

          <div className="buttons">
            <button className="primary" onClick={handleViewResults}>
              View Results
            </button>
            <button className="secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        <div className="card">
          <h3>CHECK MERIT LIST</h3>
          <div>
            <p>
              <strong>Final :</strong> Nov 2024
            </p>
            <p className="announcement">Old Scheme</p>
          </div>

          <div className="buttons">
            <button className="primary" onClick={handleMeritList}>
              View Merit List
            </button>
          </div>
        </div>
      </main>

      <footer>
        <p>Hosted by National Informatics Centre</p>
      </footer>

      <div className="disclaimer">
        <p>
          Disclaimer: The result given is correct at the time of release of the
          result by the Institute which accepts no responsibility thereafter for
          errors or omissions caused as a result of their transmission via the
          Internet or their downloading or printing by the user. No material
          from this web site can be copied, reproduced, published, uploaded,
          posted, transmitted or distributed or dealt with in any manner, unless
          expressly authorized.
        </p>
      </div>
    </div>
  );
}
