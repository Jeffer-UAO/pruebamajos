import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>MAJO'S DISTRIBUCIONES LA 15</h1>
        <div className={styles.phone}>
          <h5>Líneas de atención</h5>
          <ul>
            <li></li>(602) 881 08 92
            <li>(+57) 314 6173076</li>
            <li>(+57) 310 390 0666</li>
            <li>(+57) 312 752 7596</li>
          </ul>
        </div>

        <div className={styles.adress}>
          <h5>Ubicación:</h5>
          <p>Calle 15 # 9 – 64 | Centro de Cali</p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
