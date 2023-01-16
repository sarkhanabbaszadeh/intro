import React, { Component } from "react";
import {ListGroup,ListGroupItem} from "reactstrap";

export default class Category extends Component {
    state={categories:[{categoryId:1,categorName:"Kategoriya1"},{categoryId:2,categorName:"Kategoriya2"}]}
  render() {
    return (
      <div>
        <h3>{this.props.info.basliq2}</h3>
        <h2>{this.state.counter}</h2>
        <ListGroup>
          {
            this.state.categories.map(categories=>(
              <ListGroupItem>{categories.categorName}</ListGroupItem>
            ))
          }

        </ListGroup>
      </div>
    );
  }
}
