<script>
  import img from '$lib/assets/images/user.png';
  import Fa from "svelte-fa/src/fa.svelte";
  import { faUpload, faUser, faEnvelope, faBuilding, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Saving account changes...');
  }

  function handleReset() {
    console.log('Resetting form...');
  }
</script>

<div class="p-6 md:p-8">
  <!-- Header -->
  <div class="mb-8">
    <h2 class="text-2xl font-bold text-foreground mb-2">Account Information</h2>
    <p class="text-sm text-muted-foreground">Update your account details and profile picture</p>
  </div>

  <form on:submit={handleSubmit} class="space-y-8">
    <!-- Profile Picture -->
    <div class="flex flex-col sm:flex-row items-start gap-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border/50">
      <div class="relative group">
        <img 
          src={img} 
          alt="Profile" 
          class="w-24 h-24 rounded-xl object-cover ring-4 ring-border group-hover:ring-primary/50 transition-all duration-200"
        />
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center cursor-pointer">
          <Fa icon={faUpload} class="w-6 h-6 text-white"/>
        </div>
      </div>
      <div class="flex-1">
        <h3 class="font-semibold text-foreground mb-1">Profile Picture</h3>
        <p class="text-xs text-muted-foreground mb-4">Allowed PNG or JPEG. Max size of 800KB.</p>
        <button
          type="button"
          class="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
        >
          Upload New Photo
        </button>
      </div>
    </div>

    <!-- Form Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Username -->
      <div class="group">
        <label for="username" class="block text-sm font-medium text-foreground mb-2">
          Username
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faUser} class="w-4 h-4"/>
          </div>
          <input
            id="username"
            name="username"
            value="Frontend dev@"
            placeholder="Enter username"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <!-- Name -->
      <div class="group">
        <label for="name" class="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faUser} class="w-4 h-4"/>
          </div>
          <input
            id="name"
            name="name"
            value="Ayoub"
            placeholder="Enter full name"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="group">
        <label for="email" class="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faEnvelope} class="w-4 h-4"/>
          </div>
          <input
            id="email"
            type="email"
            name="email"
            value="Ayoub.fiadh@gmail.com"
            placeholder="Enter email"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <!-- City -->
      <div class="group">
        <label for="city" class="block text-sm font-medium text-foreground mb-2">
          City
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10">
            <Fa icon={faMapMarkerAlt} class="w-4 h-4"/>
          </div>
          <select
            id="city"
            name="city"
            class="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="brazil">Brazil</option>
            <option value="bucharest">Bucharest</option>
            <option value="london">London</option>
            <option value="washington">Washington</option>
          </select>
          <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Status -->
      <div class="group">
        <label for="status" class="block text-sm font-medium text-foreground mb-2">
          Status
        </label>
        <div class="relative">
          <select
            id="status"
            name="status"
            class="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Company -->
      <div class="group">
        <label for="company" class="block text-sm font-medium text-foreground mb-2">
          Company
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Fa icon={faBuilding} class="w-4 h-4"/>
          </div>
          <input
            id="company"
            type="text"
            name="company"
            value="Lichen"
            placeholder="Enter company name"
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
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