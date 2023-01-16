import React from "react";
import Navi from "./Navi";
import Category from "./Category";
import { Container,Row,Col } from "reactstrap";

function App() {
  let basliq="navi basliq";
  let categoryinfo={title:"Category Listler",basliq2:"categry basliqlar"} // bu best practice encapsulationdur
  return (
    <div>
      <h3>Helo from React</h3>
      <Container>
        <Row>
        <Navi/>
          <Col xs="3">
          <Category info={categoryinfo}/>
          </Col>

          <Col xs="9">
          <Navi title={basliq}/>
          </Col>

        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default App;
