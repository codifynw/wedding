import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function RSVP() {
  return (
    <div className="RSVP">
      <div className="nav-wrap relative">
        <Link href="/">
          <div className="nav-link">
            <a className="bold"> HOME</a>
          </div>
        </Link>
        <Link href="/rsvp">
          <div className="nav-link bold">
            <a>RSVP</a>
          </div>
        </Link>
        <Link href="/registry">
          <div className="nav-link">
            <a>GIFT</a>
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
