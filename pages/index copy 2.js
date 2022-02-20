import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="main">
      <div className="landing-wrap">
        <h1 className="landing amalfi">Jaclyn + Cody</h1>
        <div className="landing-date">Bend, Oregon</div>
        <div className="landing-date">8.14.2022</div>
      </div>
      <div className="nav-wrap">
        <Link href="/rsvp">
          <a className="nav-link">RSVP</a>  
        </Link>
        <Link href="/photos">
          <a className="nav-link">PHOTOS</a>
        </Link>
        <Link href="/registry">
          <a className="nav-link">REGISTRY</a>
        </Link>
        <Link href="/accommodations">
          <a className="nav-link">ACCOMMODATIONS</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">ABOUT</a>
        </Link>
      </div>
      <section className="travel bg-mauve">
        <div className="travel-wrap">
          <h2 className="travel-heading amalfi">Travel + </h2>
          <p>

          </p>
        </div>
      </section>
    </div>
  )
}
