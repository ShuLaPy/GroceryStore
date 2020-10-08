import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ item }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${item._id}`}>
        <Card.Img variant="top" src={item.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${item._id}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating rating={item.rating} reviews={item.numReviews} />
        </Card.Text>
        <Card.Text as="h3">₹{item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
