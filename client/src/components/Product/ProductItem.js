import React from "react";
import { Card } from "react-bootstrap";

const ProductItem = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
      </Card>
      <Card.Body>
        <a href={`product/${product._id}`}>
          <Card.Title as="div">
            {" "}
            <strong> {product.name} </strong>{" "}
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="h3"> ${product.price} </Card.Text>
      </Card.Body>
    </div>
  );
};

export default ProductItem;
