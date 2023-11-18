<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faInfoCircle, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

  let activeTab = 0;

</script>

<div class="p-4">
  <div class="w-full bg-white dark:bg-accent-dark-lighten3 dark:text-gray-700 rounded-lg shadow-3xl">
    <div class="head__tab flex items-center justify-start border-b">
      <button
        type="button"
        on:click={()=> activeTab = 0}
        class:active_btn={activeTab === 0}
        class='flex items-center gap-x-2 p-4'
      >
        <Fa icon={faUser} />
        <span class="uppercase">Acount</span>
      </button>
      <button
        type="button"
        on:click={()=> activeTab = 1}
        class:active_btn={activeTab === 1}
        class='flex items-center gap-x-2 p-4'
      >
        <Fa icon={faLock} />
        <span class="uppercase">Security</span>
      </button>
      <button
        type="button"
        on:click={()=> activeTab = 2}
        class:active_btn={activeTab === 2}
        class='flex items-center gap-x-2 p-4'
      >
        <Fa icon={faInfoCircle} />
        <span class="uppercase">Info</span>
      </button>
    </div>
    <div class="h-[250px] w-full">

    </div>
  </div>
</div>

<style>
  .active_btn {
    @apply border-b-2 border-b-primary-base text-primary-base;
  }
</style>