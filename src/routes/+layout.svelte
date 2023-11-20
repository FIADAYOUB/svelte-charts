<script>
  import "../app.css";

  import { page } from '$app/stores';
  import { browser } from "$app/environment";

  import NavigationSideBar from "./NavigationSideBar.svelte";
  import Header from "./Header.svelte";

  let darkMode = false;
  let marginLeft = 56;

  $: if ($page.route.id?.includes('account')) {
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
    height: 100vh;
  }
</style>
