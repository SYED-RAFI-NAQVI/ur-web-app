"use client";
import React, { useEffect } from "react";

function WealthServices() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/pontuslagerberg/whiteswan@latest/partner_embed.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/pontuslagerberg/whiteswan@latest/partner_embed_styles.css";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#FFFFFF" }}>
      <iframe
        src="https://app.whiteswan.io/partner_embed/ur-wealth?block=a"
        id="WhiteSwanIframe"
        style={{ width: "100vw", minWidth: "100%", minHeight: "100vh" }}
        loading="eager"
        allowFullScreen
      />
    </div>
  );
}

export default WealthServices;
