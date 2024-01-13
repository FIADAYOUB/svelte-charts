<script>
  import { slide } from "svelte/transition";
	import { quintOut } from 'svelte/easing';
  import { clickOutside } from "$lib/mixins";

  export let hideNotifications;

  let Notifications = [
    {
      name: "John Doe",
      message: "Want to create your own customized data generator for your app...",
      time: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Moo Doe",
      message: "Want to create your own customized data generator for your app...",
      time: 15,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Lee Doe",
      message: "Want to create your own customized data generator for your app...",
      time: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ]
</script>

<div
  use:clickOutside
  on:click_outside={()=> setTimeout(()=>{hideNotifications = true},0)}
  transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
  class="z-20 fixed right-0 top-12 h-full w-80 bg-white"
>
<div class="bg-secondary-lighten1 w-full text-center py-2 font-semibold text-f4 text-white">Notifications liste</div>
  <ul>
    {#each Notifications as notification}
      <li >
        <a on:click={()=>hideNotifications = true} href="/" class="flex items-center p-2 text-gray-500 w-80 border-b-2">
          <img src={notification.image} alt="" class="h-10 w-10 object-cover">
          <div class="p-2">
            <div class="flex items-center justify-between">
              <h4>{notification.name}</h4>
              <p>{notification.time} mins ago</p>
            </div>
            <div style="text-wrap:text-balance">{notification.message}</div>
          </div>
        </a>
      </li>
    {/each}
    <li>
      <a on:click={()=>hideNotifications = true} href="/" class="flex items-center justify-center bg-gray-50 p-2 text-gray-500 w-80 border-b-2">
        See all notifications
      </a>
    </li>
  </ul>
</div>