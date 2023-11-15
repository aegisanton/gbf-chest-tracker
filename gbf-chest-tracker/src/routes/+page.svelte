<script>
 import { AccordionItem, Accordion } from 'flowbite-svelte';
 import RaidAccordionItem from '$lib/RaidAccordionItem.svelte';
 import ChestRow from '$lib/ChestRow.svelte';
</script>

<div class="container w-full mx-auto mt-20">
    <Accordion multiple={true}>
        <RaidAccordionItem header="Siegfried" card_img="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg">
        <Accordion multiple={true}>
            <RaidAccordionItem header="Siegfried" card_img="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg">
                <ChestRow raid_tier="revans" raid_name="siete" chest_name="blue"></ChestRow>
            </RaidAccordionItem>
            <RaidAccordionItem header="Siegfried" card_img="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"></RaidAccordionItem>
        </Accordion>
        </RaidAccordionItem>
        <RaidAccordionItem header="Siegfried" card_img="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"></RaidAccordionItem>
    </Accordion>
</div>