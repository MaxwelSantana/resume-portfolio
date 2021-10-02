import { useEffect } from "react";
import "./App.css";
import lottie from "lottie-web";
import workingManAnimation from "./lottie/working-man.json";

//https://developer-portfolio-1hanzla100.vercel.app/

function App() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#working-man"),
      animationData: workingManAnimation,
    });
  }, []);
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <a href="#home" className="nav__brand">
            <h2>Maxwel Santana</h2>
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#about">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#home">
                  Works
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#home">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero__background"></div>
          <div id="working-man"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
