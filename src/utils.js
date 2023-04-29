export function getCurrentDate() {
  let newDate = new Date();
  let date = newDate.getDate().toString();
  let month = (newDate.getMonth() + 1).toString();
  let year = newDate.getFullYear().toString();

  month = (month.length===1) ? (0+month) : month;
  date = (date.length===1) ? (0+date) : date;

  return `${year}-${month}-${date}`;
}

export function formatDate(date, month, year) {
  let monthString;
  switch (month) {
    case "01":
      monthString = "January";
      break;
    case "02":
      monthString = "February";
      break;
    case "03":
      monthString = "March";
      break;
    case "04":
      monthString = "April";
      break;
    case "05":
      monthString = "May";
      break;
    case "06":
      monthString = "June";
      break;
    case "07":
      monthString = "July";
      break;
    case "08":
      monthString = "August";
      break;
    case "09":
      monthString = "September";
      break;
    case "10":
      monthString = "October";
      break;
    case "11":
      monthString = "November";
      break;
    case "12":
      monthString = "December";
      break;
    default:
      monthString = null;
  }

  return `${monthString} ${date}, ${year}`;
}
