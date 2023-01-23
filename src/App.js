import React, { Component } from "react";
import Navi from "./Navi";
import Category from "./Category";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import Alertify from "alertifyjs";

export default class App extends Component {
  state={currentcategory:"",products:[],cart:[]}
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
  addToCart=(product)=>{
    let newCart=this.state.cart;
    var addItem=newCart.find(c=>c.product.id==product.id); // if have product my cart
    if(addItem)
    {
      addItem.quantity+=1;
    }
    else
    {
      newCart.push({product:product,quantity:1})
    }
    this.setState({cart:newCart})
    Alertify.success(product.productName + " Added to Cart");
  }

  removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
  }
  render() {
    let basliq = "navi basliq";
    let categoryinfo = { title: "Category Listler", basliq2: "categry basliqlar" }; // bu best practice encapsulationdur
    return (
      <div>
                    <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <h3>Helo from React</h3>
        <Container>
          <Row>
            <Col xs="3">
              <Category currentcategory={this.state.currentcategory} changecategory={this.changecategory} info={categoryinfo} />
            </Col>

            <Col xs="9">
              <ProductList currentcategory={this.state.currentcategory} addToCart={this.addToCart}
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
