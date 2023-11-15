<script>
  import { Avatar } from "flowbite-svelte";
  import ChestItem from "./ChestItem.svelte";
  import DropStore from "../store";

  import red_chest_img from "$lib/assets/Icon_Red_Chest.png";
  import blue_chest_img from "$lib/assets/Icon_Blue_Chest.png";
  import gold_chest_img from "$lib/assets/Icon_Gold_Chest.png";

  import sand from "$lib/assets/sand.jpg";

  import siete_weap1 from "$lib/assets/siete-weap1.jpg";
  import siete_weap2 from "$lib/assets/siete-weap2.jpg";
  import siete_mat from "$lib/assets/siete-mat.jpg";

  export let raid_tier = ""
  export let raid_name = ""
  export let chest_name = ""

  let total_count = 0

  let chest_imgs = {
    "mvp": red_chest_img,
    "host": red_chest_img,
    "blue": blue_chest_img,
    "gold": gold_chest_img
  }

  let chest_class = {
    "mvp": "ring-red-600 dark:ring-red-600",
    "host": "ring-red-600 dark:ring-red-600",
    "blue": "ring-blue-600 dark:ring-blue-600",
    "gold": "ring-yellow-300 dark:ring-yellow-300"
  }

  function countDrops(raid_tier, raid_name, chest_name) {
    var sum = 0;
    var drops = $DropStore[raid_tier][raid_name][chest_name]
    for( var drop in drops ) {
      if( drops.hasOwnProperty( drop ) ) {
        sum += parseFloat( drops[drop] );
      }
    }
  total_count = sum
  }

  $: $DropStore, countDrops(raid_tier, raid_name, chest_name);
</script>

<div class="grid grid-cols-5 rounded-lg gap-2 space-x-4 p-5 bg-gray-200 justify-items-center items-center">
  <div class="row-span-3"><Avatar src={chest_imgs[chest_name]} size="lg" border class={chest_class[chest_name]} /><div class="mt-2 bg-white">{total_count}</div></div>
  <div><ChestItem item_img={siete_weap1} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="weap1"></ChestItem></div>
  <div><ChestItem item_img={siete_weap2} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="weap2"></ChestItem></div>
  <div><ChestItem item_img={sand} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="sand"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="mat1"></ChestItem></div>

  <div><ChestItem item_img={siete_mat} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="mat2"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="mat3"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="mat4"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name="mat10"></ChestItem></div>

</div>