import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const PreferitiComponent = () => {
  const preferitiSong = useSelector((state) => state.favorites.content);
  return (
    <>
      {preferitiSong.map((song) => {
        return (
          <>
            <Row className="d-flex justify-content-center align-items-center">
              <Col key={song.id} className="text-center">
                <Image src={song.album.cover_medium} alt={song.title} />
                <p>
                  {song.title} - {song.artist.name}
                </p>
              </Col>
            </Row>
          </>
        );
      })}
    </>
  );
};
export default PreferitiComponent;
