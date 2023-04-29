import * as React from "react";
import { Modal } from "react-bootstrap";

const MoreInfo = (props) => {
  const { showChangeDateModal, setShowChangeDateModal, neo } = props;
  return (
    <>
      <Modal
        show={showChangeDateModal}
        onHide={() => setShowChangeDateModal(!showChangeDateModal)}
      >
        <Modal.Header closeButton>
          <Modal.Title>More Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span style={{ fontWeight: "bold" }}>NEO Reference ID : </span>
            {neo.id}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Relative velocity kms per hour:{" "}
            </span>
            {neo.relative_velocity_kmph}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Relative velocity kms per second:{" "}
            </span>
            {neo.relative_velocity_kmps}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Earth miss distance kms:{" "}
            </span>
            {neo.miss_distance_kms}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Earth miss distance lunar distance:{" "}
            </span>
            {neo.miss_distance_lunar}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Earth miss distance AU :{" "}
            </span>
            {neo.miss_distance_au} **
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}> Estimated diameter : </span>
            {neo.diameter_min_kms} - {neo.diameter_max_kms} kms
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Is potential hazardous :{" "}
            </span>
            {neo.potential_hazardous ? "Yes" : "No"}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Earth closest approach date :{" "}
            </span>
            {neo.close_approach_date}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Earth closest approach date full :{" "}
            </span>
            {neo.close_approach_date_full}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              First observation date :{" "}
            </span>
            {neo.first_observation_date}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Orbital period : </span>
            {neo.orbital_period} days
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}> Orbit class type : </span>
            {neo.orbit_class_type}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Orbit class description :{" "}
            </span>
            {neo.orbit_class_description}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MoreInfo;
