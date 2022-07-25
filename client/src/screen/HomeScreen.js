import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import ProductItem from "../components/Product/ProductItem";

export const HomeScreen = () => {
  return (
    <div>
      <h1> Products </h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
