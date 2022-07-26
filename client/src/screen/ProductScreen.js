import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import ProductRating from "../components/Product/ProductRating";

import axios from "axios";
export const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <ProductRating
                value={product.rating}
                text={`${product.numReviews} Reviews `}
              />
            </ListGroup.Item>

            <ListGroupItem>Price : {product.price}</ListGroupItem>
            <ListGroupItem>Descriptions : {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price :</Col>

                  <Col>
                    <strong>${product.price} </strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col> Status :</Col>

                  <Col>
                    {product.countInStock > 0
                      ? "Product Avalilable"
                      : "OUT OF STOCK "}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
