const chartOptions = {
  chart: {
    type: "area",
    height: 180,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#3498db"],
  series: [{ name: "Views", data: [18, 50, 42, 94, 41, 65] }],
  dataLabel: { enabled: false },
  stroke: { width: 3, curve: "smooth" },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ["Feb", "Apr", "Jun", "Aug", "Oct", "Dec"], // Set x-axis categories
    axisBorder: { show: false }, // Hide x-axis border
    labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } }, // Set x-axis label properties
  },
  yaxis: { show: false }, // Hide y-axis
  grid: {
    borderColor: "rgba(0, 0, 0, 0)", // Set grid border color
    padding: { top: -30, bottom: -8, left: 12, right: 12 }, // Set grid padding
  },
  tooltip: {
    enabled: true, // Enable chart tooltip
    y: { formatter: (value) => `${value}K` }, // Set y-axis tooltip label formatter
    style: { fontFamily: "Poppins" }, // Set tooltip font family
  },
  markers: { show: false },
};

const chart = new ApexCharts(
  document.querySelector(".chart-area"),
  chartOptions
);

chart.render()