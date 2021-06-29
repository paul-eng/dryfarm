export const fetchTables = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["shopify", "recharge", "zendesk"]);
    }, 2000);
  });
};

export const fetchData = async (path) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data(path));
    }, 2000);
  });
};

export const loader = (
  <div className="loadwrapper">
    <div className="loader">Loading...</div>
  </div>
);

const data = (path) => {
  switch (path) {
    case "shopify":
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Qty Orders",
            data: [8, 3, 2, 4, 5, 6, 5, 5, 4, 5, 8, 10],
            backgroundColor: "rgb(255, 99, 132, .2)",
            borderColor: "rgba(255, 99, 132)",
            borderWidth: 2,
          },
        ],
      };
    case "recharge":
      return {
        labels: [
          "Red + White",
          "Red",
          "Rosé",
          "White",
          "Sparkling",
        ],
        datasets: [
          {
            label: "Subscription Re-Orders",
            data: [120, 190, 30, 100, 65],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    case "zendesk":
      return {
        labels: [
          "Employee 1",
          "Employee 2",
          "Employee 3",
          "Employee 4",
          "Employee 5",
        ],
        datasets: [
          {
            label: "Avg Unsatisfied Ratings",
            data: [8, 0, 1, 3, 20],
            backgroundColor: "rgb(255, 99, 132)",
          },
          {
            label: "Avg Satisfied Ratings",
            data: [9, 6, 14, 10, 3],
            backgroundColor: "rgb(75, 192, 192)",
          },
        ],
      };

    default:
      return {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "# of bepis",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
          },
        ],
      };
  }
};
