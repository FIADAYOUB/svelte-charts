<script>

  import Fa from "svelte-fa/src/fa.svelte";
  import { faArrowTrendUp, faChalkboard, faDollar, faUsers } from "@fortawesome/free-solid-svg-icons";
  import trophy from '$lib/assets/images/trophy.png';
  import Stats from "./Stats.svelte";
  import Paiement from "./Paiement.svelte";
  import ChartContent from "$lib/components/shared/ChartContent.svelte";

  import { lineOptions, barGraphoptions } from "$lib/data/mockData.js";


</script>

<div class="p-2 md:p-8 lg:p-8 dark:bg-accent-dark-base">
  <div class="w-full mt-8 grid grid-cols-3 gap-4">
    <div class="small_card">
      <div class="px-4 py-2">
        <h4>
          Congratulations Ayoub! 🥳
        </h4>
        <p>Best seller of the month</p>
        <div class="flex items-center justify-between">
          <div class="p-3">
            <h3 class="pb-4 text-primary-base">
              $42.8K
            </h3>
            <a href="/" class="px-4 py-2 text-f6 bg-primary-base text-white uppercase rounded-lg shadow-xl">
              View sales
            </a>
          </div>
          <img src={trophy} alt="trophy" class="w-20 h-20">
        </div>
      </div>
    </div>
    <div class="large_card flex gap-2 flex-col p-4">
      <div>
        <h4>
          Statistics Card
        </h4>
        <p>
          <span class="font-bold">
            Total 48.5% growth
          </span>
          😎 this month
        </p>
      </div>
      <div class="flex grow" />
      <div class="flex gap-2 items-start md:items-center lg:items-center justify-between flex-col md:flex-row lg:flex-row">
        <div class="flex items-center gap-x-2">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-base text-white">
            <Fa icon={faArrowTrendUp} size="lg"/>
          </div>
          <div>
            <span class="text-f7">Sales</span>
            <h6 class="text-f6 font-medium">245K</h6>
          </div>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-base text-white">
            <Fa icon={faUsers} size="lg"/>
          </div>
          <div>
            <span class="text-f7">Costumers</span>
            <h6 class="text-f6 font-medium">12.5K</h6>
          </div>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-green-600 text-white">
            <Fa icon={faChalkboard} size="lg"/>
          </div>
          <div>
            <span class="text-f7">Products</span>
            <h6 class="text-f6 font-medium">1.54K</h6>
          </div>
        </div>
        <div class="flex items-center gap-x-2">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-base text-white">
            <Fa icon={faDollar} size="lg"/>
          </div>
          <div>
            <span class="text-f7">Revenue</span>
            <h6 class="text-f6 font-medium">$88K</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="large_card">
      <Paiement />
    </div>
    <div class="small_card !bg-transparent">
      <Stats />
    </div>
    <div class="col-span-3 md:col-span-1 lg:col-span-1 rounded-lg">
      <ChartContent options={lineOptions} />
    </div>
    <div class="col-span-3 md:col-span-2 lg:col-span-2 rounded-lg">
      <ChartContent options={barGraphoptions} />
    </div>
  </div>
</div>
<style lang="postcss">
  .small_card {
    @apply col-span-3 md:col-span-1 lg:col-span-1 rounded-lg bg-white dark:bg-accent-dark-lighten4 dark:text-gray-700;
  }
  .large_card {
    @apply col-span-3 md:col-span-2 lg:col-span-2 rounded-lg bg-white dark:bg-accent-dark-lighten4 dark:text-gray-700;
  }
</style>
