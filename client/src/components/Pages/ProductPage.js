import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import {
  ListGroup,
  Card,
  Button,
  Image,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import Rating from "../Rating";
import { productDetail } from "../../actions/productAction";

const ProductPage = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetail);
  const { error, product, loading } = productDetails;

  const addCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  useEffect(() => {
    dispatch(productDetail(match.params.id));
  }, [dispatch]);

  return (
    <>
      <Link className="btn btn-light" to="/">
        <i class="fas fa-arrow-circle-left fa-2x"></i>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating rating={product.rating} reviews={product.numReviews} />
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>₹{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? "Available" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 ? (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity: </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ) : (
                  ""
                )}
                <ListGroup.Item>
                  <Button
                    className="btn btn-primary btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addCartHandler}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
      ;
    </>
  );
};

export default ProductPage;
