<script>
  import Header from "./Header.svelte";
  import "../app.css";
  import { browser } from "$app/environment";

  let darkMode = false;

  if (browser) {
    setTheme();
  }

  console.log('coucou');
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
  <main class="dark:bg-gray-900 h-full">
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
