<script>
 import { Accordion } from 'flowbite-svelte';

 import RaidAccordionItem from '$lib/RaidAccordionItem.svelte';
 import ChestRow from '$lib/ChestRow.svelte';
 import DropStore from '../store';
 import banner from '$lib/assets/banner-test.png'

 let headers = {
    "revans": "Revans", "siete": "Seofon", "sieg": "Siegfried", "diaspora": "Diaspora", "mugen": "Mugen", "cosmos": "Cosmos", "agastia": "Agastia"
 }

 let raid_banners = {

 }
</script>

<div class="container w-full mx-auto mt-20">
    <Accordion multiple={true}>
    {#each Object.entries($DropStore) as [raid_tier, value]}
        <RaidAccordionItem header={headers[raid_tier]} banner_img={'$lib/assets/banner-test.png'}>
            <Accordion multiple={true}>
                {#each Object.entries($DropStore[raid_tier]) as [raid_name, value]}
                    <RaidAccordionItem header={headers[raid_name]} banner_img={banner}>
                    {#each Object.entries($DropStore[raid_tier][raid_name]) as [chest_name, value]}
                        <ChestRow raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name}></ChestRow>
                    {/each}
                    </RaidAccordionItem>
                {/each}
            </Accordion>
        </RaidAccordionItem>
    {/each}
    </Accordion>
</div>