<script>
  import { chart } from "svelte-apexcharts?client";

  let options = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "donut",
      height: 350,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
</script>

<div
  use:chart={options}
  class="w-full bg-white p-1 lg:p-6 rounded-lg dark:bg-accent-dark-lighten4"
/>
