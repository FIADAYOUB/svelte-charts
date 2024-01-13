<script>
  import { chart } from "svelte-apexcharts?client";

  let options = {
    series: [
      {
        data: [
          {
            x: "Analysis",
            y: [
              new Date("2023-02-27").getTime(),
              new Date("2023-03-04").getTime(),
            ],
            fillColor: "#008FFB",
          },
          {
            x: "Design",
            y: [
              new Date("2023-03-04").getTime(),
              new Date("2023-03-08").getTime(),
            ],
            fillColor: "#00E396",
          },
          {
            x: "Coding",
            y: [
              new Date("2023-03-07").getTime(),
              new Date("2023-03-10").getTime(),
            ],
            fillColor: "#775DD0",
          },
          {
            x: "Testing",
            y: [
              new Date("2023-03-08").getTime(),
              new Date("2023-03-12").getTime(),
            ],
            fillColor: "#FEB019",
          },
          {
            x: "Deployment",
            y: [
              new Date("2023-03-12").getTime(),
              new Date("2023-03-17").getTime(),
            ],
            fillColor: "#FF4560",
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        var label = opts.w?.globals?.labels[opts.dataPointIndex];
        return label;
      },
      style: {
        colors: ["#f3f4f5", "#fff"],
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      show: false,
    },
    grid: {
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 1,
      },
    },
  };
</script>

<div
  use:chart={options}
  class="w-full bg-white p-1 lg:p-6 rounded-lg dark:bg-accent-dark-lighten4 flex items-center justify-center"
/>
