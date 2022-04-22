import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FileBase64 from "react-file-base64";

const ProductModel = (props) => {
  const {
    show,
    closeModel,
    createProductFuc,
    createProduct,
    product,
    onChangeHandler,
    setCreateProduct,
    uploadImageHandler
  } = props;
  const { title, productName, comapnyName, price, description, image } =
    createProduct;
  return (
    <>
      <Modal show={show} onHide={closeModel}>
        <Form onSubmit={createProductFuc}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title of product"
                name="title"
                value={product.title}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                name="productName"
                value={product.productName}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company name of that product"
                name="comapnyName"
                value={product.comapnyName}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price of the product"
                name="price"
                value={product.price}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description of the Product"
                name="description"
                value={product.description}
                onChange={onChangeHandler}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Upload relevent images"
                name="image"
                value={product.image}
                onChange={onChangeHandler}
              />
            </Form.Group> */}

            <input
              type="file"
              onChange={uploadImageHandler}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ProductModel;
