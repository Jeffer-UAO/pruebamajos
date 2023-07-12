import React, { useEffect, useState } from "react";
import { BASE_NAME } from "@/config/constants";

import { map } from "lodash";
import { CardImg, CardTitle } from "reactstrap";

import { WhatsApp } from "../WhatsApp";
import { useAuth } from "@/hooks";

import styles from "./DetailProduct.module.scss";
export function DetailProduct(props) {
  const { product, relate } = props;

  const [productData, setProductData] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    setProductData(product[0]);
  }, []);

  const changeDetail = (data) => {
    setProductData(data);
    window.scrollTo(0, 0);
  };

  if (product) {
    return (
      <div className={styles.detailProduct}>
        <div className={styles.product} id="seccion-1">
          <CardImg alt="Card image cap" src={BASE_NAME + productData.images} />

          <div className={styles.description}>
            <CardTitle className={styles.title}>
              <h5>{productData.name_extend}</h5>

              {user && <h6>$ {productData.price1}</h6>}
            </CardTitle>
            <p>{productData.description}</p>

            <div className={styles.whatsapp}>
              <WhatsApp
                phoneNumber="+573103900666"
                message={
                  BASE_NAME +
                  productData.images +
                  " " +
                  productData.name_extend +
                  " " +
                  "Referencia: " +
                  productData.ref
                }
              />
            </div>
          </div>
        </div>

        <div className={styles.relate}>
          <p>PRODUCTOS RELACIONADOS</p>

          <div className={styles.list}>
            {map(relate, (product, index) => (
              <div
                key={index}
                className={styles.list__product2}
                onClick={() => changeDetail(product)}
              >
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.images}
                />

                <div className={styles.name}>
                  <CardTitle>
                    <h5>
                      {product.name} {product.name_extend}
                    </h5>
                    {product.price1 !== null && <h6>$ {product.price1}</h6>}
                  </CardTitle>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <h5> La pagina no existe</h5>;
  }
}
