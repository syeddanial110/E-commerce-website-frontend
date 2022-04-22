import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/shop.css";
import ProductModel from "../components/ProductModel";
import FileBase64 from "react-file-base64";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [createProduct, setCreateProduct] = useState({
    title: "",
    productName: "",
    comapnyName: "",
    price: "",
    description: "",
    image: "",
  });
  const { title, productName, comapnyName, price, description, image } =
    createProduct;

  const [show, setShow] = useState(false);

  const openModel = () => setShow(true);
  const closeModel = () => setShow(false);

  const onChangeHandler = (e) => {
    setCreateProduct({ ...createProduct, [e.target.name]: e.target.value });
  };

  // Upload image handling
  
  // const [baseImage, setBaseImage] = useState("");

  const uploadImageHandler = async (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    setCreateProduct(base64);
  };
  console.log(createProduct);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(async () => {
    getProducts();
  }, []);

  // get all products

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      // console.log(res, "res");
      setProducts(res.data.data.data);
      //   console.log(products,"products");
      //   console.log(setProducts,"setproducts");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  // create products

  const createProductFuc = async (e) => {
    e.preventDefault();
    try {
      if (
        title !== "" &&
        productName !== "" &&
        comapnyName !== "" &&
        price !== "" &&
        description !== "" &&
        image !== ""
      ) {
        const baseURL= "http://localhost:8080/api/products"
        
        const { data } = await axios.post(baseURL, setCreateProduct);
        // const { data } = await axios.post({
        //   method: "POST",
        //   url: "http://localhost:8080/api/products",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   data: { title, productName, comapnyName, price, description, image },
        // });
        console.log(data, "create product data");
        const createdProduct = setProducts([...products, data.data]);
        console.log(createdProduct);

        alert("Your are successfully created new product");
        setCreateProduct({
          title: "",
          productName: "",
          comapnyName: "",
          price: "",
          description: "",
          image: "",
        });
        closeModel();
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          <Button
            className=""
            onClick={() => {
              openModel();
              setProduct({});
            }}
          >
            Create product
          </Button>
        </Col>
      </Row>
      <Row className="">
        {products &&
          products.length > 0 &&
          products.map((items) => {
            // console.log(items, "items");
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
                      <Button className="buttonTextSize">Update product</Button>
                      <Button className="buttonTextSize">Delete product</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </>
            );
          })}
      </Row>

      <ProductModel
        product={product}
        closeModel={closeModel}
        createProductFuc={createProductFuc}
        show={show}
        onChangeHandler={onChangeHandler}
        createProduct={createProduct}
        setCreateProduct={setCreateProduct}
        uploadImageHandler={uploadImageHandler}
      />
    </>
  );
};

export default Shop;
