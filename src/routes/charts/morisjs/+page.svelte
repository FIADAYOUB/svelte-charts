<script>

  import { lineColumnAreaOptions, lineAreaOptions, multipleAxisOptions, lineColumnOptions } from "$lib/data/mockData.js";

  import ChartContent from "$lib/components/shared/ChartContent.svelte"

  let temp = [lineColumnAreaOptions, lineAreaOptions, multipleAxisOptions, lineColumnOptions];

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

  <div class="w-full mt-8 grid grid-cols-3 gap-4">
    {#each temp as options}
      <div class="col-span-3">
        <ChartContent {options} />
      </div>
    {/each}
  </div>
</div>
