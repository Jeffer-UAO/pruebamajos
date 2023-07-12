import { WhatsApp } from "../WhatsApp";
import { BtnLink, BtnModal } from "../Common";
import { useCart } from "@/hooks/useCart";

import { MdOutlineCategory } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./FooterApp.module.scss";
export function FooterApp() {
  const { total } = useCart();
  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BtnLink link={"/"} title={"HOME"} logo={<AiOutlineHome size={20} />} />
        <BtnLink
          link={"/featured"}
          title={"EXCL"}
          logo={<MdOutlineCategory size={20} />}
        />

        <WhatsApp
          phoneNumber="+573103900666"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />
        {/* <BtnLink
          link={"/ofert"}
          title={"OFER"}
          logo={<MdOutlineLocalOffer size={20} />}
        /> */}

        <div className={styles.cart}>
          <p>{total}</p>
          <BtnLink
            link={"/cart"}
            title={"CART"}
            logo={<AiOutlineShoppingCart size={20} />}
          />
        </div>

        <BtnModal />
      </div>
    </div>
  );
}
