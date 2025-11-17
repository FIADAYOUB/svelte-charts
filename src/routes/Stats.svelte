<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
  
  const stats = [
    { 
      label: 'Total Profit', 
      value: '$25.6K', 
      change: '+42%', 
      isPositive: true,
      icon: faArrowTrendUp
    },
    { 
      label: 'Total Sales', 
      value: '$78.2K', 
      change: '+18%', 
      isPositive: true,
      icon: faArrowTrendUp
    },
    { 
      label: 'Total Cost', 
      value: '$12.6K', 
      change: '-8%', 
      isPositive: false,
      icon: faArrowTrendDown
    }
  ];
</script>

<div class="bg-card rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
  <div class="p-6">
    <h3 class="text-xl font-bold text-foreground mb-6">Performance Stats</h3>
    
    <div class="space-y-4">
      {#each stats as stat}
        <div class="group p-4 rounded-xl border border-border/50 bg-gradient-to-br from-card to-muted/20 hover:shadow-md transition-all duration-300 hover:scale-102">
          <div class="flex items-center justify-between mb-2">
            <p class="text-sm text-muted-foreground">{stat.label}</p>
            <div class="flex items-center gap-1 px-2 py-1 rounded-lg {stat.isPositive ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}">
              <Fa icon={stat.icon} class="w-3 h-3"/>
              <span class="text-xs font-semibold">{stat.change}</span>
            </div>
          </div>
          <h4 class="text-2xl font-bold text-foreground">{stat.value}</h4>
          
          <!-- Progress Bar -->
          <div class="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all duration-500 {stat.isPositive ? 'bg-gradient-to-r from-success to-success/80' : 'bg-gradient-to-r from-destructive to-destructive/80'}"
              style="width: {stat.isPositive ? stat.change : '0'}%"
            ></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .hover\:scale-102:hover {
    transform: scale(1.02);
  }
</style>