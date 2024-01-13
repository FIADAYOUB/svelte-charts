<script>
  import { chart } from "svelte-apexcharts?client";


  let options = {
    series: [
      {
        name: "series1",
        data: [60, 30, 45, 33, 65, 23, 55],
      },
      {
        name: "series2",
        data: [30, 45, 33, 65, 23, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-01-12T00:00:00.000Z",
        "2024-01-12T01:30:00.000Z",
        "2024-01-12T02:30:00.000Z",
        "2024-01-12T03:30:00.000Z",
        "2024-01-12T04:30:00.000Z",
        "2024-01-12T05:30:00.000Z",
        "2024-01-12T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
</script>

<div
  use:chart={options}
  class="w-full bg-white p-1 lg:p-6 rounded-lg dark:bg-accent-dark-lighten4"
/>
