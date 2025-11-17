<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { 
    faBars, 
    faBell, 
    faEnvelope, 
    faGear, 
    faMoon, 
    faSun, 
    faUser,
    faCircleQuestion,
    faRightFromBracket,
    faSearch
  } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import { mobileMode } from '$lib/store';
  import adminImage from '$lib/assets/images/user.png';
  import { scale, fly } from "svelte/transition";
  import { clickOutside } from "$lib/mixins";

  export let darkMode;
  export let hideNotifications;

  let openMenuLink = false;
  let mailMenu = false;
  let profilMenu = false;
  let notificationMenu = false;

  let emails = [
    {
      id: 1,
      name: "John Doe",
      message: "Want to create your own customized data generator for your app...",
      time: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      unread: true
    },
    {
      id: 2,
      name: "Moo Doe",
      message: "Want to create your own customized data generator for your app...",
      time: 15,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      unread: true
    },
    {
      id: 3,
      name: "Lee Doe",
      message: "Want to create your own customized data generator for your app...",
      time: 25,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      unread: false
    },
    {
      id: 4,
      name: "Jane Smith",
      message: "Meeting scheduled for tomorrow at 10 AM...",
      time: 45,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      unread: false
    }
  ];

  let notifications = [
    { id: 1, type: 'success', message: 'Your profile has been updated successfully', time: '2m ago', unread: true },
    { id: 2, type: 'warning', message: 'New security update available', time: '1h ago', unread: true },
    { id: 3, type: 'info', message: 'Weekly report is ready to download', time: '3h ago', unread: true },
    { id: 4, type: 'default', message: 'System maintenance scheduled for tonight', time: '5h ago', unread: false }
  ];

  const dispatch = createEventDispatcher();
  
  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    dispatch("toggleTheme");
  }

  function toggleMenuLink() {
    openMenuLink = !openMenuLink;
    dispatch("toggleMenu");
  }

  const unreadEmailCount = emails.filter(e => e.unread).length;
  const unreadNotificationCount = notifications.filter(n => n.unread).length;

  function getNotificationIcon(type) {
    switch(type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'info': return 'ℹ';
      default: return '•';
    }
  }

  function getNotificationColor(type) {
    switch(type) {
      case 'success': return 'bg-success/10 text-success border-success/20';
      case 'warning': return 'bg-warning/10 text-warning border-warning/20';
      case 'info': return 'bg-info/10 text-info border-info/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
  <nav class="h-16">
    <div class="flex items-center justify-between mx-auto px-4 md:px-8 h-full max-w-[1920px]">
      <!-- Left Section -->
      <div class="flex items-center gap-4">
        {#if $mobileMode}
          <button 
            on:click={toggleMenuLink}
            class="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 text-foreground hover:bg-muted/50 hover:scale-105 active:scale-95"
            style="backdrop-filter: blur(12px);"
            aria-label="Toggle menu"
          >
            <Fa icon={faBars} size="lg"/>
          </button>
        {/if}
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md">
            <span class="text-2xl">📊</span>
          </div>
          <div class="hidden md:block">
            <h2 class="text-lg font-bold text-foreground tracking-tight">
              Dashboard
            </h2>
            <p class="text-xs text-muted-foreground">Welcome back!</p>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex items-center gap-2 md:gap-3">
        <!-- Search (hidden on mobile) -->
        <div class="hidden lg:block">
          <div class="relative">
            <Fa icon={faSearch} class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4"/>
            <input 
              type="search" 
              placeholder="Search anything..." 
              class="w-64 pl-10 pr-4 py-2.5 rounded-xl bg-muted/30 backdrop-blur-md border border-border/50 text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
              style="backdrop-filter: blur(16px);"
            />
          </div>
        </div>

        <!-- Theme Toggle -->
        <button
          on:click={toggleTheme}
          class="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 text-foreground hover:bg-muted/50 hover:scale-105 active:scale-95"
          style="backdrop-filter: blur(12px);"
          aria-label="Toggle theme"
        >
          <div class="relative w-5 h-5">
            <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 {darkMode ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'}">
              <Fa icon={faSun} size="lg"/>
            </div>
            <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 {!darkMode ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'}">
              <Fa icon={faMoon} size="lg"/>
            </div>
          </div>
        </button>

        <!-- Notifications -->
        <div class="relative">
          <button
            on:click={() => notificationMenu = !notificationMenu}
            class="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 text-foreground hover:bg-muted/50 hover:scale-105 active:scale-95"
            style="backdrop-filter: blur(12px);"
            aria-label="Notifications"
          >
            <Fa icon={faBell} size="lg"/>
            {#if unreadNotificationCount > 0}
              <span class="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full shadow-lg ring-2 ring-background animate-pulse">
                {unreadNotificationCount}
              </span>
            {/if}
          </button>
          
          {#if notificationMenu}
            <div
              use:clickOutside
              on:click_outside={() => setTimeout(() => {notificationMenu = false}, 0)}
              transition:fly={{y: -10, duration: 200}}
              class="absolute top-14 right-0 w-96 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
              style="backdrop-filter: blur(20px);"
            >
              <!-- Header -->
              <div class="px-5 py-4 border-b border-border/50 flex items-center justify-between bg-gradient-to-r from-primary/5 to-accent/5">
                <h3 class="font-semibold text-foreground">Notifications</h3>
                {#if unreadNotificationCount > 0}
                  <span class="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold backdrop-blur-sm">
                    {unreadNotificationCount} new
                  </span>
                {/if}
              </div>

              <!-- Notifications List -->
              <div class="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground">
                {#each notifications as notification}
                  <button class="w-full px-5 py-3 flex gap-3 items-start hover:bg-muted/30 transition-all duration-200 border-b border-border/30 last:border-b-0 text-left {notification.unread ? 'bg-primary/5' : ''}">
                    <div class="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm border backdrop-blur-sm {getNotificationColor(notification.type)}">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-foreground leading-snug {notification.unread ? 'font-semibold' : ''}">
                        {notification.message}
                      </p>
                      <p class="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    {#if notification.unread}
                      <div class="shrink-0 w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                    {/if}
                  </button>
                {/each}
              </div>

              <!-- Footer -->
              <div class="px-5 py-3 border-t border-border/50 bg-muted/20">
                <button class="w-full text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2 rounded-lg hover:bg-primary/5">
                  View all notifications
                </button>
              </div>
            </div>
          {/if}
        </div>

        <!-- Messages -->
        <div class="relative">
          <button
            on:click={() => mailMenu = !mailMenu}
            class="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 text-foreground hover:bg-muted/50 hover:scale-105 active:scale-95"
            style="backdrop-filter: blur(12px);"
            aria-label="Messages"
          >
            <Fa icon={faEnvelope} size="lg"/>
            {#if unreadEmailCount > 0}
              <span class="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center bg-accent text-accent-foreground text-[10px] font-bold rounded-full shadow-lg ring-2 ring-background animate-pulse">
                {unreadEmailCount}
              </span>
            {/if}
          </button>
          
          {#if mailMenu}
            <div
              use:clickOutside
              on:click_outside={() => setTimeout(() => {mailMenu = false}, 0)}
              transition:fly={{y: -10, duration: 200}}
              class="absolute top-14 right-0 w-96 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
              style="backdrop-filter: blur(20px);"
            >
              <!-- Header -->
              <div class="px-5 py-4 border-b border-border/50 flex items-center justify-between bg-gradient-to-r from-primary/5 to-accent/5">
                <h3 class="font-semibold text-foreground">Messages</h3>
                {#if unreadEmailCount > 0}
                  <span class="px-2.5 py-1 bg-accent/10 text-accent text-xs rounded-full font-semibold backdrop-blur-sm">
                    {unreadEmailCount} new
                  </span>
                {/if}
              </div>

              <!-- Messages List -->
              <div class="max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground">
                {#each emails as email}
                  <button class="w-full px-5 py-3.5 flex gap-3 hover:bg-muted/30 transition-all duration-200 border-b border-border/30 last:border-b-0 text-left {email.unread ? 'bg-accent/5' : ''}">
                    <div class="relative shrink-0">
                      <img 
                        src={email.image} 
                        alt={email.name}
                        class="w-12 h-12 rounded-full object-cover ring-2 ring-border/30"
                      />
                      {#if email.unread}
                        <div class="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-accent rounded-full border-2 border-card animate-pulse"></div>
                      {/if}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-start justify-between gap-2 mb-1">
                        <h4 class="text-sm text-foreground truncate {email.unread ? 'font-bold' : 'font-semibold'}">
                          {email.name}
                        </h4>
                        <span class="text-xs text-muted-foreground shrink-0">{email.time}m</span>
                      </div>
                      <p class="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {email.message}
                      </p>
                    </div>
                  </button>
                {/each}
              </div>

              <!-- Footer -->
              <div class="px-5 py-3 border-t border-border/50 bg-muted/20">
                <button class="w-full text-center text-sm font-medium text-accent hover:text-accent/80 transition-colors py-2 rounded-lg hover:bg-accent/5">
                  View all messages
                </button>
              </div>
            </div>
          {/if}
        </div>

        <!-- Help -->
        <button
          class="hidden md:flex relative w-10 h-10 rounded-xl items-center justify-center transition-all duration-200 text-foreground hover:bg-muted/50 hover:scale-105 active:scale-95"
          style="backdrop-filter: blur(12px);"
          aria-label="Help"
        >
          <Fa icon={faCircleQuestion} size="lg"/>
        </button>

        <!-- Divider -->
        <div class="w-px h-8 bg-border/50 mx-1 hidden md:block"></div>

        <!-- Profile -->
        <div class="relative">
          <button
            on:click={() => profilMenu = !profilMenu}
            class="flex items-center gap-2 md:gap-3 px-2 py-1.5 rounded-xl hover:bg-muted/50 transition-all duration-200 group"
            aria-label="Profile menu"
          >
            <img 
              src={adminImage} 
              alt="Profile"
              class="w-9 h-9 rounded-xl object-cover ring-2 ring-border/30 group-hover:ring-primary/50 transition-all duration-200"
            />
            <div class="hidden lg:block text-left">
              <p class="text-sm font-semibold text-foreground">Admin User</p>
              <p class="text-xs text-muted-foreground">Administrator</p>
            </div>
            <svg class="hidden md:block w-4 h-4 text-muted-foreground transition-transform duration-200 {profilMenu ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {#if profilMenu}
            <div
              use:clickOutside
              on:click_outside={() => setTimeout(() => {profilMenu = false}, 0)}
              transition:fly={{y: -10, duration: 200}}
              class="absolute top-14 right-0 w-64 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
              style="backdrop-filter: blur(20px);"
            >
              <!-- Profile Header -->
              <div class="px-5 py-4 flex items-center gap-3 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
                <img 
                  src={adminImage} 
                  alt="Profile"
                  class="w-14 h-14 rounded-xl object-cover ring-2 ring-primary/20"
                />
                <div class="min-w-0 flex-1">
                  <p class="font-semibold text-foreground truncate text-sm">Admin User</p>
                  <p class="text-xs text-muted-foreground truncate">admin@example.com</p>
                </div>
              </div>

              <!-- Menu Items -->
              <div class="py-2">
                <button class="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-foreground hover:bg-muted/30 transition-all duration-200 text-left">
                  <Fa icon={faUser} class="w-4 h-4"/>
                  <span>My Profile</span>
                </button>
                <button class="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-foreground hover:bg-muted/30 transition-all duration-200 text-left">
                  <Fa icon={faGear} class="w-4 h-4"/>
                  <span>Settings</span>
                </button>
                <button class="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-foreground hover:bg-muted/30 transition-all duration-200 text-left">
                  <Fa icon={faEnvelope} class="w-4 h-4"/>
                  <span>Messages</span>
                  {#if unreadEmailCount > 0}
                    <span class="ml-auto px-2 py-0.5 bg-destructive text-destructive-foreground text-[10px] rounded-full font-bold">
                      {unreadEmailCount}
                    </span>
                  {/if}
                </button>
              </div>

              <!-- Logout -->
              <div class="border-t border-border/50 py-2">
                <button class="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-all duration-200 text-left">
                  <Fa icon={faRightFromBracket} class="w-4 h-4"/>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </nav>
</header>