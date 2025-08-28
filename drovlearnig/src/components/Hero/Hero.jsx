import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Somos DrovLearning</h1>
        <p className={styles.description}>
           Plataforma dedicada a enseñar informática desde cero. Nuestro propósito es guiar a las personas en su aprendizaje digital con un 
           enfoque claro, práctico y accesible para todos
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Iniciar Ahora
        </a>
      </div>
      <img
        src={getImageUrl("hero/imagen1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
