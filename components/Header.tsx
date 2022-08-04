import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="Left">
        <button className="share">Share</button>
      </div>
      <div className="Right">
        <div className="logo">
          <Image src="/assets/logo.jpg" alt="me" width="120" height="100" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Download</a>
            </li>

            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
