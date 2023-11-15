<script>
  import DropStore from "../store";
  export let item_img = ""
  export let item_img_alt = ""
  export let raid_tier = ""
  export let raid_name = ""
  export let item_name = ""

  function incrementCount(raid_tier, raid_name, item_name) {
    $DropStore[raid_tier][raid_name][item_name]++
  }
</script>

<div class="grid rounded grid-rows-5">
  <div class="row-span-3"><button on:click={() => incrementCount(raid_tier, raid_name, item_name)}><img src={item_img} alt={item_img_alt} /></button></div>
  <div class="bg-white">{$DropStore[raid_tier][raid_name][item_name]}</div>
  <div class="bg-green-200">{0}%</div>
</div>  