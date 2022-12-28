import "./App.css";
import "./App.scss";
import Room from "components/Room";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Room />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
