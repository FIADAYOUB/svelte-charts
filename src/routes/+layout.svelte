<script>
  import "../app.css";
  import '$lib/assets/style/ripple.css';

  import { page } from '$app/stores';
  import { browser } from "$app/environment";
  import { mobileMode } from '$lib/store';

  import NavigationSideBar from "./NavigationSideBar.svelte";
  import Header from "./Header.svelte";
  import Notifications from "./Notifications.svelte";

  let darkMode = false;
  let sidebarWidth = 256;
  let innerWidth = 0;
  let hideNotifications = true;
  let sidebarCollapsed = false;
  let showMobileSidebar = false;

  $: fullWidthSideBar = $page.route.id?.includes('emails');
  $: disableHeader = $page.route.id?.includes('login') || $page.route.id?.includes('register');
  $: mobileMode.set(innerWidth < 900);

  // Auto-collapse sidebar on emails page, restore on other pages
  $: if (fullWidthSideBar) {
    sidebarCollapsed = true;
  }

  // Calculate sidebar width based on state
  $: {
    if (disableHeader) {
      sidebarWidth = 0;
    } else if ($mobileMode) {
      sidebarWidth = 0;
    } else if (sidebarCollapsed || fullWidthSideBar) {
      sidebarWidth = 72;
    } else {
      sidebarWidth = 256;
    }
  }

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

  function handleToggleMenu() {
    if ($mobileMode) {
      showMobileSidebar = !showMobileSidebar;
    } else {
      sidebarCollapsed = !sidebarCollapsed;
    }
  }

  function closeMobileSidebar() {
    showMobileSidebar = false;
  }

  // Close mobile sidebar on route change
  $: if ($page.url.pathname) {
    showMobileSidebar = false;
  }
</script>

<svelte:window bind:innerWidth />
<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="min-h-screen bg-background text-foreground antialiased">
  <!-- Notifications Modal -->
  {#if !hideNotifications}
    <div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <Notifications bind:hideNotifications/>
    </div>
  {/if}

  <!-- Header -->
  {#if !disableHeader}
    <Header 
      bind:darkMode 
      bind:hideNotifications 
      on:toggleTheme={setTheme}
      on:toggleMenu={handleToggleMenu}
    />
  {/if}

  <!-- Layout Container -->
  <div class="flex {!disableHeader ? 'pt-16' : ''}">
    <!-- Desktop Sidebar -->
    {#if !disableHeader && !$mobileMode}
      <aside 
        class="fixed left-0 bottom-0 z-40 transition-all duration-300 ease-in-out {!disableHeader ? 'top-16' : 'top-0'}"
        style="width: {sidebarWidth}px;"
      >
        <NavigationSideBar collapsed={sidebarCollapsed || fullWidthSideBar} />
      </aside>
    {/if}

    <!-- Mobile Sidebar Overlay -->
    {#if !disableHeader && $mobileMode && showMobileSidebar}
      <div 
        class="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm {!disableHeader ? 'top-16' : 'top-0'}"
        on:click={closeMobileSidebar}
        on:keydown={(e) => e.key === 'Escape' && closeMobileSidebar()}
        role="button"
        tabindex="0"
        aria-label="Close sidebar"
      >
        <aside 
          class="fixed left-0 bottom-0 w-64 transform transition-transform duration-300 {!disableHeader ? 'top-16' : 'top-0'}"
          on:click|stopPropagation
          on:keydown|stopPropagation
          role="navigation"
        >
          <NavigationSideBar collapsed={false} />
        </aside>
      </div>
    {/if}

    <!-- Main Content -->
    <main 
      class="flex-1 transition-all duration-300 ease-in-out {!disableHeader ? 'min-h-[calc(100vh-4rem)]' : 'min-h-screen'}"
      style="margin-left: {disableHeader || $mobileMode ? 0 : sidebarWidth}px;"
    >
      <slot />
    </main>
  </div>
</div>