<script>
  import { clients } from "$lib/data/mockData";

  import Fa from "svelte-fa/src/fa.svelte";
  import { faArrowRight, faEllipsisH, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

  let headersSort = ['ID', 'Name', 'Email', 'Age', 'Phone', 'City', 'Actions']

</script>

<div class="p-4">
  <div class="w-full p-1 lg:p-4">
    <h1 class="text-f2 font-medium">Clients ({clients.length})</h1>

    <div class="bg-white dark:bg-accent-dark-lighten4 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-1/2">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
                    </div>
                </form>
            </div>
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button type="button" class="flex items-center justify-center text-white bg-primary-base hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Add client
                </button>
                <div class="flex items-center space-x-3 w-full md:w-auto">
                    <button
                      type="button"
                      class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-primary-700 dark:bg-accent-dark-lighten2 dark:text-gray-900 dark:hover:text-white dark:hover:bg-accent-dark-lighten3"
                    >
                        <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                        Actions
                    </button>
                    <button
                      type="button"
                      class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-primary-700 dark:bg-accent-dark-lighten2 dark:text-gray-900 dark:hover:text-white dark:hover:bg-accent-dark-lighten3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                        </svg>
                        Filter
                        <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-accent-dark-lighten2 dark:text-gray-900">
              <tr>
                {#each headersSort as header}
                  <th scope="col" class="px-1 py-3 first:px-4 last:text-end last:px-4">{header}</th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each clients as client}
                <tr class="border-b hover:bg-gray-50 dark:border-gray-700 dark:bg-accent-dark-lighten4 dark:hover:bg-white dark:text-gray-900">
                  <th scope="row" class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap">
                    {client.id}
                  </th>
                  <td class="px-1 py-1">
                    {client.name}
                  </td>
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
                  <td class="px-4 py-1">
                    <div class="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        on:click={()=> console.log('open menu')}
                        class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        <Fa icon={faEllipsisV} />
                      </button>
                      <button
                        type="button"
                        on:click={()=> console.log('Go to')}
                        class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        <Fa icon={faArrowRight} />
                      </button>
                    </div>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
    </div>
  </div>
</div>
