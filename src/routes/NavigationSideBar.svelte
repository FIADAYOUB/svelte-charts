<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChartColumn, faChevronDown, faChevronUp, faDashboard, faEnvelope, faFolder, faRightToBracket, faTableCells, faUser } from "@fortawesome/free-solid-svg-icons";
  import adminImage from '$lib/assets/images/user.png';
  import logo from '$lib/assets/images/logo.svg';
  import { page } from '$app/stores';
  import { mobileMode } from "$lib/store";
  import { slide } from "svelte/transition";
  import { ripple } from "$lib/mixins";

  let width = 56;
  let openPages = false;
  let opencharts = true;

  $: fullWidthSideBar = $page.route.id?.includes('emails');

  $: if ( !(fullWidthSideBar || $mobileMode) ) {
    width = 256;
  } else {
    width = 56;
  };

  function mouseEnter() {
    if ( fullWidthSideBar ) {
      width = 256;
    }
  };

  function mouseLeave() {
    if ( fullWidthSideBar ) {
      width = 56;
    }
  }
</script>

<aside
  on:mouseenter={mouseEnter}
  on:mouseleave={mouseLeave}
  class="fixed top-0 left-0 z-40 h-screen !hover:w-64"
  style='width: {width}px'
>
  <div class="h-full p-1 py-4 bg-secondary-base text-white overflow-x-hidden">
    <div class="flex items-center justify-start gap-2">
      <img src={logo} alt="Logo" class="w-16">
      <h3>ADMIN</h3>
    </div>
     <ul class="space-y-2 font-medium mt-8">
       <li
        use:ripple
        class="relative overflow-hidden"
       >
          <a href="/account" class="menu_link !px-1 group">
             <img src={adminImage} alt="Ayoub Fiad" class="h-10 w-10 rounded-full flex items-center justify-center">
             <span class="ml-3">Ayoub Fiad</span>
          </a>
       </li>
        <li
        use:ripple
        class="relative overflow-hidden"
        >
          <a href="/" class="menu_link group">
            <Fa icon={faDashboard} size="lg"/>
            <span class="ml-5">Dashboard</span>
          </a>
        </li>
        <li
        use:ripple
        class="relative overflow-hidden"
        >
          <a href="/emails" class="menu_link group">
            <Fa icon={faEnvelope} size="lg"/>
            <span class="ml-5">Emails</span>
          </a>
        </li>
        <li
        use:ripple
        class="relative overflow-hidden"
        >
          <a href="/costumers" class="menu_link group">
            <Fa icon={faTableCells} size="lg"/>
            <span class="ml-5">Clients</span>
          </a>
        </li>
        <li class="relative overflow-hidden">
          <button
          on:click={()=> openPages = !openPages}
          class="w-full  flex items-center py-3 px-4 group {openPages ? 'rounded-t-lg' : 'rounded-lg'}"
          class:bg-secondary-lighten2={openPages}
          >
            <Fa icon={faFolder} size="lg"/>
            <span class="ml-5 grow text-start">Pages</span>
            <Fa icon={openPages ? faChevronUp : faChevronDown} />
          </button>
        </li>
        {#if openPages}
          <ul transition:slide class="bg-accent-base text-gray-600 !mt-0 rounded-b-lg shadow-3xl dark:bg-accent-dark-base dark:text-white">
            <li class="px-2">
              <a href="/login" class="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-dark-lighten2">
                <Fa icon={faRightToBracket} />
                <span class="ml-5">Login</span>
              </a>
            </li>
            <li class="px-2">
              <a href="/register" class="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-dark-lighten2">
                <Fa icon={faUser} />
                <span class="ml-5">Register</span>
              </a>
            </li>
          </ul>
        {/if}
        <li class="relative overflow-hidden">
          <button
          on:click={()=> opencharts = !opencharts}
          class="w-full  flex items-center py-3 px-4 group {opencharts ? 'rounded-t-lg' : 'rounded-lg'}"
          class:bg-secondary-lighten2={opencharts}
          >
            <Fa icon={faChartColumn} size="lg"/>
            <span class="ml-5 grow text-start">Data Presentation</span>
            <Fa icon={opencharts ? faChevronUp : faChevronDown} />
          </button>
        </li>
        {#if opencharts}
          <ul transition:slide class="bg-accent-base text-gray-600 !mt-0 py-2 rounded-b-lg shadow-3xl dark:bg-accent-dark-base dark:text-white">
            <li class="px-4">
              <a href="/charts/chartjs" class="chart_item">
                <span class="ml-5">Chart JS</span>
              </a>
            </li>
            <li class="px-4">
              <a href="/charts/chartjs2" class="chart_item">
                <span class="ml-5">Chart JS2</span>
              </a>
            </li>
            <li class="px-4">
              <a href="/charts/morisjs" class="chart_item">
                <span class="ml-5">Moris JS</span>
              </a>
            </li>
            <li class="px-4">
              <a href="/charts/echarts" class="chart_item">
                <span class="ml-5">ECharts</span>
              </a>
            </li>
            <li class="px-4">
              <a href="/charts/chartplus" class="chart_item after:!h-1/2">
                <span class="ml-5">Other Charts</span>
              </a>
            </li>
          </ul>
        {/if}
     </ul>
  </div>
</aside>

<style lang="postcss">
  .menu_link {
    @apply w-full  flex items-center py-3 px-4 rounded-lg hover:bg-secondary-lighten2;
  }
  .chart_item {
    @apply relative w-full flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-dark-lighten2
    before:bg-secondary-base before:h-2 before:w-2 before:absolute before:left-[13px] before:z-10 before:rounded-full
    after:bg-secondary-base after:h-full after:w-[2px] after:border-l-[1px] after:bottom-0 after:left-4 after:absolute after:top-0
  }
</style>
