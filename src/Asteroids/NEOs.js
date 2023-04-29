import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Modal } from "react-bootstrap";
import MoreInfo from "./MoreInfo";

const NEOs = ({ data }) => {
  const [showChangeDateModal, setShowChangeDateModal] = useState(false);
  const modifyData = (item) => {
    let neo = {
      name: item.name,
      id: item.id,
      close_approach_date: item.close_approach_data["0"].close_approach_date,
      close_approach_date_full:
        item.close_approach_data["0"].close_approach_date_full,
      relative_velocity_kmph: parseFloat(
        item.close_approach_data["0"].relative_velocity.kilometers_per_hour
      ).toFixed(2),
      relative_velocity_kmps: parseFloat(
        item.close_approach_data["0"].relative_velocity.kilometers_per_second
      ).toFixed(2),
      miss_distance_kms: parseFloat(
        item.close_approach_data["0"].miss_distance.kilometers
      ).toFixed(2),
      miss_distance_au: parseFloat(
        item.close_approach_data["0"].miss_distance.astronomical
      ).toFixed(3),
      miss_distance_lunar: parseFloat(
        item.close_approach_data["0"].miss_distance.lunar
      ).toFixed(0),
      diameter_max_kms: parseFloat(
        item.estimated_diameter.kilometers.estimated_diameter_max
      ).toFixed(2),
      diameter_min_kms: parseFloat(
        item.estimated_diameter.kilometers.estimated_diameter_min
      ).toFixed(2),
      potential_hazardous: item.is_potentially_hazardous_asteroid,
      first_observation_date: item.orbital_data.first_observation_date,
      orbital_period: parseFloat(item.orbital_data.orbital_period).toFixed(0),
      orbit_class_type: item.orbital_data.orbit_class
        ? item.orbital_data.orbit_class.orbit_class_type
        : null,
      orbit_class_description: item.orbital_data.orbit_class
        ? item.orbital_data.orbit_class.orbit_class_description
        : null,
      nasa_jpl_url: item.nasa_jpl_url,
    };
    return neo;
  };
  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {Object.values(data.near_earth_objects).map((asteroid) =>
            asteroid.map((item, key) => {
              const neo = modifyData(item);
              console.log(neo);
              return (
                <>
                  <Col key={key}>
                    <Card sx={{ minWidth: 275 }} raised>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                        >
                          NEO Ref. ID: {neo.id}
                        </Typography>
                        <Typography variant="h5" component="div" gutterBottom>
                          Asteroid {neo.name}
                        </Typography>
                        <Typography variant="body2">
                          Is potential hazardous:{" "}
                          {neo.potential_hazardous ? "Yes" : "No"}
                        </Typography>
                        <Typography variant="body2">
                          Relative Velocity: {neo.relative_velocity_kmph} kmph
                        </Typography>
                        <Typography variant="body2">
                          Earth miss distance: {neo.miss_distance_kms} kms
                          <br />
                          Estimated diameter: {neo.diameter_min_kms} -{" "}
                          {neo.diameter_max_kms} kms
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() =>
                            setShowChangeDateModal(!showChangeDateModal)
                          }
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                    <MoreInfo
                      neo={neo}
                      showChangeDateModal={showChangeDateModal}
                      setShowChangeDateModal={setShowChangeDateModal}
                    />
                  </Col>
                </>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default NEOs;
