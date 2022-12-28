import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Fish from "components/Fish";
import ListGroup from "react-bootstrap/ListGroup";

function Tank({ label = "X" }) {
  const [fishes, setFishes] = useState([{ number: 99, color: "黑", type: "始祖魚" }]);

  const name = `Tank: ${label}`;

  const handleAddFish = () => {
    const newFish = { number: fishes.length + 1, color: "紅", type: "孔雀魚" };
    setFishes([newFish, ...fishes]);
  };

  const handleClearFish = () => {
    setFishes([]);
  };

  const fishItems = fishes.map((x) => (
    <ListGroup.Item key={x.number}>
      <Fish number={x.number} type={x.type} color={x.color} />
    </ListGroup.Item>
  ));

  useEffect(() => {
    console.log(`componentDidMount 加載 : ${name}`);
    return () => {
      console.log(`componentDidUnmount 卸載 : ${name}`);
    };
  }, []);

  console.log(`render 渲染 : ${name}`);
  return (
    <Card style={{ minWidth: "22rem" }}>
      <Card.Header>{name}</Card.Header>
      <ListGroup variant="flush">
        {fishItems}
      </ListGroup>

      <Card.Footer>
        <Stack direction="horizontal" gap={1}>
          <Button variant="primary" onClick={handleAddFish}>
            加魚
          </Button>
          <Button variant="secondary" onClick={handleClearFish}>
            清空
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default Tank;
