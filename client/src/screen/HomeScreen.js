import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../components/Product/ProductItem";
import axios from "axios";

export const HomeScreen = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  });

  return (
    <div>
      <h1> Products </h1>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
