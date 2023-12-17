<script>

  import Modal from "$lib/components/shared/Modal.svelte";

  export let showAddClient = false;

  function clear() {

  }

</script>

<Modal bind:showModal={showAddClient}>
  <h1 slot="header" class="w-full text-center font-bold text-f4 uppercase p-2">
    Add client
  </h1>
  <form>
    <div class="px-4 py-8 min-w-full md:min-w-[400px] lg:min-w-[400px]">
      <div class="mt-8 flex flex-col lg:flex-row items-center gap-4">
        <div class="w-full">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              name="username"
              value=""
              placeholder=" "
              class="peer costum_input"
            />
            <label class="costum_label">
              Name
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
        <div class="w-full">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              type="email"
              name="email"
              value=""
              placeholder=" "
              class="peer costum_input"
            />
            <label class="costum_label">
              Email
            </label>
          </div>
        </div>

      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
        <div class="w-full">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              type="number"
              name="number"
              value=""
              class="peer costum_input"
            />
            <label class="costum_label">
              Age
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
        <div class="w-full">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              type="text"
              name="phone"
              value=""
              class="peer costum_input"
            />
            <label class="costum_label">
              Phone
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
        <div class="relative h-10 w-full min-w-[200px]">
          <select
            name="city"
            class="peer costum_input"
            >
            <option value="brazil">Brazil</option>
            <option value="bucharest">Bucharest</option>
            <option value="london">London</option>
            <option value="washington">Washington</option>
          </select>
          <label class="costum_label">
            Select a City
          </label>
        </div>
      </div>
    </div>
    <button
      type="button"
      on:click={clear}
      class="h-10 w-full flex items-center justify-center bg-primary-lighten5"
    >
      Reset
    </button>
    <button
      type="submit"
      on:click={()=> showAddClient = false}
      class="h-10 w-full flex items-center justify-center bg-primary-base"
    >
      Add
    </button>
  </form>
</Modal>
<style>
</style>