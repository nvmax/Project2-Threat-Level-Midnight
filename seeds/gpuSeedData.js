// create seed data for gpu

const { GpuInfo } = require("../models")

const gpu = [
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3090 Ti",
      "benchmark": 27987,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3080 Ti",
      "benchmark": 26887,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3090",
      "benchmark": 26395,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3080",
      "benchmark": 24853,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3070 Ti",
      "benchmark": 23367,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3070",
      "benchmark": 22093,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2080 Ti",
      "benchmark": 21796,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3060 Ti",
      "benchmark": 20206,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2080 SUPER",
      "benchmark": 19519,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2080",
      "benchmark": 18732,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1080 Ti",
      "benchmark": 18284,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2070 SUPER",
      "benchmark": 18168,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 3060",
      "benchmark": 16958,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2060 SUPER",
      "benchmark": 16514,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2070",
      "benchmark": 16079,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1080",
      "benchmark": 15265,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1070 Ti",
      "benchmark": 14500,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce RTX 2060",
      "benchmark": 13953,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 980 Ti",
      "benchmark": 13864,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1070",
      "benchmark": 13482,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX TITAN X",
      "benchmark": 13173,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1660 SUPER",
      "benchmark": 12732,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1660 Ti",
      "benchmark": 11794,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1660",
      "benchmark": 11695,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 980",
      "benchmark": 11237,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1060",
      "benchmark": 10070,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1650 SUPER",
      "benchmark": 10032,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1060 3GB",
      "benchmark": 9728,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 970",
      "benchmark": 9688,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 780 Ti",
      "benchmark": 9312,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX TITAN Z",
      "benchmark": 9189,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX TITAN Black",
      "benchmark": 9140,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1060 5GB",
      "benchmark": 8704,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX Titan",
      "benchmark": 8556,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 780",
      "benchmark": 8022,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1650",
      "benchmark": 7807,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1050 Ti",
      "benchmark": 6314,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 960",
      "benchmark": 6042,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 770",
      "benchmark": 5892,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 690",
      "benchmark": 5654,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 680",
      "benchmark": 5535,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 950",
      "benchmark": 5392,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 670",
      "benchmark": 5304,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 760 Ti",
      "benchmark": 5206,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 1050",
      "benchmark": 5090,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 760",
      "benchmark": 4775,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 580",
      "benchmark": 4538,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 660 Ti",
      "benchmark": 4367,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 480",
      "benchmark": 4110,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 660",
      "benchmark": 4004,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 750 Ti",
      "benchmark": 3919,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 570",
      "benchmark": 3902,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 750",
      "benchmark": 3399,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 650 Ti BOOST",
      "benchmark": 3330,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 590",
      "benchmark": 3307,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 470",
      "benchmark": 3147,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 560 Ti",
      "benchmark": 3056,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 560",
      "benchmark": 2711,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 465",
      "benchmark": 2681,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 1030",
      "benchmark": 2545,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 650 Ti",
      "benchmark": 2527,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 460",
      "benchmark": 2289,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 745",
      "benchmark": 2175,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 560 SE",
      "benchmark": 2087,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 460 v2",
      "benchmark": 2005,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 460 SE",
      "benchmark": 1974,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 645",
      "benchmark": 1858,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 555",
      "benchmark": 1807,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 650",
      "benchmark": 1769,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 550 Ti",
      "benchmark": 1557,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 285",
      "benchmark": 1550,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 740",
      "benchmark": 1529,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 275",
      "benchmark": 1401,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTS 450",
      "benchmark": 1321,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 260",
      "benchmark": 1221,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 640",
      "benchmark": 1182,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 280",
      "benchmark": 1181,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTX 295",
      "benchmark": 1171,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 730",
      "benchmark": 812,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9800 GX2",
      "benchmark": 798,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 340",
      "benchmark": 774,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9800 GTX",
      "benchmark": 769,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 440",
      "benchmark": 766,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 630",
      "benchmark": 683,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 530",
      "benchmark": 676,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 140",
      "benchmark": 658,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8800 Ultra",
      "benchmark": 639,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 710",
      "benchmark": 637,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTS 240",
      "benchmark": 622,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GTS 250",
      "benchmark": 618,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 720",
      "benchmark": 606,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 430",
      "benchmark": 603,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8800 GTX",
      "benchmark": 597,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8800 GTS 512",
      "benchmark": 591,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 240",
      "benchmark": 543,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9800 GTX+",
      "benchmark": 538,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8800 GT",
      "benchmark": 519,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9600 GT",
      "benchmark": 505,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9800 GT",
      "benchmark": 481,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 710A",
      "benchmark": 451,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 320",
      "benchmark": 444,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8800 GTS",
      "benchmark": 440,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 420",
      "benchmark": 411,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7900 GTX",
      "benchmark": 388,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 620",
      "benchmark": 365,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 705",
      "benchmark": 355,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9600 GSO",
      "benchmark": 350,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 130",
      "benchmark": 347,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9600 GSO 512",
      "benchmark": 345,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7950 GT",
      "benchmark": 344,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8800 GS",
      "benchmark": 332,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 625",
      "benchmark": 329,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 610",
      "benchmark": 303,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 520",
      "benchmark": 297,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7800 GTX",
      "benchmark": 291,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9600 GS",
      "benchmark": 279,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7900 GT",
      "benchmark": 258,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 510",
      "benchmark": 257,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7900 GS",
      "benchmark": 254,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7900 GT/GTO",
      "benchmark": 247,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7800 GT",
      "benchmark": 244,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 220",
      "benchmark": 211,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7600 GT",
      "benchmark": 204,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7950 GX2",
      "benchmark": 202,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800 GS",
      "benchmark": 195,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7800 GS",
      "benchmark": 177,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce GT 120",
      "benchmark": 175,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8600 GTS",
      "benchmark": 161,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 315",
      "benchmark": 159,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7600 GS",
      "benchmark": 158,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800 GT",
      "benchmark": 142,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800 Ultra",
      "benchmark": 139,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6600 GT",
      "benchmark": 137,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7300 GT",
      "benchmark": 135,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9500 GT",
      "benchmark": 135,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8400 GS",
      "benchmark": 128,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800 XT",
      "benchmark": 128,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 205",
      "benchmark": 126,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 310",
      "benchmark": 122,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8600 GT",
      "benchmark": 117,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8500 GT",
      "benchmark": 115,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800",
      "benchmark": 113,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9300 GS",
      "benchmark": 111,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800 LE",
      "benchmark": 110,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9400 GT",
      "benchmark": 105,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6800 GS/XT",
      "benchmark": 103,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 210",
      "benchmark": 97,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8600 GS",
      "benchmark": 92,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6600",
      "benchmark": 88,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7500 LE",
      "benchmark": 87,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 9300 GE",
      "benchmark": 84,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7300 GS",
      "benchmark": 82,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7300 LE",
      "benchmark": 78,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 8300 GS",
      "benchmark": 67,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5950 Ultra",
      "benchmark": 59,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7100 GS",
      "benchmark": 52,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6600 LE",
      "benchmark": 51,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5700",
      "benchmark": 41,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5900 Ultra",
      "benchmark": 41,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5900XT",
      "benchmark": 40,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7300 SE",
      "benchmark": 39,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6500",
      "benchmark": 38,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce PCX 5750",
      "benchmark": 35,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6200",
      "benchmark": 35,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7100 / nForce 630i",
      "benchmark": 35,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5900",
      "benchmark": 35,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5700 Ultra",
      "benchmark": 34,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce PCX 5900",
      "benchmark": 34,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5700VE",
      "benchmark": 33,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5900ZT",
      "benchmark": 33,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6200 A-LE",
      "benchmark": 32,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6200 LE",
      "benchmark": 31,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5700LE",
      "benchmark": 25,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 7200 GS",
      "benchmark": 23,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5600 Ultra",
      "benchmark": 17,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5600",
      "benchmark": 13,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5200 Ultra",
      "benchmark": 12,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5200",
      "benchmark": 8,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce FX 5500",
      "benchmark": 8,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce PCX 5300",
      "benchmark": 6,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce2 Ultra",
      "benchmark": 6,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce4 Ti 4600",
      "benchmark": 6,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce2 Ti",
      "benchmark": 5,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce3",
      "benchmark": 5,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce4 MX 420",
      "benchmark": 5,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce4 MX 440",
      "benchmark": 5,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce4 MX 440 with AGP8X",
      "benchmark": 5,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce 6200A",
      "benchmark": 4,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce4 MX 460",
      "benchmark": 4,
      "type": "Desktop"
    },
    {
      "brand": "NVIDIA",
      "gpu": "GeForce2 MX",
      "benchmark": 3,
      "type": "Desktop"
    },
    {
        "brand": "AMD",
        "gpu": "Radeon RX 6900 XT",
        "benchmark": 25458,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 6800 XT",
        "benchmark": 23364,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 6800",
        "benchmark": 20667,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 6700 XT",
        "benchmark": 18993,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5700 XT",
        "benchmark": 16892,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon VII",
        "benchmark": 16767,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5700 XT 50th Anniversary",
        "benchmark": 16650,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 6600 XT",
        "benchmark": 15853,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro W5700",
        "benchmark": 15085,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5700",
        "benchmark": 14729,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX Vega 64",
        "benchmark": 14636,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 8200",
        "benchmark": 14110,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5600 XT",
        "benchmark": 13836,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Vega Frontier Edition",
        "benchmark": 13748,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX Vega 56",
        "benchmark": 13636,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 9100",
        "benchmark": 13241,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro 5700 XT",
        "benchmark": 12537,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro Vega 56",
        "benchmark": 12386,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro 5700",
        "benchmark": 11844,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5600",
        "benchmark": 11030,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 Fury + Fury X",
        "benchmark": 9741,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 590",
        "benchmark": 9665,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 390X",
        "benchmark": 9503,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro W5500",
        "benchmark": 9269,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5500 XT",
        "benchmark": 9188,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 390",
        "benchmark": 9008,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 580",
        "benchmark": 8907,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5500",
        "benchmark": 8817,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 480",
        "benchmark": 8674,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX590 GME",
        "benchmark": 8628,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 295X2",
        "benchmark": 8619,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 290X / 390X",
        "benchmark": 8389,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro Duo",
        "benchmark": 8324,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 290 / 390",
        "benchmark": 8150,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 470/570",
        "benchmark": 8070,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 580X",
        "benchmark": 7798,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5300",
        "benchmark": 7611,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro 580X",
        "benchmark": 7540,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 280X",
        "benchmark": 6284,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 380",
        "benchmark": 6275,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 380X",
        "benchmark": 6189,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 280",
        "benchmark": 5668,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7990",
        "benchmark": 5566,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 285 / 380",
        "benchmark": 5550,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7970 / R9 280X",
        "benchmark": 5248,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8990",
        "benchmark": 5214,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 270X",
        "benchmark": 4923,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7950 / R9 280",
        "benchmark": 4765,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 370",
        "benchmark": 4722,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7870",
        "benchmark": 4661,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 370",
        "benchmark": 4479,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7870 XT",
        "benchmark": 4470,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 270 / R7 370",
        "benchmark": 4260,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 460",
        "benchmark": 4114,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7850",
        "benchmark": 3826,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 4100",
        "benchmark": 3766,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 560",
        "benchmark": 3594,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 560X",
        "benchmark": 3181,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 260X",
        "benchmark": 3147,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7790",
        "benchmark": 3090,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 360",
        "benchmark": 3034,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 360",
        "benchmark": 3032,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6990",
        "benchmark": 3013,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 260",
        "benchmark": 2892,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6970",
        "benchmark": 2863,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 550",
        "benchmark": 2718,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6950",
        "benchmark": 2650,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 550X",
        "benchmark": 2370,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 250X",
        "benchmark": 2269,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8950",
        "benchmark": 2267,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5870",
        "benchmark": 2266,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5970",
        "benchmark": 2249,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6870",
        "benchmark": 2223,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7770",
        "benchmark": 2204,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX Vega 11",
        "benchmark": 2137,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 350",
        "benchmark": 2007,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6850",
        "benchmark": 1979,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 450",
        "benchmark": 1966,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5850",
        "benchmark": 1966,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 570X",
        "benchmark": 1923,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 540",
        "benchmark": 1793,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5830",
        "benchmark": 1735,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7750",
        "benchmark": 1696,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6790",
        "benchmark": 1613,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4890",
        "benchmark": 1533,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 255",
        "benchmark": 1485,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4870",
        "benchmark": 1391,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5770",
        "benchmark": 1351,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4870 X2",
        "benchmark": 1309,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6770",
        "benchmark": 1231,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7730",
        "benchmark": 1217,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5750",
        "benchmark": 1156,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 250",
        "benchmark": 1151,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4850 X2",
        "benchmark": 1132,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6750",
        "benchmark": 1005,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8570",
        "benchmark": 991,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 A10-7850K",
        "benchmark": 982,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4850",
        "benchmark": 953,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4770",
        "benchmark": 906,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 240",
        "benchmark": 863,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4830",
        "benchmark": 860,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3850 X2",
        "benchmark": 822,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7670",
        "benchmark": 813,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5670",
        "benchmark": 784,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4810",
        "benchmark": 769,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6670",
        "benchmark": 745,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3870 X2",
        "benchmark": 709,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2900 XT",
        "benchmark": 660,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2900 PRO",
        "benchmark": 628,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7570",
        "benchmark": 613,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3870",
        "benchmark": 576,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 240",
        "benchmark": 520,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 330",
        "benchmark": 513,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7660D",
        "benchmark": 504,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6570",
        "benchmark": 496,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5570",
        "benchmark": 473,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7560D",
        "benchmark": 472,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3850 AGP",
        "benchmark": 432,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6550D",
        "benchmark": 417,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3850",
        "benchmark": 410,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4670",
        "benchmark": 384,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5550",
        "benchmark": 383,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7540D",
        "benchmark": 336,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 235",
        "benchmark": 329,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6530D",
        "benchmark": 325,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7470",
        "benchmark": 316,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2900 GT",
        "benchmark": 292,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7480D",
        "benchmark": 285,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2600 XT",
        "benchmark": 283,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 235X",
        "benchmark": 280,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8490",
        "benchmark": 265,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8470",
        "benchmark": 257,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6370D",
        "benchmark": 254,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6410D",
        "benchmark": 243,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4550",
        "benchmark": 236,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7450",
        "benchmark": 221,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4650",
        "benchmark": 219,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2600 PRO",
        "benchmark": 211,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6450",
        "benchmark": 200,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7350",
        "benchmark": 193,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8350",
        "benchmark": 165,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1950 CrossFire Edition",
        "benchmark": 151,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1900 GT",
        "benchmark": 146,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON HD 6350",
        "benchmark": 141,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4290",
        "benchmark": 141,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1800 GTO",
        "benchmark": 141,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 5450",
        "benchmark": 138,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1900 CrossFire Edition",
        "benchmark": 137,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 220",
        "benchmark": 135,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 SE",
        "benchmark": 130,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4250",
        "benchmark": 123,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2400 XT",
        "benchmark": 119,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3450",
        "benchmark": 118,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1600 XT",
        "benchmark": 116,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 GTO",
        "benchmark": 115,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2400 Pro",
        "benchmark": 114,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1950 Pro",
        "benchmark": 113,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4200",
        "benchmark": 112,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1950 GT",
        "benchmark": 106,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 4350",
        "benchmark": 103,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1600 Pro",
        "benchmark": 99,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 XT",
        "benchmark": 98,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 3470",
        "benchmark": 90,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1650 Pro",
        "benchmark": 85,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 GT",
        "benchmark": 84,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X850 XT Platinum Edition",
        "benchmark": 82,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 XT Platinum Edition",
        "benchmark": 81,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X850 XT",
        "benchmark": 81,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 2350",
        "benchmark": 77,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X700 PRO",
        "benchmark": 76,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X700",
        "benchmark": 73,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X850 PRO",
        "benchmark": 73,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 PRO/GTO",
        "benchmark": 73,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X700 SE",
        "benchmark": 71,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 XL",
        "benchmark": 69,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1550",
        "benchmark": 67,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X800 PRO",
        "benchmark": 65,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9800 PRO",
        "benchmark": 59,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9800",
        "benchmark": 58,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1300",
        "benchmark": 58,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9800 XT",
        "benchmark": 57,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X600 256MB HyperMemory",
        "benchmark": 57,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9700 PRO",
        "benchmark": 54,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON X550",
        "benchmark": 51,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon X1050",
        "benchmark": 49,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9600 PRO",
        "benchmark": 43,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9500",
        "benchmark": 36,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9550",
        "benchmark": 35,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9600 XT",
        "benchmark": 35,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9800 SE",
        "benchmark": 24,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9000",
        "benchmark": 5,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9200",
        "benchmark": 4,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 7500",
        "benchmark": 3,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9200 SE",
        "benchmark": 3,
        "type": "Desktop"
      },
      {
        "brand": "AMD",
        "gpu": "RADEON 9250",
        "benchmark": 3,
        "type": "Desktop"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 3080 Laptop GPU",
        "benchmark": 16522,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 3070 Laptop GPU",
        "benchmark": 15231,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 3060 Laptop GPU",
        "benchmark": 12674,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 3050 Ti Laptop GPU",
        "benchmark": 9452,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 3050 Laptop GPU",
        "benchmark": 9037,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2070 Super with Max-Q Design",
        "benchmark": 14261,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2080 Super with Max-Q Design",
        "benchmark": 14020,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2060 with Max-Q Design",
        "benchmark": 9743,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1650 Ti",
        "benchmark": 7490,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1650 Ti with Max-Q Design",
        "benchmark": 6342,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2080 (Mobile)",
        "benchmark": 15107,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2080 with Max-Q Design",
        "benchmark": 13681,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2070 (Mobile)",
        "benchmark": 12354,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2070 with Max-Q Design",
        "benchmark": 12062,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce RTX 2060 (Mobile)",
        "benchmark": 11355,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1070 (Mobile)",
        "benchmark": 10465,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1660 Ti (Mobile)",
        "benchmark": 10176,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1660 Ti with Max-Q Design",
        "benchmark": 8646,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1060 (Mobile)",
        "benchmark": 8161,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1650 (Mobile)",
        "benchmark": 6969,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1050 Ti (Mobile)",
        "benchmark": 5919,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1650 with Max-Q Design",
        "benchmark": 5884,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1050 (Mobile)",
        "benchmark": 4462,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1050 Ti with Max-Q Design",
        "benchmark": 5372,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1050 with Max-Q Design",
        "benchmark": 3785,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1080 with Max-Q Design",
        "benchmark": 11507,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1070 with Max-Q Design",
        "benchmark": 10030,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 1060 with Max-Q Design",
        "benchmark": 7907,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce MX150",
        "benchmark": 2310,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 930MX",
        "benchmark": 1302,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 965M",
        "benchmark": 3824,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 960M",
        "benchmark": 3419,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 950M",
        "benchmark": 2602,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 845M",
        "benchmark": 1430,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GPU",
        "benchmark": 1236,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 940M",
        "benchmark": 1106,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 980M",
        "benchmark": 7317,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 970M",
        "benchmark": 5761,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 880M",
        "benchmark": 3876,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 870M",
        "benchmark": 3380,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 860M",
        "benchmark": 3045,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 850M",
        "benchmark": 2574,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 840M",
        "benchmark": 1067,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 830M",
        "benchmark": 976,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 825M",
        "benchmark": 769,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 820M",
        "benchmark": 511,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTS 150M",
        "benchmark": 504,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 680MX",
        "benchmark": 4271,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 780M",
        "benchmark": 3755,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 770M",
        "benchmark": 2786,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 675MX",
        "benchmark": 2338,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 765M",
        "benchmark": 1972,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 760M",
        "benchmark": 1691,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 755M",
        "benchmark": 1610,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 750M",
        "benchmark": 1313,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 745M",
        "benchmark": 1055,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 645M",
        "benchmark": 958,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 730M",
        "benchmark": 816,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 740M",
        "benchmark": 779,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 735M",
        "benchmark": 594,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 720M",
        "benchmark": 467,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 710M",
        "benchmark": 450,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 625M",
        "benchmark": 435,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 680M",
        "benchmark": 3077,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 675M",
        "benchmark": 1934,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 670MX",
        "benchmark": 1906,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 670M",
        "benchmark": 1775,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 660M",
        "benchmark": 1414,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 650M",
        "benchmark": 1199,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 460M",
        "benchmark": 1198,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 640M",
        "benchmark": 907,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 640M LE",
        "benchmark": 673,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 635M",
        "benchmark": 563,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 630M",
        "benchmark": 549,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 435M",
        "benchmark": 521,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 540M",
        "benchmark": 493,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9800M GS",
        "benchmark": 460,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 525M",
        "benchmark": 460,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 620M",
        "benchmark": 431,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 260M",
        "benchmark": 412,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8800M GTS",
        "benchmark": 382,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 520MX",
        "benchmark": 293,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 520M",
        "benchmark": 288,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 330M",
        "benchmark": 209,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 305M",
        "benchmark": 151,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 310M",
        "benchmark": 111,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce G 103M",
        "benchmark": 61,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7300",
        "benchmark": 52,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7200",
        "benchmark": 45,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 580M",
        "benchmark": 2373,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 485M",
        "benchmark": 2360,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 570M",
        "benchmark": 1910,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 560M",
        "benchmark": 1266,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 555M",
        "benchmark": 688,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 550M",
        "benchmark": 580,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 415M",
        "benchmark": 286,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 410M",
        "benchmark": 250,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 320M",
        "benchmark": 219,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 325M",
        "benchmark": 171,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 315M",
        "benchmark": 116,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8600M GT",
        "benchmark": 89,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 480M",
        "benchmark": 2051,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 470M",
        "benchmark": 1953,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 445M",
        "benchmark": 881,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 285M",
        "benchmark": 676,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTS 360M",
        "benchmark": 655,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 425M",
        "benchmark": 517,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 420M",
        "benchmark": 418,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTS 350M",
        "benchmark": 408,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 335M",
        "benchmark": 400,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9700M GTS",
        "benchmark": 326,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 320M",
        "benchmark": 107,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 7000M",
        "benchmark": 13,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce FX Go 5200",
        "benchmark": 8,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce4 4200 Go",
        "benchmark": 4,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTS 160M",
        "benchmark": 679,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTX 280M",
        "benchmark": 621,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GTS 250M",
        "benchmark": 569,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8800M GTX",
        "benchmark": 462,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9800M GTX",
        "benchmark": 462,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9800M GT",
        "benchmark": 424,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9800M GTS",
        "benchmark": 379,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9650M GS",
        "benchmark": 270,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7900 GTX",
        "benchmark": 270,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 120M",
        "benchmark": 266,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7950 GTX",
        "benchmark": 264,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9700M GT",
        "benchmark": 217,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7600 GT",
        "benchmark": 210,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7800 GTX",
        "benchmark": 210,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 240M",
        "benchmark": 205,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 230M",
        "benchmark": 201,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7900 GS",
        "benchmark": 176,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7700",
        "benchmark": 148,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 130M",
        "benchmark": 146,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 6800 Ultra",
        "benchmark": 138,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9650M GT",
        "benchmark": 137,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9600M GT",
        "benchmark": 132,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7600",
        "benchmark": 128,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8700M GT",
        "benchmark": 124,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9500M G",
        "benchmark": 122,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce G210M",
        "benchmark": 122,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce GT 220M",
        "benchmark": 121,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9600M GS",
        "benchmark": 119,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7800",
        "benchmark": 115,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9200M GS",
        "benchmark": 111,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 6800",
        "benchmark": 106,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9500M GS",
        "benchmark": 104,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8400M GS",
        "benchmark": 98,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9300M GS",
        "benchmark": 92,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9300M G",
        "benchmark": 85,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8600M GS",
        "benchmark": 73,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8200M G",
        "benchmark": 72,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 6600",
        "benchmark": 69,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 9400M G",
        "benchmark": 68,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 7400",
        "benchmark": 66,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce G 105M",
        "benchmark": 65,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8400M GT",
        "benchmark": 64,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce 8400M G",
        "benchmark": 59,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 6400",
        "benchmark": 24,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce FX Go 5600",
        "benchmark": 18,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce Go 6200",
        "benchmark": 15,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce2 Go",
        "benchmark": 4,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce4 440 Go",
        "benchmark": 4,
        "type": "Mobile"
      },
      {
        "brand": "NVIDIA",
        "gpu": "GeForce4 420 Go",
        "benchmark": 3,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 6800M",
        "benchmark": 9012,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro 5600M",
        "benchmark": 10200,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5600M",
        "benchmark": 7157,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 7130",
        "benchmark": 5722,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5500M",
        "benchmark": 4010,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 5300M",
        "benchmark": 3562,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M385",
        "benchmark": 2018,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro W5500M",
        "benchmark": 2010,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M280X",
        "benchmark": 922,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX Vega M GL",
        "benchmark": 6049,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 3200",
        "benchmark": 2456,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M385X",
        "benchmark": 1929,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 4170",
        "benchmark": 1409,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 4150",
        "benchmark": 1935,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 4130",
        "benchmark": 1881,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Pro WX 2100",
        "benchmark": 1755,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M365X",
        "benchmark": 1482,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M470X",
        "benchmark": 3400,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M390X",
        "benchmark": 3021,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M470",
        "benchmark": 2288,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M375X",
        "benchmark": 1843,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 M370",
        "benchmark": 1418,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 M340",
        "benchmark": 646,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M395",
        "benchmark": 4991,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M395X",
        "benchmark": 4775,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M380",
        "benchmark": 2931,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M370X",
        "benchmark": 1374,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M270X",
        "benchmark": 1204,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7690M XT",
        "benchmark": 1009,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8850M",
        "benchmark": 973,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 M260X",
        "benchmark": 947,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M375",
        "benchmark": 763,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7570M/HD 7670M",
        "benchmark": 699,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8730M",
        "benchmark": 659,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7730M",
        "benchmark": 634,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 M330",
        "benchmark": 596,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 M360",
        "benchmark": 552,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 M335",
        "benchmark": 549,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7450M",
        "benchmark": 330,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M295X",
        "benchmark": 5150,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8970M",
        "benchmark": 3876,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M290X",
        "benchmark": 3375,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8870M",
        "benchmark": 1638,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M275X / M375",
        "benchmark": 1575,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8790M",
        "benchmark": 1306,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M275",
        "benchmark": 1115,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R9 M265X",
        "benchmark": 929,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8750M",
        "benchmark": 860,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 M265",
        "benchmark": 576,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8670M",
        "benchmark": 520,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 M255",
        "benchmark": 496,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R7 M260",
        "benchmark": 452,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R5 M230",
        "benchmark": 391,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon Vega 8",
        "benchmark": 1593,
        "type": "Desktop, Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon RX 640",
        "benchmark": 1537,
        "type": "Desktop, Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7750M",
        "benchmark": 1191,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 8350G",
        "benchmark": 443,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon. HD 5470",
        "benchmark": 215,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6430M",
        "benchmark": 193,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7970M",
        "benchmark": 3774,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7870M",
        "benchmark": 1507,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7850M",
        "benchmark": 1373,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5870",
        "benchmark": 1062,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7690M",
        "benchmark": 1003,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7550M/7650M",
        "benchmark": 729,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7610M",
        "benchmark": 632,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon R6",
        "benchmark": 656,
        "type": "Desktop, Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4830",
        "benchmark": 512,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7670M",
        "benchmark": 485,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7550M",
        "benchmark": 465,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5650",
        "benchmark": 451,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7650M",
        "benchmark": 451,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7570M",
        "benchmark": 445,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 7470M",
        "benchmark": 408,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6620G",
        "benchmark": 355,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6520G",
        "benchmark": 300,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6480G",
        "benchmark": 259,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5470",
        "benchmark": 236,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6470M",
        "benchmark": 228,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6380G",
        "benchmark": 204,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 2600",
        "benchmark": 168,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6310",
        "benchmark": 123,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6290",
        "benchmark": 109,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6250",
        "benchmark": 94,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 2300",
        "benchmark": 51,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X2300",
        "benchmark": 48,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9550",
        "benchmark": 30,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6970M",
        "benchmark": 2270,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6770M",
        "benchmark": 964,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6750M",
        "benchmark": 937,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6650M",
        "benchmark": 752,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6630M",
        "benchmark": 685,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6490M",
        "benchmark": 378,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 565v",
        "benchmark": 353,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6320",
        "benchmark": 148,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4570",
        "benchmark": 135,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 2400 XT",
        "benchmark": 102,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4200",
        "benchmark": 91,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9200",
        "benchmark": 3,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5850",
        "benchmark": 763,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4870",
        "benchmark": 720,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5730",
        "benchmark": 487,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 560v",
        "benchmark": 318,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5165",
        "benchmark": 284,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Radeon HD 6370M",
        "benchmark": 276,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 550v",
        "benchmark": 266,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5450",
        "benchmark": 214,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 545v",
        "benchmark": 200,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4550",
        "benchmark": 191,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 5430",
        "benchmark": 181,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 530v",
        "benchmark": 175,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1900",
        "benchmark": 135,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1700",
        "benchmark": 105,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4250",
        "benchmark": 98,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4270",
        "benchmark": 93,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 2400",
        "benchmark": 90,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON X700",
        "benchmark": 67,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4225",
        "benchmark": 66,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3410",
        "benchmark": 63,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9600/9700",
        "benchmark": 39,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4850",
        "benchmark": 866,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3870",
        "benchmark": 548,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3870 X2",
        "benchmark": 478,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4670",
        "benchmark": 463,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4650",
        "benchmark": 401,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3850",
        "benchmark": 366,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3670",
        "benchmark": 232,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 2600 XT",
        "benchmark": 192,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 4330",
        "benchmark": 135,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3650",
        "benchmark": 130,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON X1800",
        "benchmark": 130,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3430",
        "benchmark": 98,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3470",
        "benchmark": 93,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1600",
        "benchmark": 92,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon HD 3450",
        "benchmark": 91,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X2500",
        "benchmark": 82,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON X600",
        "benchmark": 50,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9800",
        "benchmark": 46,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1400",
        "benchmark": 43,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1300",
        "benchmark": 40,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1350",
        "benchmark": 40,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9600",
        "benchmark": 36,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON X300",
        "benchmark": 34,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "Mobility Radeon X1450",
        "benchmark": 33,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9700",
        "benchmark": 27,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 7500",
        "benchmark": 4,
        "type": "Mobile"
      },
      {
        "brand": "AMD",
        "gpu": "MOBILITY RADEON 9000",
        "benchmark": 3,
        "type": "Mobile"
      }
  ]

const gpuData = () => GpuInfo.bulkCreate(gpuInfo);

module.exports = gpuData;