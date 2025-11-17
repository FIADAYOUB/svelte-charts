<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faArrowUp, faArrowDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import gumroad from '$lib/assets/images/gumroad.jpg'
  import BNC from '$lib/assets/images/BNC.png'
  import mastercard from '$lib/assets/images/mastercard.png'
  import RBC from '$lib/assets/images/RBC.png'
  import stripe from '$lib/assets/images/stripe.png'
  import AWS from '$lib/assets/images/AWS.png'
  import DgOc from '$lib/assets/images/DgOc.png'
  import github from '$lib/assets/images/github.png'
  import GoogleAdsence from '$lib/assets/images/GoogleAdsence.png'
  import slack from '$lib/assets/images/slack.png'

  const deposits = [
    { name: 'Gumroad Account', description: 'Sell UI Kit', amount: '+$4,650', image: gumroad },
    { name: 'Mastercard', description: 'Wallet deposit', amount: '+$92,705', image: mastercard },
    { name: 'Stripe Account', description: 'IOS Application', amount: '+$6,837', image: stripe },
    { name: 'RBC Account', description: 'Bank Transfer', amount: '+$9,650', image: RBC },
    { name: 'BNC Account', description: 'Bank Transfer', amount: '+$446', image: BNC }
  ];

  const withdrawals = [
    { name: 'Google Adsense', description: 'Paypal deposit', amount: '-$145', image: GoogleAdsence },
    { name: 'Github', description: 'Security & compliance', amount: '-$1,870', image: github },
    { name: 'Upgrade Slack Plan', description: 'Debit card deposit', amount: '-$450', image: slack },
    { name: 'Digital Ocean', description: 'Cloud Hosting', amount: '-$540', image: DgOc },
    { name: 'AWS Account', description: 'Choosing a Cloud Platform', amount: '-$21', image: AWS }
  ];
</script>

<div class="flex flex-col lg:flex-row h-full">
  <!-- Deposits Section -->
  <div class="flex-1 p-6">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-success to-success/80 flex items-center justify-center text-white shadow-lg">
          <Fa icon={faArrowDown} class="w-4 h-4"/>
        </div>
        <h3 class="text-xl font-bold text-foreground">Deposits</h3>
      </div>
      <a 
        href="/" 
        class="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors duration-200"
      >
        View All
        <Fa icon={faChevronRight} class="w-3 h-3"/>
      </a>
    </div>

    <ul class="space-y-1">
      {#each deposits as deposit}
        <li class="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer">
          <div class="relative shrink-0">
            <img 
              src={deposit.image} 
              alt={deposit.name} 
              class="w-12 h-12 rounded-xl object-cover ring-2 ring-border group-hover:ring-success/50 transition-all duration-200"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h5 class="text-sm font-semibold text-foreground truncate">{deposit.name}</h5>
            <p class="text-xs text-muted-foreground truncate">{deposit.description}</p>
          </div>
          <div class="shrink-0">
            <span class="text-sm font-bold text-success">{deposit.amount}</span>
          </div>
        </li>
      {/each}
    </ul>
  </div>

  <!-- Divider -->
  <div class="w-full lg:w-px h-px lg:h-auto bg-border/50 my-4 lg:my-0"></div>

  <!-- Withdrawals Section -->
  <div class="flex-1 p-6">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-destructive to-destructive/80 flex items-center justify-center text-white shadow-lg">
          <Fa icon={faArrowUp} class="w-4 h-4"/>
        </div>
        <h3 class="text-xl font-bold text-foreground">Withdrawals</h3>
      </div>
      <a 
        href="/" 
        class="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors duration-200"
      >
        View All
        <Fa icon={faChevronRight} class="w-3 h-3"/>
      </a>
    </div>

    <ul class="space-y-1">
      {#each withdrawals as withdrawal}
        <li class="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer">
          <div class="relative shrink-0">
            <img 
              src={withdrawal.image} 
              alt={withdrawal.name} 
              class="w-12 h-12 rounded-xl object-cover ring-2 ring-border group-hover:ring-destructive/50 transition-all duration-200"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h5 class="text-sm font-semibold text-foreground truncate">{withdrawal.name}</h5>
            <p class="text-xs text-muted-foreground truncate">{withdrawal.description}</p>
          </div>
          <div class="shrink-0">
            <span class="text-sm font-bold text-destructive">{withdrawal.amount}</span>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>