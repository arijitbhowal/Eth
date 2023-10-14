// src/AgeCalculator.js
import React, { useState } from "react";
import "./AgeCalculator.css"; // Import your CSS file

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="AgeCalculator">
      <h1>Age Calculator</h1>
      <div>
        <label htmlFor="birthdate">Enter your date of birth:</label>
      </div>
      <div>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old.</p>}
    </div>
  );
}

export default AgeCalculator;
