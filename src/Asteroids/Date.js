import * as React from "react";
import Typography from "@mui/material/Typography";
import { formatDate } from "../utils";

const Date = ({ selectedDate }) => {
  let date = formatDate(
    selectedDate.slice(8),
    selectedDate.slice(5, 7),
    selectedDate.slice(0, 4)
  );
  return (
    <Typography variant="overline" style={{ fontSize: "large" }}>
      {date}
    </Typography>
  );
};

export default Date;
