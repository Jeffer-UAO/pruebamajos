import { useAuth } from "@/hooks";
import Link from "next/link";

import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";

export function TopBar() {

  const { user, logout,  } = useAuth();

  return (
    <>
      {user && (
        <div className={styles.user}>
          <p>{user.email}</p>
          <p onClick={logout}>Salir</p>
        </div>
      )}

      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logo.png" alt="MAJO'S DISTRIBUCIONES LA 15" />{" "}
        </Link>

        <div className={styles.title}>
          <div className={styles.ano}>
            <p className={styles.text}>CATÁLOGO</p>
            <p className={styles.num}>2023</p>
          </div>
          <p className={styles.name}></p>
          <p className={styles.extra}>DESPACHOS A TODA COLOMBIA</p>
        </div>
      </div>
    </>
  );
}
