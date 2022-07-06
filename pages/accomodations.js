import React, { useRef, useEffect } from "react";
import Link from "next/link";

import Head from "next/head";

export default function Accomodations() {
  return (
    <div className="accomodation">
      <Head>
        <title>Jaclyn + Cody</title>
      </Head>

      <nav className="nav-wrap">
        <Link href="/" passHref>
          <div className="nav-link">
            <a> HOME</a>
          </div>
        </Link>
        <Link href="/rsvp" passHref>
          <div className="nav-link">
            <a>RSVP</a>
          </div>
        </Link>
        <Link href="/rsvp" passHref>
          <div className="nav-link">
            <a>GIFT</a>
          </div>
        </Link>
        {/* <Link href="/accomodations" passHref>
          <div className="nav-link">
            <a className="altColor bold">STAY</a>
          </div>
        </Link> */}
      </nav>
    </div>
  );
}
