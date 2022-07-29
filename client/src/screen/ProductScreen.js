import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { getProductsDetails } from "../action/productAction";

import Loading from "../components/loading/Loading";
import Message from "../components/message/Message";

export const ProductScreen = ({ variant, children, match }) => {
  const dispatch = useDispatch();
  const DetailProduct = useSelector(
    (state) => state.DetailProduct
  ); /* this name must be same as combine reducer name*/
  const { loading, product, error } = DetailProduct;
  console.log(product);
  useEffect(() => {
    dispatch(getProductsDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger"> {children} </Message>
      ) : (
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
              <ListGroupItem>
                Descriptions : {product.description}
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
      )}
    </div>
  );
};
