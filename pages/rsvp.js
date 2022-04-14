import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function RSVP() {
  return (
    <div className="RSVP">
      <div className="nav-wrap relative">
        {/* <Link href="/rsvp">
          <a className="nav-link">RSVP</a>  
        </Link> */}
        {/* <Link href="/photos">
          <a className="nav-link">PHOTOS</a>
        </Link>
        <Link href="/registry">
          <a className="nav-link">REGISTRY</a>
        </Link> */}
        <Link href="/">
          <div className="nav-link">
            <a className="bold"> HOME</a>
          </div>
        </Link>
        {/* <Link href="/details">
          <div className="nav-link">
            <a>Details</a>
          </div>
        </Link>
        <Link href="/accomodations">
          <div className="nav-link">
            <a>Accomodations</a>
          </div>
        </Link> */}
        <Link href="/rsvp">
          <div className="nav-link">
            <a>RSVP</a>
          </div>
        </Link>
      </div>
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
