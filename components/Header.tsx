import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Download</Link>
            </li>

            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
