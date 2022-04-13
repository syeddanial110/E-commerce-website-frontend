import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/shop.css"

const Shop = () => {
  const [products, setProducts] = useState({});
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      console.log(res, "res");
      setProducts(res.data.data.data);
      //   console.log(products,"products");
      //   console.log(setProducts,"setproducts");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, []);

  return (
    <>
      <Header />
      <Row>
          <Col md={12} className="d-flex justify-content-center">
              <Button className="" >Create product</Button>
          </Col>
         
      </Row>
      <Row className="">
        {products &&
          products.length > 0 &&
          products.map((items) => {
            console.log(items, "items");
            return (
              <>
                  <Col className="d-flex justify-content-center" md={3}>
                    <Card
                      className="mx-2 my-4 justify-content-center"
                      style={{ width: "18rem" }}
                    >
                      <Card.Img variant="top" src={items.image} />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>{items.description}</Card.Text>
                        <Card.Text>{items.price}</Card.Text>
                       

                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-around">
                      
                      <Button className="buttonTextSize" >Update product</Button>
                        <Button className="buttonTextSize" >Delete product</Button>

                      </Card.Footer>
                    </Card>
                  </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default Shop;
