import React from "react";
import { Button, CardHeader, CardBlock, CardText, Card, Col } from "reactstrap";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap4";
import { Can } from "../Abilities";

// This is what you really care about
class GridInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "id", title: "Id" },
        { name: "title", title: "Title" },
        { name: "body", title: "Body" },
        { name: "userId", title: "User Id" }
      ],
      rows: [
        { id: "Female", title: "Sandra", body: "Las Vegas", userId: "Audi A4" },
        { id: "Male", title: "Paul", body: "Paris", userId: "Nissan Altima" }
      ],
      sorting: [{ columnName: "title", direction: "asc" }]
    };

    this.changeSorting = sorting => this.setState({ sorting });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ rows: data }));
  }
  openmod() {
    prompt("Please enter product details:");
  }

  render() {
    const { rows, columns, sorting } = this.state;
    return (
      <Col md="12">
        <br />
        <h4>Master Inventory</h4>
        <Card>
          <CardHeader>
            <Can I="create" a="Inventory" passThrough>
              {allowed =>
                allowed ? (
                  <Button onClick={this.openmod}>Add</Button>
                ) : (
                  "Only Admin can do this"
                )
              }
            </Can>
          </CardHeader>
          <CardBlock>
            <CardText>
              <Grid rows={rows} columns={columns}>
                <SortingState
                  sorting={sorting}
                  onSortingChange={this.changeSorting}
                />
                <IntegratedSorting />
                <Table />
                <TableHeaderRow showSortingControls />
              </Grid>
            </CardText>
          </CardBlock>
        </Card>
      </Col>
    );
  }
}

export default GridInventory;
