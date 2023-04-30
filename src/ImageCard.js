import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ImageCard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=mY5U7bQe6xACrnedLZj9il1o918YR0xNuk6S1F45"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  isLoading && (
    <Row style={{ alignSelf: "center", marginTop: "140px" }}>
      <Col>
        <Circles
          height="80"
          width="80"
          color="#0b3d91"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Col>
    </Row>
  );
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          width="140"
          image={data.url}
          alt="nasa image of the day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
