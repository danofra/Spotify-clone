import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import fetchMusic from "../Api";

const SinglealbumComponent = (props) => {
  const [singleAlbum, setSingleAlbum] = useState([]);
  const par = props.query;

  useEffect(() => {
    fetchMusic(par).then((data) => {
      return setSingleAlbum(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("ciao", singleAlbum);
  return (
    <>
      {singleAlbum &&
        singleAlbum.slice(0, 4).map((song) => {
          return (
            <Col
              key={song.id}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Image src={song.album.cover_medium} alt={song.title} />
              <p>
                {song.title} - {song.artist.name}
              </p>
              <p>
                <Button variant="outline-success " className="mt-1">
                  Add to Playlist
                </Button>
              </p>
            </Col>
          );
        })}
    </>
  );
};

export default SinglealbumComponent;
