import { Row, Col } from "react-bootstrap";
import SinglealbumComponent from "./SinglealbumComponent";
const PopComponent = () => {
  return (
    <Row>
      <Col>
        <div id="pop">
          <h2>Pop Culture</h2>
          <Row
            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"
            id="popSection"
          >
            <SinglealbumComponent query="nelly furtado" />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default PopComponent;
