import { Row, Col } from "react-bootstrap";
import SinglealbumComponent from "./SinglealbumComponent";
const RockComponent = () => {
  return (
    <Row>
      <Col>
        <div id="rock">
          <h2>Gothic Metal</h2>
          <Row
            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"
            id="rockSection"
          >
            <SinglealbumComponent query="nightwish" />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default RockComponent;
