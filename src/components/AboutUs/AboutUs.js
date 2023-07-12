import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          ¡Contáctanos hoy mismo para descubrir todo lo que tenemos para
          ofrecer! Como empresa que vende una amplia variedad de productos de
          belleza, maquillaje, cacharros y mucho más, estamos seguros de que
          encontrarás algo que te encantará. Ofrecemos productos de alta
          calidad, desarrollados con ingredientes naturales y tecnología
          avanzada para brindarte los mejores resultados.
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          Nuestra misión es ser la tienda en línea líder en la venta de
          productos de belleza, maquillaje, juegos de mesa y más. Ofrecemos una
          amplia variedad de productos de alta calidad, seleccionados
          cuidadosamente para satisfacer las necesidades y deseos de nuestros
          clientes. Nos esforzamos por brindar un servicio excepcional y una
          experiencia de compra sin problemas, siempre comprometidos con la
          satisfacción de nuestros clientes. Buscamos establecer relaciones
          duraderas con nuestros clientes, y ser reconocidos por nuestra
          excelencia en servicio y calidad de productos.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          Nuestra visión es convertirnos en la tienda en línea preferida de
          nuestros clientes, ofreciendo una amplia variedad de productos de
          belleza, maquillaje, juegos de mesa y más. Buscamos ser reconocidos
          por nuestra excelencia en servicio al cliente, calidad de productos,
          precios competitivos y nuestra contribución positiva en la sociedad y
          el medio ambiente. Nos esforzamos por mantenernos a la vanguardia de
          la industria, adoptando prácticas sostenibles y tecnologías
          innovadoras para mejorar la experiencia de compra de nuestros
          clientes. Nuestra visión es ser una empresa líder en el comercio
          electrónico, siendo reconocidos por nuestra excelencia en todo lo que
          hacemos.
        </p>
      </div>

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
  );
}
