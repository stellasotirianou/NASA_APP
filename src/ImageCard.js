import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";

const ImageCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=mY5U7bQe6xACrnedLZj9il1o918YR0xNuk6S1F45"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
