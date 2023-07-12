import { BASE_NAME } from "@/config/constants";

import { Button, CardImg } from "reactstrap";
import { map } from "lodash";
import { toast } from "react-toastify";

import { useCart, useAuth } from "@/hooks";

import styles from "./ListCart.module.scss";
import { BsTrash3 } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export function ListCart(props) {
  const { product } = props;

  const { loading, decreaseCart, incrementCart, deleteCart } = useCart();
  const { user } = useAuth();

  return (
    <div>
      <div className={styles.list}>
        <h4>CARRITO</h4>
        {map(product, (item) => (
          <div key={item.codigo} className={styles.card}>
            <CardImg
              alt="Card image cap"
              src={BASE_NAME + item.images}
              className={styles.skeleton}
            />

            <div className={styles.detalle}>
              <p className={styles.name}>{item.name_extend}</p>
              {user && <p className={styles.price}>COP. $ {item.price1}</p>}

              {/* <p className={styles.quantity}>
                Total: $ {item.quantity * item.price1}
              </p> */}

              <div className={styles.btn}>
                <AiOutlineMinusCircle
                  onClick={() => decreaseCart(item.codigo)}
                  size={30}
                  color="grey"
                />
                <p>{item.quantity}</p>
                <AiFillPlusCircle
                  onClick={() => incrementCart(item.codigo)}
                  size={30}
                  color="green"
                />
              </div>
            </div>
            <Button
              onClick={() => deleteCart(item.codigo)}
              className={styles.btnDelete}
            >
              <BsTrash3 size="20" color="red" />
            </Button>
          </div>
        ))}
        {/* <h2>Total</h2> */}
      </div>
    </div>
  );
}
