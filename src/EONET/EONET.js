import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Header from "../Header";
import Date from "../Asteroids/Date";
import { getCurrentDate } from "../utils";
import Stack from "react-bootstrap/Stack";
import "../App.css";
import Events from "./Events";
import ResultsNumber from "../ResultsNumber";

const EONET = () => {
  const currentDate = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=10&status=open")
      .then((res) => res.json())
      .then((data) => {
        setData(data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const resNum = data.length;
  return (
    <Stack gap={3}>
      <Header headerText={"Earth Observatory Natural Event Tracker"} />

      <Row style={{ textAlign: "center" }}>
        <Col>
          <Date selectedDate={selectedDate} />
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <ResultsNumber text={resNum} />
        </Col>
      </Row>
      <Events data={data} currentDate={currentDate}/>
    </Stack>
  );
};

export default EONET;
