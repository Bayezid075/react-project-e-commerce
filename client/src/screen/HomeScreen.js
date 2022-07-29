import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../action/productAction";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../components/Product/ProductItem";
import axios from "axios";
import Loading from "../components/loading/Loading";
import Message from "../components/message/Message";

export const HomeScreen = ({ variant, children }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <h1> Products </h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger"> {children} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
