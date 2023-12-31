import { writable } from "svelte/store"

const RateStore = writable({
    "revans": {
        "siete": {
            "blue": {
                "weap1": 0, "weap2": 0, "sand": 0,
                "mat2": 0, "mat3": 0, "mat4": 0, "mat10": 0
            }
        },
        "sieg": {
            "blue": {
                "weap1": 0, "weap2": 0, "sand": 0,
                "mat2": 0, "mat3": 0, "mat4": 0, "mat10": 0
            }
        },
        "diaspora": {
            "blue": {
                "weap1": 0, "weap2": 0, "sand": 0,
                "mat2": 0, "mat3": 0, "mat4": 0, "mat10": 0
            }
        },
        "mugen": {
            "blue": {
                "weap1": 0, "weap2": 0, "sand": 0,
                "mat2": 0, "mat3": 0, "mat4": 0, "mat10": 0
            }
        },
        "cosmos": {
            "blue": {
                "weap1": 0, "weap2": 0, "sand": 0,
                "mat2": 0, "mat3": 0, "mat4": 0, "mat10": 0
            }
        },
        "agastia": {
            "blue": {
                "weap1": 0, "weap2": 0, "sand": 0,
                "mat2": 0, "mat3": 0, "mat4": 0, "mat10": 0
            }
        }
    },
    "gold_bar": {
        "pbahahl": {
            "blue": {
                "gbar": 0, "low_ring": 0, "mid_ring": 0, "red_ring": 0
            }
        },
        "akasha": {
            "blue": {
                "gbar": 0, "low_ring": 0, "mid_ring": 0, "red_ring": 0, "weap_plus1": 0, "weap_plus2": 0, "weap_plus3": 0,
                "silver_cent": 0, "silver_merit": 0, "gold_merit": 0, "red_merit": 0, "mat": 0
            }
        },
        "gohl": {
            "blue": {
                "gbar": 0, "low_ring": 0, "mid_ring": 0, "red_ring": 0, 
                "silver_cent": 0, "silver_merit": 0, "gold_merit": 0, "red_merit": 0, "mat": 0
            }
        }
    },
    "super_ult": {
        "subaha": {
            "gold": {
                "sand": 0, "blue_crystal": 0, "wind_urn": 0, "earth_urn": 0,
                "water_urn": 0, "fire_urn": 0, "light_urn": 0, "dark_urn": 0
            }
        },
        "hexa": {
            "gold": {
                "sand": 0, "blue_crystal": 0, "wind_earring": 0, "earth_earring": 0,
                "water_earring": 0, "fire_earring": 0, "light_earring": 0, "dark_earring": 0
            }
        }
    },
    "arcarum": {
        "the_world_raid": {
            "blue": {
                "sand": 0, "mat2": 0, "temperance_idean": 0, "judgement_idean": 0, "hangedman_idean": 0, "tower_idean": 0,
                "justice_idean": 0, "moon_idean": 0, "devil_idean": 0, "sun_idean": 0, "star_idean": 0, "death_idean": 0
            }
        }
    },
    "6d": {
        "ewiyar": {
            "gold": {
                "sand": 0, "earring": 0, "mat": 0, "urn": 0
            }
        },
        "galleon": {
            "gold": {
                "sand": 0, "earring": 0, "mat": 0, "urn": 0
            }
        },
        "wamdus": {
            "gold": {
                "sand": 0, "earring": 0, "mat": 0, "urn": 0
            }
        },
        "wilnas": {
            "gold": {
                "sand": 0, "earring": 0, "mat": 0, "urn": 0
            }
        },
        "luwoh": {
            "gold": {
                "sand": 0, "earring": 0, "mana": 0, "mat": 0, "urn": 0
            }
        },
        "fediel": {
            "gold": {
                "sand": 0, "earring": 0, "mat": 0, "urn": 0
            }
        }
    },
    "ennead": {
        "ra": {
            "gold": {
                "sand": 0, "silver_cent": 0, "urn": 0
            }
        },
        "bennu": {
            "gold": {
                "sand": 0, "silver_cent": 0, "urn": 0
            }
        },
        "tefnut": {
            "gold": {
                "sand": 0, "silver_cent": 0, "urn": 0
            }
        },
        "atum": {
            "gold": {
                "sand": 0, "silver_cent": 0, "urn": 0
            }
        },
        "horus": {
            "gold": {
                "sand": 0, "silver_cent": 0, "urn": 0
            }
        },
        "osiris": {
            "gold": {
                "sand": 0, "silver_cent": 0, "urn": 0
            }
        }
    },
    "malice": {
        "tiamal": {
            "gold": {
                "sand": 0, "mal_frag": 0, "anima": 0
            },
            "gold2": {
                "weap1": 0, "weap2": 0, "weap3": 0, "weap4": 0, "weap5": 0, "weap6": 0, "shield": 0, "mat": 0, "anima": 0
            }
        },
        "phronesis": {
            "gold": {
                "sand": 0, "mal_frag": 0, "anima": 0
            },
            "gold2": {
                "weap1": 0, "weap2": 0, "weap3": 0, "mat": 0, "anima": 0
            }
        },
        "levimal": {
            "gold": {
                "sand": 0, "mal_frag": 0, "anima": 0
            },
            "gold2": {
                "weap1": 0, "weap2": 0, "weap3": 0, "weap4": 0, "weap5": 0, "weap6": 0, "shield": 0, "mat": 0, "anima": 0
            }
        },
        "legion": {
            "gold": {
                "sand": 0, "mal_frag": 0, "anima": 0
            },
            "gold2": {
                "weap1": 0, "weap2": 0, "weap3": 0, "weap4": 0, "mat": 0, "anima": 0
            }
        },
        "lumimal": {
            "gold": {
                "sand": 0, "mal_frag": 0, "anima": 0
            },
            "gold2": {
                "weap1": 0, "weap2": 0, "weap3": 0, "weap4": 0, "weap5": 0, "weap6": 0, "shield": 0, "mat": 0, "anima": 0
            }
        },
        "animus": {
            "gold": {
                "sand": 0, "mal_frag": 0, "anima": 0
            },
            "gold2": {
                "weap1": 0, "weap2": 0, "weap3": 0, "weap4": 0, "weap5": 0, "weap6": 0, "mat": 0, "anima": 0
            }
        }
    }
})

export default RateStore;
