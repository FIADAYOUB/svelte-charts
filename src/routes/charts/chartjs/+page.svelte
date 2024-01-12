<script>
  import LineCharts from "$lib/components/LineCharts.svelte";
  import BarCharts from "$lib/components/BarCharts.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { slide } from "svelte/transition";

let openLineCharts = true;
let openBarCharts = true;
</script>

<div class="p-2 md:p-8 lg:p-8 dark:bg-accent-dark-base">
  <div class="w-full mt-8 grid grid-cols-3 gap-4">
    <div class="large_card">
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
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 min-h-[400px]">
          <LineCharts />
        </div>
      {/if}
    </div>
    <div class="small_card">
      <div class="header">
        <div class="text-f4">Line graph</div>
        <button
          type="button"
          on:click={()=> openBarCharts = !openBarCharts}
          class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={openBarCharts ? faChevronUp : faChevronDown}/>
        </button>
      </div>
      {#if openBarCharts}
        <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 min-h-[400px]">
          <BarCharts />
        </div>
      {/if}
    </div>
  </div>
</div>
<style lang="postcss">
  .small_card {
    @apply col-span-3 md:col-span-1 lg:col-span-1 dark:text-gray-700;
  }
  .large_card {
    @apply col-span-3 md:col-span-2 lg:col-span-2 dark:text-gray-700;
  }
  .header {
    @apply flex items-center justify-between px-8 py-2 border-b-2 bg-white dark:bg-accent-dark-lighten4
  }
</style>
