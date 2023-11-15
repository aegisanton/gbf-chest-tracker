<script>
  import { AccordionItem } from 'flowbite-svelte'
  export let card_img = ""
  export let header = ""
</script>

<AccordionItem defaultClass="flex my-1 rounded-lg items-center justify-between w-full font-medium text-left h-20 bg-[url('{card_img}')]" borderClass="border-none" borderOpenClass="border-none" borderBottomClass="border-none" borderSharedClass="border-none">
  <span slot="header">{header}</span>
  <div slot="arrowup"></div><div slot="arrowdown"></div> <!-- Remove arrows -->
  <slot />
</AccordionItem>