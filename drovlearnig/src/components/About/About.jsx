import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Nosotros</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/iamgen2.png")}
          alt="iamgenes de computador"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                Aprende a construir interfaces web modernas, 
                interactivas y atractivas utilizando HTML, CSS y JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend </h3>
              <p>
                Domina la lógica y el funcionamiento interno de las aplicaciones web aprendiendo
                 a trabajar con servidores, bases de datos y APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Diseño </h3>
              <p>
                Aprende a crear interfaces digitales atractivas, intuitivas y 
                funcionales que mejoren la experiencia del usuario.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
