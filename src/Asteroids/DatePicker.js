import * as React from "react";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const DatePicker = (props) => {
  const [showChangeDateModal, setShowChangeDateModal] = useState(false);
  const [dateInput, setDateInput] = useState("");
  const { selectedDate, setSelectedDate, fetchData, isLoading, setLoading } =
    props;

  const updateSelectedDate = () => {
    setShowChangeDateModal(!showChangeDateModal);
    setSelectedDate(dateInput);
    fetchData(dateInput);
    setLoading(true);
  };
  return (
    <>
      <button
        className="btn btn-sm btn-link inline-block float-right"
        onClick={() => setShowChangeDateModal(!showChangeDateModal)}
      >
        Change Date
      </button>
      <Modal
        show={showChangeDateModal}
        onHide={() => setShowChangeDateModal(!showChangeDateModal)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="date"
            className="form-control"
            name="dateInput"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={() => updateSelectedDate()}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DatePicker;
