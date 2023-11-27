<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import { mobileMode }  from '$lib/store';

  export let darkMode;

  let openMenu = false;
  let openMenuLink = false;

  const dispatch = createEventDispatcher();
  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    dispatch("toggleTheme");
  }

  function toggleMenu() {
    openMenu = !openMenu;
  }
  function toggleMenuLink() {
    openMenuLink = !openMenuLink;
  }
</script>

<header>
  <nav class="antialiased h-12 bg-secondary-base text-white">
    <div class="flex flex-wrap items-center justify-between mx-auto px-8 h-full">
      <!-- Logo -->
      <div class=" flex items-center w-full">
        {#if $mobileMode}
          <button on:click={toggleMenuLink}>
            <Fa icon={faBars} />
          </button>
        {/if}
        <h1 class="grow flex items-center justify-center font-medium text-lg">Dashboard</h1>
        <button
          on:click={toggleTheme}
          class="{!darkMode ? '' : 'text-yellow-500'} ml-4 w-[24px]"
        >
          <Fa icon={!darkMode ? faMoon : faSun} />
        </button>
      </div>
    </div>
  </nav>
</header>
