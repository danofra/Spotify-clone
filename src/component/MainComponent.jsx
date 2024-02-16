import RockComponent from "./RockComponent";
import PopComponent from "./PopComponent";
import HipHopComponent from "./HiphopComponent";
import { Container } from "react-bootstrap";

function MainComponent() {
  return (
    <>
      <Container>
        <RockComponent />
        <PopComponent />
        <HipHopComponent />
      </Container>
    </>
  );
}
export default MainComponent;
