import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import * as util from "../Util";
import "../style/sidebar.css";

const Sidebar = () => {
  const [tables, setTables] = useState([]);

  // useEffect does not expect callback to return promise, will throw error
  // workaround by wrapping async in synchronous function
  // replace with Suspense once available in stable release

  useEffect(() => {
    // (async () => {
    //   setTables(await util.fetchTables());
    // })();

    async function getTables() {
      const response = await util.fetchTables();
      setTables(response);
    }

    getTables();
  }, []);

  const links = tables.map((table) => (
    <Link key={`${table}_link`} to={`/overview/${table}`}>
      {table[0].toUpperCase() + table.slice(1)}
    </Link>
  ));

  return (
    <nav className="sidebar">
      <Link to="/">
        <img src={Logo} alt="Dry Farm Wines" />
      </Link>
      <ul>{links}</ul>
      <ul>{menu()}</ul>
    </nav>
  );
};

export default Sidebar;

const menu = () => {
  return ["Users", "Schedules", "Tasks", "Settings"].map((option, i) => (
    <a href={`#/${option.toLowerCase()}`} key={`menu_link_${i}`}>
      {option}
    </a>
  ));
};
