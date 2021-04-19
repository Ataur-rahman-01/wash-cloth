import React from "react";
import InfoCard from "../infoCard/InfoCard";
const infodata = [
  {
    title: "Clothes Wash",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus!",
    price: 40,
    background: "primary",
  },
  {
    title: "Footwears Wash",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus!",
    price: 30,
    background: "info",
  },
  {
    title: "Dolls Wash",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus!",
    price: 20,
    background: "primary",
  },
  {
    title: "Trousers Wash",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus!",
    price: 50,
    background: "info",
  },
];

const Business = () => {
  return (
    <section>
      <h2 className="text-center fs-1 text-danger">
        No Hidden Fees. No
        <br /> Confusing Tiered Pricing
      </h2>
      <div className="row m-5">
        {infodata.map((info) => (
          <InfoCard info={info} key={info.price}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default Business;
