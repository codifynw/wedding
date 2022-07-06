import React, { useState } from "react";
import Link from "next/link";

export default function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`${open ? "open" : ""}`}>
        <nav className={`nav-wrap ${props.customClass || ""}`}>
          <Link href="/" passHref>
            <div className="nav-link">
              <a className="bold"> HOME</a>
            </div>
          </Link>
          <Link href="/bend" passHref>
            <div className="nav-link">
              <a>BEND</a>
            </div>
          </Link>
          {/* <Link href="/rsvp" passHref>
          <div className="nav-link bold">
            <a>RSVP</a>
          </div>
        </Link> */}
          <Link href="/registry" passHref>
            <div className="nav-link">
              <a>GIFT</a>
            </div>
          </Link>
        </nav>
      </header>
      {/* <div className={`menu-toggle`} onClick={() => setOpen(!open)}>
        {open ? "CLOSE" : "MENU"}
      </div> */}
    </>
  );
}
