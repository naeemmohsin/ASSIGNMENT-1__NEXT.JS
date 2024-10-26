import React from 'react';
import Link from "next/link";

const Service = () => (
  <div>
    <h2>Our Courses</h2>
    <p>Launch your new career with a Professional Certifications</p>
    <p>Professional Certificates offer flexible, online training designed to get you job-ready for high-growth fields.</p>
    <h2> Take the first step toward your new career</h2>
    <p> Get professional-level training and earn a credential recognized by leading companies.</p>

      <li> <Link href="/Service/app-development">App Development</Link> </li>
      <li> <Link href="/Service/web-development">Web Development</Link> </li>
  </div>
);

export default Service;