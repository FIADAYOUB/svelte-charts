<script>

  import Fa from "svelte-fa/src/fa.svelte";
  import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
  import LineCharts from "$lib/components/LineCharts.svelte";
  import BarCharts from "$lib/components/BarCharts.svelte";

  let reports = [
    { title: "report 1", icon: faCalendarAlt, price: 400.01 },
    { title: "report 2", icon: faCalendarAlt, price: 680.01 },
    { title: "report 3", icon: faCalendarAlt, price: 10.0 },
    { title: "report 4", icon: faCalendarAlt, price: 1400.01 },
  ];

</script>

<div class="p-8">
  <div class="w-full grid grid-cols-4 gap-4 p-2">
    {#each reports as report}
      <div
        class="p-2 border-l-8 border-green-800 shadow-xl rounded-lg dark:text-white"
      >
        <div class="flex justify-center h-22 items-center text-green-800">
          <div class="text-xl uppercase font-medium">{report.title}</div>
          <div class="grow" />
          <Fa icon={report.icon} />
        </div>
        <div class="text-xs text-start mx-2">
          $ {report.price}
        </div>
      </div>
    {/each}
  </div>
  <div class="w-full mt-8 grid grid-cols-3 gap-4">
    <div class="col-span-3 lg:col-span-2 rounded-lg p-4 bg-white dark:bg-accent-dark-lighten4 dark:text-gray-700">
      Recenets Projects
    </div>
    <div class="col-span-3 lg:col-span-1">
      <BarCharts />
    </div>
    <div class="col-span-3">
      <LineCharts />
    </div>
  </div>
</div>
