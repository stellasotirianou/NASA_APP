import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState, useMemo } from "react";
import Header from "../Header";
import Date from "../Asteroids/Date";
import { getCurrentDate } from "../utils";
import Stack from "react-bootstrap/Stack";
import "../App.css";
import Events from "./Events";
import ResultsNumber from "../ResultsNumber";
import Categories from "./Categories";
import { Circles } from "react-loader-spinner";
import { Container } from "react-bootstrap";

const EONET = () => {
  const currentDate = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=20&status=open")
      .then((res) => res.json())
      .then((data) => {
        setData(data.events);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const resNum = data.length;
  const getFilteredList = () => {
    if (selectedCategory === "All") {
      return data;
    }
    return data.filter((item) => item.categories[0].title === selectedCategory);
  };
  var filteredList = useMemo(getFilteredList, [selectedCategory, data]);
  return (
    <>
      <Header
        headerText={"Earth Observatory Natural Event Tracker"}
        subHeader={
          "A list of natural events that occured and are still occuring from the past 20 days until today."
        }
      />
      <Stack gap={3} style={{ margin: "20px" }}>
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
        <Row style={{ textAlign: "left", marginBottom: "20px" }}>
          <Col>
            <Container>
              <Categories
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </Container>
          </Col>
        </Row>
        {isLoading ? (
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
        ) : (
          <Events data={filteredList} currentDate={currentDate} />
        )}
      </Stack>
    </>
  );
};

export default EONET;
