import doba from "./doba.svg";
import porce from "./porce.svg";
import "./index.css"

export const Icon = ({ type }) => {
  let url = "";
  if (type === "doba") {
    url = doba;
  } else if (type === "porce") {
    url = porce;
  }
  return <img src={url} alt="" className="icon" />;
};
