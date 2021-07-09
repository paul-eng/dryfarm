import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import * as util from "../Util";
import "../style/home.css";

// if you're reading this, the Home component is a perfect example of the kind of 
// ugly unreadable code I said NOT to implement. If I wasn't rushing
// this would definitely look different ;)

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);

    (async () => {
      const tables = await util.fetchTables();
      tables.forEach(async (table) => {
        const res = await util.fetchData(table);
        setData((data) => [...data, [table, res]]);
      });
    })();
  }, []);

  const charts = data.map((datum, i) => (
    <div className="homeChart" key={"chart" + i}>
      <Chart data={datum[1]} />
      <h3>{datum[0].toUpperCase()}</h3>
    </div>
  ));

  return (
    <main className="home">
      <section>{charts.length !== 3 ? util.loader : charts}</section>
    </main>
  );
};

export default Home;
