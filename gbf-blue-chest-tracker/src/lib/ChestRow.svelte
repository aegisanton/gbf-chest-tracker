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

  export let chest_type = ""

  let chest_imgs = {
    "red": red_chest_img,
    "blue": blue_chest_img,
    "gold": gold_chest_img
  }

  let chest_class = {
    "red": "ring-red-600 dark:ring-red-600",
    "blue": "ring-blue-600 dark:ring-blue-600",
    "gold": "ring-yellow-300 dark:ring-yellow-300"
  }
</script>

<div class="grid grid-cols-5 rounded-lg gap-2 space-x-4 p-5 bg-gray-200 justify-items-center items-center">
  <div class="row-span-3"><Avatar src={chest_imgs[chest_type]} size="lg" border class={chest_class[chest_type]} /></div>
  <div><ChestItem item_img={siete_weap1} raid_tier="revans" raid_name="siete" item_name="weap1"></ChestItem></div>
  <div><ChestItem item_img={siete_weap2} raid_tier="revans" raid_name="siete" item_name="weap2"></ChestItem></div>
  <div><ChestItem item_img={sand} raid_tier="revans" raid_name="siete" item_name="sand"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier="revans" raid_name="siete" item_name="mat"></ChestItem></div>

  <div><ChestItem item_img={siete_mat} raid_tier="revans" raid_name="siete" item_name="mat"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier="revans" raid_name="siete" item_name="mat"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier="revans" raid_name="siete" item_name="mat"></ChestItem></div>
  <div><ChestItem item_img={siete_mat} raid_tier="revans" raid_name="siete" item_name="mat"></ChestItem></div>

</div>