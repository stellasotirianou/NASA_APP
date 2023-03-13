import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(dayjs("2022-04-17"));

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container rowSpacing={8}>
        <Grid item>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </Grid>
        <Grid item>
          <ImageCard data={data} />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default App;
