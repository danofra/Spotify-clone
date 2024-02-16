import { Row, Col } from "react-bootstrap";
import SinglealbumComponent from "./SinglealbumComponent";

const HipHopComponent = () => {
  return (
    <Row>
      <Col>
        <div id="hiphop">
          <h2>#HipHop</h2>
          <Row
            className="mb-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"
            id="hiphopSection"
          >
            <SinglealbumComponent query="hippop" />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default HipHopComponent;
