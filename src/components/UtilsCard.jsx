import React from "react";
import './utils-card.less';

const UtilsCard = ({ title, url }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={url} alt="" width="100%" />
      </div>
      <div className="card-title">
        {title}
      </div>
    </div>
  );
};

export default UtilsCard;
