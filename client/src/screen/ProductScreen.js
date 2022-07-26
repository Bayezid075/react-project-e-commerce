import React from "react";
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
import products from "../products";
export const ProductScreen = ({ match }) => {
  const MatchProduct = products.find((p) => p._id === match.params.id);

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={MatchProduct.image} alt={MatchProduct.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {MatchProduct.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <ProductRating
                value={MatchProduct.rating}
                text={`${MatchProduct.numReviews} Reviews `}
              />
            </ListGroup.Item>

            <ListGroupItem>Price : {MatchProduct.price}</ListGroupItem>
            <ListGroupItem>
              Descriptions : {MatchProduct.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price :</Col>

                  <Col>
                    <strong>${MatchProduct.price} </strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col> Status :</Col>

                  <Col>
                    {MatchProduct.countInStock > 0
                      ? "Product Avalilable"
                      : "OUT OF STOCK "}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={MatchProduct.countInStock === 0}
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
