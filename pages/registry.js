import React, { useEffect } from "react";
import Header from "../components/Header";

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
    a.parentNode.removeChild(s);
  };

  useEffect(() => {
    initZola(document, "script", "zola-widget-js");
  }, []);

  return (
    <div className="registry">
      <Header customClass="relative" />

      <div className="registry-psa">
        <p className="registry-psa-text">
          Your presence is gift enough, but if you’re feeling particularly
          generous, in lieu of a registry, we request donations towards our
          Honeymoon or Home Renovation Fund.
        </p>
      </div>
      <a
        className="zola-registry-embed"
        href={"www.zola.com/registry/codyandjaclyn2022"}
        data-registry-key={"codyandjaclyn2022"}
      >
        Our Zola Wedding Registry
      </a>
      <div className="footer"></div>
    </div>
  );
}
