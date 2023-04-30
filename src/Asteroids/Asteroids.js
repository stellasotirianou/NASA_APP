import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Header from "../Header";
import Date from "./Date";
import { getCurrentDate } from "../utils";
import DatePicker from "./DatePicker";
import Stack from "react-bootstrap/Stack";
import "../App.css";
import NEOs from "./NEOs";
import { Circles } from "react-loader-spinner";

const Asteroids = () => {
  const currentDate = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async (selectedDate) => {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${selectedDate}&end_date=${selectedDate}&api_key=mY5U7bQe6xACrnedLZj9il1o918YR0xNuk6S1F45&detailed=true`
    );
    try {
      const responseJson = await response.json();
      setData(responseJson);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData(selectedDate);
  }, []);

  return (
    <div>
      <Header
        headerText={"Near Earth Object Tracker"}
        subHeader={
          "A list of Near Earth Objects (NEOs) - Asteroids which are having their closest approach to Earth on the selected date."
        }
      />
      <Stack gap={5} style={{ margin: "20px" }}>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Date selectedDate={selectedDate} />
          </Col>
          <Col>
            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              fetchData={fetchData}
              isLoading={isLoading}
              setLoading={setLoading}
            />
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
          <NEOs data={data} />
        )}
      </Stack>
    </div>
  );
};

export default Asteroids;
