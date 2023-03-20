import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import DatePickerValue from "react-datepicker"; //from "./DatePicker"
//import ImageCard from "./ImageCard";


function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=mY5U7bQe6xACrnedLZj9il1o918YR0xNuk6S1F45"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // return (
  //   <DatePickerValue />
  // );

  // DOULEUEI
 
  // const [date, setDate] = useState();
  // console.log("Date", date);
  // return(
  // <>
  // <h1>Select Date: {date}</h1>
  // <input type="date"  placeholder="dd-mm-yyyy" onChange={e=>setDate(e.target.value)}/>

  // </>
  // );

  const [selectedDate, setSelectedDate] = useState(null);
  return(
    <div>
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
    </div>
  );
}

export default App;
