<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBriefcase, faDollar, faEllipsisV, faQuestion, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
</script>
<div class="w-full h-full grid grid-cols-4 gap-4">
  <div class="card_container relative">
    <button
      type="button"
      on:click={()=> console.log('show detail')}
      class="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
    >
      <Fa icon={faEllipsisV} />
    </button>
    <div class="text-primary-base bg-white dark:bg-accent-dark-lighten4 h-12 text-f2">
      <Fa icon={faSquarePollVertical} size="lg"/>
    </div>
    <div class="grow"></div>
    <div>
      <h4>
        Total Profit
      </h4>
      <div class="flex items-center justify-start gap-2">
        <h3>
          $25.6K
        </h3>
        <p class="text-green-600">+42%</p>
      </div>
      <p>Weekly Profit</p>
    </div>
  </div>
  <div class="card_container relative">
    <button
      type="button"
      on:click={()=> console.log('show detail')}
      class="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
    >
      <Fa icon={faEllipsisV} />
    </button>
    <div class="w-12 h-12 rounded-full flex items-center justify-center bg-gray-500 text-white">
      <Fa icon={faDollar} size="lg"/>
    </div>
    <div class="grow"></div>
    <div>
      <h4>
        Refunds
      </h4>
      <div class="flex items-center justify-start gap-4">
        <h3>
          $78
        </h3>
        <p class="text-red-600">-15%</p>
      </div>
      <p>Past Month</p>
    </div>
  </div>
  <div class="card_container relative">
    <button
      type="button"
      on:click={()=> console.log('show detail')}
      class="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
    >
      <Fa icon={faEllipsisV} />
    </button>
    <div class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-base text-white">
      <Fa icon={faBriefcase} size="lg"/>
    </div>
    <div class="grow"></div>
    <div>
      <h4>
        New Project
      </h4>
      <div class="flex items-center justify-start gap-4">
        <h3>
          862
        </h3>
        <p class="text-red-600">-18%</p>
      </div>
      <p>Yearly Project</p>
    </div>
  </div>
  <div class="card_container relative">
    <button
      type="button"
      on:click={()=> console.log('show detail')}
      class="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
    >
      <Fa icon={faEllipsisV} />
    </button>
    <div class="w-12 h-12 rounded-full flex items-center justify-center bg-orange-500 text-white">
      <Fa icon={faQuestion} size="lg"/>
    </div>
    <div class="grow"></div>
    <div>
      <h4>
        Sales Queries
      </h4>
      <div class="flex items-center justify-start gap-4">
        <h3>
          15
        </h3>
        <p>-28%</p>
      </div>
      <p>Last Week</p>
    </div>
  </div>
</div>
<style lang="postcss">
  .card_container {
    @apply bg-white dark:bg-accent-dark-lighten4 dark:text-white rounded-lg shadow-3xl col-span-4 md:col-span-4 lg:col-span-2 p-4 flex flex-col justify-between;
  }
</style>