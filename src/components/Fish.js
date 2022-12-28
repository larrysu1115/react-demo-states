import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function Fish({ number = 0, type = "?", color = "" }) {
  const [myColor, setMyColor] = useState(color);

  const name = `Fish: ${type}_${myColor}_${number}`;

  useEffect(() => {
    console.log(`componentDidMount 加載 : ${name}`);
    return () => {
      console.log(`componentDidUnmount 卸載 : ${name}`);
    };
  }, []);

  console.log(`render 渲染 : ${name}`);
  return (
    <Card style={{ width: "19rem" }}>
      <Card.Body>
        <Card.Text>
          {name}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={1}>
          <Button variant="success" onClick={() => setMyColor("透明")}>
            變色
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default Fish;
