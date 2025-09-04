import React, { useState } from "react";
import "./ConfirmationForm.css";

const ConfirmationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("da");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mulțumim, ${name}! Răspunsul tău a fost înregistrat.`);
    // Aici poți adăuga logica de trimitere a datelor către un server
    setName("");
    setAttendance("da");
    setMessage("");
  };

  return (
    <form className="confirmation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Numele tău complet:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Vei fi prezent?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="da"
              checked={attendance === "da"}
              onChange={(e) => setAttendance(e.target.value)}
            />
            Da, voi fi prezent
          </label>
          <label>
            <input
              type="radio"
              value="nu"
              checked={attendance === "nu"}
              onChange={(e) => setAttendance(e.target.value)}
            />
            Nu, din păcate nu pot ajunge
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Un mesaj pentru noi (opțional):</label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Trimite confirmarea
      </button>
    </form>
  );
};

export default ConfirmationForm;
