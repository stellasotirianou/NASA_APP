import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import "./App.css";
const Header = ({ headerText, subHeader }) => {
  return (
    <>
      <Row>
        <Col style={{ backgroundColor: "#f9f9f9" }}>
          <Typography
            variant="h5"
            align="center"
            component="div"
            className="heading"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              color: "#43484c",
            }}
          >
            {headerText}
          </Typography>
        </Col>
      </Row>
      {subHeader && (
        <Row>
          <Col style={{ backgroundColor: "#f9f9f9" }}>
            <Typography
              variant="subtitle"
              align="center"
              component="div"
              className="heading"
              style={{ marginBottom: "20px", color: "#43484c" }}
            >
              {subHeader}
            </Typography>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Header;
