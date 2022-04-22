import React, { useEffect } from "react";
import { Card, Col, Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import VerticalSlider from "../components/VerticalSlider";
import "../styles/home.css";
import vapeImg from "../assets/images/vapeimg.jpg";
import laptopImg from "../assets/images/laptop.jpg";
import mobileImg from "../assets/images/mobile.jpg";
import accessories from "../assets/images/accessories.jpg";
import axios from "axios";
import CardsCategories from "../components/CardsCategories"
// import Slider from '../components/Slider'
const Home = () => {

  
  // useEffect( async() => {
  //   try {
  //     const data= await axios.post("https://www.googleapis.com/youtube/v3/playlists/q=playlistId=PLw-VjHDlEOgtCjYJB1r1EkZ-AKlYv6Ozj")
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [])
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
                <Card.Footer className="d-flex justify-content-center">
                  <Button variant="primary">Shop Now</Button>
                
                </Card.Footer>
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
                <Card.Footer className="d-flex  justify-content-center">
                  <Button variant="primary">Shop Now</Button>
                
                </Card.Footer>
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
                <Card.Footer className="d-flex justify-content-center">
                  <Button variant="primary">Shop Now</Button>
                
                </Card.Footer>
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
                <Card.Footer className="d-flex  justify-content-center">
                  <Button variant="primary  justify-content-center">Shop Now</Button>
                
                </Card.Footer>
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
                <Card.Footer className="d-flex justify-content-center">
                  <Button variant="primary">Shop Now</Button>
                
                </Card.Footer>
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
                <Card.Footer className="d-flex justify-content-center">
                  <Button variant="light">Shop Now</Button>
                
                </Card.Footer>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
      <CardsCategories />
    </div>
  );
};

export default Home;
