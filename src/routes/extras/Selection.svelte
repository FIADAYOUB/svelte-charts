<script>
  import Fa from "svelte-fa";
  import { faCheckCircle, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
  import { slide } from "svelte/transition";

  let selection = [];
  let opened = true;

  const group = "group";

  function handleRadio(e) {
    selection = [this.value];
  }
</script>

<div class="flex items-center justify-between px-8 py-2 border-b-2 bg-white dark:bg-accent-dark-lighten4">
  <div class="text-f4">Design Selection</div>
  <button
    type="button"
    on:click={()=> opened = !opened}
    class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
  >
    <Fa icon={opened ? faChevronUp : faChevronDown}/>
  </button>
</div>
{#if opened}
  <div transition:slide class="bg-white dark:bg-accent-dark-lighten4">
    <div class="p-5 grid auto-rows-auto grid-cols-auto-fill-100 gap-4 justify-center">
      {#each { length: 9 } as _, index}
        {@const selected = selection.includes(index.toString())}
        <input
          type="radio"
          name="tableau"
          id="radio-{index}"
          value={index}
          class="w-5 h-5 mx-2 z-20 hidden"
          {group}
          checked={selected}
          on:change={handleRadio}
        />
        <label
          for="radio-{index}"
          class="w-[250px] h-[300px] bg-white rounded-lg relative block shadow-4xl hover:shadow-5xl border-primary-base"
          class:border-2={selected}
        >
          {#if selected}
            <div class="absolute top-3 right-4 z-10 text-primary-base">
              <Fa icon={faCheckCircle} />
            </div>
          {/if}
        </label>
      {/each}
    </div>
  </div>
{/if}
