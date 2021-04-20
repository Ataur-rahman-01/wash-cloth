import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="row m-5">
      <div className="col-md-4">
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <FontAwesomeIcon className="text-info me-3" icon={faHouseUser} />
              Detheme Design Studio
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon
                className="text-info me-3"
                icon={faLocationArrow}
              />
              1428 Callison Laney Buoy Building
              <br />
              201/VRY Virginia, VA 22902
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon className="text-info me-3" icon={faPhone} />
              +62 9282739-44-539
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon className="text-info me-3" icon={faEnvelope} />
              contact@mywebsite.com
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div>
          <ul className="list-group list-group-flush">
            <h5>THE COMPANY</h5>
            <li className="list-group-item">Career</li>
            <li className="list-group-item">Angel Investor</li>
            <li className="list-group-item">Terms of Service</li>
            <li className="list-group-item">Legal Information</li>
            <li className="list-group-item">Credits</li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <ol className="list-group list-group-numbered">
          <h5>USEFUL LINKS</h5>
          <li className="list-group-item">Map direction</li>
          <li className="list-group-item">Live events</li>
          <li className="list-group-item">Get in touch</li>
          <li className="list-group-item">Knowledgebase</li>
        </ol>
      </div>
      <div className="col-md-2">
        <ol className="list-group list-group-numbered">
          <h5>FOLLOW US</h5>
          <li className="list-group-item">Facebook</li>
          <li className="list-group-item">Twitter</li>
          <li className="list-group-item">Instagram</li>
          <li className="list-group-item">LinkedIn</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
