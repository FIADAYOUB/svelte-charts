<script>
  import img from '$lib/images/user.png';
</script>

<div class="p-4">
  <form class="">
    <div class="flex items-center">
      <img src={img} alt="avatar" class="object-cover h-32 w-32">
      <div class="p-8">
        <button
          type="button"
          class="p-2 uppercase bg-primary-base text-white rounded-lg hover:bg-primary-lighten1 text-f7"
        >
          upload new photo
        </button>
        <div class="text-xs mt-2 opacity-75">
          Allowed PNG or JPEG. Max size of 800K.
        </div>
      </div>
    </div>
    <div class="mt-8 flex flex-col lg:flex-row items-center gap-4">
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            name="username"
            value="Frontend dev@"
            placeholder=" "
            class="peer costum_input"
          />
          <label class="costum_label">
            Username
          </label>
        </div>
      </div>
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            value="Ayoub"
            name="name"
            placeholder=""
            class="peer costum_input"
          />
          <label
            for="name"
            class="costum_label">
            Name
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            type="email"
            name="email"
            value="Ayoub.fiadh@gmail.com"
            placeholder=" "
            class="peer costum_input"
          />
          <label class="costum_label">
            Email
          </label>
        </div>
      </div>
      <div class="relative h-10 w-full min-w-[200px]">
        <select
          name="city"
          class="peer costum_input"
          >
          <option value="brazil">Brazil</option>
          <option value="bucharest">Bucharest</option>
          <option value="london">London</option>
          <option value="washington">Washington</option>
        </select>
        <label class="costum_label">
          Select a City
        </label>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
      <div class="relative h-10 w-full min-w-[200px]">
        <select
          name="status"
          class="peer costum_input"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <label class="costum_label">
          Status
        </label>
      </div>
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            type="text"
            name="company"
            class="peer costum_input"
            placeholder=" "
            value="Lichen"
          />
          <label class="costum_label">
            Company
          </label>
        </div>
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
