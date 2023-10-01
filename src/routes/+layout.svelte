<script>
  import Header from "./Header.svelte";
  import "../app.css";
  import { browser } from "$app/environment";
  import NavigationSideBar from "./NavigationSideBar.svelte";

  let darkMode = false;

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

<div class="app">
  <Header bind:darkMode on:toggleTheme={setTheme} />
  <NavigationSideBar />
  <main class="dark:bg-gray-800 h-full ml-14">
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
