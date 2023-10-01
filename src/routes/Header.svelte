<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBars, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";

  export let darkMode;

  let openMenu = false;
  let openMenuLink = false;
  let innerWidth = 0;

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

<svelte:window bind:innerWidth />
<header>
  <nav class="antialiased h-12 bg-gray-100 dark:text-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto px-8 h-full">
      <!-- Logo -->
      <div class=" flex items-center w-full">
        {#if innerWidth < 900}
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
