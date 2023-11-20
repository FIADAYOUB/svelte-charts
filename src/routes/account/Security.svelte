<script>
  import img from '$lib/images/security.png';

  import Fa from "svelte-fa/src/fa.svelte";
  import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

  let showCurrentPassword = false;
  let shownewPassword = false;
  let showconfirmPassword = false;
</script>

<div class="p-4">
  <form class="">
    <div class="mt-8 flex flex-col lg:flex-row items-center gap-4">
      <div class="w-full flex flex-col items-center gap-4 basis-1/2">
        <div class="w-full">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              name="password"
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder=""
              class="peer costum_input"
            />
            <label class="costum_label">
              Current Password
            </label>
            <button
              type="button"
              on:click={()=> showCurrentPassword = !showCurrentPassword}
              class="absolute right-2 top-1 flex items-center justify-center h-8 w-8 rounded-full hover:bg-primary-lighten5"
            >
              <Fa icon={showCurrentPassword ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>
        <div class="w-full mt-4">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              name="newPassword"
              type={shownewPassword ? 'text' : 'password'}
              placeholder=""
              class="peer costum_input"
            />
            <label class="costum_label">
              New Password
            </label>
            <button
              type="button"
              on:click={()=> shownewPassword = !shownewPassword}
              class="absolute right-2 top-1 flex items-center justify-center h-8 w-8 rounded-full hover:bg-primary-lighten5"
            >
              <Fa icon={shownewPassword ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>
        <div class="w-full">
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              name="confirmPassword"
              type={showconfirmPassword ? 'text' : 'password'}
              placeholder=""
              class="peer costum_input"
            />
            <label class="costum_label">
              Confirm New Password
            </label>
            <button
              type="button"
              on:click={()=> showconfirmPassword = !showconfirmPassword}
              class="absolute right-2 top-1 flex items-center justify-center h-8 w-8 rounded-full hover:bg-primary-lighten5"
            >
              <Fa icon={showconfirmPassword ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center basis-1/2">
        <img src={img} alt="security" class="object-cover bg-cover h-[256px] w-[183px]">
      </div>
    </div>
    <div class="flex items-center gap-x-4 mt-8">
      <button
        type="submit"
        class="px-4 py-2 uppercase bg-primary-base text-white rounded-lg hover:bg-primary-lighten1"
      >
        Save change
      </button>
      <button
        type="button"
        on:click={()=> console.log('Reset')}
        class="px-4 py-2 uppercase border rounded-lg hover:bg-black/10"
      >
        Reset
      </button>
    </div>
  </form>
</div>
