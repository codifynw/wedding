import React, { useRef, useEffect } from "react";
import CircleType from "circletype";

import Image from "next/image";
import birdPNG from "../public/img/birds_icon.png";

import gsap from "gsap";
import Link from "next/link";

export default function IndexPage() {
  const circleTop = useRef();
  const circleBottom = useRef();

  useEffect(() => {
    new CircleType(circleTop.current).radius(300);
    new CircleType(circleBottom.current).radius(300).dir(-1);
  }, []);

  return (
    <div className="main">
      <div className="slider_trans_black"></div>
      <div className="landing-wrap">
        <div className="landing-banner">
          <div ref={circleTop} className="landing-top altColor">
            Save The Date
          </div>
          <div className="love_birds">
            <Image src={birdPNG} alt="" title="" />
          </div>
          <h1 className="landing amalfi">
            Jaclyn <span className="altColor amalfi">& </span> Cody
          </h1>
          <div className="landing-date">8.14.2022</div>
          <div ref={circleBottom} className="landing-bottom altColor">
            Bend, Oregon
          </div>
        </div>
      </div>
      <div className="nav-wrap">
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
      <section className="travel bg-mauve hide">
        <div className="travel-wrap">
          <h2 className="travel-heading amalfi">Travel + </h2>
          <p></p>
        </div>
      </section>
    </div>
  );
}
