<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChartBar, faDashboard, faTableCells } from "@fortawesome/free-solid-svg-icons";
  import adminImage from '$lib/images/user.png';
  import { page } from '$app/stores';

  let width = 56;

  $: if ($page.route.id?.includes('account')) {
    width = 256;
  } else {
    width = 56;
  };

  function mouseEnter() {
    if (!$page.route.id?.includes('account')) {
      width = 256;
    }
  };

  function mouseLeave() {
    if (!$page.route.id?.includes('account')) {
      width = 56;
    }
  }
</script>

<aside
  on:mouseenter={mouseEnter}
  on:mouseleave={mouseLeave}
  class="fixed top-0 left-0 z-40 h-screen !hover:w-64"
  style='width: {width}px'
>
  <div class="h-full p-1 py-4 bg-gray-100 overflow-x-hidden dark:bg-gray-900">
     <ul class="space-y-2 font-medium">
       <li>
          <a href="/account" class="flex items-center text-gray-900 p-1 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
             <img src={adminImage} alt="Ayoub Fiad" class="h-10 w-10 rounded-full flex items-center justify-center">
             <span class="ml-3">Ayoub Fiad</span>
          </a>
       </li>
        <li>
          <a href="/" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
            <Fa icon={faDashboard} size="lg"/>
            <span class="ml-5">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
            <Fa icon={faChartBar} size="lg"/>
            <span class="ml-5">charts</span>
          </a>
        </li>
        <li>
          <a href="/" class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
            <Fa icon={faTableCells} size="lg"/>
            <span class="ml-5">Orders</span>
          </a>
        </li>
     </ul>
  </div>
</aside>

