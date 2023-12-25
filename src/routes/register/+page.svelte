<script>
  import bg from '$lib/assets/images/bg.jpg';

  import Fa from "svelte-fa/src/fa.svelte";
  import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
  import { ripple } from '$lib/mixins';

  let showPassword = false;
</script>
<div class="login-index flex h-[100vh]">
  <div class="login-imag hidden md:block lg:block grow h-full">
    <img src={bg} alt="background" class="bg-cover object-cover h-full w-full">
  </div>
  <div class="form-login  w-full md:w-[320px] lg:w-[420px] px-10 py-20 bg-white">
    <h1 class="font-paytone font-thin py-10 text-center">Register</h1>
    <div class="w-full mt-4">
      <div class="relative h-10 w-full min-w-[200px]">
        <input
          name="username"
          type='text'
          placeholder=""
          class="peer costum_input"
        />
        <label for="email" class="costum_label">
          Username
        </label>
      </div>
    </div>
    <div class="w-full mt-4">
      <div class="relative h-10 w-full min-w-[200px]">
        <input
          name="email"
          type='text'
          placeholder=""
          class="peer costum_input"
        />
        <label for="email" class="costum_label">
          Email
        </label>
      </div>
    </div>
    <div class="w-full mt-4">
      <div class="relative h-10 w-full min-w-[200px]">
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder=""
          class="peer costum_input"
        />
        <label for="password" class="costum_label">
          Password
        </label>
        <button
          type="button"
          on:click={()=> showPassword = !showPassword}
          class="absolute right-2 top-1 flex items-center justify-center h-8 w-8 rounded-full hover:bg-primary-lighten5"
        >
          <Fa icon={showPassword ? faEye : faEyeSlash} />
        </button>
      </div>
    </div>
    <div class="w-full mt-4">
      <div class="relative h-10 w-full min-w-[200px]">
        <input
          name="confirm_password"
          type={showPassword ? 'text' : 'password'}
          placeholder=""
          class="peer costum_input"
        />
        <label for="confirm_" class="costum_label">
          Confirm Password
        </label>
      </div>
    </div>
    <button
      use:ripple
      type="submit"
      class="mt-4 w-full py-1 rounded-lg shadow-3xl bg-primary-base text-white">
      Register
    </button>
  </div>
</div>