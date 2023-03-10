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
      console.log(`componentDidUnmount 卸載 : Fish: ${name}`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeColor = (e) => {
    e.preventDefault();
    console.log(`handleChangeColor 變色 : ${name}`);
    
    if (myColor === "透明") setMyColor("紅");
    else setMyColor("透明");
  };

  console.log(`render 渲染 : ${name}`);
  return (
    <Card style={{ width: "19rem" }}>
      <Card.Body>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={1}>
          <Button variant="success" onClick={handleChangeColor}>
            變色
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default Fish;
