import React from "react";
import we from "../../../Images/wearejpg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faClock,
  faCreditCard,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Whowe = () => {
  return (
    <div className="row m-5 d-flex align-items-center">
      <div className="col-md-3 P-3">
        <img className="img-fluid" src={we} alt="" />
      </div>
      <div className="col-md-5 d-flex align-items-center P-3">
        <div className="text-center col-md-3">
          <FontAwesomeIcon className="text-info" icon={faBroom} size="4x" />
          <br />
          <h4 className="m-3" style={{ marginLeft: "-30px" }}>
            Neat Folding
          </h4>
        </div>
        <div className="text-center col-md-3">
          <FontAwesomeIcon className="text-info" icon={faClock} size="4x" />
          <br />
          <h4 className="m-3" style={{ marginLeft: "-10px" }}>
            Quick Dry
          </h4>
        </div>
        <div className="text-center col-md-3">
          <FontAwesomeIcon
            className="text-info"
            icon={faCreditCard}
            size="4x"
          />
          <br />
          <h4 className="m-3" style={{ marginLeft: "-10px" }}>
            Easy Payment
          </h4>
        </div>
        <div className="text-center col-md-3">
          <FontAwesomeIcon className="text-info" icon={faHome} size="4x" />
          <br />
          <h4 className="m-3" style={{ marginLeft: "-10px" }}>
            Pickup Ready
          </h4>
        </div>
      </div>
      <div className="col-md-4 P-3">
        <h2 className="text-warning">Customer Centric Laundry Company</h2>
        <h5 className="text-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quo necessitatibus harum, incidunt itaque totam consectetur aperiam
          aspernatur magni omnis aliquam, ut exercitationem quae nihil error.
        </h5>
      </div>
    </div>
  );
};

export default Whowe;
