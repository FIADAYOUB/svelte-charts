<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBars, faBell, faEnvelope, faGear, faMailBulk, faMoon, faPowerOff, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import { mobileMode }  from '$lib/store';
  import adminImage from '$lib/assets/images/user.png';
  import { fade } from "svelte/transition";
  import { clickOutside } from "$lib/mixins";

  export let darkMode;
  export let hideNotifications;

  let openMenuLink = false;
  let mailMenu = false;
  let profilMenu = false;

  let emails = [
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

  const dispatch = createEventDispatcher();
  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    dispatch("toggleTheme");
  }

  function toggleMenuLink() {
    openMenuLink = !openMenuLink;
  }
</script>

<header>
  <nav class="antialiased h-12 bg-secondary-base text-white">
    <div class="flex flex-wrap items-center justify-between mx-auto px-8 h-full">
      <!-- Logo -->
      <div class=" flex items-center w-full">
        {#if $mobileMode}
          <button on:click={toggleMenuLink}>
            <Fa icon={faBars} />
          </button>
        {/if}
        <h2 class="grow flex items-center justify-center font-paytone font-medium text-stroke">
          Dashboard
        </h2>
        <div class="nav-right flex items-center justify-center gap-0 md:gap-2 lg:gap-2">
          <button
            on:click={toggleTheme}
            class="{!darkMode ? '' : 'text-yellow-500'} w-8 h-10"
          >
            <Fa icon={!darkMode ? faMoon : faSun} size="lg"/>
          </button>
          <button
            on:click={()=> hideNotifications = !hideNotifications}
            class="relative w-8 h-10"
          >
            <Fa icon={faBell} size="lg"/>
            <span class="w-4 absolute top-0 right-2 bg-red-600 rounded-full text-[11px]">3</span>
          </button>
          <div class="relative">
            <button
              on:click={()=> mailMenu = !mailMenu}
              class="w-8 h-10 relative"
            >
              <Fa icon={faEnvelope} size="lg"/>
              <span class="w-4 absolute top-0 right-0 bg-red-600 rounded-full text-[11px]">4</span>
            </button>
            {#if mailMenu}
              <div
                use:clickOutside
                on:click_outside={()=> setTimeout(()=>{mailMenu = false},0)}
                transition:fade
                class="absolute top-8 right-0 z-10 mt-2 bg-white border rounded shadow-lg"
              >
                <ul>
                  {#each emails as email}
                    <li class="flex items-center p-2 text-gray-500 w-80">
                      <img src={email.image} alt="" class="h-10 w-10 rounded-full object-cover">
                      <div class="p-2">
                        <div class="flex items-center justify-between">
                          <h2>{email.name}</h2>
                          <p>{email.time} mins ago</p>
                        </div>
                        <p>{email.message}</p>
                      </div>
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
          <div class="relative">
            <button
              on:click={()=> profilMenu = !profilMenu}
              class="{!darkMode ? '' : 'text-yellow-500'} w-8 h-8 rounded-full"
            >
              <img src={adminImage} alt="">
            </button>
            {#if profilMenu}
              <div
                use:clickOutside
                on:click_outside={()=> setTimeout(()=>{profilMenu = false},0)}
                transition:fade
                class="absolute top-10 right-0 z-10 w-52 bg-white border rounded shadow-lg"
              >
                <ul>
                  <li class="profil_item">
                    <Fa icon={faGear} />
                    <span>Setting</span>
                  </li>
                  <li class="profil_item">
                    <Fa icon={faUser} />
                    <span>Profile</span>
                  </li>
                  <li class="profil_item">
                    <Fa icon={faEnvelope} />
                    <span>Messages</span>
                  </li>
                  <li class="profil_item border-t">
                    <Fa icon={faPowerOff} />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<style lang="postcss">
  .profil_item {
    @apply flex items-center py-1 px-4 text-gray-500 gap-3 hover:bg-gray-100
  }
  .text-stroke {
    -webkit-text-stroke: 1px #090121;
  }
</style>