<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBackward, faBars, faChevronLeft, faChevronRight, faEllipsisH, faEnvelope, faFile, faFolder, faMessage, faPaperPlane, faReply, faStar, faTag, faTrash, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

  let activeSide = false;
  let innerWidth = 0;
  let activeContent = false;
  let activeSection = 'inbox';
  let selectedEmail = null;

  const emailData = {
    inbox: [
      { id: 1, from: 'Sarah Johnson', email: 'sarah.j@company.com', subject: 'Q4 Marketing Strategy Review', preview: 'Hi team, I wanted to share the latest updates on our Q4 marketing strategy. We\'ve seen a 35% increase in engagement...', time: '2 min ago', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', content: 'Hi team,\n\nI wanted to share the latest updates on our Q4 marketing strategy. We\'ve seen a 35% increase in engagement across all channels, which is fantastic news.\n\nKey highlights:\n- Social media campaigns performing 40% above target\n- Email open rates improved to 28%\n- New content strategy driving 50% more organic traffic\n\nLet\'s schedule a call this week to discuss next steps.\n\nBest regards,\nSarah' },
      { id: 2, from: 'GitHub', email: 'noreply@github.com', subject: 'New pull request in your repository', preview: 'John Doe opened a new pull request #247 in your repository awesome-project. The changes include bug fixes and performance improvements...', time: '15 min ago', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', content: 'A new pull request has been opened in your repository.\n\nPull Request #247: Fix authentication bug and improve performance\n\nChanges:\n- Fixed critical authentication bug in login flow\n- Optimized database queries (30% faster)\n- Updated dependencies to latest versions\n- Added comprehensive test coverage\n\nPlease review and merge when ready.' },
      { id: 3, from: 'LinkedIn', email: 'jobs@linkedin.com', subject: 'New job opportunities matching your profile', preview: 'Based on your experience and skills, we found 12 new positions that might interest you. Senior Software Engineer roles are available...', time: '1 hour ago', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', content: 'Hello,\n\nWe found several exciting opportunities that match your profile:\n\n1. Senior Software Engineer at TechCorp - $150k-$180k\n2. Full Stack Developer at StartupXYZ - $130k-$160k\n3. Lead Frontend Engineer at BigTech - $170k-$200k\n\nThese positions offer remote work, competitive benefits, and great company culture.\n\nClick to apply or save for later.' },
    ],
    sent: [
      { id: 4, from: 'You', email: 'you@company.com', subject: 'Re: Project timeline and deliverables', preview: 'Thanks for the update! The timeline looks good. I\'ve reviewed the deliverables and have a few suggestions for the implementation phase...', time: 'Yesterday', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', content: 'Hi Michael,\n\nThanks for the update! The timeline looks good overall.\n\nI\'ve reviewed the deliverables and have a few suggestions:\n\n1. Let\'s add more buffer time for testing phase\n2. Consider splitting the implementation into 2 sprints\n3. We should schedule weekly sync meetings\n\nLet me know your thoughts.\n\nBest,\nYou' },
      { id: 5, from: 'You', email: 'you@company.com', subject: 'Meeting notes from client presentation', preview: 'Here are the key takeaways from today\'s client meeting. Overall, they were very impressed with our progress and provided positive feedback...', time: '2 days ago', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', content: 'Team,\n\nHere are the key takeaways from today\'s client meeting:\n\n✅ Client approved the new design direction\n✅ Budget increased by 20% for additional features\n✅ Timeline extended by 2 weeks\n✅ Next presentation scheduled for end of month\n\nAction items:\n- Update project plan\n- Schedule kickoff for new features\n- Prepare demo for next meeting\n\nGreat work everyone!' },
    ],
    starred: [
      { id: 6, from: 'CEO Office', email: 'ceo@company.com', subject: 'Company-wide update: New direction for 2024', preview: 'Dear team, I\'m excited to share our strategic vision for 2024. We\'re focusing on innovation, customer success, and team growth...', time: '3 days ago', avatar: 'https://randomuser.me/api/portraits/men/6.jpg', content: 'Dear team,\n\nI\'m excited to share our strategic vision for 2024.\n\nOur focus areas:\n1. Innovation - Launching 3 new products\n2. Customer Success - 95% satisfaction target\n3. Team Growth - Expanding to 200 employees\n4. Sustainability - Carbon neutral by Q4\n\nWe\'ve achieved remarkable growth this year, and I\'m confident we\'ll exceed our goals in 2024.\n\nThank you for your dedication.\n\nBest regards,\nCEO' },
      { id: 7, from: 'HR Department', email: 'hr@company.com', subject: 'Important: Annual performance review schedule', preview: 'Annual performance reviews will begin next month. Please ensure you complete your self-assessment by the deadline...', time: '1 week ago', avatar: 'https://randomuser.me/api/portraits/women/7.jpg', content: 'Dear employees,\n\nAnnual performance reviews begin next month.\n\nImportant dates:\n- Dec 15: Self-assessment due\n- Dec 20-30: Manager reviews\n- Jan 5: Results shared\n\nPlease:\n- Complete self-assessment form\n- Update your achievements document\n- Schedule 1:1 with your manager\n\nContact HR with any questions.\n\nBest,\nHR Team' },
    ],
    drafts: [
      { id: 8, from: 'Draft', email: '', subject: 'Proposal for new feature development', preview: 'I wanted to propose a new feature that could significantly improve user engagement. Based on user feedback and analytics data...', time: 'Draft', avatar: 'https://randomuser.me/api/portraits/men/8.jpg', content: 'Hi Team,\n\nI wanted to propose a new feature that could significantly improve user engagement.\n\nProposal:\n- Dark mode implementation\n- User preference storage\n- Smooth theme transitions\n\nBenefits:\n- Better UX for late-night users\n- Reduced eye strain\n- Modern app appearance\n\nEstimated timeline: 2 sprints\n\n[Draft - not sent yet]' },
      { id: 9, from: 'Draft', email: '', subject: 'Team outing ideas for next month', preview: 'Hey everyone, I\'m organizing our next team outing and wanted to get your input on activities. Here are a few options I\'m considering...', time: 'Draft', avatar: 'https://randomuser.me/api/portraits/women/9.jpg', content: 'Hey everyone,\n\nI\'m organizing our next team outing!\n\nOptions:\n1. Escape room challenge\n2. Bowling and dinner\n3. Hiking + picnic\n4. Cooking class\n\nPreferred date: Last Saturday of the month\n\nPlease vote in the poll [link]\n\n[Draft - not sent yet]' },
    ],
    spam: [
      { id: 10, from: 'SuperDeals', email: 'deals@spam.com', subject: '🎉 You won $1,000,000! Claim now!', preview: 'Congratulations! You have been selected as our lucky winner. Click here to claim your prize money now. Limited time offer...', time: '2 hours ago', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', content: '🎉 CONGRATULATIONS! 🎉\n\nYou have WON $1,000,000!!!\n\nClick this suspicious link to claim now!\n\nThis is obviously spam. Do not click anything.\n\n[This email was automatically marked as spam]' },
    ],
    trash: [
      { id: 11, from: 'Old Newsletter', email: 'news@oldsite.com', subject: 'Weekly digest - September 2023', preview: 'Your weekly roundup of articles and updates from September. This content is now outdated and no longer relevant...', time: '2 months ago', avatar: 'https://randomuser.me/api/portraits/women/11.jpg', content: 'Weekly Digest - September 2023\n\nThis is old content that you deleted.\n\nTop articles:\n- Outdated tech news\n- September events recap\n- Old product announcements\n\n[Moved to trash 2 months ago]' },
      { id: 12, from: 'Spam Advertiser', email: 'ads@spammy.com', subject: 'Amazing discount! Buy now!', preview: 'Get 90% off on products you never wanted. Limited time only. Click here before it\'s too late...', time: '1 month ago', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', content: 'AMAZING DISCOUNT!\n\n90% OFF EVERYTHING!!!\n\nBuy now! Limited time!\n\n[Deleted spam email]' },
    ]
  };

  $:if (innerWidth > 900) {
    activeSide = true;
    activeContent = true;
  } else {
    activeSide = false;
    activeContent = false;
  }

  function handleContent(email) {
    selectedEmail = email;
    if (!activeSide) {
      activeContent = !activeContent;
    }
  }

  function changeSection(section) {
    activeSection = section;
    selectedEmail = emailData[section][0] || null;
  }

  $: currentEmails = emailData[activeSection] || [];
  $: if (!selectedEmail && currentEmails.length > 0) {
    selectedEmail = currentEmails[0];
  }
</script>

<svelte:window bind:innerWidth />
<div class="email-app flex h-[calc(100vh-48px)] bg-gray-50 dark:bg-accent-dark-base">
  {#if activeSide}
    <div class="email-side-nav flex flex-col w-64 transition-all duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <button class="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
          <Fa icon={faPaperPlane} class="text-sm" />
          Compose
        </button>
      </div>
      <div class="grow py-2 overflow-y-auto text-gray-700 dark:text-gray-300">
        <ul class="flex flex-col gap-1 px-2">
          <li class="w-full">
            <button on:click={() => changeSection('inbox')} class="nav-item w-full {activeSection === 'inbox' ? 'active' : ''}">
              <Fa icon={faEnvelope} class="w-5 h-5"/>
              <span class="text-sm font-medium">Inbox</span>
              <div class="grow"></div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                {emailData.inbox.length}
              </span>
            </button>
          </li>

          <li class="w-full">
            <button on:click={() => changeSection('sent')} class="nav-item w-full {activeSection === 'sent' ? 'active' : ''}">
              <Fa icon={faPaperPlane} class="w-5 h-5"/>
              <span class="text-sm font-medium">Sent</span>
              <div class="grow"></div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                {emailData.sent.length}
              </span>
            </button>
          </li>

          <li class="w-full">
            <button on:click={() => changeSection('starred')} class="nav-item w-full {activeSection === 'starred' ? 'active' : ''}">
              <Fa icon={faStar} class="w-5 h-5"/>
              <span class="text-sm font-medium">Starred</span>
              <div class="grow"></div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200">
                {emailData.starred.length}
              </span>
            </button>
          </li>

          <li class="w-full">
            <button on:click={() => changeSection('drafts')} class="nav-item w-full {activeSection === 'drafts' ? 'active' : ''}">
              <Fa icon={faFile} class="w-5 h-5"/>
              <span class="text-sm font-medium">Drafts</span>
              <div class="grow"></div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {emailData.drafts.length}
              </span>
            </button>
          </li>

          <li class="w-full">
            <button on:click={() => changeSection('spam')} class="nav-item w-full {activeSection === 'spam' ? 'active' : ''}">
              <Fa icon={faTriangleExclamation} class="w-5 h-5"/>
              <span class="text-sm font-medium">Spam</span>
              <div class="grow"></div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200">
                {emailData.spam.length}
              </span>
            </button>
          </li>

          <li class="w-full">
            <button on:click={() => changeSection('trash')} class="nav-item w-full {activeSection === 'trash' ? 'active' : ''}">
              <Fa icon={faTrash} class="w-5 h-5"/>
              <span class="text-sm font-medium">Trash</span>
              <div class="grow"></div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200">
                {emailData.trash.length}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  {/if}
  <div class="email-wrapper flex transition-all duration-300 ease-in-out grow">
    <div
      class="{innerWidth > 900 ? 'w-2/5' : activeContent ? 'hidden' :  'w-full'} email-list flex flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div class="flex items-center justify-between text-gray-700 dark:text-gray-300">
          <div class="flex items-center gap-2">
            <button
              type="button"
              on:click={()=> activeSide = !activeSide}
              class="icon_item lg:!hidden"
            >
              <Fa icon={faBars} />
            </button>
            <button class="icon_item">
              <Fa icon={faFolder} />
            </button>
            <button class="icon_item">
              <Fa icon={faTag} />
            </button>
            <button class="icon_item">
              <Fa icon={faEllipsisH} />
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button class="icon_item">
              <Fa icon={faChevronLeft} />
            </button>
            <button class="icon_item">
              <Fa icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <div class="relative">
          <input 
            type="search" 
            placeholder="Search emails..." 
            class="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
        </div>
      </div>
      <div class="email-list grow overflow-y-auto">
        {#each currentEmails as email (email.id)}
          <button
            type="button"
            on:click={() => handleContent(email)}
            class="email-item group w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 border-b border-gray-100 dark:border-gray-700 last:border-0 {selectedEmail?.id === email.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}"
          >
            <div class="flex items-start gap-3 p-4">
              <input 
                id="email_{email.id}" 
                type="checkbox" 
                class="mt-1 w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 cursor-pointer"
              >
              <label for="email_{email.id}" class="grow flex flex-col gap-1 cursor-pointer min-w-0">
                <div class="flex items-center justify-between gap-2">
                  <span class="font-semibold text-sm text-gray-900 dark:text-white truncate">{email.from}</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{email.time}</span>
                </div>
                <h4 class="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{email.subject}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 truncate">{email.preview}</p>
              </label>
            </div>
          </button>
        {/each}
      </div>
    </div>
    {#if activeContent && selectedEmail}
      <div class="email-content grow overflow-y-auto bg-white dark:bg-gray-800 relative">
        {#if innerWidth < 900}
          <button
            type="button"
            on:click={()=> activeContent = !activeContent}
            class="icon_item absolute top-4 left-4 z-10"
          >
            <Fa icon={faChevronLeft} />
          </button>
        {/if}
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center gap-4">
            <img 
              src={selectedEmail.avatar}
              alt={selectedEmail.from}
              class="w-14 h-14 rounded-full ring-2 ring-gray-200 dark:ring-gray-700"
            >
            <div class="grow">
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">{selectedEmail.from}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">To: {selectedEmail.email || 'you@company.com'}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{selectedEmail.time}</p>
            </div>
            <button class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Fa icon={faReply} class="text-lg" />
            </button>
          </div>
        </div>
        <div class="p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedEmail.subject}
          </h2>
          <div class="prose dark:prose-invert max-w-none">
            {#each selectedEmail.content.split('\n') as paragraph}
              {#if paragraph.trim()}
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .nav-item {
    @apply flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-left;
  }
  .nav-item.active {
    @apply bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400;
  }
  .icon_item {
    @apply h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-150 cursor-pointer text-gray-600 dark:text-gray-300;
  }
  .email-item:hover {
    @apply shadow-sm;
  }
</style>