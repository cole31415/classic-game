import React from "react";
import './utils-card.less';

const UtilsCard = ({ title, url, onclick }) => {
  return (
    <div className="card-container" onClick={onclick}>
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
