<script>
  import { chart } from "svelte-apexcharts?client";

  let options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
</script>

<h1 class="text-3xl font-bold mt-10 text-center">Sveltekit - Chart</h1>
<div use:chart={options} class="w-[400px]" />
