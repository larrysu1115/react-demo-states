import "./App.css";
import "./App.scss";
import Room from "components/Room";
// import Fish from "components/Fish";
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
            {/* <Fish number={123} type={"燈籠魚"} color={"藍"} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
