import Head from "next/head";
/* import Image from 'next/image' */
import { Container, Row, Col, Image } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Minera Mirasol</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="title" content="Minera Mirasol" />
        <meta
          name="description"
          content="Peruanos en busca de la excelencia haciendo minería responsable."
        />
        <meta
          name="keywords"
          content="minera, minería, minera mirasol, minería responsable, minería peruana"
        />
      </Head>
      <Container fluid className="main-container g-0">
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <Image className="logo" src="/images/logo.jpeg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="m-0 text-center">En construcción</h1>
          </Col>
        </Row>
        <Row className="g-0 justify-content-center mt-3 mt-xl-5">
          <Col xs="auto" className="g-0 text-center">
            <a
              className="d-block lh-1"
              href="https://www.linkedin.com/company/minera-mirasol-sa/"
            >
              <h3 className="lh-1 m-0 p-0">
                <BsLinkedin />
              </h3>
            </a>

            <p className="lh-1 m-0">info@mirasol.pe</p>
          </Col>
        </Row>
        <Row
          className="g-0 justify-content-around"
          style={{ rowGap: 2 + "rem", marginTop: "5vw" }}
        >
          <Col xl={4}>
            <p className="m-0 fs-6 fs-sm-5 text-center">
              Av. Circunvalación Del Golf Los Inkas 134 Oficina 707 Torre 1 -
              Santiago De Surco LIMA - PERÚ
            </p>
          </Col>
          <Col xl={4}>
            <p className="m-0 fs-6 fs-sm-5 text-center">
              Planta Metalúrgica MIRASOL <br /> Autopista Panamericana Norte KM
              333 Culebras, Huarmey, Ancash, Perú
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
