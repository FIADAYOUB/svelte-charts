<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faDashboard, faEnvelope, faFolder, faTableCells } from "@fortawesome/free-solid-svg-icons";
  import adminImage from '$lib/assets/images/user.png';
  import { page } from '$app/stores';
  import { mobileMode } from "$lib/store";
  import { slide } from "svelte/transition";
  import { ripple } from "$lib/mixins";

  let width = 56;
  let openPages = false;

  $: fullWidthSideBar = $page.route.id?.includes('account') || $page.route.id?.includes('costumers');

  $: if ( fullWidthSideBar && !$mobileMode ) {
    width = 256;
  } else {
    width = 56;
  };

  function mouseEnter() {
    if ( !fullWidthSideBar ) {
      width = 256;
    }
  };

  function mouseLeave() {
    if ( !fullWidthSideBar ) {
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
     <ul class="space-y-2 font-medium">
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
        <li
        use:ripple
        class="relative overflow-hidden"
        >
          <button
          on:click={()=> openPages = !openPages}
          class="menu_link group"
          class:bg-secondary-lighten2={openPages}
          >
            <Fa icon={faFolder} size="lg"/>
            <span class="ml-5">Pages</span>
          </button>
        </li>
        {#if openPages}
          <ul transition:slide class="bg-white text-gray-600 !mt-0 rounded-b-lg shadow-3xl dark:bg-accent-dark-base dark:text-white">
            <li>
              <a href="/login" class="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-dark-lighten2">
                <span class="ml-5">Login</span>
              </a>
            </li>
            <li>
              <a href="/register" class="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-dark-lighten2">
                <span class="ml-5">Register</span>
              </a>
            </li>
          </ul>
        {/if}
     </ul>
  </div>
</aside>

<style lang="postcss">
  .menu_link {
    @apply w-full flex items-center p-3 rounded-lg hover:bg-secondary-lighten2;
  }
</style>
