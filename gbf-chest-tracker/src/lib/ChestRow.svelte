<script>
  import { Avatar } from "flowbite-svelte";
  import ChestItem from "./ChestItem.svelte";
  import DropStore from "../DropStore";

  // Chest images
  import red_chest_img from "$lib/assets/Icon_Red_Chest.png";
  import blue_chest_img from "$lib/assets/Icon_Blue_Chest.png";
  import gold_chest_img from "$lib/assets/Icon_Gold_Chest.png";

  // Material images

  // Rare drops
  import sand from "$lib/assets/sand.jpg";
  import gold_bar from "$lib/assets/gold-bar.jpg";

  // Character mastery
  import low_ring from "$lib/assets/low-ring.jpg"
  import mid_ring from "$lib/assets/mid-ring.jpg"
  import red_ring from "$lib/assets/red-ring.jpg"
  import fire_earring from "$lib/assets/fire-earring.jpg"
  import wind_earring from "$lib/assets/wind-earring.jpg"
  import water_earring from "$lib/assets/water-earring.jpg"
  import earth_earring from "$lib/assets/earth-earring.jpg"
  import light_earring from "$lib/assets/light-earring.jpg"
  import dark_earring from "$lib/assets/dark-earring.jpg"

  // Common mats
  import fire_urn from "$lib/assets/fire-urn.jpg"
  import wind_urn from "$lib/assets/wind-urn.jpg"
  import water_urn from "$lib/assets/water-urn.jpg"
  import earth_urn from "$lib/assets/earth-urn.jpg"
  import light_urn from "$lib/assets/light-urn.jpg"
  import dark_urn from "$lib/assets/dark-urn.jpg"
  import silver_centrum from "$lib/assets/silver-centrum.jpg"
  import blue_crystal from "$lib/assets/blue-crystal.jpg"
  import weapon_plus from "$lib/assets/weapon-plus.jpg"
  import silver_merit from "$lib/assets/silver-merit.jpg"
  import gold_merit from "$lib/assets/gold-merit.jpg"
  import red_merit from "$lib/assets/red-merit.jpg"

  // Revans
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

  // 6D
  import ewiyar_mat from "$lib/assets/ewiyar-mat.jpg"
  import wilnas_mat from "$lib/assets/wilnas-mat.jpg"
  import galleon_mat from "$lib/assets/galleon-mat.jpg"
  import wamdus_mat from "$lib/assets/wamdus-mat.jpg"
  import fediel_mat from "$lib/assets/fediel-mat.jpg"
  import luwoh_mat from "$lib/assets/luwoh-mat.jpg"
  import luwoh_mana from "$lib/assets/luwoh-mana.jpg"

  // Gold bar raids
  import azurite from "$lib/assets/azurite.jpg"
  import hollow_key from "$lib/assets/hollow-key.jpg"

  
  let drop_imgs = {
    "super_ult": {
      "subaha": {
        "sand": sand, "blue_crystal": blue_crystal, "wind_urn": wind_urn, "earth_urn": earth_urn, 
        "water_urn": water_urn, "fire_urn": fire_urn, "light_urn": light_urn, "dark_urn": dark_urn
      },
      "hexa": {
        "sand": sand, "blue_crystal": blue_crystal, "wind_earring": wind_earring, "earth_earring": earth_earring, 
        "water_earring": water_earring, "fire_earring": fire_earring, "light_earring": light_earring, "dark_earring": dark_earring
      }
    },
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
    },
    "gold_bar": {
      "pbahahl": {
        "gbar": gold_bar, "low_ring": low_ring, "mid_ring": mid_ring, "red_ring": red_ring
      },
      "akasha": {
        "gbar": gold_bar, "low_ring": low_ring, "mid_ring": mid_ring, "red_ring": red_ring, 
        "weap_plus1": weapon_plus, "weap_plus2": weapon_plus, "weap_plus3": weapon_plus, 
        "silver_cent": silver_centrum, "silver_merit": silver_merit, "gold_merit": gold_merit, "red_merit": red_merit, "mat": hollow_key
      },
      "gohl": {
        "gbar": gold_bar, "low_ring": low_ring, "mid_ring": mid_ring, "red_ring": red_ring, 
        "silver_cent": silver_centrum, "silver_merit": silver_merit, "gold_merit": gold_merit, "red_merit": red_merit, "mat": azurite
      }
    },
    "6d": {
      "ewiyar": {
        "sand": sand, "earring": wind_earring, "mat": ewiyar_mat, "urn": wind_urn
      },
      "galleon": {
        "sand": sand, "earring": earth_earring, "mat": galleon_mat, "urn": earth_urn
      },
      "wamdus": {
        "sand": sand, "earring": water_earring, "mat": wamdus_mat, "urn": water_urn
      },
      "wilnas": {
        "sand": sand, "earring": fire_earring, "mat": wilnas_mat, "urn": fire_urn
      },
      "luwoh": {
        "sand": sand, "earring": light_earring, "mana": luwoh_mana, "mat": luwoh_mat, "urn": light_urn
      },
      "fediel": {
        "sand": sand, "earring": dark_earring, "mat": fediel_mat, "urn": dark_urn
      }
    },
    "ennead": {
      "ra": {
        "sand": sand, "silver_cent": silver_centrum, "urn": wind_urn
      },
      "bennu": {
        "sand": sand, "silver_cent": silver_centrum, "urn": earth_urn
      },
      "tefnut": {
        "sand": sand, "silver_cent": silver_centrum, "urn": water_urn
      },
      "atum": {
        "sand": sand, "silver_cent": silver_centrum, "urn": fire_urn
      },
      "horus": {
        "sand": sand, "silver_cent": silver_centrum, "urn": light_urn
      },
      "osiris": {
        "sand": sand, "silver_cent": silver_centrum, "urn": dark_urn
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
</script>

<div class="grid grid-cols-5 rounded-lg gap-2 space-x-4 p-5 bg-gray-200 justify-items-center items-center">
  <div class="row-span-3"><Avatar src={chest_imgs[chest_name]} size="lg" border class={chest_class[chest_name]} /><div class="mt-2 bg-white align-middle text-center"><b>{total_count}</b></div></div>
  {#each Object.entries($DropStore[raid_tier][raid_name][chest_name]) as [item_name, value]}
    <div><ChestItem item_img={drop_imgs[raid_tier][raid_name][item_name]} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name={item_name}></ChestItem></div>
  {/each}
</div>