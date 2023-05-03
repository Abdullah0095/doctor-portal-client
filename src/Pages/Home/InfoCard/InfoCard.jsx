import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const InfoCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Openning Hours",
      description: "Open 9.00 am to 5.00 pm",
      icon: clock,
      bgClass: "bg-accent",
    },
    {
      id: 2,
      title: "Our Locations",
      description: "Open 9.00 am to 5.00 pm",
      icon: marker,
      bgClass: "bg-slate-900",
    },
    {
      id: 3,
      title: "Contact Us now",
      description: "Open 9.00 am to 5.00 pm",
      icon: phone,
      bgClass: "bg-accent",
    },
  ];

  return (
    <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card) => (
        <InfoCardDetail key={card.id} card={card}></InfoCardDetail>
      ))}
    </div>
  );
};

const InfoCardDetail = ({ card }) => {
  const { title, description, icon, bgClass } = card;
  return (
    <div className={`card card-side shadow-xl ${bgClass}`}>
      <figure>
        <img className="p-6" src={icon} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
