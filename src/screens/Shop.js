import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

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
    

      {products &&
        products.length > 0 &&
        products.map((items) => {
            console.log(items,"items");
          return (
            <>
            <Col className="mt-4" md={3}>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
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
