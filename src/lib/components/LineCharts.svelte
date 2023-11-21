<script>
  import { chart } from "svelte-apexcharts?client";

  import { data } from "$lib/data/mockData.js";

  const labels = data[0].data.map((e) => e.name);
  const series = data.map((country) => ({
    name: country.id,
    data: country.data.map((product) => product.qauntite),
  }));

  let options = {
    series,
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    labels
  };
</script>

<div use:chart={options} class="w-full bg-white p-1 lg:p-6 rounded-lg dark:bg-accent-dark-lighten4" />
