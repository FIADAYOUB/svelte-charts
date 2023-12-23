<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEnvelope, faFile, faFolder, faMessage, faPaperPlane, faStar, faTrash, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

</script>
<div class="email-app flex h-full">
  <div class="email-side-nav w-[250px] transition-all duration-300 ease-in-out border-r border-r-gray-400 dark:border-r-white">
    <div class="p-4 w-full text-center">
      <a href="/" class=" px-4 py-2 rounded-lg bg-secondary-base text-white">New Message</a>
    </div>
    <div class="scrollable h-full py-4 bg-white dark:bg-accent-dark-base text-gray-500 dark:text-white">
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
  <div class="email-wrapper flex transition-all duration-300 ease-in-out grow ">
    <div class="email-list w-[200px] ">
      <div class="p-4 w-full">
        <div class="flex items-center justify-center w-full">
          <div class="flex items-center justify-center gap-1">
            <div class="icon_item">
              <Fa icon={faFolder} />
            </div>
            <div class="icon_item">
              <Fa icon={faFolder} />
            </div>
            <div class="icon_item">
              <Fa icon={faFolder} />
            </div>
          </div>
          <div class="grow"></div>
          <div class="flex items-center">
            <div class="icon_item">
              <Fa icon={faFolder} />
            </div>
            <div class="icon_item">
              <Fa icon={faFolder} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="email-content grow">

    </div>
  </div>
</div>
<style lang="postcss">
  .nav-item{
    @apply flex items-center justify-center gap-3 px-3 py-1 hover:bg-black/5
  }
  .icon_item {
    @apply h-8 w-8 bg-white dark:bg-accent-dark-base flex items-center justify-center shadow-3xl;
  }
</style>