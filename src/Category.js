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
        <h2>{this.state.categories}</h2>
        <ListGroup>
          {
            this.state.categories.map(category=>(
              <ListGroupItem onClick={()=>this.props.changecategory(category)} key={category.id}>{category.categorName}</ListGroupItem>
            ))
          }

        </ListGroup>
        <h4>{this.state.currentycategory}</h4>
      </div>
    );
  }
}
