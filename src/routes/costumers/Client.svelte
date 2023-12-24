<script>
  import { mobileMode } from "$lib/store";

  import Fa from "svelte-fa/src/fa.svelte";
  import { faArrowRight, faEllipsisV, faEnvelope, faGear, faPlusCircle, faTrashAlt, faUser } from "@fortawesome/free-solid-svg-icons";
  import { clickOutside } from "$lib/mixins";
  import { fade } from "svelte/transition";
  import DetailsCostumer from "./DetailsCostumer.svelte";

  export let client;

  let showDetailCostumer = false;
  let actionMenu = false;

</script>

<DetailsCostumer bind:showDetailCostumer {client}/>
<tr class="border-b hover:bg-gray-50 dark:border-gray-700 dark:bg-accent-dark-lighten4 dark:hover:bg-white dark:text-gray-900">
  <th scope="row" class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap">
    {client.id}
  </th>
  <td class="px-1 py-1">
    {client.name}
  </td>
  {#if !$mobileMode}
    <td class="px-1 py-1">
      {client.email}
    </td>
    <td class="px-1 py-1">
      {client.age}
    </td>
    <td class="px-1 py-1">
      {client.phone}
    </td>
    <td class="px-1 py-1">
      {client.city}
    </td>
  {/if}
  <td class="px-1 lg:px-4 py-1">
    <div class="flex items-center justify-end">
      {#if $mobileMode}
        <button
          type="button"
          on:click={()=> showDetailCostumer = true}
          class="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100 text-primary-base"
        >
          <Fa icon={faPlusCircle} />
        </button>
      {/if}
      <div class="relative">
        <button
          type="button"
          on:click={()=> actionMenu = !actionMenu}
          class="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <Fa icon={faEllipsisV} />
        </button>
        {#if actionMenu}
          <div
            use:clickOutside
            on:click_outside={()=> setTimeout(()=>{actionMenu = false},0)}
            transition:fade
            class="absolute top-4 right-0 z-10 w-52 bg-white border rounded shadow-lg"
          >
            <ul>
              <li class="profil_item">
                <Fa icon={faGear} />
                <span>Setting</span>
              </li>
              <li class="profil_item">
                <Fa icon={faUser} />
                <span>View Profile</span>
              </li>
              <li class="profil_item">
                <Fa icon={faEnvelope} />
                <span>Message</span>
              </li>
              <li class="profil_item border-t !text-red-600">
                <Fa icon={faTrashAlt} />
                <span>Delte Client</span>
              </li>
            </ul>
          </div>
        {/if}
      </div>
      <button
        type="button"
        on:click={()=> console.log('Go to')}
        class="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100"
      >
        <Fa icon={faArrowRight} />
      </button>
    </div>
  </td>
</tr>
<style lang="postcss">
  .profil_item {
    @apply flex items-center py-1 px-4 text-gray-500 gap-3 hover:bg-gray-100
  }
  </style>