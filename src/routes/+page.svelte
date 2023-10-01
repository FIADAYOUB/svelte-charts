<script>
  import { chart } from "svelte-apexcharts?client";

  import Fa from "svelte-fa/src/fa.svelte";
  import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

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

  let reports = [
    { title:'report 1', icon: faCalendarAlt, price: 400.01},
    { title:'report 2', icon: faCalendarAlt, price: 680.01},
    { title:'report 3', icon: faCalendarAlt, price: 10.00},
    { title:'report 4', icon: faCalendarAlt, price: 1400.01}
  ];
</script>
<div class="w-full grid grid-cols-4 gap-4 p-2">
{#each reports as report}
  <div class="p-2 border-l-8 border-green-800 shadow-xl rounded-lg">
    <div class="flex justify-center h-22 items-center text-green-800">
      <div class="text-xl uppercase font-medium ">{report.title}</div>
      <div class="grow"/>
      <Fa icon={report.icon} />
    </div>
    <div class="text-xs text-start mx-2">
      $ {report.price}
    </div>
  </div>
{/each}
</div>
<h1 class="text-3xl font-bold mt-10 text-center">Sveltekit - Chart</h1>
<div use:chart={options} class="w-[400px]" />
