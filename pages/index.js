import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="main">
      <div className="landing-wrap">
        <h1 className="landing amalfi">Jaclyn + Cody</h1>
        <div className="landing-date">Bend, Oregon - 8.14.2022</div>
        <div className="landing-bottom">Details Coming Soon!</div>
      </div>
      <div className="nav-wrap hide">
        {/* <Link href="/rsvp">
          <a className="nav-link">RSVP</a>  
        </Link> */}
        {/* <Link href="/photos">
          <a className="nav-link">PHOTOS</a>
        </Link>
        <Link href="/registry">
          <a className="nav-link">REGISTRY</a>
        </Link> */}
        <Link href="/details">
          <a className="nav-link">Details</a>
        </Link>
        <Link href="/accomodations">
          <a className="nav-link">Accomodations</a>
        </Link>
        <Link href="/rsvp">
          <a className="nav-link">RSVP</a>
        </Link>
      </div>
      <section className="travel bg-mauve hide">
        <div className="travel-wrap">
          <h2 className="travel-heading amalfi">Travel + </h2>
          <p>

          </p>
        </div>
      </section>
    </div>
  )
}
