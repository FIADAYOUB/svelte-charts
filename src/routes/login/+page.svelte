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
    <h1 class="font-paytone font-thin py-10 text-center">Login</h1>
    <div class="w-full py-4">
      <div class="relative h-10 w-full min-w-[200px]">
        <input
          name="email"
          type='text'
          placeholder=""
          class="peer costum_input"
        />
        <label class="costum_label">
          Email
        </label>
      </div>
    </div>
    <div class="w-full">
      <div class="relative h-10 w-full min-w-[200px]">
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder=""
          class="peer costum_input"
        />
        <label class="costum_label">
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
    <div class="px-2 mt-6 flex items-center justify-between">
      <div>
        <input name="remember" type="checkbox">
        <label for="remember" class="text-f7 opacity-80">Remember Me</label>
      </div>
      <button
        use:ripple
        type="submit"
        class="px-4 py-1 rounded-lg shadow-3xl bg-primary-base text-white">
        Login
      </button>
    </div>
  </div>
</div>