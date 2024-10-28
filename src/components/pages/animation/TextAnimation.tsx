"use client";
import React, { useEffect, useState } from "react";
import styles from "./TextAnimation.module.scss";

interface TextAnimationProps {
  text: string;
  interval?: number; // milisaniye cinsinden tekrar aralığı, varsayılan olarak 3 dakika
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  interval = 5000,
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {




      setKey((prevKey) => prevKey + 1);


   }, interval);

    return () => clearInterval(intervalId);

  }, [interval]);



  return (
    <div className={styles.textContainer} key={key}>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className={styles.space} />
        ) : (
          <span
            key={index}
            className={styles.letter}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        )
      )}
    </div>
  );
};

export default TextAnimation;
