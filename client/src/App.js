import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CartPage from "./components/Pages/CartPage";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import ProfilePage from "./components/Pages/ProfilePage";
import ShippingPage from "./components/Pages/ShippingPage";
import PaymentMethodPage from "./components/Pages/PaymentMethodPage";
import PlaceOrderPage from "./components/Pages/PlaceOrderPage";
import OrderPage from "./components/Pages/OrderPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-2">
        <Container>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentMethodPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
