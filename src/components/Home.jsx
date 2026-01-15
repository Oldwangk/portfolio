import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import videoFile from "../assets/article.mp4";

export default function Home() {
  useEffect(() => {
    document.title = "Likai Wang Portfolio";
  }, []);

  return (
    <div className="home-wrapper">
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/article">Article</Link>
      </nav>

      <div className="logo"></div>

      <section className="hero-section">
        <h1 className="home-title">Likai Wang</h1>

        <p className="home-intro">
          Motion Graphics · UI/UX · Creative Developer
          <br />
          Welcome to my portfolio website.
        </p>

        <ScrollLink
          to="projects-section"
          smooth={true}
          duration={600}
          className="scroll-indicator"
        >
          Scroll Down
        </ScrollLink>
      </section>

      <section className="projects-section" id="projects-section">
        <div className="project-video-card">
          <h2>Motion Graphic Music Video</h2>
          <p>This is a preview of my After Effects project.</p>

          <video 
            src={videoFile}
            className="home-video-preview"
            autoPlay
            loop
            muted
            playsInline
          />

          <Link to="/article" className="project-button">
            View Full Article →
          </Link>
        </div>
      </section>
    </div>
  );
}
