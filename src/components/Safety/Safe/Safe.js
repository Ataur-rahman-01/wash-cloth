import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faUserFriends,
  faStopwatch,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import aimg from "../../../Images/home.jpg";

const Safe = () => {
  return (
    <div className="row m-5">
      <small>YOUR LAUNDRY EXPERTS</small>
      <h2>Your Safety Is Our Priority</h2>
      <div className="col-md-6 row d-flex align-items-center">
        <div className="col-md-6">
          <FontAwesomeIcon
            className="text-info"
            size="lg"
            icon={faUserShield}
          />
          <h3 className="text-danger">Eco Friendly</h3>
          <p>
            Adipiscing elit ut elit tellus, luctus nec ullamcorper mattis
            pulvinar
          </p>
        </div>
        <div className="col-md-6">
          <FontAwesomeIcon
            className="text-info"
            size="lg"
            icon={faUserFriends}
          />
          <h3 className="text-danger">Rinse Repeat</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            magnam.
          </p>
        </div>
        <div className="col-md-6">
          <FontAwesomeIcon className="text-info" size="lg" icon={faStopwatch} />
          <h3 className="text-danger">Steam Pressing</h3>
          <p>
            Adipiscing elit ut elit tellus, luctus nec ullamcorper mattis
            pulvinar
          </p>
        </div>
        <div className="col-md-6">
          <FontAwesomeIcon
            className="text-info"
            size="lg"
            icon={faStickyNote}
          />
          <h3 className="text-danger">No Dryer</h3>
          <p>
            Adipiscing elit ut elit tellus, luctus nec ullamcorper mattis
            pulvinar
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <img className="img-fluid rounded-3" src={aimg} alt="" />
      </div>
    </div>
  );
};

export default Safe;
