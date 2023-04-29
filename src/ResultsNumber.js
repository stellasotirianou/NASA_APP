import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import "./App.css";

const ResultsNumber = ({ text }) => {
  return (
    <Row>
      <Col>
        <Typography
          variant="subtitle"
          align="center"
          component="div"
          className="heading"
          style={{ margin: "20px", color: "#43484c" }}
        >
          {text} events found for the past 10 days
        </Typography>
      </Col>
    </Row>
  );
};

export default ResultsNumber;
