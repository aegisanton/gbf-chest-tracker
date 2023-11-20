<script>
  import DropStore from "../DropStore";
  export let item_img = ""
  export let item_img_alt = ""
  export let raid_tier = ""
  export let raid_name = ""
  export let chest_name = ""
  export let item_name = ""
  export let item_count = ""

  function incrementCount(raid_tier, raid_name, chest_name, item_name) {
    $DropStore[raid_tier][raid_name][chest_name][item_name]++
  }

  function getTotal(raid_tier, raid_name, chest_name) {
    return Object.values($DropStore[raid_tier][raid_name][chest_name]).reduce((a, b) => a + b, 0);
  }
</script>

<div class="grid rounded grid-rows-5 grid-cols-2 items-center gap-0">
  <div class="row-span-3 col-span-2 text-center">
    <div class="relative">
      <button on:click={() => incrementCount(raid_tier, raid_name, chest_name, item_name)}><img src={item_img} alt={item_img_alt} /></button>
      <div class="absolute pointer-events-none mb-2 mr-2 bottom-0 right-0 opacity-90"><p class="text-3xl select-none text-white font-bold">{item_count}</p></div>
    </div>
  </div>
  <div class="col-span-2 bg-white text-center"><b>{$DropStore[raid_tier][raid_name][chest_name][item_name]}</b></div>
  <div class="bg-green-200 text-center text-sm">{(100*($DropStore[raid_tier][raid_name][chest_name][item_name] / (getTotal(raid_tier, raid_name, chest_name) ? getTotal(raid_tier, raid_name, chest_name) : 1))).toFixed(1)}%</div>
  <div class="bg-black text-white text-center text-sm">{0}%</div>
</div>  