<script>
 import { Accordion } from 'flowbite-svelte';

 import RaidAccordionItem from '$lib/RaidAccordionItem.svelte';
 import ChestRow from '$lib/ChestRow.svelte';
 import DropStore from '../DropStore';

 let headers = {
    "revans": "Revans", "siete": "Seofon", "sieg": "Siegfried", "diaspora": "Diaspora", "mugen": "Mugen", "cosmos": "Cosmos", "agastia": "Agastia",
    "gold_bar": "Gold Bar Raids", "pbahahl": "Proto Bahamut HL", "akasha": "Akasha", "gohl": "Grand Order HL",
    "super_ult": "Super Ultimate", "subaha": "Super Ultimate Bahamut", "hexa": "Hexachromatic Hierarch",
    "6d": "Six Dragons", "ewiyar": "Ewiyar", "galleon": "Galleon", "wamdus": "Wamdus", "wilnas": "Wilnas", "luwoh": "Lu Woh", "fediel": "Fediel",
    "ennead": "Ennead", "ra": "Ra", "bennu": "Bennu", "tefnut": "Tefnut", "atum": "Atum", "horus": "Horus", "osiris": "Osiris"
 }

 let raid_banners = {

 }
</script>

<div class="container w-full mx-auto mt-20">
    <Accordion multiple={true}>
    {#each Object.entries($DropStore) as [raid_tier, value]}
        <RaidAccordionItem header={headers[raid_tier]} banner={raid_tier} raid_tier={true}>
            <Accordion multiple={true}>
                {#each Object.entries($DropStore[raid_tier]) as [raid_name, value]}
                    <RaidAccordionItem header={headers[raid_name]} banner={raid_name}>
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