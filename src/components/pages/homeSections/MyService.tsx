import React from "react";
import scss from "./MyService.module.scss";
import TextAnimation from "../animation/TextAnimation";

const MyService = () => {
  return (
    <div className={scss.MyService}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>MY SERVICE</h2>
            <h1>
              <TextAnimation text="Work Experience in this field." />
            </h1>
            <p>
              Responsible for creating software programs that perform specific
              tasks, such as managing
            </p>
          </div>
          <div className={scss.work}>
            <div className={scss.work_blocks}>
              <div className={scss.work_box}>
                <div className="div">
                  <h5>Premium</h5>
                  <h3>ADAPTIVE</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam perferendis asperiores dolores cupiditate
                  </p>
                </div>
              </div>
              <div className={scss.work_box}>
                <div className="div">
                  <h5>Premium</h5>
                  <h3>ADAPTIVE</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam perferendis asperiores dolores cupiditate
                  </p>
                </div>
              </div>
              <div className={scss.work_box}>
                <div className="div">
                  <h5>Premium</h5>
                  <h3>ADAPTIVE</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam perferendis asperiores dolores cupiditate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
