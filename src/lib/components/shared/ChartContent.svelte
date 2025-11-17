<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
  import { slide } from "svelte/transition";
  import Chart from "$lib/components/shared/Chart.svelte";

  export let options;

  let opened = true;
</script>

<div class="flex flex-col h-full">
  <!-- Header -->
  <div class="flex items-center justify-between px-6 py-4 border-b border-border/50">
    <h3 class="text-lg font-bold text-foreground">{options.title.text}</h3>
    <button
      type="button"
      on:click={() => opened = !opened}
      class="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
      aria-label={opened ? 'Collapse chart' : 'Expand chart'}
    >
      <Fa icon={opened ? faChevronUp : faChevronDown} class="w-4 h-4"/>
    </button>
  </div>

  <!-- Chart Content -->
  {#if opened}
    <div transition:slide={{ duration: 300 }} class="flex-1 p-4 min-h-[400px]">
      <Chart {options}/>
    </div>
  {/if}
</div>