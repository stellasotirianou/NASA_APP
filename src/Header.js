import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import "./App.css";
const Header = ({ headerText }) => {
  return (
    <Row>
      <Col style={{ backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h5"
          align="center"
          component="div"
          className="heading"
          style={{ margin: "20px", color: "#43484c" }}
        >
          {headerText}
        </Typography>
      </Col>
    </Row>
  );
};

export default Header;
