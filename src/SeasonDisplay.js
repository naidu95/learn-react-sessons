import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  Summer: {
    text: "this is summer",
    iconName: "fa-snowflake-o",
  },
  Winter: {
    text: "this is winter",
    iconName: "fa-sun-o",
  },
};

const Season = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = Season(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} fa`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} fa`} />
    </div>
  );
};
export default SeasonDisplay;
