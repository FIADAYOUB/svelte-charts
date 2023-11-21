<script>
</script>

<div class="p-4">
  <form class="">
    <div class="mt-8 flex flex-col lg:flex-row items-center gap-4">
      <div class="w-full">
        <div class="relative w-full min-w-[200px]">
          <textarea
            id="bio"
            name="bio"
            value="The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scalable 😀, and lightning 😍 fast search and discovery experiences."
            placeholder=" "
            class="peer costum_input h-16 overflow-hidden"
          />
          <label
            for="bio"
            class="costum_label"
          >
            Bio
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            id="birth_date"
            type="date"
            name="birth_date"
            placeholder=" "
            class="peer costum_input"
          />
          <label
            for="birth_date"
            class="costum_label"
          >
            Birth Date
          </label>
        </div>
      </div>
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            id="phone"
            type="text"
            name="phone"
            class="peer costum_input"
            placeholder=" "
          />
          <label
            for="phone"
            class="costum_label"
          >
            Phone
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
      <div class="w-full">
        <div class="relative h-10 w-full min-w-[200px]">
          <input
            id="website"
            type="text"
            name="website"
            class="peer costum_input"
            placeholder=" "
          />
          <label
            for="website"
            class="costum_label"
          >
            Website
          </label>
        </div>
      </div>
      <div class="relative w-full min-w-[200px]">
        <select
          id="country"
          name="country"
          class="peer costum_input"
        >
          <option value="algeria">Algeria</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
        <label
          for="country"
          class="costum_label"
        >
          Country
        </label>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-4 mt-4">
      <div class="relative w-full min-w-[200px]">
        <select
          id="langue"
          name="langue"
          class="peer costum_input"
        >
          <option value="english">English</option>
          <option value="french">french</option>
          <option value="arabe">Arabe</option>
        </select>
        <label
          for="langue"
          class="costum_label">
          Languages
        </label>
      </div>
      <div class="w-full">
        <h2>Gender</h2>
        <div class="flex gap-6">
          <div class="flex items-center">
            <input
              id="male"
              type="radio"
              value=""
              name="radio-group"
              class="w-4 h-4 text-primary-base bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            >
            <label
              for="male"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Male
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="female"
              type="radio"
              value=""
              name="radio-group"
              class="w-4 h-4 text-primary-base bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            >
            <label
              for="female"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Female
            </label>
          </div>
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
