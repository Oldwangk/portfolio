import React, { useEffect } from "react";
import "./About.css";
import myPhoto from "../assets/profile.jpg"; 
import resumePDF from "../assets/resume.pdf"; 

export default function About() {
  useEffect(() => {
    document.title = "About Likai Wang";
  }, []);

  return (
    <div className="about-wrapper">
      <nav className="top-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/article">Article</a>
      </nav>

      <div className="about-card">

      <div className="logo"></div>

        <div className="about-photo">
          <img src={myPhoto} alt="Likai Wang" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>

          <p>
            Hi, I am <strong>Likai Wang</strong> — a video editing and motion graphics student 
            who also knows web design and front-end development.
          </p>

          <p>
            I aim to become a <strong>Video Editor</strong> and 
            <strong> Motion Graphics / VFX Artist</strong>, blending design,
            animation, and cinematic storytelling into every project I create.
          </p>

          <h2>Skills</h2>
          <ul>
            <li><strong>Video & Motion:</strong> After Effects, Premiere Pro, animation, compositing</li>
            <li><strong>Design Tools:</strong> Figma, Photoshop, Illustrator</li>
            <li><strong>Web Dev:</strong> HTML, CSS, JavaScript, React</li>
            <li><strong>Other:</strong> creativity, teamwork, storytelling</li>
          </ul>

          <h2>Experience</h2>
          <p>
            As a <strong>Dungeon Master</strong>, I led live storytelling sessions,
            improving my pacing, engagement, and audience understanding — skills
            that directly support my motion design and editing work.
          </p>

          <h2>Contact</h2>
          <p>Email: <a href="mailto:kyle20001006@gmail.com">kyle20001006@gmail.com</a></p>
          
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/likai-wang-56b131348/"target="_blank">
              My linkedIn
            </a>
          </p>

          <p>Location: Vancouver, BC</p>
          <div className="resume-button-container" id="resume-section">
            <a href={resumePDF}  target="_blank"  rel="noopener noreferrer" className="resume-button">
              View Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
