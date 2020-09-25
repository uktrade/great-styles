import React from "react";

export default { title: "Colours" };

const colors = [
  "black-100",
  "black-90",
  "black-80",
  "black-70",
  "black-60",
  "black-50",
  "black-40",
  "black-30",
  "black-20",
  "black-10",
  "blue-deep-100",
  "blue-deep-90",
  "blue-deep-80",
  "blue-deep-70",
  "blue-deep-60",
  "blue-deep-50",
  "blue-deep-40",
  "blue-deep-30",
  "blue-deep-20",
  "blue-deep-10",
  "aqua-100",
  "aqua-20",
  "red-100",
  "red-90",
  "red-80",
  "red-70",
  "red-60",
  "red-50",
  "red-40",
  "red-30",
  "red-20",
  "red-10",
  "green-100",
  "green-30",
  "light-grey",
  "grey",
  "white"
];

export const Text_Colours = () => (
  <div className="m-s">
    {colors.map(color => {
      const textColor = `text-${color}`;
      return (
        <p
          className={`${textColor} ${color === "white" && "bg-black-100"} `}
        >{`.${textColor}`}</p>
      );
    })}
  </div>
);

export const BG_Colours = () => (
  <div className="m-s" style={{ color: "white" }}>
    {colors.map(color => {
      const backgroundColor = `bg-${color}`;
      return (
        <p
          className={`${backgroundColor} ${color === "white" &&
            "text-black-100"} `}
        >{`.${backgroundColor}`}</p>
      );
    })}
  </div>
);
