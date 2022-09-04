import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ user }) => {
  return user.qualities.map((item) => (
    <span key={item._id} className={"badge m-1 text-bg-" + item.color}>
      {item.name}
    </span>
  ));
};
Qualities.propTypes = {
  user: PropTypes.object.isRequired
};
export default Qualities;
