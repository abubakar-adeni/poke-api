import React from "react";
import PropTypes from "prop-types";

const Card = ({ name, images, color, type }) => {
  return (
    <div
      className={`w-full h-[300px] sm:h-[200px] rounded-lg shadow-lg relative ${color}`}>
      <img
        src={images}
        alt="pokemon-main-img"
        className="w-full h-full object-contain rounded-lg"
      />
      <button className="absolute top-0 right-0 rounded-bl-md capitalize rounded-bl-2xl px-5 py-0.5 shadow-lg">
        <p
          className={`${color} rounded-2xl px-5 py-0.5 text-xs font-semibold uppercase`}>
          {type}
        </p>
      </button>
      <div
        className={`absolute bg-[#680aab] bottom-0 rounded-bl-md capitalize rounded-tr-2xl px-5 py-0.5`}>
        <p>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  images: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Card;
