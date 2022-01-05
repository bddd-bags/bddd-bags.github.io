import React, { useState } from "react";
import { Link } from "react-router-dom";

const Level = () => {
  const [value, setValue] = useState(["GRAND MASTER"]);
  const levels = [
    "NOVICE",
    "CLASS A",
    "CLASS B",
    "CLASS C",
    "CLASS D",
    "CANDIDATE MASTER",
    "GRAND MASTER",
  ];

  return (
    <div className="d-flex justify-content-between">
      {levels.map((e) => {
        return (
          <Link
            className="candidate"
            id={e}
            to="#"
            style={e == "GRAND MASTER" ? { background: "orange" } : {}}
          >
            {e}
          </Link>
        );
      })}
    </div>
  );
};

export default Level;
