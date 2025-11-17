<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faArrowTrendUp, faChalkboard, faDollar, faUsers, faArrowRight, faTrophy } from "@fortawesome/free-solid-svg-icons";
  import trophy from '$lib/assets/images/trophy.png';
  import Stats from "./Stats.svelte";
  import Paiement from "./Paiement.svelte";
  import ChartContent from "$lib/components/shared/ChartContent.svelte";
  import { lineOptions, barGraphoptions } from "$lib/data/mockData.js";

  const stats = [
    { label: 'Sales', value: '245K', icon: faArrowTrendUp, color: 'bg-gradient-to-br from-blue-500 to-blue-600', textColor: 'text-blue-600' },
    { label: 'Customers', value: '12.5K', icon: faUsers, color: 'bg-gradient-to-br from-primary to-primary/80', textColor: 'text-primary' },
    { label: 'Products', value: '1.54K', icon: faChalkboard, color: 'bg-gradient-to-br from-success to-success/80', textColor: 'text-success' },
    { label: 'Revenue', value: '$88K', icon: faDollar, color: 'bg-gradient-to-br from-accent to-accent/80', textColor: 'text-accent' }
  ];
</script>

<div class="p-4 md:p-6 lg:p-8">
  <!-- Page Header -->
  <div class="mb-6">
    <h1 class="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
    <p class="text-muted-foreground">Welcome back! Here's what's happening today.</p>
  </div>

  <!-- Main Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <!-- Congratulations Card -->
    <div class="col-span-1 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h3 class="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
              Congratulations Ayoub! 
              <span class="text-2xl">🥳</span>
            </h3>
            <p class="text-sm text-muted-foreground">Best seller of the month</p>
          </div>
        </div>
        
        <div class="flex items-end justify-between mt-6">
          <div>
            <p class="text-sm text-muted-foreground mb-1">Total Earnings</p>
            <h2 class="text-3xl font-bold text-primary mb-4">$42.8K</h2>
            <a 
              href="/" 
              class="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
            >
              View Sales
              <Fa icon={faArrowRight} class="w-3 h-3"/>
            </a>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
            <img src={trophy} alt="trophy" class="relative w-24 h-24 object-contain animate-bounce-slow">
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics Card -->
    <div class="col-span-1 md:col-span-2 bg-card rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="p-6">
        <div class="mb-6">
          <h3 class="text-xl font-bold text-foreground mb-1">Statistics Overview</h3>
          <p class="text-sm text-muted-foreground">
            <span class="font-semibold text-foreground">Total 48.5% growth</span> 😎 this month
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {#each stats as stat}
            <div class="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-muted/20 p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="flex items-start gap-3">
                <div class="{stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Fa icon={stat.icon} class="w-5 h-5"/>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-muted-foreground mb-0.5">{stat.label}</p>
                  <h4 class="text-lg font-bold {stat.textColor} truncate">{stat.value}</h4>
                </div>
              </div>
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Payment Card -->
    <div class="col-span-1 md:col-span-2 bg-card rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <Paiement />
    </div>

    <!-- Stats Card -->
    <div class="col-span-1 rounded-2xl overflow-hidden">
      <Stats />
    </div>

    <!-- Line Chart -->
    <div class="col-span-1 bg-card rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <ChartContent options={lineOptions} />
    </div>

    <!-- Bar Chart -->
    <div class="col-span-1 md:col-span-2 bg-card rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <ChartContent options={barGraphoptions} />
    </div>
  </div>
</div>

<style>
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
</style>