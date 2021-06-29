import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserIcon from "../assets/user.svg";
import UserSettings from "../assets/user_settings.svg";
import "../style/statusbar.css";

const Statusbar = (props) => {
  const history = useHistory();

  const getPath = (location) => {
    const path = location.pathname;
    if (path.slice(1, 9) === "overview") {
      let tableName = path.slice(10);
      return tableName[0].toUpperCase() + tableName.slice(1);
    } else {
      return "";
    }
  };
  
  const [name, setName] = useState(getPath(history.location));

  useEffect(() => {
    history.listen((loc) => {
      setName(getPath(loc));
    });
  }, [history]);

  return (
    <aside className="statusbar">
      <section>
        <strong>{name}</strong> {name !== "" ? "/ Overview" : ""}
      </section>

      <section>
        <img src={UserSettings} alt="User" />
        <img src={UserIcon} alt="User" />
      </section>
    </aside>
  );
};

export default Statusbar;
