<script>
  import "../app.css";
  import '$lib/assets/style/ripple.css';

  import { page } from '$app/stores';
  import { browser } from "$app/environment";
  import { mobileMode }  from '$lib/store';

  import NavigationSideBar from "./NavigationSideBar.svelte";
  import Header from "./Header.svelte";
  import Notifications from "./Notifications.svelte";

  let darkMode = false;
  let marginLeft = 56;
  let innerWidth = 0;
  let hideNotifications = true;

  $: fullWidthSideBar = $page.route.id?.includes('emails');

  $: disableHeader = $page.route.id?.includes('login') || $page.route.id?.includes('register');
  $: mobileMode.set(innerWidth < 900);

  $: if (disableHeader) {
    marginLeft = 0;
  } else if (!fullWidthSideBar && !$mobileMode) {
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
<svelte:head>
    <title>Dashboard</title>
</svelte:head>
<div class="antialiased text-[13px] font-red-hat-text bg-accent-base dark:bg-accent-dark-base text-[#73879C] dark:text-white">
  {#if !hideNotifications}
    <Notifications bind:hideNotifications/>
  {/if}
  {#if !disableHeader}
    <Header bind:darkMode bind:hideNotifications on:toggleTheme={setTheme} />
    <NavigationSideBar />
  {/if}
  <main class="main" style="margin-left: {marginLeft}px;">
    <slot />
  </main>
</div>
<style>
  .main {
    min-height: calc(100vh - 48px);
  }
</style>
