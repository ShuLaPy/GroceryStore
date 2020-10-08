import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../Product";
import Loader from "../Loader";
import Message from "../Message";
import { listProducts } from "../../actions/productAction";

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { error, products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Grocery Items</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col key={item._id} sm={6} md={4} lg={3}>
                <Product item={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomePage;
