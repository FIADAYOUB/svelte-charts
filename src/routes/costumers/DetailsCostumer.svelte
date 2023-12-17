<script>

  import Modal from "$lib/components/shared/Modal.svelte";
  export let showDetailCostumer = false;
  export let client;
</script>

{#if client}
  <Modal bind:showModal={showDetailCostumer}>
    <ul class="p-4">
      <li class="detail_item">
        <div class="font-medium">
          ID:
        </div>
        <div>
          {client.id}
        </div>
      </li>
      <li class="detail_item">
        <div class="font-medium">
          Name:
        </div>
        <div>
          {client.name}
        </div>
      </li>
      <li class="detail_item">
        <div class="font-medium">
          Email:
        </div>
        <div>
          {client.email}
        </div>
      </li>
      <li class="detail_item">
        <div class="font-medium">
          Age:
        </div>
        <div>
          {client.age}
        </div>
      </li>
      <li class="detail_item">
        <div class="font-medium">
          City:
        </div>
        <div>
          {client.city}
        </div>
      </li>
    </ul>
    <button
      type="button"
      on:click={()=> showDetailCostumer = false}
      class="h-10 w-full flex items-center justify-center bg-primary-base"
    >
      Close
    </button>
  </Modal>
{/if}
<style>
  .detail_item {
    @apply bg-inherit p-1 flex items-center justify-between gap-x-4 border-b;
  }
</style>