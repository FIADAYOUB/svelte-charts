<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { 
    faBug, 
    faChartColumn, 
    faChevronDown,
    faDashboard, 
    faEnvelope, 
    faFolder, 
    faRightToBracket, 
    faTableCells, 
    faUser,
    faCircle
  } from "@fortawesome/free-solid-svg-icons";
  import adminImage from '$lib/assets/images/user.png';
  import logo from '$lib/assets/images/logo.svg';
  import { page } from '$app/stores';
  import { mobileMode } from "$lib/store";
  import { slide } from "svelte/transition";
  import { clickOutside } from "$lib/mixins";

  export let collapsed = false;

  let openPages = false;
  let openCharts = false;

  $: currentPath = $page.url.pathname;
  $: isEmailsPage = $page.route.id?.includes('emails');

  // Close submenus when collapsed
  $: if (collapsed) {
    openPages = false;
    openCharts = false;
  }

  // Auto-expand menu if current page is in submenu (only when not collapsed)
  $: {
    if (!collapsed) {
      if (currentPath.includes('/login') || currentPath.includes('/register')) {
        openPages = true;
      }
      if (currentPath.includes('/charts')) {
        openCharts = true;
      }
    }
  }

  function closeChartMenu() {
    openCharts = false;
  }

  function closePagesMenu() {
    openPages = false;
  }

  function isActive(path) {
    return currentPath === path;
  }

  function isSubActive(paths) {
    return paths.some(path => currentPath.includes(path));
  }
</script>

<div class="h-full flex flex-col bg-card backdrop-blur-xl overflow-hidden shadow-xl transition-all duration-300">
  <!-- Logo Section -->
  <div class="flex items-center {collapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-5 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 shrink-0 transition-all duration-300">
    <div class="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shrink-0 shadow-lg hover:scale-110 transition-transform duration-300">
      <img src={logo} alt="Logo" class="w-6 h-6">
    </div>
    {#if !collapsed}
      <div class="min-w-0 flex-1 opacity-100 transition-opacity duration-300">
        <h2 class="text-sm font-bold text-foreground tracking-tight">Dashboard</h2>
        <p class="text-xs text-muted-foreground">Admin Panel</p>
      </div>
    {/if}
  </div>

  <!-- Scrollable Menu -->
  <div class="flex-1 overflow-y-auto py-4 px-2 space-y-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground">
    
    <!-- Profile Card -->
    <a 
      href="/account"
      class="flex items-center {collapsed ? 'justify-center' : 'gap-3'} p-2 rounded-xl transition-all duration-200 group hover:bg-muted/50 {isActive('/account') ? 'bg-primary/10 ring-1 ring-primary/20' : ''}"
      title={collapsed ? 'Ayoub Fiad - Administrator' : ''}
    >
      <div class="relative shrink-0">
        <img 
          src={adminImage} 
          alt="Ayoub Fiad" 
          class="w-10 h-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300"
        />
        <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-card"></div>
      </div>
      {#if !collapsed}
        <div class="min-w-0 flex-1 opacity-100 transition-opacity duration-300">
          <p class="text-sm font-semibold text-foreground truncate">Ayoub Fiad</p>
          <p class="text-xs text-muted-foreground truncate">Administrator</p>
        </div>
      {/if}
    </a>

    <div class="h-px bg-border/50 my-3"></div>

    <!-- Menu Items -->
    <nav class="space-y-1">
      <!-- Dashboard -->
      <a 
        href="/"
        class="flex items-center {collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 group {isActive('/') ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'text-foreground hover:bg-muted/50'}"
        title={collapsed ? 'Dashboard' : ''}
      >
        <Fa icon={faDashboard} class="w-5 h-5 shrink-0"/>
        {#if !collapsed}
          <span class="text-sm font-medium opacity-100 transition-opacity duration-300">Dashboard</span>
        {/if}
      </a>

      <!-- Emails -->
      <a 
        href="/emails"
        class="flex items-center {collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 group {isActive('/emails') ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'text-foreground hover:bg-muted/50'}"
        title={collapsed ? 'Emails' : ''}
      >
        <Fa icon={faEnvelope} class="w-5 h-5 shrink-0"/>
        {#if !collapsed}
          <span class="text-sm font-medium opacity-100 transition-opacity duration-300">Emails</span>
        {/if}
      </a>

      <!-- Clients -->
      <a 
        href="/costumers"
        class="flex items-center {collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 group {isActive('/costumers') ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'text-foreground hover:bg-muted/50'}"
        title={collapsed ? 'Clients' : ''}
      >
        <Fa icon={faTableCells} class="w-5 h-5 shrink-0"/>
        {#if !collapsed}
          <span class="text-sm font-medium opacity-100 transition-opacity duration-300">Clients</span>
        {/if}
      </a>

      <!-- Pages Submenu -->
      <div class="relative">
        <button
          on:click={() => !collapsed && (openPages = !openPages)}
          class="w-full flex items-center {collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 group {isSubActive(['/login', '/register']) ? 'bg-accent/10 text-accent' : 'text-foreground hover:bg-muted/50'}"
          title={collapsed ? 'Pages' : ''}
        >
          <Fa icon={faFolder} class="w-5 h-5 shrink-0"/>
          {#if !collapsed}
            <span class="text-sm font-medium flex-1 text-left opacity-100 transition-opacity duration-300">Pages</span>
            <Fa 
              icon={faChevronDown} 
              class="w-3 h-3 transition-transform duration-200 {openPages ? 'rotate-180' : ''}"
            />
          {/if}
        </button>

        {#if openPages && !collapsed}
          <div
            transition:slide={{duration: 200}}
            class="mt-1 ml-3 pl-3 border-l-2 border-border/50 space-y-1"
          >
            <a 
              href="/login"
              on:click={closePagesMenu}
              class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/login') ? 'bg-accent/10 text-accent font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <Fa icon={faRightToBracket} class="w-4 h-4 shrink-0"/>
              <span class="text-sm">Login</span>
            </a>
            <a 
              href="/register"
              on:click={closePagesMenu}
              class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/register') ? 'bg-accent/10 text-accent font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <Fa icon={faUser} class="w-4 h-4 shrink-0"/>
              <span class="text-sm">Register</span>
            </a>
          </div>
        {/if}

        {#if collapsed}
          <div
            use:clickOutside
            on:click_outside={closePagesMenu}
            on:mouseenter={() => openPages = true}
            on:mouseleave={() => openPages = false}
            class="absolute left-full top-0 z-50 ml-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
          >
            {#if openPages}
              <div class="min-w-[200px] bg-card backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 overflow-hidden">
                <div class="p-2 space-y-1">
                  <a 
                    href="/login"
                    on:click={closePagesMenu}
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/login') ? 'bg-accent/10 text-accent font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <Fa icon={faRightToBracket} class="w-4 h-4"/>
                    <span class="text-sm">Login</span>
                  </a>
                  <a 
                    href="/register"
                    on:click={closePagesMenu}
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/register') ? 'bg-accent/10 text-accent font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <Fa icon={faUser} class="w-4 h-4"/>
                    <span class="text-sm">Register</span>
                  </a>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>

      <!-- Charts Submenu -->
      <div class="relative group">
        <button
          on:click={() => !collapsed && (openCharts = !openCharts)}
          class="w-full flex items-center {collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 {isSubActive(['/charts']) ? 'bg-info/10 text-info' : 'text-foreground hover:bg-muted/50'}"
          title={collapsed ? 'Charts' : ''}
        >
          <Fa icon={faChartColumn} class="w-5 h-5 shrink-0"/>
          {#if !collapsed}
            <span class="text-sm font-medium flex-1 text-left opacity-100 transition-opacity duration-300">Charts</span>
            <Fa 
              icon={faChevronDown} 
              class="w-3 h-3 transition-transform duration-200 {openCharts ? 'rotate-180' : ''}"
            />
          {/if}
        </button>

        {#if openCharts && !collapsed}
          <div
            transition:slide={{duration: 200}}
            class="mt-1 ml-3 pl-3 border-l-2 border-border/50 space-y-1"
          >
            <a 
              href="/charts/chartjs"
              on:click={closeChartMenu}
              class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/charts/chartjs') ? 'bg-info/10 text-info font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <Fa icon={faCircle} class="w-2 h-2 shrink-0"/>
              <span class="text-sm">Chart JS</span>
            </a>
            <a 
              href="/charts/chartjs2"
              on:click={closeChartMenu}
              class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/charts/chartjs2') ? 'bg-info/10 text-info font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <Fa icon={faCircle} class="w-2 h-2 shrink-0"/>
              <span class="text-sm">Chart JS 2</span>
            </a>
            <a 
              href="/charts/morisjs"
              on:click={closeChartMenu}
              class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/charts/morisjs') ? 'bg-info/10 text-info font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <Fa icon={faCircle} class="w-2 h-2 shrink-0"/>
              <span class="text-sm">Morris JS</span>
            </a>
            <a 
              href="/charts/echarts"
              on:click={closeChartMenu}
              class="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/charts/echarts') ? 'bg-info/10 text-info font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <div class="flex items-center gap-3">
                <Fa icon={faCircle} class="w-2 h-2 shrink-0"/>
                <span class="text-sm">ECharts</span>
              </div>
              <span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">Soon</span>
            </a>
            <a 
              href="/charts/chartplus"
              on:click={closeChartMenu}
              class="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all duration-200 group {isActive('/charts/chartplus') ? 'bg-info/10 text-info font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
            >
              <div class="flex items-center gap-3">
                <Fa icon={faCircle} class="w-2 h-2 shrink-0"/>
                <span class="text-sm">Other Charts</span>
              </div>
              <span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">Soon</span>
            </a>
          </div>
        {/if}

        {#if collapsed}
          <div
            use:clickOutside
            on:click_outside={closeChartMenu}
            on:mouseenter={() => openCharts = true}
            on:mouseleave={() => openCharts = false}
            class="absolute left-full top-0 z-50 ml-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
          >
            {#if openCharts}
              <div class="min-w-[200px] bg-card backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 overflow-hidden">
                <div class="p-2 space-y-1">
                  <a 
                    href="/charts/chartjs"
                    on:click={closeChartMenu}
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/charts/chartjs') ? 'bg-info/10 text-info font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <Fa icon={faCircle} class="w-2 h-2"/>
                    <span class="text-sm">Chart JS</span>
                  </a>
                  <a 
                    href="/charts/chartjs2"
                    on:click={closeChartMenu}
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/charts/chartjs2') ? 'bg-info/10 text-info font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <Fa icon={faCircle} class="w-2 h-2"/>
                    <span class="text-sm">Chart JS 2</span>
                  </a>
                  <a 
                    href="/charts/morisjs"
                    on:click={closeChartMenu}
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/charts/morisjs') ? 'bg-info/10 text-info font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <Fa icon={faCircle} class="w-2 h-2"/>
                    <span class="text-sm">Morris JS</span>
                  </a>
                  <a 
                    href="/charts/echarts"
                    on:click={closeChartMenu}
                    class="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/charts/echarts') ? 'bg-info/10 text-info font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <div class="flex items-center gap-3">
                      <Fa icon={faCircle} class="w-2 h-2"/>
                      <span class="text-sm">ECharts</span>
                    </div>
                    <span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">Soon</span>
                  </a>
                  <a 
                    href="/charts/chartplus"
                    on:click={closeChartMenu}
                    class="flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all duration-200 {isActive('/charts/chartplus') ? 'bg-info/10 text-info font-medium' : 'text-foreground hover:bg-muted/50'}"
                  >
                    <div class="flex items-center gap-3">
                      <Fa icon={faCircle} class="w-2 h-2"/>
                      <span class="text-sm">Other Charts</span>
                    </div>
                    <span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">Soon</span>
                  </a>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>

      <!-- Extras -->
      <a 
        href="/extras"
        class="flex items-center {collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 group {isActive('/extras') ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'text-foreground hover:bg-muted/50'}"
        title={collapsed ? 'Extras' : ''}
      >
        <Fa icon={faBug} class="w-5 h-5 shrink-0"/>
        {#if !collapsed}
          <span class="text-sm font-medium opacity-100 transition-opacity duration-300">Extras</span>
        {/if}
      </a>
    </nav>
  </div>

  <!-- Footer -->
  {#if !collapsed}
    <div class="shrink-0 p-4 border-t border-border/50 bg-muted/20 transition-all duration-300">
      <div class="px-3 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
        <p class="text-xs font-semibold text-foreground">Need Help?</p>
        <p class="text-xs text-muted-foreground mt-0.5">Contact support</p>
      </div>
    </div>
  {/if}
</div>