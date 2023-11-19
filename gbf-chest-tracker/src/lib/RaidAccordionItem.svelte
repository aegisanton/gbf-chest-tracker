<script>
  import { AccordionItem } from 'flowbite-svelte'

  export let banner = ""
  export let header = ""
  export let raid_tier = false

  let banner_imgs = {
    "revans": "bg-revansBanner", "siete": "bg-sieteBanner", "sieg": "bg-siegBanner", "mugen": "bg-mugenBanner", "agastia": "bg-agastiaBanner", "cosmos": "bg-cosmosBanner", "diaspora": "",
    "gold_bar": "", "pbaha": ""
  }
</script>


<AccordionItem 
class="flex {banner_imgs[banner]} bg-left bg-cover my-1 rounded-lg items-center justify-between w-full font-medium text-left h-20" 
classActive="ring-0"
classInactive="opacity-50"
borderClass="border-none" 
borderOpenClass="border-none" 
borderBottomClass="border-none" 
borderSharedClass="border-none">
  <span slot="header">
    <p class="text-4xl {raid_tier ? "indent-10" : "indent-80"} opacity-90 font-extrabold tracking-widest text-white uppercase">{header}</p>
  </span> 
  <div slot="arrowup"></div><div slot="arrowdown"></div> <!-- Remove arrows -->
  <slot />
</AccordionItem>

