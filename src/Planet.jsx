import { useParams } from "react-router-dom";
import data from "./data.json";

export default function Planet() {
  const { planet } = useParams();

  const currentPlanet = data.find((item) => item.name === planet);

  return (
    <div
      style={{
        // eslint-disable-next-line react/prop-types
        // background: props.planet.color,
        background: currentPlanet.color,
        width: "5rem",
        height: "5rem",
        fontSize: "1.5rem",
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {/* {props.planet.name} */}
      {currentPlanet.name}
    </div>
  );
}
