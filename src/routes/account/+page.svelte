<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faInfoCircle, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
  import { fade, slide } from "svelte/transition";
  import Account from "./Account.svelte";
  import Security from "./Security.svelte";
  import Info from "./Info.svelte";

  let activeTab = 0;

  const tabs = [
    { id: 0, label: 'Account', icon: faUser },
    { id: 1, label: 'Security', icon: faLock },
    { id: 2, label: 'Info', icon: faInfoCircle }
  ];
</script>

<div class="p-4 md:p-6 lg:p-8">
  <div class="max-w-6xl mx-auto">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-foreground mb-2">Account Settings</h1>
      <p class="text-muted-foreground">Manage your account information and preferences</p>
    </div>

    <!-- Tabs Card -->
    <div class="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
      <!-- Tab Navigation -->
      <div class="flex items-center justify-start border-b border-border/50 bg-muted/20 overflow-x-auto">
        {#each tabs as tab}
          <button
            type="button"
            on:click={() => activeTab = tab.id}
            class="relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap {activeTab === tab.id ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
          >
            <Fa icon={tab.icon} class="w-4 h-4 transition-transform duration-200 {activeTab === tab.id ? 'scale-110' : ''}"/>
            <span class="hidden sm:inline">{tab.label}</span>
            
            <!-- Active Indicator -->
            {#if activeTab === tab.id}
              <div 
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50"
                transition:slide={{duration: 200}}
              ></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Tab Content -->
      <div class="min-h-[500px]">
        {#key activeTab}
          <div in:fade={{duration: 200, delay: 100}} out:fade={{duration: 100}}>
            {#if activeTab === 0}
              <Account />
            {:else if activeTab === 1}
              <Security />
            {:else if activeTab === 2}
              <Info />
            {/if}
          </div>
        {/key}
      </div>
    </div>
  </div>
</div>