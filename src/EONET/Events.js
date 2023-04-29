import * as React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
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
                  <Card>
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>
                        {formatDate(
                          dates.slice(8),
                          dates.slice(5, 7),
                          dates.slice(0, 4)
                        )}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Category: {event.categories[0].title}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        Coordinates: [ {event.geometries[0].coordinates[0]} ,
                        {event.geometries[0].coordinates[1]}]
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href={event.sources[0].url} target="_blank">
                        More Information
                      </Card.Link>
                    </Card.Body>
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
