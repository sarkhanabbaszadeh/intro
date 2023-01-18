import React, { Component } from "react";
import Navi from "./Navi";
import Category from "./Category";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state={currentcategory:"",products:[]}
  changecategory=(categories)=>{
    this.setState({currentcategory:categories.categoryName});
  };

  componentDidMount(){
    this.getProducts();
  };

  getProducts=()=>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
  }
  render() {
    let basliq = "navi basliq";
    let categoryinfo = { title: "Category Listler", basliq2: "categry basliqlar" }; // bu best practice encapsulationdur
    return (
      <div>
        <h3>Helo from React</h3>
        <Container>
          <Row>
            <Navi />
            <Col xs="3">
              <Category currentcategory={this.state.currentcategory} changecategory={this.changecategory} info={categoryinfo} />
            </Col>

            <Col xs="9">
              <Navi title={basliq} />
              <ProductList
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
