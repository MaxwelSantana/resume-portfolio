import { useEffect, useRef } from "react";
import "./App.css";
import lottie from "lottie-web";
import workingManAnimation from "./lottie/working-man.json";
import Header from "./components/Header";

//https://developer-portfolio-1hanzla100.vercel.app/

function App() {
  const workingMan = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: workingMan.current,
      animationData: workingManAnimation,
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <div className="hero__background"></div>
          <div className="hero__container">
            <div className="hero__me">
              <h1>Hi all, I'm Maxwel</h1>
              <p>
                passionate Full Stack Web Developer and Mobile App Developer
                having an experience of building Web applications with
                JavaScript / Reactjs / Nodejs / Python / Django / Flask and some
                other cool libraries and frameworks and Cross Platform Mobile
                Apps With Flutter.
              </p>
            </div>
            <div ref={workingMan} id="working-man"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
