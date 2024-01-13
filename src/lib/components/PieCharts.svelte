<script>
  import { chart } from "svelte-apexcharts?client";

  let options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 350,
      type: "pie",
    },
    legend: {
      position: "bottom",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          width: 250,
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
  };
</script>

<div
  use:chart={options}
  class="w-full bg-white p-1 lg:p-6 rounded-lg dark:bg-accent-dark-lighten4 flex items-center justify-center"
/>
