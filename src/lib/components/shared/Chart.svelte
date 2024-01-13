<script>
  import { chart } from "svelte-apexcharts?client";

  export let options;
</script>

<div
  use:chart={options}
  class="w-full bg-white p-1 lg:p-6 rounded-lg dark:bg-accent-dark-lighten4 flex items-center justify-center"
/>
