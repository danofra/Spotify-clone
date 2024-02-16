import { Container, Row, Col, Image } from "react-bootstrap";
import Next from "../assets/img/next.png";
import Play from "../assets/img/play.png";
/* import Pause from "../assets/img/pause.png" */
import Prev from "../assets/img/prev.png";
import Repeat from "../assets/img/repeat.png";
/* import RepeatOne from "../assets/img/repeat-one.png" */
import Shuffle from "../assets/img/shuffle.png";
import { ProgressBar } from "react-bootstrap";
/* import Volume from "../assets/img/volume.png"
import VolumeDown from "../assets/img/volume-down.png"
import VolumeUp from "../assets/img/volume-up.png" */

const PlayerControls = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Container fluid>
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <Image src={Shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <Image src={Prev} alt="prev" />
                  </a>
                  <a href="#">
                    <Image src={Play} alt="play" />
                  </a>
                  <a href="#">
                    <Image src={Next} alt="next" />
                  </a>
                  <a href="#">
                    <Image src={Repeat} alt="repeat" />
                  </a>
                </div>
                <ProgressBar className=" progress mt-3" now={50} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayerControls;
