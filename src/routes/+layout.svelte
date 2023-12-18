<script>
  import "../app.css";
  import '$lib/assets/style/ripple.css';

  import { page } from '$app/stores';
  import { browser } from "$app/environment";
  import { mobileMode }  from '$lib/store';

  import NavigationSideBar from "./NavigationSideBar.svelte";
  import Header from "./Header.svelte";

  let darkMode = false;
  let marginLeft = 56;
  let innerWidth = 0;

  $: fullWidthSideBar = $page.route.id?.includes('account') || $page.route.id?.includes('costumers');
  $: mobileMode.set(innerWidth < 900);

  $: if (fullWidthSideBar && !$mobileMode) {
    marginLeft = 256;
  } else {
    marginLeft = 56;
  };

  if (browser) {
    setTheme();
  }

  function setTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      darkMode = true;
    } else {
      document.documentElement.classList.remove("dark");
      darkMode = false;
    }
  }


</script>

<svelte:window bind:innerWidth />
<div class="app bg-accent-base dark:bg-accent-dark-base  antialiased text-gray-500 dark:text-white">
  <Header bind:darkMode on:toggleTheme={setTheme} />
  <NavigationSideBar />
  <main class="dark:bg-gray-800 h-full" style="margin-left: {marginLeft}px;">
    <slot />
  </main>
</div>
<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
