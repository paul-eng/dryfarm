import React, { useState, useEffect } from "react";
import Folder from "../assets/folder.png";
import Chart from "./Chart";
import * as util from "../Util";
import "../style/overview.css";

const Overview = (props) => {
  const path = props.location.pathname.slice(10);
  const name = path[0].toUpperCase() + path.slice(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const reset = () => {
    setData({});
    setLoading(true);
  };

  useEffect(() => {
    reset();

    async function getData() {
      const response = await util.fetchData(path);
      setData(response);
      setLoading(false);
    }

    getData();
  }, [path]);

  return (
    <main className="overview">
      <header>
        <img src={Folder} alt="Folder Icon" />
        <h1>{name}</h1>
      </header>
      {loading ? util.loader : <Chart data={data} />}
    </main>
  );
};

export default Overview;
