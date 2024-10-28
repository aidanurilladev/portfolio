"use client";
import React, { useEffect, useRef } from "react";
import style from "./Experience.module.scss";
import TextAnimation from "../animation/TextAnimation";

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll(
      `.${style["timeline-item"]}`
    );

    if (timelineItems) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add(style.visible);
        }, index * 500);
      });
    }
  }, []);
  return (
    <section id="experience" className={style.Experience}>
      <div className="container">
        <div className={style.content}>
          <div className={style.text}>
            <h2>EXPERIENCE</h2>
            <h1>
              {" "}
              <TextAnimation text="Work Experience in this field." />
            </h1>
          </div>

          <div ref={timelineRef} className={style.timeline}>
            <div className={style["timeline-item"]}>
              <h3>2001 - 2007</h3>
              <p>Code Academy & Program</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio sequi autem voluptates aliquam facere consequatur, doloribus error quaerat voluptatem laudantium aut earum blanditiis cum suscipit pariatur eaque in nesciunt.
              Ut in dignissimos reprehenderit voluptatum molestiae vero ipsa distinctio! Cum molestiae, laborum itaque nemo consequatur quae eligendi facilis optio, est reprehenderit fuga provident quam repellat distinctio iure totam exercitationem consectetur.
              Ipsum eos quisquam at tempora, molestiae facilis itaque similique dolorum iste recusandae consequuntur, aliquid beatae tempore. Culpa accusantium aperiam ipsam amet fugiat magnam dolorum optio alias! Veritatis molestiae quo provident.
              Animi impedit deserunt, tenetur a accusantium aut ut et explicabo recusandae quis consectetur, ab officiis officia, quidem quae sit aperiam? Nostrum, cumque quod tenetur vitae quisquam porro at. Beatae, officiis?
              Magni nemo quis voluptate, impedit excepturi similique adipisci non modi mollitia ab voluptas blanditiis reiciendis alias eaque esse quae sapiente ullam! Quas, eaque eveniet in ipsam nostrum placeat maiores. Ad.</p>
            </div>
            <div className={style["timeline-item"]}>
              <h3>2007 - 2010</h3>
              <p>Net. Programming Course</p>
            </div>
            <div className={style["timeline-item"]}>
              <h3>2010 - 2013</h3>
              <p>Programming Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
