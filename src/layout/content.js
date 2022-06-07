import React from "react";
import { Button, CardHeader, CardBlock, CardText, Card } from "reactstrap";
import { BrowserRouter, NavLink, Route, Link } from "react-router-dom";
import "@devexpress/dx-react-grid";
import GridProduct from "../component/product/gridproduct";
import GridInventory from "../component/inventory/gridinventory";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap4";

import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import { Container, Row, Col } from "reactstrap";

const Content = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/salesorder" component={SalesOrder} />
    <Route exact path="/purchaseorder" component={PurchaseOrder} />
    <Route exact path="/product" component={GridProduct} />
    <Route exact path="/inventory" component={GridInventory} />
  </div>
);
export default Content;
// This is what you really care about
class Home extends React.Component {
  render() {
    return <h1>Home</h1>;
  }
}

// This is what you could care about
class SalesOrder extends React.Component {
  render() {
    return <h1>Sales Order</h1>;
  }
}

// This is what you really care about
class PurchaseOrder extends React.Component {
  render() {
    return <h1>Purchase Order</h1>;
  }
}
