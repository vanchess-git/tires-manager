import {PlasticUnit} from "./interfaces/PlasticUnit";


const plasticUnits: PlasticUnit[] = [
  {
    id: "war_sun_general",
    class: ["ship"],
    type: "war_sun",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "War Sun",
      upgrade: "War Sun"
    },
    combat: {
      normal: {
        strength: 0,
        noOfRolls: 0,
      },
      upgrade: {
        strength: 3,
        noOfRolls: 3,
      }
    },
  },
  {
    id: "war_sun_embers_of_muaat",
    class: ["ship"],
    type: "war_sun",
    factions: ["faction_embers_of_muaat",],
    name: {
      normal: "Prototype War Sun I",
      upgrade: "Prototype War Sun II"
    },
    combat: {
      normal: {
        strength: 3,
        noOfRolls: 3,
      },
      upgrade: {
        strength: 3,
        noOfRolls: 3,
      }
    },
  },
  {
    id: "cruiser_general",
    class: ["ship"],
    type: "cruiser",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "Cruiser",
      upgrade: "Cruiser II"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "cruiser_titans_of_ul",
    class: ["ship"],
    type: "cruiser",
    factions: ["faction_titans_of_ul",],
    name: {
      normal: "Saturn Engine I",
      upgrade: "Saturn Engine II"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "dreadnought_general",
    class: ["ship"],
    type: "dreadnought",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "Dreadnought",
      upgrade: "Dreadnought II"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "dreadnought_l1z1x_mindnet",
    class: ["ship"],
    type: "dreadnought",
    factions: ["faction_l1z1x_mindnet",],
    name: {
      normal: "Super-Dreadnought",
      upgrade: "Super-Dreadnought II"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 4,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "dreadnought_sardakk_n'orr",
    class: ["ship"],
    type: "dreadnought",
    factions: ["faction_sardakk_n'orr",],
    name: {
      normal: "Exotrireme",
      upgrade: "Exotrireme II"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "destroyer_general",
    class: ["ship"],
    type: "destroyer",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "Destroyer",
      upgrade: "Destroyer II"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 8,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "destroyer_argent_flight",
    class: ["ship"],
    type: "destroyer",
    factions: ["faction_argent_flight",],
    name: {
      normal: "Strike Wing Alpha I",
      upgrade: "Strike Wing Alpha II"
    },
    combat: {
      normal: {
        strength: 8,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "pds_general",
    class: ["structure"],
    type: "pds",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "PDS",
      upgrade: "PDS II"
    },
    combat: {
      normal: {
        strength: 0,
        noOfRolls: 0,
      },
      upgrade: {
        strength: 0,
        noOfRolls: 0,
      }
    },
  },
  {
    id: "pds_titans_of_ul",
    class: [
      "structure",
      "ground_force",
    ],
    type: "pds",
    factions: ["faction_titans_of_ul",],
    name: {
      normal: "Hel-Titan I",
      upgrade: "Hel-Titan II"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "carrier_general",
    class: ["ship"],
    type: "carrier",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "Carrier",
      upgrade: "Carrier II"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 9,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "carrier_federation_of_sol",
    class: ["ship"],
    type: "carrier",
    factions: ["faction_federation_of_sol",],
    name: {
      normal: "Advanced Carrier",
      upgrade: "Advanced Carrier II"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 9,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "fighter_general",
    class: ["ship"],
    type: "fighter",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "Fighter",
      upgrade: "Fighter II"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 8,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "fighter_naalu_collective",
    class: ["ship"],
    type: "fighter",
    factions: ["faction_naalu_collective",],
    name: {
      normal: "Hybrid Crystal Fighter",
      upgrade: "Hybrid Crystal Fighter II"
    },
    combat: {
      normal: {
        strength: 8,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "infantry_general",
    class: ["ground_force"],
    type: "infantry",
    factions: [
      "faction_general",
      "faction_barony_of_letnev",
      "faction_clan_of_saar",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_vuil'raith_cabal",
      "faction_council_keleres",
    ],
    name: {
      normal: "Infantry",
      upgrade: "Infantry II"
    },
    combat: {
      normal: {
        strength: 8,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "infantry_arborec",
    class: ["ground_force"],
    type: "infantry",
    factions: ["faction_arborec",],
    name: {
      normal: "Letani Warrior I",
      upgrade: "Letani Warrior II"
    },
    combat: {
      normal: {
        strength: 8,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "infantry_federation_of_sol",
    class: ["ground_force"],
    type: "infantry",
    factions: ["faction_federation_of_sol",],
    name: {
      normal: "Spec Ops I",
      upgrade: "Spec Ops II"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "infantry_mahact_gene-sorcerers",
    class: ["ground_force"],
    type: "infantry",
    factions: ["faction_mahact_gene-sorcerers",],
    name: {
      normal: "Crimson Legionnaire I",
      upgrade: "Crimson Legionnaire II"
    },
    combat: {
      normal: {
        strength: 8,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "space_dock_general",
    class: ["structure"],
    type: "space_dock",
    factions: [
      "faction_general",
      "faction_arborec",
      "faction_barony_of_letnev",
      "faction_embers_of_muaat",
      "faction_emirates_of_hacan",
      "faction_federation_of_sol",
      "faction_ghosts_of_creuss",
      "faction_l1z1x_mindnet",
      "faction_mentak_coalition",
      "faction_naalu_collective",
      "faction_nekro_virus",
      "faction_sardakk_n'orr",
      "faction_universities_of_jol-nar",
      "faction_winnu",
      "faction_xxcha_kingdom",
      "faction_yin_brotherhood",
      "faction_yssaril_tribes",
      "faction_argent_flight",
      "faction_empyrean",
      "faction_mahact_gene-sorcerers",
      "faction_naaz-rokha_alliance",
      "faction_nomad",
      "faction_titans_of_ul",
      "faction_council_keleres",
    ],
    name: {
      normal: "Space Dock",
      upgrade: "Space Dock II"
    },
    combat: {
      normal: {
        strength: 0,
        noOfRolls: 0,
      },
      upgrade: {
        strength: 0,
        noOfRolls: 0,
      }
    },
  },
  {
    id: "space_dock_clan_of_saar",
    class: ["structure"],
    type: "space_dock",
    factions: ["faction_clan_of_saar",],
    name: {
      normal: "Floating Factory",
      upgrade: "Floating Factory II"
    },
    combat: {
      normal: {
        strength: 0,
        noOfRolls: 0,
      },
      upgrade: {
        strength: 0,
        noOfRolls: 0,
      }
    },
  },
  {
    id: "space_dock_general",
    class: ["structure"],
    type: "space_dock",
    factions: ["faction_vuil'raith_cabal",],
    name: {
      normal: "Dimensional Tear I",
      upgrade: "Dimensional Tear II"
    },
    combat: {
      normal: {
        strength: 0,
        noOfRolls: 0,
      },
      upgrade: {
        strength: 0,
        noOfRolls: 0,
      }
    },
  },
  {
    id: "flagship_arborec",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_arborec",],
    name: {
      normal: "Duha Menaimon",
      upgrade: "Duha Menaimon"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_barony_of_letnev",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_barony_of_letnev",],
    name: {
      normal: "Arc Secundus",
      upgrade: "Arc Secundus"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_clan_of_saar",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_clan_of_saar",],
    name: {
      normal: "Son of Ragh",
      upgrade: "Son of Ragh"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_embers_of_muaat",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_embers_of_muaat",],
    name: {
      normal: "The Inferno",
      upgrade: "The Inferno"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_emirates_of_hacan",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_emirates_of_hacan",],
    name: {
      normal: "Wrath of Kenara",
      upgrade: "Wrath of Kenara"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_federation_of_sol",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_federation_of_sol",],
    name: {
      normal: "Genesis",
      upgrade: "Genesis"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_ghosts_of_creuss",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_ghosts_of_creuss",],
    name: {
      normal: "Hil Colish",
      upgrade: "Hil Colish"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "flagship_l1z1x_mindnet",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_l1z1x_mindnet",],
    name: {
      normal: "[0.0.1]",
      upgrade: "[0.0.1]"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_mentak_coalition",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_mentak_coalition",],
    name: {
      normal: "Fourth Moon",
      upgrade: "Fourth Moon"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_naalu_collective",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_naalu_collective",],
    name: {
      normal: "Matriarch",
      upgrade: "Matriarch"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 9,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_nekro_virus",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_nekro_virus",],
    name: {
      normal: "The Alastor",
      upgrade: "The Alastor"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 9,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_sardakk_n'orr",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_sardakk_n'orr",],
    name: {
      normal: "C'Morran N'orr",
      upgrade: "C'Morran N'orr"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_universities_of_jol-nar",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_universities_of_jol-nar",],
    name: {
      normal: "J.N.S. Hylarim",
      upgrade: "J.N.S. Hylarim"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_winnu",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_winnu",],
    name: {
      normal: "Salai Sai Corian",
      upgrade: "Salai Sai Corian"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "flagship_xxcha_kingdom",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_xxcha_kingdom",],
    name: {
      normal: "Loncarra Ssodu",
      upgrade: "Loncarra Ssodu"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_yin_brotherhood",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_yin_brotherhood",],
    name: {
      normal: "Van Hauge",
      upgrade: "Van Hauge"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 9,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_yssaril_tribes",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_yssaril_tribes",],
    name: {
      normal: "Y'sia Y'ssrila",
      upgrade: "Y'sia Y'ssrila"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_argent_flight",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_argent_flight",],
    name: {
      normal: "Quetzecoatl",
      upgrade: "Quetzecoatl"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_empyrean",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_empyrean",],
    name: {
      normal: "Dynamo",
      upgrade: "Dynamo"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_mahact_gene-sorcerers",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_mahact_gene-sorcerers",],
    name: {
      normal: "Arvicon Rex",
      upgrade: "Arvicon Rex"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_naaz-rokha_alliance",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_naaz-rokha_alliance",],
    name: {
      normal: "Visz el Vir",
      upgrade: "Visz el Vir"
    },
    combat: {
      normal: {
        strength: 9,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 9,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_nomad",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_nomad",],
    name: {
      normal: "Memoria",
      upgrade: "Memoria II"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_titans_of_ul",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_titans_of_ul",],
    name: {
      normal: "Ouranos",
      upgrade: "Ouranos"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_vuil'raith_cabal",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_vuil'raith_cabal",],
    name: {
      normal: "The Terror Between",
      upgrade: "The Terror Between"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "flagship_council_keleres",
    class: ["ship"],
    type: "flagship",
    factions: ["faction_council_keleres",],
    name: {
      normal: "Artemiris",
      upgrade: "Artemiris"
    },
    combat: {
      normal: {
        strength: 7,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 7,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "mech_arborec",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_arborec",],
    name: {
      normal: "Letani Behemoth",
      upgrade: "Letani Behemoth"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_barony_of_letnev",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_barony_of_letnev",],
    name: {
      normal: "Dunlain Reaper",
      upgrade: "Dunlain Reaper"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_clan_of_saar",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_clan_of_saar",],
    name: {
      normal: "Scavenger Zeta",
      upgrade: "Scavenger Zeta"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_embers_of_muaat",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_embers_of_muaat",],
    name: {
      normal: "Ember Colossus",
      upgrade: "Ember Colossus"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_emirates_of_hacan",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_emirates_of_hacan",],
    name: {
      normal: "Pride of Kenara",
      upgrade: "Pride of Kenara"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_federation_of_sol",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_federation_of_sol",],
    name: {
      normal: "ZS Thunderbolt M2",
      upgrade: "ZS Thunderbolt M2"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "mech_ghosts_of_creuss",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_ghosts_of_creuss",],
    name: {
      normal: "Icarus Drive",
      upgrade: "Icarus Drive"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_l1z1x_mindnet",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_l1z1x_mindnet",],
    name: {
      normal: "Annihilator",
      upgrade: "Annihilator"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_mentak_coalition",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_mentak_coalition",],
    name: {
      normal: "Moll Terminus",
      upgrade: "Moll Terminus"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_naalu_collective",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_naalu_collective",],
    name: {
      normal: "Iconoclast",
      upgrade: "Iconoclast"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_nekro_virus",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_nekro_virus",],
    name: {
      normal: "Mordred",
      upgrade: "Mordred"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_sardakk_n'orr",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_sardakk_n'orr",],
    name: {
      normal: "Valkyrie Exoskeleton",
      upgrade: "Valkyrie Exoskeleton"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_universities_of_jol-nar",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_universities_of_jol-nar",],
    name: {
      normal: "Shield Paling",
      upgrade: "Shield Paling"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_winnu",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_winnu",],
    name: {
      normal: "Reclaimer",
      upgrade: "Reclaimer"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_xxcha_kingdom",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_xxcha_kingdom",],
    name: {
      normal: "Indomitus",
      upgrade: "Indomitus"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_yin_brotherhood",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_yin_brotherhood",],
    name: {
      normal: "Moyin's ashes",
      upgrade: "Moyin's ashes"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_yssaril_tribes",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_yssaril_tribes",],
    name: {
      normal: "Blackshade Infiltrator",
      upgrade: "Blackshade Infiltrator"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_argent_flight",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_argent_flight",],
    name: {
      normal: "Aerie Sentinel",
      upgrade: "Aerie Sentinel"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_empyrean",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_empyrean",],
    name: {
      normal: "Watcher",
      upgrade: "Watcher"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_mahact_gene-sorcerers",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_mahact_gene-sorcerers",],
    name: {
      normal: "Starlancer",
      upgrade: "Starlancer"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_naaz-rokha_alliance",
    class: [
      "ground_force",
      "ship"
    ],
    type: "mech",
    factions: ["faction_naaz-rokha_alliance",],
    name: {
      normal: "Eidolon",
      upgrade: "Z-Grav Eidolon"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 8,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "mech_nomad",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_nomad",],
    name: {
      normal: "Quantum Manipulator",
      upgrade: "Quantum Manipulator"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
  {
    id: "mech_titans_of_ul",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_titans_of_ul",],
    name: {
      normal: "Hecatoncheires",
      upgrade: "Hecatoncheires"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "mech_vuil'raith_cabal",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_vuil'raith_cabal",],
    name: {
      normal: "Reanimator",
      upgrade: "Reanimator"
    },
    combat: {
      normal: {
        strength: 5,
        noOfRolls: 2,
      },
      upgrade: {
        strength: 5,
        noOfRolls: 2,
      }
    },
  },
  {
    id: "mech_council_keleres",
    class: ["ground_force"],
    type: "mech",
    factions: ["faction_council_keleres",],
    name: {
      normal: "Omniopiares",
      upgrade: "Omniopiares"
    },
    combat: {
      normal: {
        strength: 6,
        noOfRolls: 1,
      },
      upgrade: {
        strength: 6,
        noOfRolls: 1,
      }
    },
  },
]

export {plasticUnits}