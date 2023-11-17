<script>
  import { browser } from "$app/environment"

  import { Avatar } from "flowbite-svelte";
  import ChestItem from "./ChestItem.svelte";
  import DropStore from "../store";

  // Chest images
  import red_chest_img from "$lib/assets/Icon_Red_Chest.png";
  import blue_chest_img from "$lib/assets/Icon_Blue_Chest.png";
  import gold_chest_img from "$lib/assets/Icon_Gold_Chest.png";

  // Material images
  import sand from "$lib/assets/sand.jpg";

  import siete_weap1 from "$lib/assets/siete-weap1.jpg";
  import siete_weap2 from "$lib/assets/siete-weap2.jpg";
  import siete_mat from "$lib/assets/siete-mat.jpg";

  import sieg_weap1 from "$lib/assets/sieg-weap1.jpg";
  import sieg_weap2 from "$lib/assets/sieg-weap2.jpg";
  import sieg_mat from "$lib/assets/sieg-mat.jpg";

  import diaspora_weap1 from "$lib/assets/diaspora-weap1.jpg";
  import diaspora_weap2 from "$lib/assets/diaspora-weap2.jpg";
  import diaspora_mat from "$lib/assets/diaspora-mat.jpg";

  import mugen_weap1 from "$lib/assets/mugen-weap1.jpg";
  import mugen_weap2 from "$lib/assets/mugen-weap2.jpg";
  import mugen_mat from "$lib/assets/mugen-mat.jpg";

  import cosmos_weap1 from "$lib/assets/cosmos-weap1.jpg";
  import cosmos_weap2 from "$lib/assets/cosmos-weap2.jpg";
  import cosmos_mat from "$lib/assets/cosmos-mat.jpg";

  import agastia_weap1 from "$lib/assets/agastia-weap1.jpg";
  import agastia_weap2 from "$lib/assets/agastia-weap2.jpg";
  import agastia_mat from "$lib/assets/agastia-mat.jpg";
  
  let drop_imgs = {
    "revans": {
      "siete": {
        "weap1": siete_weap1, "weap2": siete_weap2, "sand": sand,
        "mat1": siete_mat, "mat2": siete_mat, "mat3": siete_mat, "mat4": siete_mat, "mat10": siete_mat
      },
      "sieg": {
        "weap1": sieg_weap1, "weap2": sieg_weap2, "sand": sand,
        "mat1": sieg_mat, "mat2": sieg_mat, "mat3": sieg_mat, "mat4": sieg_mat, "mat10": sieg_mat
      },
      "diaspora": {
        "weap1": diaspora_weap1, "weap2": diaspora_weap2, "sand": sand,
        "mat1": diaspora_mat, "mat2": diaspora_mat, "mat3": diaspora_mat, "mat4": diaspora_mat, "mat10": diaspora_mat
      },
      "mugen": {
        "weap1": mugen_weap1, "weap2": mugen_weap2, "sand": sand,
        "mat1": mugen_mat, "mat2": mugen_mat, "mat3": mugen_mat, "mat4": mugen_mat, "mat10": mugen_mat
      },
      "cosmos": {
        "weap1": cosmos_weap1, "weap2": cosmos_weap2, "sand": sand,
        "mat1": cosmos_mat, "mat2": cosmos_mat, "mat3": cosmos_mat, "mat4": cosmos_mat, "mat10": cosmos_mat
      },
      "agastia": {
        "weap1": agastia_weap1, "weap2": agastia_weap2, "sand": sand,
        "mat1": agastia_mat, "mat2": agastia_mat, "mat3": agastia_mat, "mat4": agastia_mat, "mat10": agastia_mat
      }
    }
  }

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
  $: {
    if (browser) localStorage.setItem("DropStore", JSON.stringify($DropStore))
  }
</script>

<div class="grid grid-cols-5 rounded-lg gap-2 space-x-4 p-5 bg-gray-200 justify-items-center items-center">
  <div class="row-span-3"><Avatar src={chest_imgs[chest_name]} size="lg" border class={chest_class[chest_name]} /><div class="mt-2 bg-white align-middle text-center"><b>{total_count}</b></div></div>
  {#each Object.entries($DropStore[raid_tier][raid_name][chest_name]) as [item_name, value]}
    <div><ChestItem item_img={drop_imgs[raid_tier][raid_name][item_name]} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name={item_name}></ChestItem></div>
  {/each}
</div>