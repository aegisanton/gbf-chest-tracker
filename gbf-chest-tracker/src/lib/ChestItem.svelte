<script>
  import DropStore from "../store";
  export let item_img = ""
  export let item_img_alt = ""
  export let raid_tier = ""
  export let raid_name = ""
  export let chest_name = ""
  export let item_name = ""

  function incrementCount(raid_tier, raid_name, chest_name, item_name) {
    $DropStore[raid_tier][raid_name][chest_name][item_name]++
  }
</script>

<div class="grid rounded grid-rows-5 grid-cols-2">
  <div class="row-span-3 col-span-2"><button on:click={() => incrementCount(raid_tier, raid_name, chest_name, item_name)}><img src={item_img} alt={item_img_alt} /></button></div>
  <div class="col-span-2 bg-white">{$DropStore[raid_tier][raid_name][chest_name][item_name]}</div>
  <div class="bg-green-200">{0}%</div>
  <div class="bg-purple-200">{0}%</div>
</div>  