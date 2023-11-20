<script>
  import { AccordionItem } from 'flowbite-svelte'

  export let banner = ""
  export let header = ""
  export let raid_tier = false

  let banner_imgs = {
    "revans": "bg-raidBanner", "siete": "bg-sieteBanner", "sieg": "bg-siegBanner", "mugen": "bg-mugenBanner", "agastia": "bg-agastiaBanner", "cosmos": "bg-cosmosBanner", "diaspora": "bg-diasporaBanner",
    "gold_bar": "bg-raidBanner", "pbahahl": "bg-pbhlBanner", "akasha": "bg-akashaBanner", "gohl": "bg-gohlBanner",
    "6d": "bg-raidBanner", "ewiyar": "bg-ewiyarBanner", "wilnas": "bg-wilnasBanner", "fediel": "bg-fedielBanner", "luwoh": "bg-luwohBanner", "wamdus": "bg-wamdusBanner", "galleon": "bg-galleonBanner",
    "ennead": "bg-raidBanner", "atum": "bg-atumBanner", "tefnut": "bg-tefnutBanner", "bennu": "bg-bennuBanner", "ra": "bg-raBanner", "horus": "bg-horusBanner", "osiris": "bg-osirisBanner",
    "super_ult": "bg-raidBanner", "subaha": "bg-raidBanner", "hexa": "bg-raidBanner"
  }
</script>


<AccordionItem 
class="flex {banner_imgs[banner]} bg-left bg-cover my-3 rounded-lg items-center justify-between w-full font-medium text-left h-16 hover:opacity-100" 
classActive="ring-0 opacity-100 bg-gray-300"
classInactive="opacity-60 bg-gray-300"
borderClass="border-none" 
borderOpenClass="border-none" 
borderBottomClass="border-none" 
borderSharedClass="border-none">
  <span slot="header">
    <p class="text-2xl {raid_tier ? "indent-8" : "indent-64"} opacity-90 font-extrabold tracking-widest text-white uppercase">{header}</p>
  </span> 
  <div slot="arrowup"></div><div slot="arrowdown"></div> <!-- Remove arrows -->
  <slot />
</AccordionItem>  

