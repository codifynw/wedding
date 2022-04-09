import React, { useRef, useEffect, useState } from "react";

export default function RSVP() {
  const [name, setName] = React.useState("");
  const [attend, setAttend] = React.useState("");
  const [guests, setGuests] = React.useState("");
  const [note, setNote] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name, attend, guests, note
    }

    const reponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const content = await reponse.json();

    setName("");
    setAttend("");
    setGuests("");
    setNote("");
  };

  return (
    <div className="RSVP">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
          <label htmlFor="attend">Can You Attend?</label>
          <input
            name="attend"
            type="text"
            onChange={(e) => setAttend(e.target.value)}
            className="form-control"
            id="attend"
            placeholder="Enter name"
          />
          <label htmlFor="guests">Number of Guests</label>
          <input
            name="guests"
            type="text"
            onChange={(e) => setGuests(e.target.value)}
            className="form-control"
            id="guests"
            placeholder="Enter name"
          />

          <label htmlFor="note">Anything to Note?</label>
          <textarea
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="form-control"
            id="note"
            placeholder="Any Notes?"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
