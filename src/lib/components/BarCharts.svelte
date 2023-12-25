<script>
  import { chart } from "svelte-apexcharts?client";

  import { data } from "$lib/data/mockData.js";

  const labels = data[0].data.map((e) => e.name);
  const series = data.map((country) => ({
    name: country.id,
    group: 'budget',
    data: country.data.map((product) => product.qauntite),
  }));

  let options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    series,
    labels,
  };
</script>

<div use:chart={options} class="w-full bg-white p-1 rounded-lg dark:bg-accent-dark-lighten4" />
