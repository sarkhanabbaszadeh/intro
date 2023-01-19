import React, { Component } from "react";
import Navi from "./Navi";
import Category from "./Category";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state={currentcategory:"",products:[]}
  changecategory=(category)=>{
    this.setState({currentcategory:category.categoryName});
    this.getProducts(category.id);
  };

  componentDidMount(){
    this.getProducts();
  };

  getProducts=(categorId)=>{
    let url="http://localhost:3000/products";
    if(categorId)
    {
      url+="?categoryId="+categorId;
      //console.log(url);
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
  }
  render() {
    let basliq = "navi basliq";
    let categoryinfo = { title: "Category Listler", basliq2: "categry basliqlar" }; // bu best practice encapsulationdur
    return (
      <div>
                    <Navi />
        <h3>Helo from React</h3>
        <Container>
          <Row>
            <Col xs="3">
              <Category currentcategory={this.state.currentcategory} changecategory={this.changecategory} info={categoryinfo} />
            </Col>

            <Col xs="9">
              <ProductList currentcategory={this.state.currentcategory}
              products={this.state.products}
              />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}
