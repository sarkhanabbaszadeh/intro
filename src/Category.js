import React, { Component } from "react";
import {ListGroup,ListGroupItem} from "reactstrap";

export default class Category extends Component {
    state={categories:[{categoryId:1,categorName:"Kategoriya1"},
    {categoryId:2,categorName:"Kategoriya2"}],
  currentycategory:"yuxaridakilara klikle"};

  changecategory=(categories)=>{
    this.setState({currentycategory:categories.categorName})
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.basliq2}</h3>
        <h2>{this.state.counter}</h2>
        <ListGroup>
          {
            this.state.categories.map(categories=>(
              <ListGroupItem onClick={()=>this.changecategory(categories)} key={categories.categoryId}>{categories.categorName}</ListGroupItem>
            ))
          }

        </ListGroup>
        <h4>{this.state.currentycategory}</h4>
      </div>
    );
  }
}
