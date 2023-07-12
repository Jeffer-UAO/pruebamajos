import React from "react";
import styles from "./Redes.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsShop } from "react-icons/bs";









export function Redes() {
  return <div className={styles.space}>   
    <div className={styles.phone}>
      <p><IoLogoWhatsapp  size="22" color="#63f945" /> 310 390 0666 - 312 752 7596 - 314 617 3076</p>
      <p><GiRotaryPhone color="#ff0202" size="24"/> 881 6111 <BsShop color="#e5e619" size="22" /> Calle 15 # 9-64 Centro</p>
    </div>

  
   
  </div>;
}
