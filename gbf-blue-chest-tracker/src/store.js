import { writable } from "svelte/store"

const DropStore = writable(
    {
        "revans": {
            "siete": {
                "weap1": 0,
                "weap2": 0,
                "mat": 0,
                "sand": 0
            }
        }
    }
);

export default DropStore;
