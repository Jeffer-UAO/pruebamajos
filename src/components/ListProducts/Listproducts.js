import { useState } from "react";
import { BASE_NAME } from "@/config/constants";
import {
  CardImg,
  CardSubtitle,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
} from "reactstrap";
import { map } from "lodash";
import { WhatsApp } from "../WhatsApp";
import { toast } from "react-toastify";

import { useCart, useAuth } from "@/hooks";

import styles from "./ListProduts.module.scss";
import Link from "next/link";

export function Listproducts(props) {
  const { products, title } = props;

  const { addCart, loading } = useCart();
  const { user  } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [idProduct, setIdPropduct] = useState();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addProductId = (id) => {
    setIdPropduct(id);
    toggleModal();
  };

  const addData = () => {
    addCart(idProduct, quantity);
    toast.success("¡Se agrego con exito!");
    toggleModal();
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  return (
    <div className={styles.listProduct}>
      <h4>{title}</h4>
      <div className={styles.list}>
        {map(products, (product, index) => (
          <div key={index} className={styles.list__product}>
            <Link href={`/${product.productData.slug}`}>
              <h5>{product.productData.name_extend}</h5>

              <CardImg
                alt="Card image cap"
                src={BASE_NAME + product.productData.images}
              />
            </Link>
            <div className={styles.product}>
              <div className={styles.price}>
                {/* TODO: Usuarios registrados */}
                
                  {user && (
                    <div className={styles.price1}>
                      <p>COP.</p>
                      <h6>$ {product.productData.price1}</h6>
                    </div>
                  )}

                {/* {product.productData.price2 > 0 && (
                      <h6>POR MAYOR $ {product.productData.price2}</h6>
                    )}
                    {product.productData.price1 > 0 && (
                      <h6>AL DETAL $ {product.productData.price1}</h6>
                    )} */}
              </div>
            </div>

            <div className={styles.btns}>
              <Button
                color="primary"
                onClick={() => addProductId(product.productData.codigo)}
              >
                Agregar al Carrito
              </Button>

              <div className={styles.wsp}>
                <WhatsApp
                  phoneNumber="+573103900666"
                  message={
                    BASE_NAME +
                    product.productData.images +
                    " " +
                    product.productData.name_extend +
                    " " +
                    "Referencia: " +
                    product.productData.ref
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ingrese Cantidad</ModalHeader>

        <ModalBody>
          Cantidad
          <FormGroup>
            <Input
              value={quantity}
              type="number"
              name="cantidad"
              id="cantidad"
              placeholder="Cantidad"
              onChange={handleQuantityChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={addData}>
            Aceptar
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
