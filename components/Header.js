import React from "react";
import Link from "next/link";

export default function Header(props) {
  return (
    <div className={`nav-wrap ${props.customClass}`}>
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
  );
}
