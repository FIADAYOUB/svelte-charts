<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { slide } from "svelte/transition";

  import Chart from "$lib/components/shared/Chart.svelte";

  export let options;

  let opened = true;

</script>

<div class="header">
  <div class="text-f4">Area graph</div>
  <button
    type="button"
    on:click={()=> opened = !opened}
    class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
  >
    <Fa icon={opened ? faChevronUp : faChevronDown}/>
  </button>
</div>
{#if opened}
  <div transition:slide class="bg-white dark:bg-accent-dark-lighten4 h-[400px]">
    <Chart {options}/>
  </div>
{/if}
<style lang="postcss">
  .header {
    @apply flex items-center justify-between px-8 py-2 border-b-2 bg-white dark:bg-accent-dark-lighten4
  }
</style>