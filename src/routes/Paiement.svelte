<script>
  import gumroad from '$lib/assets/images/gumroad.jpg'
  import BNC from '$lib/assets/images/BNC.png'
  import mastercard from '$lib/assets/images/mastercard.png'
  import RBC from '$lib/assets/images/RBC.png'
  import stripe from '$lib/assets/images/stripe.png'
  import AWS from '$lib/assets/images/AWS.png'
  import DgOc from '$lib/assets/images/DgOc.png'
  import github from '$lib/assets/images/github.png'
  import GoogleAdsence from '$lib/assets/images/GoogleAdsence.png'
  import slack from '$lib/assets/images/slack.png'
</script>
<div class="flex flex-col lg:flex-row items-center p-4 h-full w-full">
  <div class="grow md:w-full">
    <div class="flex items-center justify-between py-4">
      <h3 class="text-f3">Deposit</h3>
      <a href="/" class="text-f6">View All</a>
    </div>
    <ul>
      <li class="paiement_item">
        <img src={gumroad} alt="gumroad" class="h-10 w-10">
        <div>
          <h5 class="text-f5 font-medium">Gumroad Account</h5>
          <p>Sell UI Kit</p>
        </div>
        <div class="grow"/>
        <div class="text-green-400 font-medium">+$4,650</div>
      </li>
      <li class="paiement_item">
        <img src={mastercard} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">Mastercard</h5>
          <p>Wallet deposit</p>
        </div>
        <div class="grow"/>
        <div class="text-green-400 font-medium">+$92,705</div>
      </li>
      <li class="paiement_item">
        <img src={stripe} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">Stripe Account</h5>
          <p>IOS Application</p>
        </div>
        <div class="grow"/>
        <div class="text-green-400 font-medium">+$6,837</div>
      </li>
      <li class="paiement_item">
        <img src={RBC} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">RBC Account</h5>
          <p>Bank Transfer</p>
        </div>
        <div class="grow"/>
        <div class="text-green-400 font-medium">+$9,650</div>
      </li>
      <li class="paiement_item">
        <img src={BNC} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">BNC Account</h5>
          <p>Bank Transfer</p>
        </div>
        <div class="grow"/>
        <div class="text-green-400 font-medium">+$446</div>
      </li>
    </ul>
  </div>
  <div class="w-full md:w-[1px] lg:w-[1px] h-[1px] md:h-full lg:h-full bg-gray-300 mx-4 my-4" />
  <div class="grow md:w-full">
    <div class="flex items-center justify-between py-4">
      <h3>Withdraw</h3>
      <a href="/" class="text-f6">View All</a>
    </div>
    <ul>
      <li class="paiement_item">
        <img src={GoogleAdsence} alt="gumroad" class="h-10 w-10">
        <div>
          <h5 class="text-f5 font-medium">Google Adsence</h5>
          <p>Paypal deposit</p>
        </div>
        <div class="grow"/>
        <div class="text-red-500 font-medium">-$145</div>
      </li>
      <li class="paiement_item">
        <img src={github} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">Github</h5>
          <p>Security & compliance</p>
        </div>
        <div class="grow"/>
        <div class="text-red-500 font-medium">-$1870</div>
      </li>
      <li class="paiement_item">
        <img src={slack} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">Upgrade Slack Plan</h5>
          <p>Debit card deposit</p>
        </div>
        <div class="grow"/>
        <div class="text-red-500 font-medium">-$450</div>
      </li>
      <li class="paiement_item">
        <img src={DgOc} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">Digital Ocean</h5>
          <p>Cloud Hosting</p>
        </div>
        <div class="grow"/>
        <div class="text-red-500 font-medium">-$540</div>
      </li>
      <li class="paiement_item">
        <img src={AWS} alt="gumroad" class="h-10 w-10 bg-cover object-contain">
        <div>
          <h5 class="text-f5 font-medium">AWS Account</h5>
          <p>Choosing a Cloud Platform</p>
        </div>
        <div class="grow"/>
        <div class="text-red-500 font-medium">-$21</div>
      </li>
    </ul>
  </div>
</div>

<style lang="postcss">
  .paiement_item {
    @apply flex items-center justify-between gap-3 pt-2
  }
</style>