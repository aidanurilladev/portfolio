"use client";
import React from "react";
import style from "./Contact.module.scss";
import TextAnimation from "../animation/TextAnimation";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IInput {
  name: string;
  email: string;
  phoneNumber: number;
  message: string;
}
const Contact = () => {
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
  const { register, handleSubmit, reset } = useForm<IInput>({
    mode: "onChange",
  });

  const messageDesign = (data: IInput) => {
    let messageTG = `name:<b>${data.name}</b>\n`;
    messageTG += `email:<b>${data.email}</b>\n`;
    messageTG += `phoneNumber:<b>${data.phoneNumber}</b>\n`;
    messageTG += `message:<b>${data.message}</b>\n`;
    return messageTG;
  };
  const clickMessage: SubmitHandler<IInput> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageDesign(data),
    });
    reset();
  };



  return (
    <section id="contact" className={style.Contact}>
      <marquee className={style.marquee}>
        -LET'S TALK -LET'S TALK -LET'S TALK -LET'S TALK
      </marquee>

      <div className="container">
        <div className={style.content}>
          <div className={style.title}>
            <h2>GET IN TOUCH</h2>
            <h1>
              <TextAnimation text="Have a project? We would love to help." />
            </h1>
            <p>
              We’re happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </p>
          </div>
          <div className={style.text}>
            <form onSubmit={handleSubmit(clickMessage)} className={style.block}>
              <input
                type="text"
                placeholder=" Name"
                {...register("name", { required: true })}
              />
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", { required: true })}
              />
              <input
                type="text"
                placeholder="Message Here"
                {...register("message", { required: true })}
              />
              <button type="submit">SEND YOUR MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
