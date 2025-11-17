<script>
  import img from '$lib/assets/images/security.png';
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEye, faEyeSlash, faLock, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

  let showCurrentPassword = false;
  let shownewPassword = false;
  let showconfirmPassword = false;

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Saving password changes...');
  }

  function handleReset() {
    showCurrentPassword = false;
    shownewPassword = false;
    showconfirmPassword = false;
  }
</script>

<div class="p-6 md:p-8">
  <!-- Header Section -->
  <div class="mb-8">
    <h2 class="text-2xl font-bold text-foreground mb-2">Security Settings</h2>
    <p class="text-sm text-muted-foreground">Update your password to keep your account secure</p>
  </div>

  <form on:submit={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Password Fields -->
      <div class="space-y-6">
        <!-- Current Password -->
        <div class="group">
          <label for="current-password" class="block text-sm font-medium text-foreground mb-2">
            Current Password
          </label>
          <div class="relative">
            <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Fa icon={faLock} class="w-4 h-4"/>
            </div>
            <input
              id="current-password"
              name="password"
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder="Enter current password"
              class="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
            />
            <button
              type="button"
              on:click={() => showCurrentPassword = !showCurrentPassword}
              class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label={showCurrentPassword ? 'Hide password' : 'Show password'}
            >
              <Fa icon={showCurrentPassword ? faEye : faEyeSlash} class="w-4 h-4"/>
            </button>
          </div>
        </div>

        <!-- New Password -->
        <div class="group">
          <label for="new-password" class="block text-sm font-medium text-foreground mb-2">
            New Password
          </label>
          <div class="relative">
            <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Fa icon={faLock} class="w-4 h-4"/>
            </div>
            <input
              id="new-password"
              name="newPassword"
              type={shownewPassword ? 'text' : 'password'}
              placeholder="Enter new password"
              class="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
            />
            <button
              type="button"
              on:click={() => shownewPassword = !shownewPassword}
              class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label={shownewPassword ? 'Hide password' : 'Show password'}
            >
              <Fa icon={shownewPassword ? faEye : faEyeSlash} class="w-4 h-4"/>
            </button>
          </div>
          <!-- Password Strength Indicator -->
          <div class="mt-2 space-y-1">
            <div class="flex gap-1">
              <div class="h-1 flex-1 rounded-full bg-muted"></div>
              <div class="h-1 flex-1 rounded-full bg-muted"></div>
              <div class="h-1 flex-1 rounded-full bg-muted"></div>
              <div class="h-1 flex-1 rounded-full bg-muted"></div>
            </div>
            <p class="text-xs text-muted-foreground">Use 8+ characters with mix of letters, numbers & symbols</p>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="group">
          <label for="confirm-password" class="block text-sm font-medium text-foreground mb-2">
            Confirm New Password
          </label>
          <div class="relative">
            <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Fa icon={faLock} class="w-4 h-4"/>
            </div>
            <input
              id="confirm-password"
              name="confirmPassword"
              type={showconfirmPassword ? 'text' : 'password'}
              placeholder="Re-enter new password"
              class="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
            />
            <button
              type="button"
              on:click={() => showconfirmPassword = !showconfirmPassword}
              class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label={showconfirmPassword ? 'Hide password' : 'Show password'}
            >
              <Fa icon={showconfirmPassword ? faEye : faEyeSlash} class="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>

      <!-- Security Illustration -->
      <div class="hidden lg:flex flex-col items-center justify-center">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
          <div class="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <img 
              src={img} 
              alt="Security" 
              class="w-48 h-auto object-contain mx-auto"
            />
          </div>
        </div>
        <div class="mt-6 text-center max-w-xs">
          <div class="flex items-center justify-center gap-2 mb-2">
            <Fa icon={faShieldAlt} class="w-5 h-5 text-primary"/>
            <h3 class="font-semibold text-foreground">Password Security</h3>
          </div>
          <p class="text-sm text-muted-foreground">
            Keep your account secure by using a strong, unique password and updating it regularly.
          </p>
        </div>
      </div>
    </div>

    <!-- Security Tips Card -->
    <div class="bg-gradient-to-r from-info/10 to-primary/10 rounded-xl p-4 border border-info/20">
      <h4 class="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
        <Fa icon={faShieldAlt} class="w-4 h-4 text-info"/>
        Password Security Tips
      </h4>
      <ul class="text-sm text-muted-foreground space-y-1 ml-6">
        <li class="list-disc">Use at least 8 characters</li>
        <li class="list-disc">Include uppercase and lowercase letters</li>
        <li class="list-disc">Add numbers and special characters</li>
        <li class="list-disc">Avoid using personal information</li>
        <li class="list-disc">Don't reuse passwords from other sites</li>
      </ul>
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center gap-3 pt-4 border-t border-border/50">
      <button
        type="submit"
        class="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
      >
        Save Changes
      </button>
      <button
        type="button"
        on:click={handleReset}
        class="px-6 py-2.5 border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all duration-200"
      >
        Reset
      </button>
    </div>
  </form>
</div>