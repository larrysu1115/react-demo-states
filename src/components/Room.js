import { useState, useEffect } from "react";
import Tank from "components/Tank";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function Room() {
  const [tankA, setTankA] = useState("淡水魚缸");
  const [tankB, setTankB] = useState("海水魚缸");
  const [isTankBDeleted, setIsTankBDeleted] = useState(false);

  const name = "Room";

  useEffect(() => {
    console.log(`componentDidMount 加載 : ${name}`);
    return () => {
      console.log(`componentDidUnmount 卸載 : ${name}`);
    };
  }, []);

  console.log(`render 渲染 : ${name}`);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Card style={{ width: "90%", margin: "auto" }}>
        <Card.Header>Room : 房間裡有魚缸</Card.Header>
        <ListGroup horizontal>
          <ListGroup.Item key="a">
            <Tank label={tankA} />
          </ListGroup.Item>
          {isTankBDeleted ? null : (
            <ListGroup.Item key="b">
              <Tank label={tankB} />
            </ListGroup.Item>
          )}
        </ListGroup>

        <Card.Footer>
          <Stack direction="horizontal" gap={3}>
            <Button variant="warning" onClick={() => setTankA("水草缸")}>
              換左邊魚缸名
            </Button>
            <Button variant="warning" onClick={() => setTankB("米蝦缸")}>
              換右邊魚缸名
            </Button>
            <Button variant="danger" onClick={() => setIsTankBDeleted(true)}>
              刪除右邊魚缸
            </Button>
          </Stack>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Room;
