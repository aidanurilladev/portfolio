import React from "react";
import scss from "./Welcome.module.scss";
import TextAnimation from "../animation/TextAnimation";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>
              Hello my name is <span>Aida</span>
            </h1>
            <h1>
              <TextAnimation text="FRONT-END DEVELOPER_" />
            </h1>
            <p>
              Adress <span> : Kyrgyzstan | Bishkek</span>
            </p>
            <p>
              Email <span> : aidanurillaa@gmail.com</span>
            </p>
            <p>
              I’m a front-end developer with a passion for creating visually
              appealing and user-friendly web applications. Here, you can
              explore some of my projects, learn more about my background, and
              get in touch with me"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
