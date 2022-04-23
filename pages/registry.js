import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function Registry() {
  const initZola = function (e, t, n) {
    var s,
      a = e.getElementsByTagName(t)[0];
    e.getElementById(n) ||
      ((s = e.createElement(t)),
      (s.id = n),
      (s.async = !0),
      (s.src = "https://widget.zola.com/js/widget.js"),
      a.parentNode.insertBefore(s, a));
  };

  useEffect(() => {
    initZola(document, "script", "zola-widget-js");
  }, []);

  return (
    <div className="registry">
      <nav className="nav-wrap">
        <Link href="/">
          <div className="nav-link">
            <a className="bold"> HOME</a>
          </div>
        </Link>
        <Link href="/rsvp">
          <div className="nav-link">
            <a>RSVP</a>
          </div>
        </Link>

        <Link href="/registry">
          <div className="nav-link">
            <a>GIFT</a>
          </div>
        </Link>
      </nav>

      <div className="registry-psa">
        <p className="registry-psa-text">
          Your presence is gift enough, but if you’re feeling particularly
          generous, these are a few things we’d love to have as newlyweds.
        </p>
      </div>
      <a
        className="zola-registry-embed"
        href={"www.zola.com/registry/codyandjaclyn2022"}
        data-registry-key={"codyandjaclyn2022"}
      >
        Our Zola Wedding Registry
      </a>
    </div>
  );
}
