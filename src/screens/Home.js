import React from "react";
import { Card, Col, Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import VerticalSlider from "../components/VerticalSlider";
import "../styles/home.css";
import vapeImg from "../assets/images/vapeimg.jpg";
import laptopImg from "../assets/images/laptop.jpg";
import mobileImg from "../assets/images/mobile.jpg";
import accessories from "../assets/images/accessories.jpg";
// import Slider from '../components/Slider'
const Home = () => {
  return (
    <div>
      <Header />
      <VerticalSlider />

      <Row className="m-5">
        <Col md={4}>
          <Link className="text-decoration-none text-dark" to="/:id">
            <Card
              className=" rounded"
              border="light"
              style={{ width: "18rem" }}
            >
              <Card.Header className="text-center">MEN</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://www.junaidjamshed.com/media/wysiwyg/wedding.jpg"
                  />
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link className="text-decoration-none text-dark" to="/:id">
            <Card
              className=" rounded"
              border="light"
              style={{ width: "18rem" }}
            >
              <Card.Header className="text-center">WOMEN</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://www.junaidjamshed.com/media/wysiwyg/eid-un1.jpg"
                  />
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link className="text-decoration-none text-dark" to="/:id">
            <Card
              className=" rounded"
              border="light"
              style={{ width: "18rem" }}
            >
              <Card.Header className="text-center">LAPTOP</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img variant="top" src={laptopImg} />
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
      <Row className="m-5">
        <Col md={4}>
          <Link className="text-decoration-none text-dark" to="/:id">
            <Card
              className=" rounded"
              border="light"
              style={{ width: "18rem" }}
            >
              <Card.Header className="text-center">MOBILES</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img variant="top" src={mobileImg} />
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link className="text-decoration-none text-dark" to="/:id">
            <Card
              className=" rounded"
              border="light"
              style={{ width: "18rem" }}
            >
              <Card.Header className="text-center">VAPE</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img
                    // className="vapeCardImage"
                    variant="top"
                    src={vapeImg}
                  />
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link className="text-decoration-none text-dark" to="/:id">
            <Card
              className=" rounded"
              border="light"
              style={{ width: "18rem" }}
            >
              <Card.Header className="text-center">ACCESORIES</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img variant="top" src={accessories} />
                </Card.Title>
                <Card.Footer className="d-flex">
                  <Button variant="primary">Shop Now</Button>
                
                </Card.Footer>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
