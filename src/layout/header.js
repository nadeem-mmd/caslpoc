import React, { Component } from "react";
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
import { render } from "react-dom";
import { Can } from "../component/Abilities";
import defineRulesFor from "../config/permissions";

const SubjectLink = ({ name, ...props }) => (
  <Can I="read" a={name} passThrough>
    {allowed => (
      <NavLink
        disabled={!allowed}
        className="nav-link"
        activeClassName="active"
        exact
        {...props}
      />
    )}
  </Can>
);

class Header extends Component {
  state = {
    // Since the reference of the initial value is not from the 'sports' collection,
    // 'dataItemKey' have to be set.
    value: "admin"
  };

  constructor(...args) {
    super(...args);
    this.handleChange("admin");
  }

  handleChange(role) {
    const rules = defineRulesFor(role);
    this.props.ability.update(rules);
    this.setState({
      value: role
    });
  }

  render() {
    return (
      <div>
        <Navbar color="info" full light expand="md">
          <NavbarBrand>
            <h4>SSInventory</h4>
          </NavbarBrand>
          <select
            value={this.state.value}
            onChange={event => this.handleChange(event.target.value)}
          >
            <option value="admin">ADMIN</option>
            <option value="manager">MANAGER</option>
            <option value="projectLead">PROJECT LEADER</option>
            <option value="sales">SALES</option>
            <option value="user">USER</option>
          </select>
          <h1>Hi {this.state.value}</h1>
          <NavbarToggler />
          <Collapse isOpen="true" navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <SubjectLink name="SalesOrder" to="/salesorder">
                  Sales Order
                </SubjectLink>
              </NavItem>
              <NavItem>
                <SubjectLink name="PurchaseOrder" to="/purchaseorder">
                  Purchase Order
                </SubjectLink>
              </NavItem>
              <Can I="read" a="Report" passThrough>
                {allowed => (
                  <UncontrolledDropdown
                    nav
                    inNavbar
                    {...(allowed ? null : { toggle: false })}
                  >
                    <DropdownToggle nav caret>
                      Report
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Available Stock</DropdownItem>
                      <DropdownItem>Value Of Product</DropdownItem>
                      <DropdownItem>Good Receipt</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Can>
              <Can I="read" a="Report" passThrough>
                {allowed => (
                  <UncontrolledDropdown
                    nav
                    inNavbar
                    {...(allowed ? null : { toggle: false })}
                  >
                    <DropdownToggle nav caret>
                      Master Data
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link exact to="/product">
                        <Can I="read" a="Product" passThrough>
                          {allowed => (
                            <DropdownItem disabled={!allowed}>
                              Product
                            </DropdownItem>
                          )}
                        </Can>
                      </Link>
                      <Link exact to="/inventory">
                        <Can I="read" a="Product" passThrough>
                          {allowed => (
                            <DropdownItem disabled={!allowed}>
                              Inventory
                            </DropdownItem>
                          )}
                        </Can>
                      </Link>
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Can>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
