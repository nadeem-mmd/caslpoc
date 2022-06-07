import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
// The Header creates links that can be used to navigate
// between routes.

const Header = () => (
  <div>
    <Navbar color="info" full light expand="md">
      <NavbarBrand>
        <h4>SSInventory</h4>
      </NavbarBrand>
      <select>
        <option value="ADMIN">ADMIN</option>
        <option value="MANAGER">MANAGER</option>
        <option value="PROJECT LEADER">PROJECT LEADER</option>
        <option value="SALES">SALES</option>
        <option value="USER">USER</option>
      </select>
      <h1>hi {}</h1>
      <NavbarToggler />
      <Collapse isOpen="true" navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/salesorder"
            >
              Sales Order
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/purchaseorder"
            >
              Purchase Order
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Report
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Available Stock</DropdownItem>
              <DropdownItem>Value Of Product</DropdownItem>
              <DropdownItem>Good Receipt</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Master Data
            </DropdownToggle>
            <DropdownMenu right>
              <Link exact to="/product">
                <DropdownItem>Product</DropdownItem>
              </Link>
              <Link exact to="/inventory">
                <DropdownItem>Inventory</DropdownItem>
              </Link>
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

export default Header;
