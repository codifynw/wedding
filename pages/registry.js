import React, { useRef, useEffect, useState } from "react";

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
