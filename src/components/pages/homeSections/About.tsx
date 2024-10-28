import React from "react";
import scss from "./About.module.scss";
import TextAnimation from "../animation/TextAnimation";

const About = () => {
  const languages = [
    {
      name: "HTML - CSS",
      percent: 100,
    },

    {
      name: "JAVASCRIPT",
      percent: 95,
    },
    {
      name: "TYPESCRIPT",
      percent: 45,
    },
    {
      name: "REACT",
      percent: 65,
    },
    {
      name: "NEXT.JS",
      percent: 50,
    },
  ];
  const getCircleLength = (radius : any) => 2 * Math.PI * radius;

  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <div className={scss.about_title}>
              <div className={scss.title}>
                <h2>ABOUT ME</h2>
                <h1>
                  {" "}
                  <TextAnimation text="Let's work together." />
                </h1>
                <div className={scss.description}>
                  <p>
                    I enjoy solving complex problems and continuously learning
                    new tools and frameworks to stay updated in the
                    ever-evolving field of web development. Let's collaborate
                    and build something amazing together!
                  </p>
                </div>
              </div>
              <div className={scss.about_text}>
                <p>
                  As a <span className={scss.highlight}>passionate</span>{" "}
                  front-end developer, I have{" "}
                  <span className={scss.highlight}>expertise</span> in
                  <span className={scss.highlight}> JavaScript</span>,{" "}
                  <span className={scss.highlight}>TypeScript</span>,{" "}
                  <span className={scss.highlight}>React</span>, and{" "}
                  <span className={scss.highlight}>Next.js</span>. With a{" "}
                  <span className={scss.highlight}>strong foundation</span> in
                  building <span className={scss.highlight}>dynamic</span> and{" "}
                  <span className={scss.highlight}>responsive</span> web
                  applications using{" "}
                  <span className={scss.highlight}>modern technologies</span>{" "}
                  and <span className={scss.highlight}>best practices</span>, I
                  have <span className={scss.highlight}>honed</span> my skills
                  over the years to deliver{" "}
                  <span className={scss.highlight}>high-quality projects</span>.
                </p>
              </div>
            </div>
            <div className={scss.line}>
              {languages.map((el, index) => {
                const radius = 70;
                const circleLength = getCircleLength(radius);
                const strokeDashoffset =
                  circleLength - (circleLength * el.percent) / 100;

                return (
                  <div className={scss.center} key={index}>
                    <div className={scss.progress}>
                      <svg
                        className={scss.progress_bar}
                        width="200"
                        height="200"
                      >
                        <circle
                          className={scss.progress_circle}
                          cx="100"
                          cy="100"
                          r={radius}
                        ></circle>
                        <circle
                          className={`${scss.progress_circle} ${scss.filled}`}
                          cx="100"
                          cy="100"
                          r={radius}
                          style={{
                            strokeDasharray: circleLength,
                            strokeDashoffset: strokeDashoffset,
                          }}
                        ></circle>
                      </svg>
                      <div className={scss.text}>
                        {el.percent}%<span>{el.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className={scss.grafic}>
              <div className={scss.bowl}>
                <div className={scss.liquid}></div>
              </div>
              <div className={scss.bowl}>
                <div className={scss.liquid}></div>
              </div>
              <div className={scss.bowl}>
                <div className={scss.liquid}></div>
              </div>{" "}
              <div className={scss.bowl}>
                <div className={scss.liquid}>
                  <h2>html</h2>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
