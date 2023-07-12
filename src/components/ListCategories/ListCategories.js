import { CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";

import styles from "./ListCategories.module.scss";
import Link from "next/link";

export function ListCategories(props) {
  const { categories } = props;

  return (
    <div>
      <div className={styles.content}>
        <h1>CATEGORÍAS</h1>
        <div className={styles.list}>
          {map(categories, (category) => (
            <div key={category.id}  className={styles.skeleton}>
              <Link href={`/products/${category.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + category.image}                 
                />

                <div className={styles.category}>
                  <CardTitle className={styles.title}>
                    <h2>{category.name}</h2>
                    <h6>ver más</h6>
                  </CardTitle>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
