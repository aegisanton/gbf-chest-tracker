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

  // Magna I
  import tia_weap1 from "$lib/assets/tia-weap1.jpg"
  import tia_weap2 from "$lib/assets/tia-weap2.jpg"
  import tia_weap3 from "$lib/assets/tia-weap3.jpg"
  import tia_weap4 from "$lib/assets/tia-weap4.jpg"
  import tia_mat from "$lib/assets/tia-mat.jpg"
  import levi_weap1 from "$lib/assets/levi-weap1.jpg"
  import levi_weap2 from "$lib/assets/levi-weap2.jpg"
  import levi_weap3 from "$lib/assets/levi-weap3.jpg"
  import levi_weap4 from "$lib/assets/levi-weap4.jpg"
  import levi_mat from "$lib/assets/levi-mat.jpg"
  import colo_mat from "$lib/assets/ygg-mat.jpg"
  import ygg_mat from "$lib/assets/ygg-mat.jpg"
  import lumi_weap1 from "$lib/assets/lumi-weap1.jpg"
  import lumi_weap2 from "$lib/assets/lumi-weap2.jpg"
  import lumi_weap3 from "$lib/assets/lumi-weap3.jpg"
  import lumi_weap4 from "$lib/assets/lumi-weap4.jpg"
  import lumi_mat from "$lib/assets/lumi-mat.jpg"
  import celeste_weap1 from "$lib/assets/celeste-weap1.jpg"
  import celeste_weap2 from "$lib/assets/celeste-weap2.jpg"
  import celeste_weap3 from "$lib/assets/celeste-weap3.jpg"
  import celeste_weap4 from "$lib/assets/celeste-weap4.jpg"
  import celeste_mat from "$lib/assets/celeste-mat.jpg"

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

  // Malice
  import malice_frag from "$lib/assets/malice-frag.jpg"
  import malice_shield from "$lib/assets/malice-shield.jpg"
  import tiamal_weap1 from "$lib/assets/tiamal-weap1.jpg"
  import tiamal_weap2 from "$lib/assets/tiamal-weap2.jpg"
  import levimal_weap1 from "$lib/assets/levimal-weap1.jpg"
  import levimal_weap2 from "$lib/assets/levimal-weap2.jpg"
  import lumimal_weap1 from "$lib/assets/lumimal-weap1.jpg"
  import lumimal_weap2 from "$lib/assets/lumimal-weap2.jpg"
  import phronesis_weap1 from "$lib/assets/phronesis-weap1.jpg"
  import phronesis_weap2 from "$lib/assets/phronesis-weap2.jpg"
  import phronesis_weap3 from "$lib/assets/phronesis-weap3.jpg"
  import animus_weap1 from "$lib/assets/animus-weap1.jpg"
  import animus_weap2 from "$lib/assets/animus-weap2.jpg"
  import legion_weap1 from "$lib/assets/legion-weap1.jpg"
  import legion_weap2 from "$lib/assets/legion-weap2.jpg"
  import legion_weap3 from "$lib/assets/legion-weap3.jpg"
  import legion_weap4 from "$lib/assets/legion-weap4.jpg"
  import tiamal_anima from "$lib/assets/tiamal-anima.jpg"
  import lumimal_anima from "$lib/assets/lumimal-anima.jpg"
  import levimal_anima from "$lib/assets/levimal-anima.jpg"
  import phronesis_anima from "$lib/assets/phronesis-anima.jpg"
  import animus_anima from "$lib/assets/animus-anima.jpg"
  import legion_anima from "$lib/assets/legion-anima.jpg"

  // Arcarum
  import world_idean from "$lib/assets/world-idean.jpg"
  import temperance_idean from "$lib/assets/temperance-idean.jpg"
  import judgement_idean from "$lib/assets/judgement-idean.jpg"
  import hangedman_idean from "$lib/assets/hangedman-idean.jpg"
  import tower_idean from "$lib/assets/tower-idean.jpg"
  import justice_idean from "$lib/assets/justice-idean.jpg"
  import moon_idean from "$lib/assets/moon-idean.jpg"
  import devil_idean from "$lib/assets/devil-idean.jpg"
  import sun_idean from "$lib/assets/sun-idean.jpg"
  import star_idean from "$lib/assets/star-idean.jpg"
  import death_idean from "$lib/assets/death-idean.jpg"

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
    "arcarum": {
      "the_world_raid": {
        "sand": sand, "mat2": world_idean, "temperance_idean": temperance_idean, "judgement_idean": judgement_idean, "hangedman_idean": hangedman_idean, "tower_idean": tower_idean,
        "justice_idean": justice_idean, "moon_idean": moon_idean, "devil_idean": devil_idean, "sun_idean": sun_idean, "star_idean": star_idean, "death_idean": death_idean
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
    },
    "malice": {
      "tiamal": {
        "sand": sand, "mal_frag": malice_frag, "anima": tiamal_anima, "weap1": tiamal_weap1, "weap2": tiamal_weap2, "weap3": tia_weap1, "weap4": tia_weap2, "weap5": tia_weap3, "weap6": tia_weap4, "mat": tia_mat, "shield": malice_shield
      },
      "phronesis": {
        "sand": sand, "mal_frag": malice_frag, "anima": phronesis_anima, "weap1": phronesis_weap1, "weap2": phronesis_weap2, "weap3": phronesis_weap3, "mat": ygg_mat
      },
      "levimal": {
        "sand": sand, "mal_frag": malice_frag, "anima": levimal_anima, "weap1": levimal_weap1, "weap2": levimal_weap2, "weap3": levi_weap1, "weap4": levi_weap2, "weap5": levi_weap3, "weap6": levi_weap4, "mat": levi_mat, "shield": malice_shield
      },
      "legion": {
        "sand": sand, "mal_frag": malice_frag, "anima": legion_anima, "weap1": legion_weap1, "weap2": legion_weap2, "weap3": legion_weap3, "weap4": legion_weap4, "mat": colo_mat
      },
      "lumimal": {
        "sand": sand, "mal_frag": malice_frag, "anima": lumimal_anima, "weap1": lumimal_weap1, "weap2": lumimal_weap2, "weap3": lumi_weap1, "weap4": lumi_weap2, "weap5": lumi_weap3, "weap6": lumi_weap4, "mat": lumi_mat, "shield": malice_shield
      },
      "animus": {
        "sand": sand, "mal_frag": malice_frag, "anima": animus_anima, "weap1": animus_weap1, "weap2": animus_weap2, "weap3": celeste_weap1, "weap4": celeste_weap2, "weap5": celeste_weap3, "weap6": celeste_weap4, "mat": celeste_mat
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
    "gold": gold_chest_img, "gold2": gold_chest_img
  }

  let chest_class = {
    "mvp": "ring-red-600 dark:ring-red-600",
    "host": "ring-red-600 dark:ring-red-600",
    "blue": "ring-blue-600 dark:ring-blue-600",
    "gold": "ring-yellow-300 dark:ring-yellow-300",
    "gold2": "ring-yellow-300 dark:ring-yellow-300"
  }

  let multi_drops = ["mat", "weap_plus"]

  function getItemCount(item_name) {
    if (multi_drops.includes(item_name.replace(/[0-9]+$/, ""))) {
      let matches = item_name.match(/[0-9]+$/);
      if (matches) {
        let number = matches[0];
        return "x" + number
      } 
    }
    return ""
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

<div class="grid mb-2 grid-cols-5 rounded-lg gap-2 space-x-4 p-5 bg-gray-200 justify-items-center items-center">
  <div class="row-span-3"><Avatar src={chest_imgs[chest_name]} size="lg" border class={chest_class[chest_name]} /><div class="mt-2 bg-white align-middle text-center"><b>{total_count}</b></div></div>
  {#each Object.entries($DropStore[raid_tier][raid_name][chest_name]) as [item_name, value]}
    <div><ChestItem item_img={drop_imgs[raid_tier][raid_name][item_name]} raid_tier={raid_tier} raid_name={raid_name} chest_name={chest_name} item_name={item_name} item_count={getItemCount(item_name)}></ChestItem></div>
  {/each}
</div>