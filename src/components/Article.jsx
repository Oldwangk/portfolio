import React, { useEffect } from "react";
import "./Article.css";
import { Link as ScrollLink } from "react-scroll"; 
import videoFile from "../assets/article.mp4"; 

export default function Article() {

  useEffect(() => {
    document.title = "Motion Graphic Article  Likai Wang";
  }, []);

  return (
    <div className="article-wrapper">

      <nav className="top-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/article">Article</a>
      </nav>

      <div className="logo"></div>

      <div className="article-content">

        <h1>Motion Graphic Music Video </h1>

        <p className="subtitle">
          A one–minute music-driven motion graphic animation created in After Effects.
        </p>

        <ScrollLink 
          to="video-section"
          smooth={true}
          duration={600}
          className="scroll-down"
        >
          Scroll to Video
        </ScrollLink>
        <section className="section-block">
          <h2>Mission Statement</h2>
          <p>
            This project demonstrates my ability to synchronize motion graphics with music,
            communicate emotion through movement, and design polished AE visuals. 
            I created this piece to show rhythm-based animation, good timing, and design decisions.
          </p>
        </section>
        <section className="section-block">
          <h2>Intended Audience</h2>
          <p>
            This work is targeted at creative directors, video editors, motion designers, 
            and employers evaluating my animation workflow and visual storytelling ability.
          </p>
        </section>
        <section className="section-block" id="video-section">
          <h2>Project Video</h2>

          <p>Below is the full After Effects motion graphic music video:</p>

          <video 
            src={videoFile} 
            controls 
            className="video-player"
          />
        </section>
        <section className="section-block">
          <h2>Design Process</h2>
          <ul>
            <li><strong>1. Concept:</strong>Define the emotional tone and narrative direction of the project. Establish how the story should feel and determine the overall motion direction (energy level, pacing, rhythm).</li>
            <li><strong>2. Style Frames:</strong> Develop the visual language: color palette, typography selection, shape language, and layout composition. These frames act as the visual blueprint for the final animation.</li>
            <li><strong>3. Animation:</strong> Bring the design to life through motion. Sync key moments to the beat, apply proper easing for natural movement, and create smooth transitions between scenes.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
