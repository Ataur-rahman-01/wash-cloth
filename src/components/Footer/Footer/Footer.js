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
    <div classnameName="row m-5">
      <div classnameName="col-md-4">
        <div>
          <ul classname="list-group list-group-flush">
            <li classname="list-group-item">
              <FontAwesomeIcon
                classnameName="text-info me-3"
                icon={faHouseUser}
              />
              Detheme Design Studio
            </li>
            <li classname="list-group-item">
              <FontAwesomeIcon
                classnameName="text-info me-3"
                icon={faLocationArrow}
              />
              1428 Callison Laney Buoy Building
              <br />
              201/VRY Virginia, VA 22902
            </li>
            <li classname="list-group-item">
              <FontAwesomeIcon classnameName="text-info me-3" icon={faPhone} />
              +62 9282739-44-539
            </li>
            <li classname="list-group-item">
              <FontAwesomeIcon
                classnameName="text-info me-3"
                icon={faEnvelope}
              />
              contact@mywebsite.com
            </li>
          </ul>
        </div>
      </div>
      <div classnameName="col-md-4">
        <div>
          <ul classname="list-group list-group-flush">
            <h5>THE COMPANY</h5>
            <li classname="list-group-item">Career</li>
            <li classname="list-group-item">Angel Investor</li>
            <li classname="list-group-item">Terms of Service</li>
            <li classname="list-group-item">Legal Information</li>
            <li classname="list-group-item">Credits</li>
          </ul>
        </div>
      </div>
      <div classnameName="col-md-2">
        <ol classname="list-group list-group-numbered">
          <h5>USEFUL LINKS</h5>
          <li classname="list-group-item">Map direction</li>
          <li classname="list-group-item">Live events</li>
          <li classname="list-group-item">Get in touch</li>
          <li classname="list-group-item">Knowledgebase</li>
        </ol>
      </div>
      <div classnameName="col-md-2">
        <ol classname="list-group list-group-numbered">
          <h5>FOLLOW US</h5>
          <li classname="list-group-item">Facebook</li>
          <li classname="list-group-item">Twitter</li>
          <li classname="list-group-item">Instagram</li>
          <li classname="list-group-item">LinkedIn</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
