import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container, Row, Col } from "react-bootstrap";
import { formatDate } from "../utils";

const Events = ({ data, currentDate }) => {
  const generalDate = currentDate.slice(0, 4);
  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((event, key) => {
            const dates = event.geometries
              .findLast((obj) => {
                return obj.date.includes(generalDate);
              })
              .date.slice(0, 10);
            return (
              <>
                <Col key={key}>
                  <Card sx={{ minWidth: 275 }} raised>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {event.title}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        color="text.secondary"
                      >
                        {formatDate(
                          dates.slice(8),
                          dates.slice(5, 7),
                          dates.slice(0, 4)
                        )}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: "10px" }}>
                        Category: {event.categories[0].title}
                      </Typography>
                      <Typography variant="body2">
                        Coordinates: [ {event.geometries[0].coordinates[0]} ,{" "}
                        {event.geometries[0].coordinates[1]} ]
                      </Typography>
                      <a href={event.sources[0].url} target="_blank">
                        More Information
                      </a>
                    </CardContent>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Events;
