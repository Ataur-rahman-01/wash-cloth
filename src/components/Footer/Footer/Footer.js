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
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <FontAwesomeIcon className="text-info me-3" icon={faHouseUser} />
              Detheme Design Studio
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon
                className="text-info me-3"
                icon={faLocationArrow}
              />
              1428 Callison Laney Buoy Building
              <br />
              201/VRY Virginia, VA 22902
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon className="text-info me-3" icon={faPhone} />
              +62 9282739-44-539
            </li>
            <li class="list-group-item">
              <FontAwesomeIcon className="text-info me-3" icon={faEnvelope} />
              contact@mywebsite.com
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div>
          <ul class="list-group list-group-flush">
            <h5>THE COMPANY</h5>
            <li class="list-group-item">Career</li>
            <li class="list-group-item">Angel Investor</li>
            <li class="list-group-item">Terms of Service</li>
            <li class="list-group-item">Legal Information</li>
            <li class="list-group-item">Credits</li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <ol class="list-group list-group-numbered">
          <h5>USEFUL LINKS</h5>
          <li class="list-group-item">Map direction</li>
          <li class="list-group-item">Live events</li>
          <li class="list-group-item">Get in touch</li>
          <li class="list-group-item">Knowledgebase</li>
        </ol>
      </div>
      <div className="col-md-2">
        <ol class="list-group list-group-numbered">
          <h5>FOLLOW US</h5>
          <li class="list-group-item">Facebook</li>
          <li class="list-group-item">Twitter</li>
          <li class="list-group-item">Instagram</li>
          <li class="list-group-item">LinkedIn</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
