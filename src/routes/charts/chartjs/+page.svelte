<script>
  import LineCharts from "$lib/components/LineCharts.svelte";
  import BarCharts from "$lib/components/BarCharts.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { slide } from "svelte/transition";
  import AreaCharts from "$lib/components/AreaCharts.svelte";
  import BarGraphCharts from "$lib/components/BarGraphCharts.svelte";
  import RadarCharts from "$lib/components/RadarCharts.svelte";
  import DonutCharts from "$lib/components/DonutCharts.svelte";

let openLineCharts = true;
let openBarCharts = true;
let openBarGraphCharts = true;
let openAreaCharts = true;
let openRadarCharts = true;
let openDonutCharts = true;
</script>

<div class="p-2 md:p-8 lg:p-8 dark:bg-accent-dark-base">
  <div class=" w-full flex gap-2 flex-col md:flex-row items-center justify-between">
    <h2>Chart Js Some examples to get you started</h2>
    <div class="relative min-w-[250px]">
      <input
        type="search"
        placeholder="search..."
        class="w-full rounded-full border border-gray-200 shadow-3xl bg-white px-3 py-2.5 text-sm text-gray-700 outline outline-0 transition-all">
        <button
          class="absolute right-0 top-0 rounded-r-full bg-gray-200 h-full px-2"
        >
          Go !
        </button>
    </div>
  </div>

  <div class="w-full mt-8 grid grid-cols-2 gap-4">
    <div class="card">
      <div class="header">
        <div class="text-f4">Area graph</div>
        <button
          type="button"
          on:click={()=> openAreaCharts = !openAreaCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openAreaCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openAreaCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
          <AreaCharts />
        </div>
      {/if}
    </div>

    <div class="card">
      <div class="header">
        <div class="text-f4">Bar graph</div>
        <button
          type="button"
          on:click={()=> openBarGraphCharts = !openBarGraphCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openBarGraphCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openBarGraphCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
          <BarGraphCharts />
        </div>
      {/if}
    </div>

    <div class="card">
      <div class="header">
        <div class="text-f4">Radar graph</div>
        <button
          type="button"
          on:click={()=> openRadarCharts = !openRadarCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openRadarCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openRadarCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
          <RadarCharts />
        </div>
      {/if}
    </div>

    <div class="card">
      <div class="header">
        <div class="text-f4">Donut graph</div>
        <button
          type="button"
          on:click={()=> openDonutCharts = !openDonutCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openDonutCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openDonutCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
          <DonutCharts />
        </div>
      {/if}
    </div>

    <div class="card">
      <div class="header">
        <div class="text-f4">Line graph</div>
        <button
          type="button"
          on:click={()=> openLineCharts = !openLineCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openLineCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openLineCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
          <LineCharts />
        </div>
      {/if}
    </div>

    <div class="card">
      <div class="header">
        <div class="text-f4">Bar graph</div>
        <button
          type="button"
          on:click={()=> openBarCharts = !openBarCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openBarCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openBarCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
          <BarCharts />
        </div>
      {/if}
    </div>

  </div>
</div>
<style lang="postcss">
  .card {
    @apply col-span-2 md:col-span-1 dark:text-gray-700;
  }
  .header {
    @apply flex items-center justify-between px-8 py-2 border-b-2 bg-white dark:bg-accent-dark-lighten4
  }
</style>
