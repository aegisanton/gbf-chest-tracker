import { writable } from "svelte/store"

const SyncStore = writable(
    {"last_sync": null}
)

export default SyncStore;
