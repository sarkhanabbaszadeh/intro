import React, { Component } from "react";
import {ListGroup,ListGroupItem} from "reactstrap";

export default class Category extends Component {
    state={categories:[]};

    componentDidMount(){
      this.getCategories();
    }

    getCategories=()=>{
      fetch("http://localhost:3000/categories")
      .then(response=>response.json())
      .then(data=>this.setState({categories:data}));
    }
  render() {
    return (
      <div>
        <h3>{this.props.info.basliq2}</h3>
        <ListGroup>
          {
            this.state.categories.map(category=>(
              <ListGroupItem onClick={()=>this.props.changecategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
            ))
          }

        </ListGroup>
        <h4>{this.props.currentycategory}</h4>
      </div>
    );
  }
}
