import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const InfoCard = ({ info }) => {
  return (
    <div className={`col-md-4`}>
      <div className={`m-3 bg-${info.background} p-3 rounded-3`}>
        <h4>{info.title}</h4>
        <p>{info.description}</p>
        <h3>${info.price}</h3>
        <button className="btn btn-danger">
          <FontAwesomeIcon icon={faShoppingCart} />
          Get Services
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
