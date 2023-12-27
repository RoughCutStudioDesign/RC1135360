var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.083373466601575,
        "pitch": 0.0026155422798908035,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.0686173431373867,
          "pitch": 0.11257230417305308,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": -1.6079116171091385,
          "pitch": 0.10297646436453611,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": -0.16434585400790525,
          "pitch": 0.03241549229078089,
          "rotation": 3.141592653589793,
          "target": "4-balcony"
        },
        {
          "yaw": 0.6459467642411312,
          "pitch": -0.11935772903846598,
          "rotation": 0,
          "target": "8-roof-garden"
        },
        {
          "yaw": -1.4280975348755867,
          "pitch": -0.014731239772846294,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8681862210948204,
          "pitch": 0.11269379052997941,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": 0.5555633035748109,
          "pitch": 0.14670778074662927,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": 0.35222151538168944,
          "pitch": 0.13750227157050432,
          "rotation": 4.71238898038469,
          "target": "5-guests-toilet"
        },
        {
          "yaw": 0.33614920372778556,
          "pitch": -0.10601530587126362,
          "rotation": 5.497787143782138,
          "target": "6-en-suite-bathroom"
        },
        {
          "yaw": 0.41347571067840505,
          "pitch": -0.14456282073412652,
          "rotation": 5.497787143782138,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -2.011990683109472,
          "pitch": 0.03795060532161898,
          "rotation": 4.71238898038469,
          "target": "4-balcony"
        },
        {
          "yaw": 1.2278274280628878,
          "pitch": 0.17888285192700515,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6246760600946981,
          "pitch": 0.08312233135586666,
          "rotation": 0,
          "target": "5-guests-toilet"
        },
        {
          "yaw": 0.5006438728979603,
          "pitch": 0.31900801900914644,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": 0.04934646137044041,
          "pitch": 0.08977758015960902,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": -0.4579351966388501,
          "pitch": 0.19242671906811282,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": -0.5758359782768832,
          "pitch": 0.010241074060802546,
          "rotation": 5.497787143782138,
          "target": "4-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0629007163909634,
          "pitch": 0.10956300855496082,
          "rotation": 1.5707963267948966,
          "target": "6-en-suite-bathroom"
        },
        {
          "yaw": 0.10355149009234665,
          "pitch": -0.007830626722206802,
          "rotation": 7.0685834705770345,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -0.455372354015978,
          "pitch": 0.3233853447713617,
          "rotation": 4.71238898038469,
          "target": "5-guests-toilet"
        },
        {
          "yaw": -1.587351292868604,
          "pitch": 0.1032959207134283,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": -2.408391689648745,
          "pitch": 0.021802638366484217,
          "rotation": 3.141592653589793,
          "target": "4-balcony"
        },
        {
          "yaw": -2.0550512260381772,
          "pitch": -0.08007937791806441,
          "rotation": 0,
          "target": "8-roof-garden"
        },
        {
          "yaw": -2.947309068118251,
          "pitch": 0.34691707681879436,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": 2.258609469927558,
          "pitch": 0.32832959414997553,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-balcony",
      "name": "BALCONY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5876031779942146,
          "pitch": -0.14233803465802097,
          "rotation": 0,
          "target": "8-roof-garden"
        },
        {
          "yaw": -0.5914495402341267,
          "pitch": 0.047225511005624554,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": 0.7098681932691129,
          "pitch": 0.24962303557695442,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": 0.4705800967963025,
          "pitch": 0.0911312217077409,
          "rotation": 4.71238898038469,
          "target": "3-corridor"
        },
        {
          "yaw": 0.841374314349391,
          "pitch": 0.02375032008708544,
          "rotation": 0.7853981633974483,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-guests-toilet",
      "name": "GUESTS TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1017416809202745,
          "pitch": 0.15626140580219428,
          "rotation": 1.5707963267948966,
          "target": "3-corridor"
        },
        {
          "yaw": 1.499140111430596,
          "pitch": 0.25182077121443136,
          "rotation": 4.71238898038469,
          "target": "6-en-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-en-suite-bathroom",
      "name": "EN SUITE BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9373527353115065,
          "pitch": 0.08847462196324685,
          "rotation": 0.7853981633974483,
          "target": "3-corridor"
        },
        {
          "yaw": 2.7318931917311,
          "pitch": 0.10437276366551096,
          "rotation": 4.71238898038469,
          "target": "7-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8697607661029885,
          "pitch": 0.09948238686897604,
          "rotation": 1.5707963267948966,
          "target": "6-en-suite-bathroom"
        },
        {
          "yaw": -1.0554183357066584,
          "pitch": 0.07013561988335049,
          "rotation": 4.71238898038469,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-roof-garden",
      "name": "ROOF GARDEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4223238172977606,
          "pitch": 0.23544798629679242,
          "rotation": 3.141592653589793,
          "target": "4-balcony"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RC1135 CHRYSAPP 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
