<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faGlobe, faPhone, faCalendar, faFlag, faLanguage, faVenus, faMars } from "@fortawesome/free-solid-svg-icons";

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Saving info changes...');
  }

  function handleReset() {
    console.log('Resetting form...');
  }
</script>

<div class="p-6 md:p-8">
  <!-- Header -->
  <div class="mb-8">
    <h2 class="text-2xl font-bold text-foreground mb-2">Personal Information</h2>
    <p class="text-sm text-muted-foreground">Update your personal details and preferences</p>
  </div>

  <form on:submit={handleSubmit} class="space-y-6">
    <!-- Bio -->
    <div class="group">
      <label for="bio" class="block text-sm font-medium text-foreground mb-2">
        Bio
      </label>
      <textarea
        id="bio"
        name="bio"
        rows="4"
        value="Software developer with a Master's degree in Computer Science and 3 years of total experience, specialized in new web technologies 😎."
        placeholder="Tell us about yourself..."
        class="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
      />
    </div>

    <!-- Form Fields Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Birth Date -->
      <div class="group">
        <label for="birth_date" class="block text-sm font-medium text-foreground mb-2">
          Birth Date
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faCalendar} class="w-4 h-4"/>
          </div>
          <input
            id="birth_date"
            type="date"
            name="birth_date"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <!-- Phone -->
      <div class="group">
        <label for="phone" class="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faPhone} class="w-4 h-4"/>
          </div>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <!-- Website -->
      <div class="group">
        <label for="website" class="block text-sm font-medium text-foreground mb-2">
          Website
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faGlobe} class="w-4 h-4"/>
          </div>
          <input
            id="website"
            type="url"
            name="website"
            placeholder="https://example.com"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <!-- Country -->
      <div class="group">
        <label for="country" class="block text-sm font-medium text-foreground mb-2">
          Country
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faFlag} class="w-4 h-4"/>
          </div>
          <select
            id="country"
            name="country"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="algeria">Algeria</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
          <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Language -->
      <div class="group">
        <label for="language" class="block text-sm font-medium text-foreground mb-2">
          Language
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faLanguage} class="w-4 h-4"/>
          </div>
          <select
            id="language"
            name="language"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="arabic">Arabic</option>
          </select>
          <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Gender -->
      <div class="group">
        <label class="block text-sm font-medium text-foreground mb-3">
          Gender
        </label>
        <div class="flex gap-6">
          <label class="flex items-center gap-2 cursor-pointer group/radio">
            <input
              type="radio"
              name="gender"
              value="male"
              class="w-4 h-4 text-primary bg-background border-border focus:ring-2 focus:ring-primary/50 cursor-pointer"
            />
            <span class="text-sm text-foreground flex items-center gap-1.5">
              <Fa icon={faMars} class="w-4 h-4 text-info"/>
              Male
            </span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer group/radio">
            <input
              type="radio"
              name="gender"
              value="female"
              class="w-4 h-4 text-primary bg-background border-border focus:ring-2 focus:ring-primary/50 cursor-pointer"
            />
            <span class="text-sm text-foreground flex items-center gap-1.5">
              <Fa icon={faVenus} class="w-4 h-4 text-accent"/>
              Female
            </span>
          </label>
        </div>
      </div>
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