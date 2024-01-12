<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBackward, faBars, faChevronLeft, faChevronRight, faEllipsisH, faEnvelope, faFile, faFolder, faMessage, faPaperPlane, faReply, faStar, faTag, faTrash, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

  let activeSide = false;
  let innerWidth = 0;
  let activeContent = false;

  $:if (innerWidth > 900) {
    activeSide = true;
    activeContent = true;
  } else {
    activeSide = false;
    activeContent = false;
  }
  function handleContent() {
    if (!activeSide) {
      activeContent = !activeContent;
    }
  }
</script>

<svelte:window bind:innerWidth />
<div class="email-app flex h-[calc(100vh-48px)] bg-white dark:bg-accent-dark-base">
  {#if activeSide}
    <div class="email-side-nav flex flex-col transition-all duration-300 ease-in-out border-r border-r-gray-300 dark:border-r-white">
      <div class="p-4 w-full text-center">
        <a href="/" class=" px-4 py-2 rounded-lg bg-secondary-base text-white">New Message</a>
      </div>
      <div class="grow py-4 text-gray-500 dark:text-white">
        <ul class="flex items-center flex-col p-0 w-full">
          <li class="w-full">
            <a href="/" class="nav-item">
              <Fa icon={faEnvelope} class="w-6"/>
              <div class="text-f6">Inbox</div>
              <div class="grow"></div>
              <div class="rounded-full bg-primary-lighten5 text-primary-base px-2">
                <p>+99</p>
              </div>
            </a>
          </li>

          <li class="p-0 w-full">
            <a href="/" class="nav-item">
              <Fa icon={faPaperPlane} class="w-6"/>
              <div class="text-f6">Send</div>
              <div class="grow"></div>
              <div class="rounded-full bg-green-200 text-green-900 px-2">
                <p>12</p>
              </div>
            </a>
          </li>

          <li class="p-0 w-full">
            <a href="/" class="nav-item">
              <Fa icon={faStar} class="w-6"/>
              <div class="text-f6">Important</div>
              <div class="grow"></div>
              <div class="rounded-full bg-blue-200 text-blue-900 px-2">
                <p>3</p>
              </div>
            </a>
          </li>

          <li class="p-0 w-full">
            <a href="/" class="nav-item">
              <Fa icon={faFile} class="w-6"/>
              <div class="text-f6">Drafts</div>
              <div class="grow"></div>
              <div class="rounded-full bg-yellow-200 text-yellow-900 px-2">
                <p>5</p>
              </div>
            </a>
          </li>

          <li class="p-0 w-full">
            <a href="/" class="nav-item">
              <Fa icon={faTriangleExclamation} class="w-6"/>
              <div class="text-f6">Spam</div>
              <div class="grow"></div>
              <div class="rounded-full bg-red-200 text-red-900 px-2">
                <p>1</p>
              </div>
            </a>
          </li>

          <li class="p-0 w-full">
            <a href="/" class="nav-item">
              <Fa icon={faTrash} class="w-6"/>
              <div class="text-f6">Trash</div>
              <div class="grow"></div>
              <div class="rounded-full bg-red-200 text-red-900 px-2">
                <p>+99</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  {/if}
  <div class="email-wrapper flex transition-all duration-300 ease-in-out grow ">
    <div
      class="{innerWidth > 900 ? 'w-2/5' : activeContent ? 'hidden' :  'w-full'} email-list flex flex-col  border-r border-r-gray-300 dark:border-r-white"
    >
      <div class="p-3 w-full border-b border-b-gray-300 dark:border-b-white">
        <div class="flex items-center justify-center w-full text-black dark:text-white">
          <div class="flex items-center justify-center gap-1">
            <button
              type="button"
              on:click={()=> activeSide = !activeSide}
              class="icon_item lg:!hidden"
            >
              <Fa icon={faBars} />
            </button>
            <div class="icon_item">
              <Fa icon={faFolder} />
            </div>
            <div class="icon_item">
              <Fa icon={faTag} />
            </div>
            <div class="icon_item">
              <Fa icon={faEllipsisH} />
            </div>
          </div>
          <div class="grow"></div>
          <div class="flex items-center gap-1">
            <div class="icon_item">
              <Fa icon={faChevronLeft} />
            </div>
            <div class="icon_item">
              <Fa icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="search p-2  border-b border-b-gray-300 dark:border-b-white">
          <input type="search" placeholder="search..." class="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm text-gray-700 outline outline-0 transition-all focus:border focus:border-primary-base">
        </div>
      </div>
      <div class="email-list grow overflow-y-scroll">
        {#each {length: 12} as _}
          <button
            type="button"
            on:click={handleContent}
            class="p-3 w-full border-b border-b-gray-300 dark:border-b-white"
          >
            <div class="flex items-center relative w-full">
              <input type="checkbox" class="w-8">
              <div class="grow flex flex-col items-start truncate">
                <div class="font-paytone">Moo Doe</div>
                <h3>Title Goes Here</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
              </div>
              <div class="absolute right-0 top-0">
                <p>1 min ago</p>
              </div>
            </div>
          </button>
        {/each}
        <div class="email-list-item">
        </div>
      </div>
    </div>
    {#if activeContent}
      <div class="email-content grow relative">
        {#if innerWidth < 900}
          <button
            type="button"
            on:click={()=> activeContent = !activeContent}
            class="icon_item absolute top-2 left-2"
          >
            <Fa icon={faChevronLeft} />
          </button>
        {/if}
        <div class="p-8 flex items-center  border-b border-b-gray-300 dark:border-b-white">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Moo Joe" class="w-12 h-12 rounded-full">
          <div class="ml-2">
            <p>Nov, 02 2017</p>
            <h3>Moo Doe</h3>
            <p>To: email@mail.com</p>
          </div>
          <div class="grow"></div>
          <div class="w-12 h-12 shadow-3xl rounded-full bg-orange-600 flex items-center justify-center text-white text-f4">
            <Fa icon={faReply} />
          </div>
        </div>
        <div class="p-8">
          <h3>
            Title of this email goes here
          </h3>
          <p class="text-f5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .nav-item{
    @apply flex items-center justify-center gap-3 px-3 py-1 hover:bg-black/5
  }
  .icon_item {
    @apply h-8 w-8 bg-slate-300 dark:bg-accent-dark-base flex items-center justify-center shadow-3xl;
  }
</style>