import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import workingManAnimation from "../lottie/working-man.json";
import "./Hero.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

function Hero() {
  const workingMan = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: workingMan.current,
      animationData: workingManAnimation,
    });
  }, []);
  return (
    <section className="hero">
      <div className="hero__background"></div>
      <div className="hero__container container">
        <div className="hero__me">
          <h1>Hi all, I'm Maxwel</h1>
          <p>
            passionate Full Stack Web Developer and Mobile App Developer having
            an experience of building Web applications with JavaScript / Reactjs
            / Nodejs / Python / Django / Flask and some other cool libraries and
            frameworks and Cross Platform Mobile Apps With Flutter.
          </p>
          <ul className="hero__social-list">
            <li>
              <a
                className="hero__social-btn hero__twitter-btn"
                href="https://twitter.com/maxwell_sant"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a className="hero__social-btn hero__twitter-btn" href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a className="hero__social-btn hero__twitter-btn" href="#">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
        <div ref={workingMan} id="working-man"></div>
      </div>
    </section>
  );
}

export default Hero;
