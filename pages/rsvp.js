import React from "react";
import Header from "../components/Header";

export default function RSVP() {
  return (
    <div className="RSVP">
      <Header customClass="relative" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfcsv7TNJ0gwj06shAG9d9MWUpmF8oGYz6SD6bGifIvclpBUw/viewform?embedded=true"
        width="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
