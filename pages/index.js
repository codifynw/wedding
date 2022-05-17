import React, { useRef, useEffect } from "react";
import CircleType from "circletype";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

// import Image from "next/image";
// import birdPNG from "../public/img/birds_icon.png";
// import gsap from "gsap";

export default function IndexPage() {
  const circleTop = useRef();
  const circleBottom = useRef();

  useEffect(() => {
    new CircleType(circleTop.current).radius(300);
    new CircleType(circleBottom.current).radius(300).dir(-1);
  }, []);

  return (
    <div className="main">
      <Head>
        <title>Jaclyn + Cody</title>
      </Head>

      <Header />

      <div className="slider_trans_black"></div>
      <div className="extra-black-vignette"></div>
      <div className="landing-wrap">
        <div className="landing-banner">
          <div ref={circleTop} className="landing-top altColor">
            Save The Date
          </div>
          {/* <div className="love_birds">
            <Image src={birdPNG} alt="" title="" />
          </div> */}
          <h1 className="landing amalfi">
            Jaclyn <span className="altColor amalfi">& </span> Cody
          </h1>
          <div className="landing-date">8.14.2022</div>
          <div ref={circleBottom} className="landing-bottom altColor">
            Bend, Oregon
          </div>
        </div>
      </div>
    </div>
  );
}
