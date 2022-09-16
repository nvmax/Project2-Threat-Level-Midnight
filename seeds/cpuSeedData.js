// create seed data for cpu 
const { CpuInfo } = require('../models');


const cpus = [
    {
      "cpu": "AMD Ryzen Threadripper PRO 5995WX",
      "benchmark": 108822,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 3995WX",
      "benchmark": 83971,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 3990X",
      "benchmark": 81568,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 5975WX",
      "benchmark": 80842,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 5965WX",
      "benchmark": 68405,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 3970X",
      "benchmark": 63835,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 3975WX",
      "benchmark": 63495,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 3960X",
      "benchmark": 54757,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 5955WX",
      "benchmark": 51656,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 5950X",
      "benchmark": 46195,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900KS",
      "benchmark": 44243,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 5945WX",
      "benchmark": 41578,
      "category": "Desktop"
    },
    {
      "cpu": "Apple M1 Ultra 20 Core",
      "benchmark": 41360,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900KF",
      "benchmark": 41163,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900K",
      "benchmark": 41077,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 3955WX",
      "benchmark": 40225,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 5900X",
      "benchmark": 39457,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 3950X",
      "benchmark": 39157,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900",
      "benchmark": 38281,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Xeon W-3175X @ 3.10GHz",
      "benchmark": 37167,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900F",
      "benchmark": 35726,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900T",
      "benchmark": 34999,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 5900",
      "benchmark": 34721,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-12700K",
      "benchmark": 34125,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-12700KF",
      "benchmark": 34110,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper PRO 3945WX",
      "benchmark": 33417,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10980XE @ 3.00GHz",
      "benchmark": 33408,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 3900XT",
      "benchmark": 32869,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 3900X",
      "benchmark": 32751,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 2990WX",
      "benchmark": 32475,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-12700F",
      "benchmark": 32268,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9980XE @ 3.00GHz",
      "benchmark": 31905,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-12700",
      "benchmark": 31659,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 PRO 3900",
      "benchmark": 31372,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 3900",
      "benchmark": 30660,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9960X @ 3.10GHz",
      "benchmark": 30655,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 2970WX",
      "benchmark": 30433,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900HK",
      "benchmark": 30213,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-9990XE @ 4.00GHz",
      "benchmark": 30162,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 2950X",
      "benchmark": 29981,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-7980XE @ 2.60GHz",
      "benchmark": 29842,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-12900H",
      "benchmark": 29714,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-10940X @ 3.30GHz",
      "benchmark": 28619,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9940X @ 3.30GHz",
      "benchmark": 28411,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5800X",
      "benchmark": 28368,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 1950X",
      "benchmark": 28037,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Xeon W-2275 @ 3.30GHz",
      "benchmark": 27904,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-12600K",
      "benchmark": 27429,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-12700H",
      "benchmark": 27391,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-12600KF",
      "benchmark": 27186,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5700X",
      "benchmark": 27065,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-7960X @ 2.80GHz",
      "benchmark": 26699,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10920X @ 3.50GHz",
      "benchmark": 26696,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-7940X @ 3.10GHz",
      "benchmark": 26508,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 2990X",
      "benchmark": 26469,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5800",
      "benchmark": 25644,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-11900K @ 3.50GHz",
      "benchmark": 25539,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5800X3D",
      "benchmark": 25508,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 6800HS",
      "benchmark": 25460,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-11900KF @ 3.50GHz",
      "benchmark": 25390,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9920X @ 3.50GHz",
      "benchmark": 25291,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 2920X",
      "benchmark": 25203,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 5750G",
      "benchmark": 25004,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-11700K @ 3.60GHz",
      "benchmark": 24749,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5700G",
      "benchmark": 24545,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 6900HS",
      "benchmark": 24390,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 6850U",
      "benchmark": 24352,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-11700KF @ 3.60GHz",
      "benchmark": 24147,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 3800XT",
      "benchmark": 23815,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-11900F @ 2.50GHz",
      "benchmark": 23814,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10900K @ 3.70GHz",
      "benchmark": 23768,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-11980HK @ 2.60GHz",
      "benchmark": 23629,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-12500H",
      "benchmark": 23530,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-10900KF @ 3.70GHz",
      "benchmark": 23508,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 6800H",
      "benchmark": 23447,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 9 5980HX",
      "benchmark": 23425,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-7920X @ 2.90GHz",
      "benchmark": 23292,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 3800X",
      "benchmark": 23275,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 5900HX",
      "benchmark": 23160,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1250P",
      "benchmark": 23120,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-11900 @ 2.50GHz",
      "benchmark": 23117,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10850K @ 3.60GHz",
      "benchmark": 23055,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 1920X",
      "benchmark": 22903,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 3700",
      "benchmark": 22800,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-11900KB @ 3.30GHz",
      "benchmark": 22769,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 3700X",
      "benchmark": 22716,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-12700T",
      "benchmark": 22688,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10900X @ 3.70GHz",
      "benchmark": 22683,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-11950H @ 2.60GHz",
      "benchmark": 22570,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 5700GE",
      "benchmark": 22566,
      "category": "Desktop"
    },
    {
      "cpu": "Apple M1 Max 10 Core 3200 MHz",
      "benchmark": 22566,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "Intel Core i7-11700B @ 3.20GHz",
      "benchmark": 22539,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 5750GE",
      "benchmark": 22315,
      "category": "Desktop"
    },
    {
      "cpu": "Apple M1 Pro 10 Core 3200 MHz",
      "benchmark": 22314,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "AMD Ryzen 9 5900HS",
      "benchmark": 22215,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 5600X",
      "benchmark": 22088,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 1920",
      "benchmark": 22066,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9900X @ 3.50GHz",
      "benchmark": 21868,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10910 @ 3.60GHz",
      "benchmark": 21799,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5800H",
      "benchmark": 21469,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-11700F @ 2.50GHz",
      "benchmark": 21447,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 5980HS",
      "benchmark": 21412,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-11900H @ 2.50GHz",
      "benchmark": 21385,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-12600",
      "benchmark": 21368,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-11800H @ 2.30GHz",
      "benchmark": 21363,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 5600",
      "benchmark": 21350,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-7900X @ 3.30GHz",
      "benchmark": 21310,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-11850H @ 2.50GHz",
      "benchmark": 21212,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1270P",
      "benchmark": 21030,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 9 5900H",
      "benchmark": 20960,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 5800HS Creator Edition",
      "benchmark": 20948,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-10900F @ 2.80GHz",
      "benchmark": 20881,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 4700G",
      "benchmark": 20848,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5800HS",
      "benchmark": 20684,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-10900E @ 2.80GHz",
      "benchmark": 20658,
      "category": "Desktop, Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 5650G",
      "benchmark": 20633,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-11700 @ 2.50GHz",
      "benchmark": 20588,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 4750G",
      "benchmark": 20570,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10900 @ 2.80GHz",
      "benchmark": 20446,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 4700GE",
      "benchmark": 20392,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 5875U",
      "benchmark": 20369,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-12500",
      "benchmark": 20309,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-11900T @ 1.50GHz",
      "benchmark": 20225,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 4700G",
      "benchmark": 20138,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 5500",
      "benchmark": 19949,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 5600G",
      "benchmark": 19830,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-12450H",
      "benchmark": 19820,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-11600K @ 3.90GHz",
      "benchmark": 19781,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11600KF @ 3.90GHz",
      "benchmark": 19742,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-12400F",
      "benchmark": 19659,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-12400",
      "benchmark": 19571,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9900KS @ 4.00GHz",
      "benchmark": 19518,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 4900HS",
      "benchmark": 19425,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7900X @ 3.30GHz",
      "benchmark": 19358,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 9 4900H",
      "benchmark": 19339,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10700K @ 3.80GHz",
      "benchmark": 19277,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10700KF @ 3.80GHz",
      "benchmark": 19143,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 4800H",
      "benchmark": 19056,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-12800H",
      "benchmark": 19052,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1240P",
      "benchmark": 18963,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 5600GE",
      "benchmark": 18879,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 4800HS",
      "benchmark": 18864,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 5800U",
      "benchmark": 18852,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 3600XT",
      "benchmark": 18780,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 5650GE",
      "benchmark": 18716,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9900K @ 3.60GHz",
      "benchmark": 18716,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9900KF @ 3.60GHz",
      "benchmark": 18691,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 6650U",
      "benchmark": 18649,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 4750GE",
      "benchmark": 18550,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11600 @ 2.80GHz",
      "benchmark": 18318,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9820X @ 3.30GHz",
      "benchmark": 18288,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3600X",
      "benchmark": 18285,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9800X @ 3.80GHz",
      "benchmark": 18240,
      "category": "Desktop"
    },
    {
      "cpu": "AMD 4700S",
      "benchmark": 18224,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 Extreme Edition",
      "benchmark": 18209,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-12600T",
      "benchmark": 18202,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 5825U",
      "benchmark": 18122,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V2718",
      "benchmark": 17972,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 3600",
      "benchmark": 17900,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10900TE @ 1.80GHz",
      "benchmark": 17888,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 5 3600",
      "benchmark": 17822,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11500B @ 3.30GHz",
      "benchmark": 17783,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-12500T",
      "benchmark": 17728,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11500 @ 2.70GHz",
      "benchmark": 17626,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 5850U",
      "benchmark": 17581,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 2700X",
      "benchmark": 17578,
      "category": "Desktop"
    },
    {
      "cpu": "Apple M1 Pro 8 Core 3200 MHz",
      "benchmark": 17521,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "Intel Core i7-7820X @ 3.60GHz",
      "benchmark": 17283,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 2700X",
      "benchmark": 17221,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11400F @ 2.60GHz",
      "benchmark": 17213,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 5600H",
      "benchmark": 17196,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6950X @ 3.00GHz",
      "benchmark": 17142,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11400 @ 2.60GHz",
      "benchmark": 17132,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 4800U",
      "benchmark": 17073,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10700E @ 2.90GHz",
      "benchmark": 17020,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-10700F @ 2.90GHz",
      "benchmark": 16973,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Threadripper 1900X",
      "benchmark": 16955,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10700 @ 2.90GHz",
      "benchmark": 16946,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9900 @ 3.10GHz",
      "benchmark": 16873,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 4500",
      "benchmark": 16698,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11500H @ 2.90GHz",
      "benchmark": 16458,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 4400G",
      "benchmark": 16456,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 4650G",
      "benchmark": 16428,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-11600H @ 2.90GHz",
      "benchmark": 16403,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10700TE @ 2.00GHz",
      "benchmark": 16332,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 1800X",
      "benchmark": 16306,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10980HK @ 2.40GHz",
      "benchmark": 16271,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V2748",
      "benchmark": 16186,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 7 5700U",
      "benchmark": 16104,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-11400H @ 2.70GHz",
      "benchmark": 16073,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1260P",
      "benchmark": 16020,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 4850U Mobile",
      "benchmark": 15920,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 4650GE",
      "benchmark": 15712,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-10885H @ 2.40GHz",
      "benchmark": 15679,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 4600GE",
      "benchmark": 15656,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 2700",
      "benchmark": 15654,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 4600G",
      "benchmark": 15577,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 1700X",
      "benchmark": 15530,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 4750U",
      "benchmark": 15511,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 1700X",
      "benchmark": 15496,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10875H @ 2.30GHz",
      "benchmark": 15426,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 5650U",
      "benchmark": 15373,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-11260H @ 2.60GHz",
      "benchmark": 15313,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-11700T @ 1.40GHz",
      "benchmark": 15271,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11600T @ 1.70GHz",
      "benchmark": 15254,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Xeon E-2286M @ 2.40GHz",
      "benchmark": 15249,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 5600U",
      "benchmark": 15241,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-10900T @ 1.90GHz",
      "benchmark": 15134,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 5625U",
      "benchmark": 15099,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-10880H @ 2.30GHz",
      "benchmark": 15064,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 2700",
      "benchmark": 15059,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10870H @ 2.20GHz",
      "benchmark": 15027,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-12300",
      "benchmark": 14955,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 4400GE",
      "benchmark": 14795,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 4600HS",
      "benchmark": 14735,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 4600H",
      "benchmark": 14735,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i9-9980HK @ 2.40GHz",
      "benchmark": 14728,
      "category": "Laptop"
    },
    {
      "cpu": "Apple M1 8 Core 3200 MHz",
      "benchmark": 14694,
      "category": "Desktop, Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 7 2700E",
      "benchmark": 14657,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 1700",
      "benchmark": 14628,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 1700",
      "benchmark": 14590,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10600KF @ 4.10GHz",
      "benchmark": 14575,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9700K @ 3.60GHz",
      "benchmark": 14550,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8086K @ 4.00GHz",
      "benchmark": 14550,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10600K @ 4.10GHz",
      "benchmark": 14534,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-12100",
      "benchmark": 14503,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9700KF @ 3.60GHz",
      "benchmark": 14499,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6900K @ 3.20GHz",
      "benchmark": 14291,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 5675U",
      "benchmark": 14253,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 2600X",
      "benchmark": 14053,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9880H @ 2.30GHz",
      "benchmark": 13979,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 5350G",
      "benchmark": 13976,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i9-9900T @ 2.10GHz",
      "benchmark": 13947,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10600 @ 3.30GHz",
      "benchmark": 13928,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8700K @ 3.70GHz",
      "benchmark": 13850,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 5300GE",
      "benchmark": 13843,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11500T @ 1.50GHz",
      "benchmark": 13820,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 5350GE",
      "benchmark": 13707,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 4700U",
      "benchmark": 13648,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-9700F @ 3.00GHz",
      "benchmark": 13462,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 4600U",
      "benchmark": 13460,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-9700 @ 3.00GHz",
      "benchmark": 13385,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3500X",
      "benchmark": 13319,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 2600",
      "benchmark": 13250,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 2600",
      "benchmark": 13195,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 5500U",
      "benchmark": 13190,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 5300G",
      "benchmark": 13139,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10700T @ 2.00GHz",
      "benchmark": 13119,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11400T @ 1.30GHz",
      "benchmark": 13078,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10500 @ 3.10GHz",
      "benchmark": 13056,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8700 @ 3.20GHz",
      "benchmark": 13046,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 1600X",
      "benchmark": 12943,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 4650U",
      "benchmark": 12889,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7800X @ 3.50GHz",
      "benchmark": 12864,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3500",
      "benchmark": 12836,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-12100T",
      "benchmark": 12767,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 3300X",
      "benchmark": 12746,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5960X @ 3.00GHz",
      "benchmark": 12719,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10400F @ 2.90GHz",
      "benchmark": 12439,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-11375H @ 3.30GHz",
      "benchmark": 12383,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10750H @ 2.60GHz",
      "benchmark": 12355,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1265U",
      "benchmark": 12334,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-10400 @ 2.90GHz",
      "benchmark": 12320,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 1600",
      "benchmark": 12314,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8700B @ 3.20GHz",
      "benchmark": 12239,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-9700E @ 2.60GHz",
      "benchmark": 12239,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 5475U",
      "benchmark": 12230,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-10505 @ 3.20GHz",
      "benchmark": 12221,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10850H @ 2.70GHz",
      "benchmark": 12124,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-11370H @ 3.30GHz",
      "benchmark": 12098,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 4500U",
      "benchmark": 12049,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1245U",
      "benchmark": 11934,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 3 5400U",
      "benchmark": 11839,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Xeon E-2276M @ 2.80GHz",
      "benchmark": 11818,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 3100",
      "benchmark": 11660,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10500H @ 2.50GHz",
      "benchmark": 11604,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-9850H @ 2.60GHz",
      "benchmark": 11483,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 5450U",
      "benchmark": 11453,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-9750HF @ 2.60GHz",
      "benchmark": 11391,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-10600T @ 2.40GHz",
      "benchmark": 11376,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-11100B @ 3.60GHz",
      "benchmark": 11357,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 4300GE",
      "benchmark": 11332,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 4200G",
      "benchmark": 11315,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6850K @ 3.60GHz",
      "benchmark": 11295,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 4350GE",
      "benchmark": 11270,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9750H @ 2.60GHz",
      "benchmark": 11207,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1235U",
      "benchmark": 11119,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-1185G7E @ 2.80GHz",
      "benchmark": 11114,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 5 4500U",
      "benchmark": 11098,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-11300H @ 3.10GHz",
      "benchmark": 11048,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1195G7 @ 2.90GHz",
      "benchmark": 11019,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1185G7 @ 3.00GHz",
      "benchmark": 10948,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Xeon E-2176M @ 2.70GHz",
      "benchmark": 10946,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 4200GE",
      "benchmark": 10930,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Xeon E-2186M @ 2.90GHz",
      "benchmark": 10904,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-11390H @ 3.40GHz",
      "benchmark": 10897,
      "category": "Laptop"
    },
    {
      "cpu": "Apple A12X Bionic",
      "benchmark": 10845,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-9600KF @ 3.70GHz",
      "benchmark": 10838,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 4350G",
      "benchmark": 10833,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9700TE @ 1.80GHz",
      "benchmark": 10826,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "Intel Core i9-8950HK @ 2.90GHz",
      "benchmark": 10803,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9600K @ 3.70GHz",
      "benchmark": 10793,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 4300G",
      "benchmark": 10792,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9700T @ 2.00GHz",
      "benchmark": 10736,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-11320H @ 3.20GHz",
      "benchmark": 10732,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6800K @ 3.40GHz",
      "benchmark": 10681,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-1165G7 @ 2.80GHz",
      "benchmark": 10595,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1155G7 @ 2.50GHz",
      "benchmark": 10561,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1145G7E @ 2.60GHz",
      "benchmark": 10454,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-8700T @ 2.40GHz",
      "benchmark": 10431,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-1145G7 @ 2.60GHz",
      "benchmark": 10413,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 1600",
      "benchmark": 10401,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-9600 @ 3.10GHz",
      "benchmark": 10369,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10500T @ 2.30GHz",
      "benchmark": 10365,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8850H @ 2.60GHz",
      "benchmark": 10333,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9500F @ 3.00GHz",
      "benchmark": 10330,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-1160G7 @ 1.20GHz",
      "benchmark": 10316,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-10325 @ 3.90GHz",
      "benchmark": 10308,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5930K @ 3.50GHz",
      "benchmark": 10304,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8600K @ 3.60GHz",
      "benchmark": 10195,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 4450U",
      "benchmark": 10129,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10710U @ 1.10GHz",
      "benchmark": 10126,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-10320 @ 3.80GHz",
      "benchmark": 10115,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-1135G7 @ 2.40GHz",
      "benchmark": 10100,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1068NG7 @ 2.30GHz",
      "benchmark": 10093,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8750H @ 2.20GHz",
      "benchmark": 10085,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-10400T @ 2.00GHz",
      "benchmark": 10052,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 5300U",
      "benchmark": 10046,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-10500TE @ 2.30GHz",
      "benchmark": 9960,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-1125G4 @ 2.00GHz",
      "benchmark": 9932,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4960X @ 3.60GHz",
      "benchmark": 9906,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7740X @ 4.30GHz",
      "benchmark": 9864,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8600 @ 3.10GHz",
      "benchmark": 9849,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5820K @ 3.30GHz",
      "benchmark": 9814,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-1130G7 @ 1.10GHz",
      "benchmark": 9756,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9500 @ 3.00GHz",
      "benchmark": 9698,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10305 @ 3.80GHz",
      "benchmark": 9689,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3350GE",
      "benchmark": 9684,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7700K @ 4.20GHz",
      "benchmark": 9658,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 3350GE",
      "benchmark": 9643,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 5425U",
      "benchmark": 9641,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1038NG7 @ 2.00GHz",
      "benchmark": 9626,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8500 @ 3.00GHz",
      "benchmark": 9576,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-9400F @ 2.90GHz",
      "benchmark": 9544,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 3350G",
      "benchmark": 9498,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-9400 @ 2.90GHz",
      "benchmark": 9478,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8500B @ 3.00GHz",
      "benchmark": 9429,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 1500",
      "benchmark": 9402,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 2500X",
      "benchmark": 9384,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4930K @ 3.40GHz",
      "benchmark": 9360,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3400G",
      "benchmark": 9331,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 3400G",
      "benchmark": 9307,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10300 @ 3.70GHz",
      "benchmark": 9284,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8400 @ 2.80GHz",
      "benchmark": 9222,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-9500TE @ 2.20GHz",
      "benchmark": 9212,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1185GRE @ 2.80GHz",
      "benchmark": 9142,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-10105F @ 3.70GHz",
      "benchmark": 9141,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-9850HL @ 1.90GHz",
      "benchmark": 9112,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 1500X",
      "benchmark": 9083,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3350G",
      "benchmark": 9067,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3400GE",
      "benchmark": 8985,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6700K @ 4.00GHz",
      "benchmark": 8967,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10105 @ 3.70GHz",
      "benchmark": 8928,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10400H @ 2.60GHz",
      "benchmark": 8916,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-10100F @ 3.60GHz",
      "benchmark": 8854,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10100 @ 3.60GHz",
      "benchmark": 8800,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8809G @ 3.10GHz",
      "benchmark": 8759,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8559U @ 2.70GHz",
      "benchmark": 8745,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 2400G",
      "benchmark": 8729,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10300H @ 2.50GHz",
      "benchmark": 8692,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "Intel Core i7-1065G7 @ 1.30GHz",
      "benchmark": 8668,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7700 @ 3.60GHz",
      "benchmark": 8638,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3960X @ 3.30GHz",
      "benchmark": 8596,
      "category": "Desktop"
    },
    {
      "cpu": "Apple A14 Bionic",
      "benchmark": 8541,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-8569U @ 2.80GHz",
      "benchmark": 8523,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V1807B",
      "benchmark": 8488,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-10200H @ 2.40GHz",
      "benchmark": 8414,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9600T @ 2.30GHz",
      "benchmark": 8393,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8706G @ 3.10GHz",
      "benchmark": 8388,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1035G7 @ 1.20GHz",
      "benchmark": 8388,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 2400G",
      "benchmark": 8378,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3970X @ 3.50GHz",
      "benchmark": 8373,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10810U @ 1.10GHz",
      "benchmark": 8353,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 3750H",
      "benchmark": 8277,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 3400GE",
      "benchmark": 8269,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-9400H @ 2.50GHz",
      "benchmark": 8261,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9500T @ 2.20GHz",
      "benchmark": 8256,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-1035G4 @ 1.10GHz",
      "benchmark": 8251,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3930K @ 3.20GHz",
      "benchmark": 8244,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10100E @ 3.20GHz",
      "benchmark": 8229,
      "category": "Desktop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-8600T @ 2.30GHz",
      "benchmark": 8227,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8557U @ 1.70GHz",
      "benchmark": 8225,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V1756B",
      "benchmark": 8215,
      "category": "Desktop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-10305T @ 3.00GHz",
      "benchmark": 8136,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 2400GE",
      "benchmark": 8134,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8259U @ 2.30GHz",
      "benchmark": 8131,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6700 @ 3.40GHz",
      "benchmark": 8078,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4790K @ 4.00GHz",
      "benchmark": 8061,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8269U @ 2.60GHz",
      "benchmark": 8055,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-8400H @ 2.50GHz",
      "benchmark": 8037,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8279U @ 2.40GHz",
      "benchmark": 8028,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-10300T @ 3.00GHz",
      "benchmark": 7997,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3550H",
      "benchmark": 7994,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8709G @ 3.10GHz",
      "benchmark": 7990,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8705G @ 3.10GHz",
      "benchmark": 7947,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8260U @ 1.60GHz",
      "benchmark": 7854,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-10105T @ 3.00GHz",
      "benchmark": 7850,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3580U",
      "benchmark": 7846,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 2600H",
      "benchmark": 7836,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9400T @ 1.80GHz",
      "benchmark": 7819,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5775C @ 3.30GHz",
      "benchmark": 7801,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-9300H @ 2.40GHz",
      "benchmark": 7793,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 1400",
      "benchmark": 7783,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-1035G1 @ 1.00GHz",
      "benchmark": 7737,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 1300",
      "benchmark": 7717,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5775R @ 3.30GHz",
      "benchmark": 7714,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon Gold PRO 3150G",
      "benchmark": 7702,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8500T @ 2.10GHz",
      "benchmark": 7699,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5950HQ @ 2.90GHz",
      "benchmark": 7696,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-9350K @ 4.00GHz",
      "benchmark": 7694,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7820HK @ 2.90GHz",
      "benchmark": 7682,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8257U @ 1.40GHz",
      "benchmark": 7680,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-9300HF @ 2.40GHz",
      "benchmark": 7678,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 2800H",
      "benchmark": 7656,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 3780U",
      "benchmark": 7651,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 4300U",
      "benchmark": 7568,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 2300X",
      "benchmark": 7566,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7700T @ 2.90GHz",
      "benchmark": 7561,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8300H @ 2.30GHz",
      "benchmark": 7542,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 2400GE",
      "benchmark": 7530,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7820EQ @ 3.00GHz",
      "benchmark": 7453,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7920HQ @ 3.10GHz",
      "benchmark": 7449,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8400T @ 1.70GHz",
      "benchmark": 7447,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10100T @ 3.00GHz",
      "benchmark": 7405,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6920HQ @ 2.90GHz",
      "benchmark": 7378,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 2700U",
      "benchmark": 7372,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-9320 @ 3.70GHz",
      "benchmark": 7358,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-9350KF @ 4.00GHz",
      "benchmark": 7318,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 3200GE",
      "benchmark": 7317,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 3700U",
      "benchmark": 7317,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 PRO 3700U",
      "benchmark": 7310,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-9300 @ 3.70GHz",
      "benchmark": 7279,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6700T @ 2.80GHz",
      "benchmark": 7271,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4790 @ 3.60GHz",
      "benchmark": 7235,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7820HQ @ 2.90GHz",
      "benchmark": 7209,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 3200G",
      "benchmark": 7188,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6770HQ @ 2.60GHz",
      "benchmark": 7145,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 7 3700C",
      "benchmark": 7145,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-990X @ 3.47GHz",
      "benchmark": 7137,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4770K @ 3.50GHz",
      "benchmark": 7129,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3500U",
      "benchmark": 7102,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Gold PRO 3150GE",
      "benchmark": 7093,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-995X @ 3.60GHz",
      "benchmark": 7079,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4771 @ 3.50GHz",
      "benchmark": 7074,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8305G @ 2.80GHz",
      "benchmark": 7073,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 3200GE",
      "benchmark": 7071,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10610U @ 1.80GHz",
      "benchmark": 7062,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4940MX @ 3.10GHz",
      "benchmark": 7060,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-1060NG7 @ 1.20GHz",
      "benchmark": 7045,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 3200G",
      "benchmark": 7037,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5850EQ @ 2.70GHz",
      "benchmark": 7036,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4770 @ 3.40GHz",
      "benchmark": 7030,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-980 @ 3.33GHz",
      "benchmark": 7018,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon Gold 3150G",
      "benchmark": 7002,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 3500U",
      "benchmark": 6968,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7700HQ @ 2.80GHz",
      "benchmark": 6957,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4790S @ 3.20GHz",
      "benchmark": 6954,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6820HQ @ 2.70GHz",
      "benchmark": 6939,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 1300X",
      "benchmark": 6925,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6820EQ @ 2.80GHz",
      "benchmark": 6924,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 PRO 2500U",
      "benchmark": 6921,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6820HK @ 2.70GHz",
      "benchmark": 6906,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G7400",
      "benchmark": 6896,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 7 2700U",
      "benchmark": 6895,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7600K @ 3.80GHz",
      "benchmark": 6869,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5850HQ @ 2.70GHz",
      "benchmark": 6866,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-8350K @ 4.00GHz",
      "benchmark": 6862,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-10510U @ 1.80GHz",
      "benchmark": 6837,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 5 3450U",
      "benchmark": 6824,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V1605B",
      "benchmark": 6822,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4770S @ 3.10GHz",
      "benchmark": 6819,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-980X @ 3.33GHz",
      "benchmark": 6813,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 2200G",
      "benchmark": 6781,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4960HQ @ 2.60GHz",
      "benchmark": 6779,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold 8505",
      "benchmark": 6771,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-9590 Eight-Core",
      "benchmark": 6768,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-9100F @ 3.60GHz",
      "benchmark": 6768,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4980HQ @ 2.80GHz",
      "benchmark": 6767,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4930MX @ 3.00GHz",
      "benchmark": 6753,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6700TE @ 2.40GHz",
      "benchmark": 6734,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 2200G",
      "benchmark": 6703,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-7640X @ 4.00GHz",
      "benchmark": 6675,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10310U @ 1.70GHz",
      "benchmark": 6658,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded R2314",
      "benchmark": 6643,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-9100 @ 3.60GHz",
      "benchmark": 6625,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-1180G7 @ 1.30GHz",
      "benchmark": 6607,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7600 @ 3.50GHz",
      "benchmark": 6598,
      "category": "Desktop"
    },
    {
      "cpu": "MT6891Z/CZA",
      "benchmark": 6596,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 5 2500U",
      "benchmark": 6555,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SA8195P",
      "benchmark": 6554,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-6700HQ @ 2.60GHz",
      "benchmark": 6544,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 2200GE",
      "benchmark": 6537,
      "category": "Desktop"
    },
    {
      "cpu": "Odin based on Qualcomm Technologies, Inc SM8350",
      "benchmark": 6533,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4820K @ 3.70GHz",
      "benchmark": 6501,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-970 @ 3.20GHz",
      "benchmark": 6499,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3770K @ 3.50GHz",
      "benchmark": 6462,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4770R @ 3.20GHz",
      "benchmark": 6429,
      "category": "Desktop"
    },
    {
      "cpu": "MT6893Z_C/CZA",
      "benchmark": 6418,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-10210U @ 1.60GHz",
      "benchmark": 6401,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3770 @ 3.40GHz",
      "benchmark": 6397,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4870HQ @ 2.50GHz",
      "benchmark": 6387,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8350AC",
      "benchmark": 6385,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-8665U @ 1.90GHz",
      "benchmark": 6383,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8565U @ 1.80GHz",
      "benchmark": 6358,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8650U @ 1.90GHz",
      "benchmark": 6358,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 1200",
      "benchmark": 6347,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6600K @ 3.50GHz",
      "benchmark": 6307,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 1200",
      "benchmark": 6304,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4760HQ @ 2.10GHz",
      "benchmark": 6300,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4850HQ @ 2.30GHz",
      "benchmark": 6299,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4790T @ 2.70GHz",
      "benchmark": 6291,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8350U @ 1.70GHz",
      "benchmark": 6284,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-1115G4 @ 3.00GHz",
      "benchmark": 6273,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4910MQ @ 2.90GHz",
      "benchmark": 6265,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8365U @ 1.60GHz",
      "benchmark": 6239,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8565UC @ 1.80GHz",
      "benchmark": 6187,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-1030NG7 @ 1.10GHz",
      "benchmark": 6180,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3770S @ 3.10GHz",
      "benchmark": 6178,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-8100 @ 3.60GHz",
      "benchmark": 6163,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-9300T @ 3.20GHz",
      "benchmark": 6162,
      "category": "Desktop"
    },
    {
      "cpu": "SM7325",
      "benchmark": 6145,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 3300U",
      "benchmark": 6144,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4860HQ @ 2.40GHz",
      "benchmark": 6138,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-8300 @ 3.70GHz",
      "benchmark": 6136,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-8370 Eight-Core",
      "benchmark": 6128,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4770HQ @ 2.20GHz",
      "benchmark": 6125,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6600 @ 3.30GHz",
      "benchmark": 6107,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8265U @ 1.60GHz",
      "benchmark": 6103,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-5675C @ 3.10GHz",
      "benchmark": 6089,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-8100B @ 3.60GHz",
      "benchmark": 6081,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7600T @ 2.80GHz",
      "benchmark": 6073,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-7500 @ 3.40GHz",
      "benchmark": 6064,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4900MQ @ 2.80GHz",
      "benchmark": 6051,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4810MQ @ 2.80GHz",
      "benchmark": 6034,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-5700HQ @ 2.70GHz",
      "benchmark": 6023,
      "category": "Laptop"
    },
    {
      "cpu": "vendor Kirin990",
      "benchmark": 5998,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-8265UC @ 1.60GHz",
      "benchmark": 5988,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-9370 Eight-Core",
      "benchmark": 5985,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 2300U",
      "benchmark": 5982,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-8350 Eight-Core",
      "benchmark": 5969,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3840QM @ 2.80GHz",
      "benchmark": 5966,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8550U @ 1.80GHz",
      "benchmark": 5964,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8250U @ 1.60GHz",
      "benchmark": 5941,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V1404I",
      "benchmark": 5917,
      "category": "Desktop, Mobile/Embedded"
    },
    {
      "cpu": "MT6893Z/CZA",
      "benchmark": 5908,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-5700EQ @ 2.60GHz",
      "benchmark": 5905,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 3350U",
      "benchmark": 5904,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 2200GE",
      "benchmark": 5897,
      "category": "Desktop"
    },
    {
      "cpu": "vendor Kirin985",
      "benchmark": 5834,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4800MQ @ 2.70GHz",
      "benchmark": 5829,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-8300T @ 3.20GHz",
      "benchmark": 5827,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 3300U",
      "benchmark": 5803,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4710MQ @ 2.50GHz",
      "benchmark": 5800,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-1115G4E @ 3.00GHz",
      "benchmark": 5776,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4720HQ @ 2.60GHz",
      "benchmark": 5762,
      "category": "Laptop"
    },
    {
      "cpu": "SM8350",
      "benchmark": 5761,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-3820QM @ 2.70GHz",
      "benchmark": 5755,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3820 @ 3.60GHz",
      "benchmark": 5754,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4770T @ 2.50GHz",
      "benchmark": 5748,
      "category": "Desktop"
    },
    {
      "cpu": "MT8195AV/ZA",
      "benchmark": 5735,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8250_AC",
      "benchmark": 5724,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7440EQ @ 2.90GHz",
      "benchmark": 5711,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3740QM @ 2.70GHz",
      "benchmark": 5708,
      "category": "Laptop"
    },
    {
      "cpu": "MT6893Z_D/CZA",
      "benchmark": 5701,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-3920XM @ 2.90GHz",
      "benchmark": 5700,
      "category": "Laptop"
    },
    {
      "cpu": "MT6891",
      "benchmark": 5688,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-3940XM @ 3.00GHz",
      "benchmark": 5671,
      "category": "Laptop"
    },
    {
      "cpu": "MT6883Z/CZA",
      "benchmark": 5665,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-6600T @ 2.70GHz",
      "benchmark": 5655,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6500 @ 3.20GHz",
      "benchmark": 5655,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3720QM @ 2.60GHz",
      "benchmark": 5651,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4690K @ 3.50GHz",
      "benchmark": 5623,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4722HQ @ 2.40GHz",
      "benchmark": 5620,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-2700K @ 3.50GHz",
      "benchmark": 5604,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4750HQ @ 2.00GHz",
      "benchmark": 5599,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8350",
      "benchmark": 5596,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-5675R @ 3.10GHz",
      "benchmark": 5589,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3770T @ 2.50GHz",
      "benchmark": 5573,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4690 @ 3.50GHz",
      "benchmark": 5572,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4700HQ @ 2.40GHz",
      "benchmark": 5560,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-8365UE @ 1.60GHz",
      "benchmark": 5555,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-5675C @ 3.10GHz",
      "benchmark": 5548,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4670K @ 3.40GHz",
      "benchmark": 5547,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-7440HQ @ 2.80GHz",
      "benchmark": 5526,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4710HQ @ 2.50GHz",
      "benchmark": 5518,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 2300U",
      "benchmark": 5507,
      "category": "Laptop"
    },
    {
      "cpu": "vendor Kirin820",
      "benchmark": 5502,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4860EQ @ 1.80GHz",
      "benchmark": 5500,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-2600K @ 3.40GHz",
      "benchmark": 5500,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-7400 @ 3.00GHz",
      "benchmark": 5499,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3615QE @ 2.30GHz",
      "benchmark": 5459,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4670 @ 3.40GHz",
      "benchmark": 5440,
      "category": "Desktop"
    },
    {
      "cpu": "MT6893Z_A/CZA",
      "benchmark": 5429,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4785T @ 2.20GHz",
      "benchmark": 5427,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-9100T @ 3.10GHz",
      "benchmark": 5419,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6402P @ 2.80GHz",
      "benchmark": 5414,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-8320 Eight-Core",
      "benchmark": 5409,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4690S @ 3.20GHz",
      "benchmark": 5380,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6440EQ @ 2.70GHz",
      "benchmark": 5368,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8250",
      "benchmark": 5366,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4702HQ @ 2.20GHz",
      "benchmark": 5361,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold 7505 @ 2.00GHz",
      "benchmark": 5360,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4590 @ 3.30GHz",
      "benchmark": 5344,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2600 @ 3.40GHz",
      "benchmark": 5344,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-7500T @ 2.70GHz",
      "benchmark": 5319,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4700MQ @ 2.40GHz",
      "benchmark": 5319,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc KONA",
      "benchmark": 5302,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-8100T @ 3.10GHz",
      "benchmark": 5291,
      "category": "Desktop"
    },
    {
      "cpu": "vendor Kirin9000",
      "benchmark": 5276,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4712MQ @ 2.30GHz",
      "benchmark": 5273,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V1500B Quad-core @ 2.20GHz",
      "benchmark": 5257,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-6822EQ @ 2.00GHz",
      "benchmark": 5241,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-8370E Eight-Core",
      "benchmark": 5235,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4670R @ 3.00GHz",
      "benchmark": 5233,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3615QM @ 2.30GHz",
      "benchmark": 5228,
      "category": "Laptop"
    },
    {
      "cpu": "lisa based Qualcomm Technologies, Inc. SM7325",
      "benchmark": 5227,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-8300 Eight-Core",
      "benchmark": 5223,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 5 3500C",
      "benchmark": 5214,
      "category": "Laptop"
    },
    {
      "cpu": "Vili based on Qualcomm Technologies, Inc SM8350",
      "benchmark": 5213,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4570 @ 3.20GHz",
      "benchmark": 5199,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM778G",
      "benchmark": 5186,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-6400 @ 2.70GHz",
      "benchmark": 5163,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4712HQ @ 2.30GHz",
      "benchmark": 5161,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-8150 Eight-Core",
      "benchmark": 5158,
      "category": "Desktop"
    },
    {
      "cpu": "vendor Kirin980",
      "benchmark": 5150,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Snapdragon 7325",
      "benchmark": 5148,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-8310 Eight-Core",
      "benchmark": 5145,
      "category": "Desktop"
    },
    {
      "cpu": "Apple A13 Bionic",
      "benchmark": 5145,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-3630QM @ 2.40GHz",
      "benchmark": 5131,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-1005G1 @ 1.20GHz",
      "benchmark": 5128,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6440HQ @ 2.60GHz",
      "benchmark": 5128,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7300HQ @ 2.50GHz",
      "benchmark": 5104,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3610QM @ 2.30GHz",
      "benchmark": 5100,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4702MQ @ 2.20GHz",
      "benchmark": 5095,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4590S @ 3.00GHz",
      "benchmark": 5095,
      "category": "Desktop"
    },
    {
      "cpu": "Star based on Qualcomm Technologies, Inc SM8350",
      "benchmark": 5087,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Hisilicon Kirin9000",
      "benchmark": 5083,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-5575R @ 2.80GHz",
      "benchmark": 5070,
      "category": "Desktop"
    },
    {
      "cpu": "Venus based on Qualcomm Technologies, Inc SM8350",
      "benchmark": 5069,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "06/8c",
      "benchmark": 5040,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4765T @ 2.00GHz",
      "benchmark": 5036,
      "category": "Desktop"
    },
    {
      "cpu": "Haydn based on Qualcomm Technologies, Inc SM8350",
      "benchmark": 5035,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4670K CPT @ 3.40GHz",
      "benchmark": 5034,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-8665UE @ 1.70GHz",
      "benchmark": 5017,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-10510Y @ 1.20GHz",
      "benchmark": 5016,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-8320E Eight-Core",
      "benchmark": 4972,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung Exynos 2100",
      "benchmark": 4949,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4700EQ @ 2.40GHz",
      "benchmark": 4941,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3570K @ 3.40GHz",
      "benchmark": 4936,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3612QE @ 2.10GHz",
      "benchmark": 4929,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4670S @ 3.10GHz",
      "benchmark": 4919,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4570S @ 2.90GHz",
      "benchmark": 4914,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3570 @ 3.40GHz",
      "benchmark": 4910,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-8140 Eight-Core",
      "benchmark": 4860,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-7320 @ 4.10GHz",
      "benchmark": 4856,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung Technologies, Inc Exynos E1080",
      "benchmark": 4846,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-6500T @ 2.50GHz",
      "benchmark": 4845,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-10210Y @ 1.00GHz",
      "benchmark": 4836,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7442EQ @ 2.10GHz",
      "benchmark": 4834,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4460 @ 3.20GHz",
      "benchmark": 4834,
      "category": "Desktop"
    },
    {
      "cpu": "MT6877V/TZA",
      "benchmark": 4824,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-7350K @ 4.20GHz",
      "benchmark": 4819,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3550 @ 3.30GHz",
      "benchmark": 4783,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6500TE @ 2.30GHz",
      "benchmark": 4776,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3610QE @ 2.30GHz",
      "benchmark": 4767,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Silver N6005 @ 2.00GHz",
      "benchmark": 4752,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 6805 @ 1.10GHz",
      "benchmark": 4745,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4470S @ 3.00GHz",
      "benchmark": 4742,
      "category": "Desktop"
    },
    {
      "cpu": "vendor Kirin9000E",
      "benchmark": 4728,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4440 @ 3.10GHz",
      "benchmark": 4718,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-7400T @ 2.40GHz",
      "benchmark": 4710,
      "category": "Desktop"
    },
    {
      "cpu": "Apple A12 Bionic",
      "benchmark": 4707,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-7300 @ 4.00GHz",
      "benchmark": 4703,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6300HQ @ 2.30GHz",
      "benchmark": 4701,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4690T @ 2.50GHz",
      "benchmark": 4660,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3470 @ 3.20GHz",
      "benchmark": 4657,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4430 @ 3.00GHz",
      "benchmark": 4646,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon Silver PRO 3125GE",
      "benchmark": 4633,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3632QM @ 2.20GHz",
      "benchmark": 4628,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N5095A @ 2.00GHz",
      "benchmark": 4627,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3570S @ 3.10GHz",
      "benchmark": 4620,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2860QM @ 2.50GHz",
      "benchmark": 4607,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3612QM @ 2.10GHz",
      "benchmark": 4603,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Snapdragon 8350",
      "benchmark": 4599,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-6442EQ @ 1.90GHz",
      "benchmark": 4598,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM6375",
      "benchmark": 4597,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Mars based on Qualcomm Technologies, Inc SM8350",
      "benchmark": 4592,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen Embedded V1500B",
      "benchmark": 4588,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-8120 Eight-Core",
      "benchmark": 4578,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3635QM @ 2.40GHz",
      "benchmark": 4575,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 240GE",
      "benchmark": 4551,
      "category": "Desktop"
    },
    {
      "cpu": "MT6893",
      "benchmark": 4551,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon Silver 3050GE",
      "benchmark": 4545,
      "category": "Laptop"
    },
    {
      "cpu": "Microsoft ARM SQ1 @ 3.0 GHz",
      "benchmark": 4545,
      "category": "Laptop"
    },
    {
      "cpu": "Renoir based on Qualcomm Technologies, Inc SM7350",
      "benchmark": 4543,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-3550S @ 3.00GHz",
      "benchmark": 4537,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4570R @ 2.70GHz",
      "benchmark": 4527,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2600S @ 2.80GHz",
      "benchmark": 4524,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4460S @ 2.90GHz",
      "benchmark": 4503,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-9100TE @ 2.20GHz",
      "benchmark": 4501,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3450 @ 3.10GHz",
      "benchmark": 4497,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G6605 @ 4.30GHz",
      "benchmark": 4493,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 3000G",
      "benchmark": 4480,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon PRO 300GE",
      "benchmark": 4475,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-6350 Six-Core",
      "benchmark": 4463,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-6330 Six-Core",
      "benchmark": 4455,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 220GE",
      "benchmark": 4450,
      "category": "Laptop"
    },
    {
      "cpu": "MT6877T",
      "benchmark": 4442,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-2960XM @ 2.70GHz",
      "benchmark": 4423,
      "category": "Laptop"
    },
    {
      "cpu": "MT6889Z/CZA",
      "benchmark": 4416,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "vendor Kirin810",
      "benchmark": 4409,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium Gold G6600 @ 4.20GHz",
      "benchmark": 4396,
      "category": "Desktop"
    },
    {
      "cpu": "MT6875",
      "benchmark": 4393,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-6300 @ 3.80GHz",
      "benchmark": 4386,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G6505 @ 4.20GHz",
      "benchmark": 4378,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-8121U @ 2.20GHz",
      "benchmark": 4376,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-6320 @ 3.90GHz",
      "benchmark": 4372,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 300GE",
      "benchmark": 4366,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4670T @ 2.30GHz",
      "benchmark": 4361,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-6130 Six-Core",
      "benchmark": 4353,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2760QM @ 2.40GHz",
      "benchmark": 4353,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3470S @ 2.90GHz",
      "benchmark": 4353,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2820QM @ 2.30GHz",
      "benchmark": 4347,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-2920XM @ 2.50GHz",
      "benchmark": 4344,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-7100 @ 3.90GHz",
      "benchmark": 4342,
      "category": "Desktop"
    },
    {
      "cpu": "Hisilicon Kirin990",
      "benchmark": 4328,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-6400T @ 2.20GHz",
      "benchmark": 4302,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-8109U @ 3.00GHz",
      "benchmark": 4301,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G6405 @ 4.10GHz",
      "benchmark": 4285,
      "category": "Desktop"
    },
    {
      "cpu": "MT6877V/ZA",
      "benchmark": 4285,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4440S @ 2.80GHz",
      "benchmark": 4277,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3450S @ 2.80GHz",
      "benchmark": 4264,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4770TE @ 2.30GHz",
      "benchmark": 4257,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7567U @ 3.50GHz",
      "benchmark": 4256,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6350HQ @ 2.30GHz",
      "benchmark": 4255,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded R1606G",
      "benchmark": 4253,
      "category": "Desktop, Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8150",
      "benchmark": 4248,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 320GE",
      "benchmark": 4237,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3350P @ 3.10GHz",
      "benchmark": 4237,
      "category": "Desktop"
    },
    {
      "cpu": "Apple A11 Bionic",
      "benchmark": 4231,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-8140U @ 2.10GHz",
      "benchmark": 4227,
      "category": "Laptop"
    },
    {
      "cpu": "Hisilicon Kirin980",
      "benchmark": 4224,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8150P",
      "benchmark": 4224,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Ryzen 3 PRO 2100GE",
      "benchmark": 4187,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-6100 @ 3.70GHz",
      "benchmark": 4177,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3475S @ 2.90GHz",
      "benchmark": 4177,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium J6426 @ 2.00GHz",
      "benchmark": 4173,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-6098P @ 3.60GHz",
      "benchmark": 4170,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4430S @ 2.70GHz",
      "benchmark": 4168,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3570T @ 2.30GHz",
      "benchmark": 4168,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3340 @ 3.10GHz",
      "benchmark": 4165,
      "category": "Desktop"
    },
    {
      "cpu": "Hisilicon Kirin985",
      "benchmark": 4162,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium Gold G5600F @ 3.90GHz",
      "benchmark": 4160,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-7300T @ 3.50GHz",
      "benchmark": 4159,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N5105 @ 2.00GHz",
      "benchmark": 4158,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-6300 Six-Core",
      "benchmark": 4155,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x6425E @ 2.00GHz",
      "benchmark": 4153,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7287U @ 3.30GHz",
      "benchmark": 4149,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G6500 @ 4.10GHz",
      "benchmark": 4147,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon PRO 200GE",
      "benchmark": 4139,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 200GE",
      "benchmark": 4135,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-8145UE @ 2.20GHz",
      "benchmark": 4133,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G6400 @ 4.00GHz",
      "benchmark": 4130,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2550K @ 3.40GHz",
      "benchmark": 4123,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2720QM @ 2.20GHz",
      "benchmark": 4114,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7660U @ 2.50GHz",
      "benchmark": 4105,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G5620 @ 4.00GHz",
      "benchmark": 4102,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3340S @ 2.80GHz",
      "benchmark": 4102,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2500 @ 3.30GHz",
      "benchmark": 4101,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2500K @ 3.30GHz",
      "benchmark": 4097,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3330 @ 3.00GHz",
      "benchmark": 4090,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J6413 @ 1.80GHz",
      "benchmark": 4075,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom x6413E @ 1.50GHz",
      "benchmark": 4070,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6833P",
      "benchmark": 4051,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7360U @ 2.30GHz",
      "benchmark": 4050,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-2710QE @ 2.10GHz",
      "benchmark": 4044,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-6300T @ 3.30GHz",
      "benchmark": 4040,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon Gold 3150U",
      "benchmark": 4025,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N5095 @ 2.00GHz",
      "benchmark": 4010,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10110U @ 2.10GHz",
      "benchmark": 4005,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G6500T @ 3.50GHz",
      "benchmark": 4005,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-6200 Six-Core",
      "benchmark": 4001,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 3250U",
      "benchmark": 3988,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4590T @ 2.00GHz",
      "benchmark": 3982,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 300U",
      "benchmark": 3978,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-2450P @ 3.20GHz",
      "benchmark": 3974,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen Embedded R1505G",
      "benchmark": 3966,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "MT6781",
      "benchmark": 3937,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7267U @ 3.10GHz",
      "benchmark": 3925,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6287U @ 3.10GHz",
      "benchmark": 3925,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-7101TE @ 3.40GHz",
      "benchmark": 3911,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J6412 @ 2.00GHz",
      "benchmark": 3904,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7260U @ 2.20GHz",
      "benchmark": 3895,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 3200U",
      "benchmark": 3885,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A12-9800",
      "benchmark": 3878,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-7500",
      "benchmark": 3878,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-6120 Six-Core",
      "benchmark": 3863,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-1000NG4 @ 1.10GHz",
      "benchmark": 3862,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6660U @ 2.40GHz",
      "benchmark": 3851,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A12-8870",
      "benchmark": 3848,
      "category": "Desktop"
    },
    {
      "cpu": "06/8e",
      "benchmark": 3848,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-8100 Eight-Core",
      "benchmark": 3847,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2840QM @ 2.40GHz",
      "benchmark": 3842,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-2400 @ 3.10GHz",
      "benchmark": 3840,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-8145U @ 2.10GHz",
      "benchmark": 3837,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-1115GRE @ 3.00GHz",
      "benchmark": 3816,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-6567U @ 3.30GHz",
      "benchmark": 3812,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3330S @ 2.70GHz",
      "benchmark": 3810,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4370 @ 3.80GHz",
      "benchmark": 3807,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7560U @ 2.40GHz",
      "benchmark": 3801,
      "category": "Laptop"
    },
    {
      "cpu": "MT8789V/CT",
      "benchmark": 3800,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-2380P @ 3.10GHz",
      "benchmark": 3797,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-7100T @ 3.40GHz",
      "benchmark": 3787,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 845",
      "benchmark": 3784,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G4620 @ 3.70GHz",
      "benchmark": 3777,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G5500 @ 3.80GHz",
      "benchmark": 3770,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G5600 @ 3.90GHz",
      "benchmark": 3769,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2675QM @ 2.20GHz",
      "benchmark": 3766,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium N6415 @ 1.20GHz",
      "benchmark": 3760,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-3335S @ 2.70GHz",
      "benchmark": 3754,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A10-8850B",
      "benchmark": 3752,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6873",
      "benchmark": 3752,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7300U @ 2.60GHz",
      "benchmark": 3750,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G6405T @ 3.50GHz",
      "benchmark": 3746,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM8150_Plus",
      "benchmark": 3730,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X6 1100T",
      "benchmark": 3729,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2670QM @ 2.20GHz",
      "benchmark": 3726,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G5400 @ 3.70GHz",
      "benchmark": 3723,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4360 @ 3.70GHz",
      "benchmark": 3688,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Ryzen 3 2200U",
      "benchmark": 3686,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-6100 Six-Core",
      "benchmark": 3679,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 880K",
      "benchmark": 3676,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-7600U @ 2.80GHz",
      "benchmark": 3667,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7500U @ 2.70GHz",
      "benchmark": 3658,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X6 1090T",
      "benchmark": 3655,
      "category": "Desktop"
    },
    {
      "cpu": "Snapdragon 8cx @ 2.84 GHz",
      "benchmark": 3655,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-8130U @ 2.20GHz",
      "benchmark": 3648,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A10-9700",
      "benchmark": 3644,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G5420 @ 3.80GHz",
      "benchmark": 3641,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2320 @ 3.00GHz",
      "benchmark": 3632,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-6100T @ 3.20GHz",
      "benchmark": 3617,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 950",
      "benchmark": 3611,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G6400T @ 3.40GHz",
      "benchmark": 3610,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G4600 @ 3.60GHz",
      "benchmark": 3605,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2310 @ 2.90GHz",
      "benchmark": 3603,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G5600T @ 3.30GHz",
      "benchmark": 3601,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4460T @ 1.90GHz",
      "benchmark": 3595,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6650U @ 2.20GHz",
      "benchmark": 3585,
      "category": "Laptop"
    },
    {
      "cpu": "MT6853V/ZA",
      "benchmark": 3577,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-7680",
      "benchmark": 3571,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4170 @ 3.70GHz",
      "benchmark": 3569,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2630QM @ 2.00GHz",
      "benchmark": 3555,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-9700",
      "benchmark": 3546,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4330 @ 3.50GHz",
      "benchmark": 3539,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-8850",
      "benchmark": 3525,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Silver J5040 @ 2.00GHz",
      "benchmark": 3518,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G4560 @ 3.50GHz",
      "benchmark": 3513,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-6600U @ 2.60GHz",
      "benchmark": 3508,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Gold G5420T @ 3.20GHz",
      "benchmark": 3508,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4340 @ 3.60GHz",
      "benchmark": 3506,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung Exynos 9820",
      "benchmark": 3505,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-4160 @ 3.60GHz",
      "benchmark": 3495,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4340M @ 2.90GHz",
      "benchmark": 3491,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-7870K",
      "benchmark": 3485,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6267U @ 2.90GHz",
      "benchmark": 3478,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-7890K",
      "benchmark": 3477,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2635QM @ 2.00GHz",
      "benchmark": 3466,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4350 @ 3.60GHz",
      "benchmark": 3459,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2500S @ 2.70GHz",
      "benchmark": 3459,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10 PRO-7850B APU",
      "benchmark": 3458,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc KHAJE",
      "benchmark": 3458,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 9825",
      "benchmark": 3452,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A12-9800E",
      "benchmark": 3447,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A12-9800",
      "benchmark": 3447,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G6900",
      "benchmark": 3446,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 860K",
      "benchmark": 3436,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A10-8770",
      "benchmark": 3434,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-7100H @ 3.00GHz",
      "benchmark": 3430,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Embedded R-Series RX-418GD Radeon R6",
      "benchmark": 3426,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-1110G4 @ 1.80GHz",
      "benchmark": 3421,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-L16G7 @ 1.40GHz",
      "benchmark": 3421,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7200U @ 2.50GHz",
      "benchmark": 3409,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Silver N5020 @ 1.10GHz",
      "benchmark": 3404,
      "category": "Laptop"
    },
    {
      "cpu": "MT6833",
      "benchmark": 3404,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 9810",
      "benchmark": 3401,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-6560U @ 2.20GHz",
      "benchmark": 3398,
      "category": "Laptop"
    },
    {
      "cpu": "MT6833V/ZA",
      "benchmark": 3396,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon X4 870K",
      "benchmark": 3383,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2300 @ 2.80GHz",
      "benchmark": 3380,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-975 @ 3.33GHz",
      "benchmark": 3370,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-B4150 Quad-Core",
      "benchmark": 3369,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4370T @ 3.30GHz",
      "benchmark": 3368,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-7850K APU",
      "benchmark": 3363,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4150 @ 3.50GHz",
      "benchmark": 3360,
      "category": "Desktop"
    },
    {
      "cpu": "MT6781V/CD",
      "benchmark": 3356,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6785",
      "benchmark": 3348,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A8-9600",
      "benchmark": 3347,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X6 1405T",
      "benchmark": 3335,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-7860K",
      "benchmark": 3333,
      "category": "Desktop"
    },
    {
      "cpu": "MT6853V/TNZA",
      "benchmark": 3332,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-4150 Quad-Core",
      "benchmark": 3327,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X6 1065T",
      "benchmark": 3320,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-8750",
      "benchmark": 3320,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-6100E @ 2.70GHz",
      "benchmark": 3315,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6498DU @ 2.50GHz",
      "benchmark": 3303,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Embedded R-Series RX-421BD",
      "benchmark": 3302,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-9600",
      "benchmark": 3291,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4130 @ 3.40GHz",
      "benchmark": 3291,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-965 @ 3.20GHz",
      "benchmark": 3288,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 840",
      "benchmark": 3287,
      "category": "Desktop"
    },
    {
      "cpu": "MT6833V/PNZA",
      "benchmark": 3286,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X6 1075T",
      "benchmark": 3284,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-7167U @ 2.80GHz",
      "benchmark": 3280,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-6500U @ 2.50GHz",
      "benchmark": 3278,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-10110Y @ 1.00GHz",
      "benchmark": 3278,
      "category": "Laptop"
    },
    {
      "cpu": "Hisilicon Kirin820",
      "benchmark": 3273,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM7225",
      "benchmark": 3271,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-9830P",
      "benchmark": 3268,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded R1305G",
      "benchmark": 3268,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "MT6833V/NZA",
      "benchmark": 3266,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-4350 Quad-Core",
      "benchmark": 3262,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6360U @ 2.00GHz",
      "benchmark": 3260,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6300U @ 2.40GHz",
      "benchmark": 3259,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen Embedded V1202B",
      "benchmark": 3253,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4400E @ 2.70GHz",
      "benchmark": 3251,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-4330",
      "benchmark": 3248,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-960 @ 3.20GHz",
      "benchmark": 3245,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4570T @ 2.90GHz",
      "benchmark": 3244,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Gold G5500T @ 3.20GHz",
      "benchmark": 3234,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM7250",
      "benchmark": 3225,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-7670K",
      "benchmark": 3224,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2715QE @ 2.10GHz",
      "benchmark": 3221,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6853T",
      "benchmark": 3217,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-5287U @ 2.90GHz",
      "benchmark": 3216,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-7600 APU",
      "benchmark": 3215,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4330M @ 2.80GHz",
      "benchmark": 3208,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6260U @ 1.80GHz",
      "benchmark": 3207,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A8-8650B",
      "benchmark": 3203,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc LAGOON",
      "benchmark": 3202,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X6 1055T",
      "benchmark": 3195,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc ATOLL-AB",
      "benchmark": 3195,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "06/9c",
      "benchmark": 3191,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10 PRO-7800B APU",
      "benchmark": 3184,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A12-9800E",
      "benchmark": 3182,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5557U @ 3.10GHz",
      "benchmark": 3181,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4600M @ 2.90GHz",
      "benchmark": 3180,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A12-9730P",
      "benchmark": 3172,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-6198DU @ 2.30GHz",
      "benchmark": 3170,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N5100 @ 1.10GHz",
      "benchmark": 3165,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4360T @ 3.20GHz",
      "benchmark": 3164,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4170T @ 3.20GHz",
      "benchmark": 3162,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6785V/CD",
      "benchmark": 3162,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-2400S @ 2.50GHz",
      "benchmark": 3160,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-6800K APU",
      "benchmark": 3158,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-950 @ 3.07GHz",
      "benchmark": 3154,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-7700K APU",
      "benchmark": 3153,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM730G AIE",
      "benchmark": 3148,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10-7800 APU",
      "benchmark": 3142,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4570T @ 2.90GHz",
      "benchmark": 3136,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-4200 Quad-Core",
      "benchmark": 3134,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4160T @ 3.10GHz",
      "benchmark": 3133,
      "category": "Desktop"
    },
    {
      "cpu": "MT8786V/CA",
      "benchmark": 3131,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G4600T @ 3.00GHz",
      "benchmark": 3130,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-6790K APU",
      "benchmark": 3124,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-10100Y @ 1.30GHz",
      "benchmark": 3120,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-875K @ 2.93GHz",
      "benchmark": 3119,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4310M @ 2.70GHz",
      "benchmark": 3119,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4200H @ 2.80GHz",
      "benchmark": 3113,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-4170 Quad-Core",
      "benchmark": 3109,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A10-8770E",
      "benchmark": 3106,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4570TE @ 2.70GHz",
      "benchmark": 3106,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4330T @ 3.00GHz",
      "benchmark": 3098,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc LITO",
      "benchmark": 3097,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-4320",
      "benchmark": 3092,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM720G",
      "benchmark": 3091,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10-6700 APU",
      "benchmark": 3090,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-6100TE @ 2.70GHz",
      "benchmark": 3085,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A12-8870E",
      "benchmark": 3083,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-870 @ 2.93GHz",
      "benchmark": 3074,
      "category": "Desktop"
    },
    {
      "cpu": "MT6853V/NZA",
      "benchmark": 3072,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon Silver 3050U",
      "benchmark": 3067,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-940 @ 2.93GHz",
      "benchmark": 3066,
      "category": "Desktop"
    },
    {
      "cpu": "vendor Kirin710",
      "benchmark": 3066,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4308U @ 2.80GHz",
      "benchmark": 3064,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-24050S @ 2.50GHz",
      "benchmark": 3061,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-5257U @ 2.70GHz",
      "benchmark": 3044,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6785V/CC",
      "benchmark": 3043,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-6100H @ 2.70GHz",
      "benchmark": 3041,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Silver J5005 @ 1.50GHz",
      "benchmark": 3040,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X6 1045T",
      "benchmark": 3034,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-6200U @ 2.30GHz",
      "benchmark": 3030,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4578U @ 3.00GHz",
      "benchmark": 3026,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4300M @ 2.60GHz",
      "benchmark": 3025,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium GOLD 6500Y @ 1.10GHz",
      "benchmark": 3024,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM7125",
      "benchmark": 3015,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-7650K",
      "benchmark": 3013,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5650U @ 2.20GHz",
      "benchmark": 3007,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3380M @ 2.90GHz",
      "benchmark": 3006,
      "category": "Laptop"
    },
    {
      "cpu": "SMDK4x12",
      "benchmark": 3006,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4610M @ 3.00GHz",
      "benchmark": 3002,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron J4125 @ 2.00GHz",
      "benchmark": 2994,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core m3-8100Y @ 1.10GHz",
      "benchmark": 2991,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM765G 5G",
      "benchmark": 2990,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A8-8670E",
      "benchmark": 2989,
      "category": "Desktop"
    },
    {
      "cpu": "Hisilicon Kirin810",
      "benchmark": 2986,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-7130U @ 2.70GHz",
      "benchmark": 2983,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM7150",
      "benchmark": 2983,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-5600U @ 2.60GHz",
      "benchmark": 2982,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-2405S @ 2.50GHz",
      "benchmark": 2980,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDMMAGPIEP",
      "benchmark": 2980,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium Silver N6000 @ 1.10GHz",
      "benchmark": 2979,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-6600K APU",
      "benchmark": 2977,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3470T @ 2.90GHz",
      "benchmark": 2958,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4558U @ 2.80GHz",
      "benchmark": 2956,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4560U @ 1.60GHz",
      "benchmark": 2950,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X6 1035T",
      "benchmark": 2947,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-9700E",
      "benchmark": 2947,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2500T @ 2.30GHz",
      "benchmark": 2942,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 760K Quad Core",
      "benchmark": 2941,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G5925 @ 3.60GHz",
      "benchmark": 2939,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-4300 Quad-Core",
      "benchmark": 2937,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-5800K APU",
      "benchmark": 2936,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core m3-7Y32 @ 1.10GHz",
      "benchmark": 2935,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G4520 @ 3.60GHz",
      "benchmark": 2926,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-880 @ 3.07GHz",
      "benchmark": 2920,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4210H @ 2.90GHz",
      "benchmark": 2918,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Silver 3050e",
      "benchmark": 2918,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Ryzen 3 3250C",
      "benchmark": 2917,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron J4105 @ 1.50GHz",
      "benchmark": 2911,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3540M @ 3.00GHz",
      "benchmark": 2911,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G4560T @ 2.90GHz",
      "benchmark": 2909,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-5550U @ 2.00GHz",
      "benchmark": 2908,
      "category": "Laptop"
    },
    {
      "cpu": "HiSilicon Kirin 970",
      "benchmark": 2908,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDMMAGPIE",
      "benchmark": 2906,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom x6425RE @ 1.90GHz",
      "benchmark": 2903,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon X4 830",
      "benchmark": 2901,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-9630P",
      "benchmark": 2899,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-6500B APU",
      "benchmark": 2898,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-670K Quad-Core",
      "benchmark": 2897,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-5800B APU",
      "benchmark": 2897,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A10-8750B",
      "benchmark": 2897,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A10-9700E",
      "benchmark": 2896,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4210M @ 2.60GHz",
      "benchmark": 2893,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-860 @ 2.80GHz",
      "benchmark": 2890,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4350T @ 3.10GHz",
      "benchmark": 2888,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3520M @ 2.90GHz",
      "benchmark": 2879,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-930 @ 2.80GHz",
      "benchmark": 2877,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4130T @ 2.90GHz",
      "benchmark": 2874,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4150T @ 3.00GHz",
      "benchmark": 2867,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-7600P APU",
      "benchmark": 2856,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3360M @ 2.80GHz",
      "benchmark": 2846,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-6500 APU",
      "benchmark": 2826,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8210Y @ 1.60GHz",
      "benchmark": 2825,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-6800B APU",
      "benchmark": 2824,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G5905 @ 3.50GHz",
      "benchmark": 2815,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4278U @ 2.60GHz",
      "benchmark": 2814,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-7Y57 @ 1.20GHz",
      "benchmark": 2814,
      "category": "Laptop"
    },
    {
      "cpu": "Samsung Exynos 8895",
      "benchmark": 2807,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-5600K APU",
      "benchmark": 2803,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-8800P",
      "benchmark": 2801,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8 PRO-7600B APU",
      "benchmark": 2793,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-6157U @ 2.40GHz",
      "benchmark": 2790,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G5900 @ 3.40GHz",
      "benchmark": 2790,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-870S @ 2.67GHz",
      "benchmark": 2786,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Extreme X9775 @ 3.20GHz",
      "benchmark": 2780,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4200M @ 2.50GHz",
      "benchmark": 2776,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-8650",
      "benchmark": 2774,
      "category": "Desktop"
    },
    {
      "cpu": "Rockchip RK3399",
      "benchmark": 2770,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-7Y54 @ 1.20GHz",
      "benchmark": 2741,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-920 @ 2.67GHz",
      "benchmark": 2741,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-5300U @ 2.30GHz",
      "benchmark": 2740,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6779V/CE",
      "benchmark": 2740,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10-5700 APU",
      "benchmark": 2735,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G4500 @ 3.50GHz",
      "benchmark": 2734,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-4130 Quad-Core",
      "benchmark": 2730,
      "category": "Desktop"
    },
    {
      "cpu": "AMD RX-427BB",
      "benchmark": 2729,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A12-9800B",
      "benchmark": 2729,
      "category": "Laptop"
    },
    {
      "cpu": "AMD RX-425BB",
      "benchmark": 2724,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-7100U @ 2.40GHz",
      "benchmark": 2721,
      "category": "Laptop"
    },
    {
      "cpu": "AMD 3015e",
      "benchmark": 2720,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-5500U @ 2.40GHz",
      "benchmark": 2719,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-9400",
      "benchmark": 2717,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G4950 @ 3.30GHz",
      "benchmark": 2714,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-5500B APU",
      "benchmark": 2707,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J4115 @ 1.80GHz",
      "benchmark": 2706,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium Silver N5030 @ 1.10GHz",
      "benchmark": 2695,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4600U @ 2.10GHz",
      "benchmark": 2685,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4402E @ 1.60GHz",
      "benchmark": 2681,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4110M @ 2.60GHz",
      "benchmark": 2678,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-7Y75 @ 1.30GHz",
      "benchmark": 2666,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "AMD Athlon X4 740 Quad Core",
      "benchmark": 2655,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3687U @ 2.10GHz",
      "benchmark": 2653,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3250T @ 3.00GHz",
      "benchmark": 2650,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G5900T @ 3.20GHz",
      "benchmark": 2648,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3320M @ 2.60GHz",
      "benchmark": 2646,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-6100U @ 2.30GHz",
      "benchmark": 2640,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3340M @ 2.70GHz",
      "benchmark": 2636,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FirePro A320 APU",
      "benchmark": 2634,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM6150",
      "benchmark": 2634,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Extreme X9770 @ 3.20GHz",
      "benchmark": 2632,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A12-8800B",
      "benchmark": 2622,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-5350U @ 1.80GHz",
      "benchmark": 2614,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4288U @ 2.60GHz",
      "benchmark": 2612,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A12-9720P",
      "benchmark": 2608,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-680 @ 3.60GHz",
      "benchmark": 2603,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A10-9700B",
      "benchmark": 2602,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G4400 @ 3.30GHz",
      "benchmark": 2599,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-760 @ 2.80GHz",
      "benchmark": 2599,
      "category": "Desktop"
    },
    {
      "cpu": "1-Unisoc",
      "benchmark": 2596,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4510U @ 2.00GHz",
      "benchmark": 2595,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Silver N5000 @ 1.10GHz",
      "benchmark": 2593,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core m3-7Y30 @ 1.00GHz",
      "benchmark": 2589,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-5157U @ 2.50GHz",
      "benchmark": 2588,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-8500Y @ 1.50GHz",
      "benchmark": 2587,
      "category": "Laptop"
    },
    {
      "cpu": "AMD FX-770K Quad-Core",
      "benchmark": 2578,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-5500 APU",
      "benchmark": 2577,
      "category": "Desktop"
    },
    {
      "cpu": "Hisilicon Kirin970",
      "benchmark": 2577,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 B65",
      "benchmark": 2576,
      "category": "Desktop"
    },
    {
      "cpu": "MT6768G",
      "benchmark": 2572,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G4930 @ 3.20GHz",
      "benchmark": 2571,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X4 557",
      "benchmark": 2567,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-4100 Quad-Core",
      "benchmark": 2565,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-7020U @ 2.30GHz",
      "benchmark": 2564,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3610ME @ 2.70GHz",
      "benchmark": 2553,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 965",
      "benchmark": 2546,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM4350",
      "benchmark": 2543,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8998",
      "benchmark": 2540,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Apple A9X",
      "benchmark": 2537,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-4500U @ 1.80GHz",
      "benchmark": 2529,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-7102E @ 2.10GHz",
      "benchmark": 2521,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4258U @ 2.40GHz",
      "benchmark": 2518,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G4500T @ 3.00GHz",
      "benchmark": 2518,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-9620P",
      "benchmark": 2518,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3230M @ 2.60GHz",
      "benchmark": 2513,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4300U @ 1.90GHz",
      "benchmark": 2512,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-670 @ 3.47GHz",
      "benchmark": 2511,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-5250U @ 1.60GHz",
      "benchmark": 2504,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-5200U @ 2.20GHz",
      "benchmark": 2502,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N4120 @ 1.10GHz",
      "benchmark": 2501,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 B97",
      "benchmark": 2498,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-750 @ 2.67GHz",
      "benchmark": 2495,
      "category": "Desktop"
    },
    {
      "cpu": "AMD 3020e",
      "benchmark": 2492,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4310U @ 2.00GHz",
      "benchmark": 2490,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G5920 @ 3.50GHz",
      "benchmark": 2482,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-7600P",
      "benchmark": 2481,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3245 @ 3.40GHz",
      "benchmark": 2480,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 B55",
      "benchmark": 2465,
      "category": "Desktop"
    },
    {
      "cpu": "Unisoc T610",
      "benchmark": 2464,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-661 @ 3.33GHz",
      "benchmark": 2462,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Extreme X9650 @ 3.00GHz",
      "benchmark": 2455,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N4100 @ 1.10GHz",
      "benchmark": 2451,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3210M @ 2.50GHz",
      "benchmark": 2449,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G4900 @ 3.10GHz",
      "benchmark": 2448,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4100M @ 2.50GHz",
      "benchmark": 2447,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4610Y @ 1.70GHz",
      "benchmark": 2446,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2640M @ 2.80GHz",
      "benchmark": 2439,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 955",
      "benchmark": 2432,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6779V/CU",
      "benchmark": 2429,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G3470 @ 3.60GHz",
      "benchmark": 2428,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2620M @ 2.70GHz",
      "benchmark": 2427,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-860S @ 2.53GHz",
      "benchmark": 2424,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A12-9700P",
      "benchmark": 2422,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-4650U @ 1.70GHz",
      "benchmark": 2421,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-3667U @ 2.00GHz",
      "benchmark": 2418,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6771V/CT",
      "benchmark": 2418,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM6115",
      "benchmark": 2416,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Quad Q9650 @ 3.00GHz",
      "benchmark": 2411,
      "category": "Desktop"
    },
    {
      "cpu": "MT6771V/WL",
      "benchmark": 2411,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-3537U @ 2.00GHz",
      "benchmark": 2406,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G4920 @ 3.20GHz",
      "benchmark": 2406,
      "category": "Desktop"
    },
    {
      "cpu": "MT6769H",
      "benchmark": 2404,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G4900T @ 2.90GHz",
      "benchmark": 2403,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-3250 @ 3.50GHz",
      "benchmark": 2401,
      "category": "Desktop"
    },
    {
      "cpu": "HiSilicon Kirin 960",
      "benchmark": 2401,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "T610-Unisoc",
      "benchmark": 2400,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "T618",
      "benchmark": 2393,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A12-8830B",
      "benchmark": 2392,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A10-8730B",
      "benchmark": 2388,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A8-9600B",
      "benchmark": 2388,
      "category": "Laptop"
    },
    {
      "cpu": "Unisoc ums512",
      "benchmark": 2384,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core m7-6Y75 @ 1.20GHz",
      "benchmark": 2380,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core m5-6Y57 @ 1.10GHz",
      "benchmark": 2374,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6779V/CV",
      "benchmark": 2372,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G3950 @ 3.00GHz",
      "benchmark": 2369,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium J4205 @ 1.50GHz",
      "benchmark": 2367,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N4505 @ 2.00GHz",
      "benchmark": 2367,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Apple A8X",
      "benchmark": 2366,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-2390T @ 2.70GHz",
      "benchmark": 2364,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 6405U @ 2.40GHz",
      "benchmark": 2363,
      "category": "Laptop"
    },
    {
      "cpu": "MT6769V/CT",
      "benchmark": 2363,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 840",
      "benchmark": 2355,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-4550U @ 1.50GHz",
      "benchmark": 2354,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-660 @ 3.33GHz",
      "benchmark": 2352,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-6102E @ 1.90GHz",
      "benchmark": 2349,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 B35",
      "benchmark": 2341,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6771V/C",
      "benchmark": 2337,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-3870K APU",
      "benchmark": 2336,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4260U @ 1.40GHz",
      "benchmark": 2331,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 B95",
      "benchmark": 2329,
      "category": "Desktop"
    },
    {
      "cpu": "Hisilicon Kirin710",
      "benchmark": 2323,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDA660",
      "benchmark": 2323,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM710",
      "benchmark": 2323,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 8890",
      "benchmark": 2315,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G4400T @ 2.90GHz",
      "benchmark": 2312,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-6700T APU",
      "benchmark": 2311,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G3920 @ 2.90GHz",
      "benchmark": 2310,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G5905T @ 3.30GHz",
      "benchmark": 2310,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4350U @ 1.40GHz",
      "benchmark": 2305,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 B70",
      "benchmark": 2303,
      "category": "Desktop"
    },
    {
      "cpu": "AMD FX-9800P",
      "benchmark": 2302,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4210U @ 1.70GHz",
      "benchmark": 2300,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X4 645",
      "benchmark": 2298,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2540M @ 2.60GHz",
      "benchmark": 2297,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3437U @ 1.90GHz",
      "benchmark": 2293,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q9550 @ 2.83GHz",
      "benchmark": 2291,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6769T",
      "benchmark": 2291,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-3240 @ 3.40GHz",
      "benchmark": 2287,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 5405U @ 2.30GHz",
      "benchmark": 2286,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6769Z",
      "benchmark": 2285,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6769V/CB",
      "benchmark": 2277,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 4417U @ 2.30GHz",
      "benchmark": 2276,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-6006U @ 2.00GHz",
      "benchmark": 2275,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM712",
      "benchmark": 2275,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G3930 @ 2.90GHz",
      "benchmark": 2270,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3427U @ 1.80GHz",
      "benchmark": 2269,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Extreme Q6850 @ 3.00GHz",
      "benchmark": 2268,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Extreme Q6800 @ 2.93GHz",
      "benchmark": 2267,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6771V/WT",
      "benchmark": 2266,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A10-8700B",
      "benchmark": 2262,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 945",
      "benchmark": 2261,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4330TE @ 2.40GHz",
      "benchmark": 2255,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-940XM @ 2.13GHz",
      "benchmark": 2252,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-2520M @ 2.50GHz",
      "benchmark": 2252,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-8700P",
      "benchmark": 2246,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-3850 APU",
      "benchmark": 2244,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc BENGALP",
      "benchmark": 2241,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-8600P",
      "benchmark": 2240,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc BENGAL",
      "benchmark": 2239,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 B40",
      "benchmark": 2238,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 B50",
      "benchmark": 2237,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J3455 @ 1.50GHz",
      "benchmark": 2237,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM670",
      "benchmark": 2232,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc TRINKET",
      "benchmark": 2231,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 940",
      "benchmark": 2228,
      "category": "Desktop"
    },
    {
      "cpu": "MT6969T",
      "benchmark": 2228,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-5020U @ 2.20GHz",
      "benchmark": 2226,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3225 @ 3.30GHz",
      "benchmark": 2222,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G3930TE @ 2.70GHz",
      "benchmark": 2218,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-9600P",
      "benchmark": 2218,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6769V/CU",
      "benchmark": 2216,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-650 @ 3.20GHz",
      "benchmark": 2215,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G3900 @ 2.80GHz",
      "benchmark": 2212,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4200U @ 1.60GHz",
      "benchmark": 2211,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G4930T @ 3.00GHz",
      "benchmark": 2209,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N6211 @ 1.20GHz",
      "benchmark": 2207,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-3220 @ 3.30GHz",
      "benchmark": 2203,
      "category": "Desktop"
    },
    {
      "cpu": "Unisoc T700",
      "benchmark": 2203,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 4415U @ 2.30GHz",
      "benchmark": 2202,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 960T",
      "benchmark": 2196,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4250U @ 1.30GHz",
      "benchmark": 2196,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 6305 @ 1.80GHz",
      "benchmark": 2194,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q9500 @ 2.83GHz",
      "benchmark": 2192,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6769V/WB",
      "benchmark": 2192,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core M-5Y51 @ 1.10GHz",
      "benchmark": 2191,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G4400TE @ 2.40GHz",
      "benchmark": 2190,
      "category": "Laptop"
    },
    {
      "cpu": "Unisoc T618",
      "benchmark": 2184,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X4 638 Quad-Core",
      "benchmark": 2183,
      "category": "Desktop"
    },
    {
      "cpu": "MT6765H",
      "benchmark": 2183,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6769V/CZ",
      "benchmark": 2177,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 925",
      "benchmark": 2173,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X4 640",
      "benchmark": 2171,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-8200Y @ 1.30GHz",
      "benchmark": 2169,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-5010U @ 2.10GHz",
      "benchmark": 2166,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-3820 APU",
      "benchmark": 2165,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3460 @ 3.50GHz",
      "benchmark": 2165,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core m5-6Y54 @ 1.10GHz",
      "benchmark": 2162,
      "category": "Laptop"
    },
    {
      "cpu": "Unisoc ums9230",
      "benchmark": 2161,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A8-8600B",
      "benchmark": 2160,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6771V/W",
      "benchmark": 2160,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM665",
      "benchmark": 2156,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6768V/CA",
      "benchmark": 2154,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM660",
      "benchmark": 2148,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X4 641 Quad-Core",
      "benchmark": 2143,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3517UE @ 1.70GHz",
      "benchmark": 2141,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium N4200 @ 1.10GHz",
      "benchmark": 2140,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-7400P",
      "benchmark": 2140,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron J3455E @ 1.50GHz",
      "benchmark": 2139,
      "category": "Desktop"
    },
    {
      "cpu": "Virtual",
      "benchmark": 2137,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-7200P",
      "benchmark": 2135,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G3440 @ 3.30GHz",
      "benchmark": 2129,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6763V/CE",
      "benchmark": 2129,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G3430 @ 3.30GHz",
      "benchmark": 2125,
      "category": "Desktop"
    },
    {
      "cpu": "Hardkernel ODROID-N2Plus",
      "benchmark": 2115,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-3210 @ 3.20GHz",
      "benchmark": 2112,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G3930T @ 2.70GHz",
      "benchmark": 2109,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Quad Q9450 @ 2.66GHz",
      "benchmark": 2109,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 B25",
      "benchmark": 2108,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X4 635",
      "benchmark": 2108,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3440T @ 2.80GHz",
      "benchmark": 2107,
      "category": "Desktop"
    },
    {
      "cpu": "AMD 3015Ce",
      "benchmark": 2105,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 B93",
      "benchmark": 2104,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6797X",
      "benchmark": 2104,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X4 820",
      "benchmark": 2103,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom E3950 @ 1.60GHz",
      "benchmark": 2101,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core M-5Y31 @ 0.90GHz",
      "benchmark": 2095,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM6225",
      "benchmark": 2095,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-2415M @ 2.30GHz",
      "benchmark": 2094,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM6125",
      "benchmark": 2094,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X4 630",
      "benchmark": 2093,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2125 @ 3.30GHz",
      "benchmark": 2093,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2140 @ 3.30GHz",
      "benchmark": 2092,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3258 @ 3.20GHz",
      "benchmark": 2091,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3450 @ 3.40GHz",
      "benchmark": 2091,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3517U @ 1.90GHz",
      "benchmark": 2089,
      "category": "Laptop"
    },
    {
      "cpu": "T700-Unisoc",
      "benchmark": 2088,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-2435M @ 2.40GHz",
      "benchmark": 2085,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4405U @ 2.10GHz",
      "benchmark": 2085,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X4 631 Quad-Core",
      "benchmark": 2085,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G3900T @ 2.60GHz",
      "benchmark": 2085,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core M-5Y71 @ 1.20GHz",
      "benchmark": 2069,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q9400 @ 2.66GHz",
      "benchmark": 2068,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-3337U @ 1.80GHz",
      "benchmark": 2067,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q6700 @ 2.66GHz",
      "benchmark": 2062,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2450M @ 2.50GHz",
      "benchmark": 2060,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6771V/WM",
      "benchmark": 2057,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom C2758 @ 2.40GHz",
      "benchmark": 2056,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-3670 APU",
      "benchmark": 2055,
      "category": "Desktop"
    },
    {
      "cpu": "Apple A9",
      "benchmark": 2051,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G3260 @ 3.30GHz",
      "benchmark": 2049,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 910e",
      "benchmark": 2044,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-640M @ 2.80GHz",
      "benchmark": 2042,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core m3-6Y30 @ 0.90GHz",
      "benchmark": 2041,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-3650 APU",
      "benchmark": 2037,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Quad Q8400 @ 2.66GHz",
      "benchmark": 2036,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G3900E @ 2.40GHz",
      "benchmark": 2034,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom T5700 @ 1.70GHz",
      "benchmark": 2030,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2102 @ 3.10GHz",
      "benchmark": 2029,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-920XM @ 2.00GHz",
      "benchmark": 2021,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q9505 @ 2.83GHz",
      "benchmark": 2020,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-5005U @ 2.00GHz",
      "benchmark": 2018,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-655K @ 3.20GHz",
      "benchmark": 2017,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3450T @ 2.90GHz",
      "benchmark": 2016,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-3240T @ 2.90GHz",
      "benchmark": 2013,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Extreme Q9200 @ 2.40GHz",
      "benchmark": 2011,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2430M @ 2.40GHz",
      "benchmark": 2007,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-2655LE @ 2.20GHz",
      "benchmark": 1999,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-620M @ 2.67GHz",
      "benchmark": 1999,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-2677M @ 1.80GHz",
      "benchmark": 1993,
      "category": "Laptop"
    },
    {
      "cpu": "HiSilicon Kirin 950",
      "benchmark": 1991,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G3420 @ 3.20GHz",
      "benchmark": 1990,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X4 750 Quad Core",
      "benchmark": 1986,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2130 @ 3.40GHz",
      "benchmark": 1986,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-5757M APU",
      "benchmark": 1985,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM662",
      "benchmark": 1980,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc 450",
      "benchmark": 1978,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-4025U @ 1.90GHz",
      "benchmark": 1974,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3317U @ 1.70GHz",
      "benchmark": 1972,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X4 615e",
      "benchmark": 1967,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3689Y @ 1.50GHz",
      "benchmark": 1967,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q9300 @ 2.50GHz",
      "benchmark": 1962,
      "category": "Desktop"
    },
    {
      "cpu": "MT8788",
      "benchmark": 1961,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom E3940 @ 1.60GHz",
      "benchmark": 1960,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X4 605e",
      "benchmark": 1957,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2410M @ 2.30GHz",
      "benchmark": 1954,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom E3900 @ 1.60GHz",
      "benchmark": 1953,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3220T @ 2.80GHz",
      "benchmark": 1949,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4120U @ 2.00GHz",
      "benchmark": 1948,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM636",
      "benchmark": 1947,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 9610",
      "benchmark": 1942,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-5015U @ 2.10GHz",
      "benchmark": 1939,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-3800 APU",
      "benchmark": 1939,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N3450 @ 1.10GHz",
      "benchmark": 1938,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon X4 730",
      "benchmark": 1936,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X4 620",
      "benchmark": 1934,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-7480",
      "benchmark": 1931,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3250 @ 3.20GHz",
      "benchmark": 1928,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-840QM @ 1.87GHz",
      "benchmark": 1928,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G1850 @ 2.90GHz",
      "benchmark": 1926,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2120 @ 3.30GHz",
      "benchmark": 1926,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X3 460",
      "benchmark": 1924,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 5370 APU",
      "benchmark": 1923,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SM4250",
      "benchmark": 1920,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G3240 @ 3.10GHz",
      "benchmark": 1919,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-580M @ 2.67GHz",
      "benchmark": 1914,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G3420T @ 2.70GHz",
      "benchmark": 1912,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8976SG",
      "benchmark": 1912,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10 PRO-7350B APU",
      "benchmark": 1910,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-4600M APU",
      "benchmark": 1908,
      "category": "Laptop"
    },
    {
      "cpu": "Samsung Exynos 9611",
      "benchmark": 1908,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-3439Y @ 1.50GHz",
      "benchmark": 1907,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4422E @ 1.80GHz",
      "benchmark": 1907,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core M-5Y10a @ 0.80GHz",
      "benchmark": 1905,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N4500 @ 1.10GHz",
      "benchmark": 1904,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10-5750M APU",
      "benchmark": 1902,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 920",
      "benchmark": 1899,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 905e",
      "benchmark": 1895,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2130 @ 3.20GHz",
      "benchmark": 1895,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 9950 Quad-Core",
      "benchmark": 1892,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A6-8570",
      "benchmark": 1889,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2510E @ 2.50GHz",
      "benchmark": 1889,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A6-8550B",
      "benchmark": 1885,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core M-5Y10 @ 0.80GHz",
      "benchmark": 1885,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-2515E @ 2.50GHz",
      "benchmark": 1882,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-3555LE @ 2.50GHz",
      "benchmark": 1880,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 4305UE @ 2.00GHz",
      "benchmark": 1876,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A6-9500",
      "benchmark": 1875,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4030U @ 1.90GHz",
      "benchmark": 1875,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X4 610e",
      "benchmark": 1871,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2105 @ 3.10GHz",
      "benchmark": 1871,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2120 @ 3.10GHz",
      "benchmark": 1870,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-9500",
      "benchmark": 1864,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM460",
      "benchmark": 1861,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4230U @ 1.90GHz",
      "benchmark": 1853,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4110U @ 1.90GHz",
      "benchmark": 1853,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G3900TE @ 2.30GHz",
      "benchmark": 1850,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 810",
      "benchmark": 1849,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3220 @ 3.00GHz",
      "benchmark": 1849,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4100E @ 2.40GHz",
      "benchmark": 1848,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT8183",
      "benchmark": 1847,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-2310E @ 2.10GHz",
      "benchmark": 1845,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Extreme Q9300 @ 2.53GHz",
      "benchmark": 1845,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 805",
      "benchmark": 1844,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-5550M APU",
      "benchmark": 1844,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-9500E",
      "benchmark": 1841,
      "category": "Desktop"
    },
    {
      "cpu": "UIS7862A",
      "benchmark": 1839,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD FX-7500 APU",
      "benchmark": 1835,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X3 455",
      "benchmark": 1832,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-560M @ 2.67GHz",
      "benchmark": 1832,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-3620 APU",
      "benchmark": 1830,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 B15e",
      "benchmark": 1825,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-3130M @ 2.60GHz",
      "benchmark": 1824,
      "category": "Laptop"
    },
    {
      "cpu": "SAMSUNG Exynos7420",
      "benchmark": 1824,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-2330E @ 2.20GHz",
      "benchmark": 1823,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core M-5Y10c @ 0.80GHz",
      "benchmark": 1822,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2100 @ 3.10GHz",
      "benchmark": 1819,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-610E @ 2.53GHz",
      "benchmark": 1818,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4302Y @ 1.60GHz",
      "benchmark": 1817,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-6500T APU",
      "benchmark": 1816,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Quad Q8300 @ 2.50GHz",
      "benchmark": 1814,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2637M @ 1.70GHz",
      "benchmark": 1811,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM632",
      "benchmark": 1809,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X3 445",
      "benchmark": 1808,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core M-5Y70 @ 1.10GHz",
      "benchmark": 1807,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 9750 Quad-Core",
      "benchmark": 1804,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-7410 APU",
      "benchmark": 1801,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-7470K",
      "benchmark": 1799,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Quad Q8200 @ 2.33GHz",
      "benchmark": 1797,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X940 Quad-Core",
      "benchmark": 1797,
      "category": "Laptop"
    },
    {
      "cpu": "AMD GX-420MC SOC",
      "benchmark": 1796,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon X4 530",
      "benchmark": 1786,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom X4 Quad-Core GP-9730",
      "benchmark": 1784,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-740QM @ 1.73GHz",
      "benchmark": 1782,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM630",
      "benchmark": 1780,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Quad Q6600 @ 2.40GHz",
      "benchmark": 1778,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-6410 APU",
      "benchmark": 1777,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X4 910",
      "benchmark": 1776,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-5557M APU",
      "benchmark": 1774,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-820QM @ 1.73GHz",
      "benchmark": 1768,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II N830 3+1",
      "benchmark": 1768,
      "category": "Laptop"
    },
    {
      "cpu": "AMD GX-420CA SOC",
      "benchmark": 1767,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Quad Q9100 @ 2.26GHz",
      "benchmark": 1764,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X3 450",
      "benchmark": 1763,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A10-4657M APU",
      "benchmark": 1759,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G1840 @ 2.80GHz",
      "benchmark": 1758,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3240T @ 2.70GHz",
      "benchmark": 1755,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3260T @ 2.90GHz",
      "benchmark": 1755,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-540M @ 2.53GHz",
      "benchmark": 1752,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT8768WT",
      "benchmark": 1748,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6765",
      "benchmark": 1748,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6797M",
      "benchmark": 1745,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-4000M @ 2.40GHz",
      "benchmark": 1744,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-5745M APU",
      "benchmark": 1738,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 5350 APU",
      "benchmark": 1737,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 9600B Quad-Core",
      "benchmark": 1736,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-7310 APU",
      "benchmark": 1736,
      "category": "Laptop"
    },
    {
      "cpu": "AMD GX-424CC SOC",
      "benchmark": 1735,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-2557M @ 1.70GHz",
      "benchmark": 1732,
      "category": "Laptop"
    },
    {
      "cpu": "MT6752",
      "benchmark": 1728,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G3250T @ 2.80GHz",
      "benchmark": 1726,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT8768CT",
      "benchmark": 1724,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6797T",
      "benchmark": 1723,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X3 440",
      "benchmark": 1718,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-4158U @ 2.00GHz",
      "benchmark": 1718,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10-7300 APU",
      "benchmark": 1715,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc APQ8053",
      "benchmark": 1712,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X4 600e",
      "benchmark": 1711,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2030 @ 3.00GHz",
      "benchmark": 1711,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G1630 @ 2.80GHz",
      "benchmark": 1707,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A6-8500B",
      "benchmark": 1704,
      "category": "Laptop"
    },
    {
      "cpu": "HiSilicon Kirin 659",
      "benchmark": 1703,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A4-3350B APU",
      "benchmark": 1702,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 9650 Quad-Core",
      "benchmark": 1699,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4425Y @ 1.70GHz",
      "benchmark": 1697,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-560 @ 3.33GHz",
      "benchmark": 1696,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x6211E @ 1.20GHz",
      "benchmark": 1695,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 4305U @ 2.20GHz",
      "benchmark": 1694,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 3965U @ 2.20GHz",
      "benchmark": 1692,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G2100T @ 2.60GHz",
      "benchmark": 1691,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J4025 @ 2.00GHz",
      "benchmark": 1688,
      "category": "Desktop"
    },
    {
      "cpu": "MT6765V/WB",
      "benchmark": 1688,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-2617M @ 1.50GHz",
      "benchmark": 1687,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G2020 @ 2.90GHz",
      "benchmark": 1684,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-520M @ 2.40GHz",
      "benchmark": 1683,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 9850 Quad-Core",
      "benchmark": 1680,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A6-7350B",
      "benchmark": 1679,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A9-9430",
      "benchmark": 1676,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 6305E @ 1.80GHz",
      "benchmark": 1675,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X3 435",
      "benchmark": 1670,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G1820 @ 2.70GHz",
      "benchmark": 1670,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X920 Quad-Core",
      "benchmark": 1669,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-6310 APU",
      "benchmark": 1666,
      "category": "Laptop"
    },
    {
      "cpu": "Samsung Exynos 7880",
      "benchmark": 1664,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4-7210 APU",
      "benchmark": 1663,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6765V/CB",
      "benchmark": 1663,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 7885",
      "benchmark": 1663,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD PRO A6-9500E",
      "benchmark": 1662,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-720QM @ 1.60GHz",
      "benchmark": 1661,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6765V/CA",
      "benchmark": 1659,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 7904",
      "benchmark": 1657,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-4030Y @ 1.60GHz",
      "benchmark": 1654,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8953",
      "benchmark": 1654,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-5200 APU",
      "benchmark": 1653,
      "category": "Laptop"
    },
    {
      "cpu": "HiSilicon Kirin 650",
      "benchmark": 1653,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4 PRO-3340B",
      "benchmark": 1652,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom X4 Quad-Core GP-9600",
      "benchmark": 1649,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-3600 APU",
      "benchmark": 1649,
      "category": "Desktop"
    },
    {
      "cpu": "MT6757W",
      "benchmark": 1648,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-4010U @ 1.70GHz",
      "benchmark": 1647,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II N970 Quad-Core",
      "benchmark": 1647,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-7100 APU",
      "benchmark": 1644,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6 PRO-7400B",
      "benchmark": 1641,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-3120M @ 2.50GHz",
      "benchmark": 1641,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK",
      "benchmark": 1641,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A10-4655M APU",
      "benchmark": 1637,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 9550 Quad-Core",
      "benchmark": 1636,
      "category": "Desktop"
    },
    {
      "cpu": "Nvidia Tegra T210",
      "benchmark": 1635,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-4005U @ 1.70GHz",
      "benchmark": 1634,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2100T @ 2.50GHz",
      "benchmark": 1634,
      "category": "Desktop"
    },
    {
      "cpu": "Snapdragon 888",
      "benchmark": 1630,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Embedded R-Series RX-216GD",
      "benchmark": 1628,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD A8-4500M APU",
      "benchmark": 1624,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G3320TE @ 2.30GHz",
      "benchmark": 1623,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 9600 Quad-Core",
      "benchmark": 1619,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5 E 520 @ 2.40GHz",
      "benchmark": 1619,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-6400B APU",
      "benchmark": 1616,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6797",
      "benchmark": 1616,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G1820T @ 2.40GHz",
      "benchmark": 1614,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2120T @ 2.70GHz",
      "benchmark": 1613,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6757CD",
      "benchmark": 1612,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 7420",
      "benchmark": 1612,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron N4000C @ 1.10GHz",
      "benchmark": 1611,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-5545M APU",
      "benchmark": 1611,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3110M @ 2.40GHz",
      "benchmark": 1609,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 2000E @ 2.20GHz",
      "benchmark": 1607,
      "category": "Laptop"
    },
    {
      "cpu": "MT6765V/WA",
      "benchmark": 1606,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Unisoc T310",
      "benchmark": 1606,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-8550",
      "benchmark": 1604,
      "category": "Desktop"
    },
    {
      "cpu": "MT6757WD",
      "benchmark": 1602,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 4415Y @ 1.60GHz",
      "benchmark": 1600,
      "category": "Laptop"
    },
    {
      "cpu": "MT6755V/W",
      "benchmark": 1596,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-4220Y @ 1.60GHz",
      "benchmark": 1591,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8953",
      "benchmark": 1589,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-550 @ 3.20GHz",
      "benchmark": 1588,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-7400K APU",
      "benchmark": 1587,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J4005 @ 2.00GHz",
      "benchmark": 1581,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-3550MX APU",
      "benchmark": 1579,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X3 425",
      "benchmark": 1576,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G1840T @ 2.50GHz",
      "benchmark": 1576,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N4020 @ 1.10GHz",
      "benchmark": 1570,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-3530MX APU",
      "benchmark": 1570,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-3339Y @ 1.50GHz",
      "benchmark": 1569,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G3220T @ 2.60GHz",
      "benchmark": 1564,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-6320 APU",
      "benchmark": 1563,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Embedded G-Series GX-420GI Radeon R7E",
      "benchmark": 1561,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X3 B75",
      "benchmark": 1560,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G1830 @ 2.80GHz",
      "benchmark": 1560,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4200Y @ 1.40GHz",
      "benchmark": 1558,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II N930 Quad-Core",
      "benchmark": 1558,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X3 420e",
      "benchmark": 1557,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8 PRO-7150B APU",
      "benchmark": 1557,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X3 710",
      "benchmark": 1554,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 3560M @ 2.40GHz",
      "benchmark": 1552,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A4-8350B",
      "benchmark": 1552,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-6420B APU",
      "benchmark": 1550,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4 PRO-7350B",
      "benchmark": 1544,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2010 @ 2.80GHz",
      "benchmark": 1541,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X3 B73",
      "benchmark": 1538,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-6420K APU",
      "benchmark": 1538,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-4210Y @ 1.50GHz",
      "benchmark": 1537,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G2030T @ 2.60GHz",
      "benchmark": 1535,
      "category": "Desktop"
    },
    {
      "cpu": "Apple A8",
      "benchmark": 1531,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm MSM8996PRO-AB",
      "benchmark": 1530,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E2-7110 APU",
      "benchmark": 1529,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc APQ8096",
      "benchmark": 1529,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A9-9425",
      "benchmark": 1524,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 9750B Quad-Core",
      "benchmark": 1520,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4405Y @ 1.50GHz",
      "benchmark": 1518,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-540 @ 3.07GHz",
      "benchmark": 1516,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A9-9420",
      "benchmark": 1515,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8976",
      "benchmark": 1513,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 9500 Quad-Core",
      "benchmark": 1512,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G1620T @ 2.40GHz",
      "benchmark": 1507,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X4 900e",
      "benchmark": 1505,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A9-9410",
      "benchmark": 1504,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 9350e Quad-Core",
      "benchmark": 1501,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 2970M @ 2.20GHz",
      "benchmark": 1501,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A6-8530B",
      "benchmark": 1498,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G870 @ 3.10GHz",
      "benchmark": 1495,
      "category": "Desktop"
    },
    {
      "cpu": "MT6763V/B",
      "benchmark": 1495,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4-7300 APU",
      "benchmark": 1492,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 3955U @ 2.00GHz",
      "benchmark": 1490,
      "category": "Laptop"
    },
    {
      "cpu": "AMD PRO A6-8570E",
      "benchmark": 1489,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 3867U @ 1.80GHz",
      "benchmark": 1488,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2120T @ 2.60GHz",
      "benchmark": 1486,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT8768WA",
      "benchmark": 1482,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4 PRO-7300B APU",
      "benchmark": 1481,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Quad Q9000 @ 2.00GHz",
      "benchmark": 1480,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4300Y @ 1.60GHz",
      "benchmark": 1479,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6757V",
      "benchmark": 1479,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G1610 @ 2.60GHz",
      "benchmark": 1478,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-6210 APU",
      "benchmark": 1471,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-640LM @ 2.13GHz",
      "benchmark": 1469,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X3 720",
      "benchmark": 1466,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-8500P",
      "benchmark": 1466,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G1620 @ 2.70GHz",
      "benchmark": 1466,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium J3710 @ 1.60GHz",
      "benchmark": 1465,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II N950 Quad-Core",
      "benchmark": 1460,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-3510MX APU",
      "benchmark": 1457,
      "category": "Laptop"
    },
    {
      "cpu": "MT6763V/CT",
      "benchmark": 1457,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 9450e Quad-Core",
      "benchmark": 1455,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6763V/V",
      "benchmark": 1454,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-6400K APU",
      "benchmark": 1453,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A6-9500B",
      "benchmark": 1453,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-530 @ 2.93GHz",
      "benchmark": 1449,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-3430MX APU",
      "benchmark": 1448,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4020Y @ 1.50GHz",
      "benchmark": 1447,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8996pro",
      "benchmark": 1446,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-2467M @ 1.60GHz",
      "benchmark": 1445,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4410Y @ 1.50GHz",
      "benchmark": 1444,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X3 415e",
      "benchmark": 1441,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6762V/WR",
      "benchmark": 1438,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc APQ8076",
      "benchmark": 1438,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G860 @ 3.00GHz",
      "benchmark": 1437,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-6300 APU",
      "benchmark": 1431,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X3 700e",
      "benchmark": 1430,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6762V/WD",
      "benchmark": 1430,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-5400B APU",
      "benchmark": 1428,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc. MSM8940-PMI8940 MTP",
      "benchmark": 1426,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "ASUS Tinker Board 2/2S",
      "benchmark": 1423,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-620LM @ 2.00GHz",
      "benchmark": 1422,
      "category": "Laptop"
    },
    {
      "cpu": "Hisilicon Kirin 930",
      "benchmark": 1415,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 9150e Quad-Core",
      "benchmark": 1414,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 5205U @ 1.90GHz",
      "benchmark": 1414,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II P960 Quad-Core",
      "benchmark": 1412,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom C2558 @ 2.40GHz",
      "benchmark": 1410,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6765G",
      "benchmark": 1410,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i7-2610UE @ 1.50GHz",
      "benchmark": 1409,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 1020E @ 2.20GHz",
      "benchmark": 1406,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X2 565",
      "benchmark": 1405,
      "category": "Desktop"
    },
    {
      "cpu": "MT6755V/B",
      "benchmark": 1404,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G6951 @ 2.80GHz",
      "benchmark": 1401,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N4000 @ 1.10GHz",
      "benchmark": 1399,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-3520M APU",
      "benchmark": 1398,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 8600B Triple-Core",
      "benchmark": 1390,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A9-9400",
      "benchmark": 1390,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 5150 APU",
      "benchmark": 1389,
      "category": "Desktop"
    },
    {
      "cpu": "MT6755V/WS",
      "benchmark": 1389,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDA450",
      "benchmark": 1388,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD GX-415GA SOC",
      "benchmark": 1386,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-3500 APU",
      "benchmark": 1382,
      "category": "Desktop"
    },
    {
      "cpu": "MT8176",
      "benchmark": 1380,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G850 @ 2.90GHz",
      "benchmark": 1373,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 2020M @ 2.40GHz",
      "benchmark": 1367,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium N3710 @ 1.60GHz",
      "benchmark": 1364,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3217UE @ 1.60GHz",
      "benchmark": 1362,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E8600 @ 3.33GHz",
      "benchmark": 1362,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X2 570",
      "benchmark": 1360,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6762V/WA",
      "benchmark": 1355,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 2030M @ 2.50GHz",
      "benchmark": 1353,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G645 @ 2.90GHz",
      "benchmark": 1353,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2332M @ 2.20GHz",
      "benchmark": 1353,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4010Y @ 1.30GHz",
      "benchmark": 1350,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-5300 APU",
      "benchmark": 1349,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x7-Z8750 @ 1.60GHz",
      "benchmark": 1349,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-5100 APU",
      "benchmark": 1346,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A10 Micro-6700T APU",
      "benchmark": 1345,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8956",
      "benchmark": 1345,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 8750 Triple-Core",
      "benchmark": 1343,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 4205U @ 1.80GHz",
      "benchmark": 1341,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 3825U @ 1.90GHz",
      "benchmark": 1340,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6762V/CB",
      "benchmark": 1340,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G2020T @ 2.50GHz",
      "benchmark": 1337,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-9225",
      "benchmark": 1336,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2370M @ 2.40GHz",
      "benchmark": 1336,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G1610T @ 2.30GHz",
      "benchmark": 1334,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X3 405e",
      "benchmark": 1331,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-5050 APU",
      "benchmark": 1328,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-6300B APU",
      "benchmark": 1328,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5 750S @ 2.40GHz",
      "benchmark": 1326,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X3 400e",
      "benchmark": 1320,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung Exynos 7884",
      "benchmark": 1320,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II P940 Quad-Core",
      "benchmark": 1319,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom x7-Z8700 @ 1.60GHz",
      "benchmark": 1318,
      "category": "Laptop"
    },
    {
      "cpu": "MT6750V/C",
      "benchmark": 1318,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6763V/WT",
      "benchmark": 1313,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-480M @ 2.67GHz",
      "benchmark": 1312,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-4202Y @ 1.60GHz",
      "benchmark": 1309,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 3550M @ 2.30GHz",
      "benchmark": 1309,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X2 555",
      "benchmark": 1308,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A8-3500M APU",
      "benchmark": 1308,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-4555M APU",
      "benchmark": 1307,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8996",
      "benchmark": 1307,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Unisoc SC9863a",
      "benchmark": 1306,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6762V/WB",
      "benchmark": 1303,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8996",
      "benchmark": 1302,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM439",
      "benchmark": 1302,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom X4 Quad-Core GP-9500",
      "benchmark": 1297,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G6960 @ 2.93GHz",
      "benchmark": 1293,
      "category": "Desktop"
    },
    {
      "cpu": "Hisilicon Kirin 935",
      "benchmark": 1291,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4-5000 APU",
      "benchmark": 1289,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium N3700 @ 1.60GHz",
      "benchmark": 1288,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-9220",
      "benchmark": 1287,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 8850B Triple-Core",
      "benchmark": 1281,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 9100e Quad-Core",
      "benchmark": 1279,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-460M @ 2.53GHz",
      "benchmark": 1279,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-5400K APU",
      "benchmark": 1279,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-9230",
      "benchmark": 1279,
      "category": "Desktop"
    },
    {
      "cpu": "Unisoc UIS8581E",
      "benchmark": 1279,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Sempron 240",
      "benchmark": 1278,
      "category": "Desktop"
    },
    {
      "cpu": "MT6755",
      "benchmark": 1278,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G630 @ 2.70GHz",
      "benchmark": 1277,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 1020M @ 2.10GHz",
      "benchmark": 1275,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-660UM @ 1.33GHz",
      "benchmark": 1272,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Embedded G-Series GX-224IJ Radeon R4E",
      "benchmark": 1271,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium G640 @ 2.80GHz",
      "benchmark": 1270,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G555 @ 2.70GHz",
      "benchmark": 1268,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 3865U @ 1.80GHz",
      "benchmark": 1266,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium A1020 @ 2.41GHz",
      "benchmark": 1265,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2350M @ 2.30GHz",
      "benchmark": 1263,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-3420M APU",
      "benchmark": 1262,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X620 Dual-Core",
      "benchmark": 1262,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-330E @ 2.13GHz",
      "benchmark": 1260,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-5357M APU",
      "benchmark": 1260,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-9210",
      "benchmark": 1260,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2348M @ 2.30GHz",
      "benchmark": 1259,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II N850 Triple-Core",
      "benchmark": 1253,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 3765U @ 1.90GHz",
      "benchmark": 1252,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-3227U @ 1.90GHz",
      "benchmark": 1248,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium J2900 @ 2.41GHz",
      "benchmark": 1246,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E8435 @ 3.06GHz",
      "benchmark": 1240,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E8500 @ 3.16GHz",
      "benchmark": 1238,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x5-Z8500 @ 1.44GHz",
      "benchmark": 1238,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 3855U @ 1.60GHz",
      "benchmark": 1237,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 2950M @ 2.00GHz",
      "benchmark": 1237,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2330M @ 2.20GHz",
      "benchmark": 1235,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 270",
      "benchmark": 1234,
      "category": "Desktop"
    },
    {
      "cpu": "Snapdragon 898",
      "benchmark": 1234,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X2 265",
      "benchmark": 1233,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T9900 @ 3.06GHz",
      "benchmark": 1232,
      "category": "Laptop"
    },
    {
      "cpu": "BCM2835",
      "benchmark": 1231,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4-9120",
      "benchmark": 1230,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-4012Y @ 1.50GHz",
      "benchmark": 1229,
      "category": "Laptop"
    },
    {
      "cpu": "MT6755M",
      "benchmark": 1229,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom X4 Quad-Core GP-9530",
      "benchmark": 1228,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J3160 @ 1.60GHz",
      "benchmark": 1227,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-3400M APU",
      "benchmark": 1226,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-4020 APU",
      "benchmark": 1225,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X3 705e",
      "benchmark": 1222,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2328M @ 2.20GHz",
      "benchmark": 1221,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-5300B APU",
      "benchmark": 1220,
      "category": "Desktop"
    },
    {
      "cpu": "MT6755V/BM",
      "benchmark": 1219,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium N3540 @ 2.16GHz",
      "benchmark": 1216,
      "category": "Laptop"
    },
    {
      "cpu": "AMD R-272F APU",
      "benchmark": 1215,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "Qualcomm MSM8992",
      "benchmark": 1215,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 8450 Triple-Core",
      "benchmark": 1214,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II P860 Triple-Core",
      "benchmark": 1214,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-9125",
      "benchmark": 1212,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-430M @ 2.27GHz",
      "benchmark": 1211,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 8600 Triple-Core",
      "benchmark": 1210,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-450M @ 2.40GHz",
      "benchmark": 1208,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G620 @ 2.60GHz",
      "benchmark": 1207,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 8650 Triple-Core",
      "benchmark": 1205,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM450",
      "benchmark": 1204,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G550 @ 2.60GHz",
      "benchmark": 1200,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x5-Z8550 @ 1.44GHz",
      "benchmark": 1200,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-3410MX APU",
      "benchmark": 1199,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N3150 @ 1.60GHz",
      "benchmark": 1197,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium N3530 @ 2.16GHz",
      "benchmark": 1197,
      "category": "Laptop"
    },
    {
      "cpu": "ROC-RK3568-PC HDMI (Android)",
      "benchmark": 1197,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron J3355 @ 2.00GHz",
      "benchmark": 1195,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "Intel Core i3-2310M @ 2.10GHz",
      "benchmark": 1193,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-4000 APU",
      "benchmark": 1190,
      "category": "Desktop"
    },
    {
      "cpu": "Rockchip RK3568 EVB1 DDR4 V10 Board",
      "benchmark": 1189,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 8750B Triple-Core",
      "benchmark": 1188,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-3217U @ 1.80GHz",
      "benchmark": 1188,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E8335 @ 2.93GHz",
      "benchmark": 1187,
      "category": "Laptop"
    },
    {
      "cpu": "AMD R-460L APU",
      "benchmark": 1183,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 3755U @ 1.70GHz",
      "benchmark": 1182,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 3965Y @ 1.50GHz",
      "benchmark": 1179,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-390M @ 2.67GHz",
      "benchmark": 1178,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 B28",
      "benchmark": 1177,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G840 @ 2.80GHz",
      "benchmark": 1175,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G540T @ 2.10GHz",
      "benchmark": 1174,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E8335 @ 2.66GHz",
      "benchmark": 1172,
      "category": "Laptop"
    },
    {
      "cpu": "MT6755V/CM",
      "benchmark": 1172,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom II X2 550",
      "benchmark": 1169,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E8400 @ 3.00GHz",
      "benchmark": 1169,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E6800 @ 3.33GHz",
      "benchmark": 1166,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z3795 @ 1.60GHz",
      "benchmark": 1166,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E5800 @ 3.20GHz",
      "benchmark": 1165,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-380M @ 2.53GHz",
      "benchmark": 1165,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G645T @ 2.50GHz",
      "benchmark": 1164,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 255",
      "benchmark": 1163,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T9800 @ 2.93GHz",
      "benchmark": 1163,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E7600 @ 3.06GHz",
      "benchmark": 1161,
      "category": "Desktop"
    },
    {
      "cpu": "MT6757WH",
      "benchmark": 1161,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-5350M APU",
      "benchmark": 1160,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II P920 Quad-Core",
      "benchmark": 1160,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-9220C",
      "benchmark": 1159,
      "category": "Laptop"
    },
    {
      "cpu": "MTK6757",
      "benchmark": 1158,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X2 250e",
      "benchmark": 1155,
      "category": "Desktop"
    },
    {
      "cpu": "AMD QC-4000",
      "benchmark": 1155,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N3160 @ 1.60GHz",
      "benchmark": 1154,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 3850 APU",
      "benchmark": 1153,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E6700 @ 3.20GHz",
      "benchmark": 1152,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II X2 B55",
      "benchmark": 1151,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-2537M @ 1.40GHz",
      "benchmark": 1150,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6753T",
      "benchmark": 1149,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 3805U @ 1.90GHz",
      "benchmark": 1148,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6 Micro-6500T APU",
      "benchmark": 1146,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 3215U @ 1.70GHz",
      "benchmark": 1144,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 8850 Triple-Core",
      "benchmark": 1142,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E6850 @ 3.00GHz",
      "benchmark": 1140,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G640T @ 2.40GHz",
      "benchmark": 1139,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Extreme X9100 @ 3.06GHz",
      "benchmark": 1139,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II N870 Triple-Core",
      "benchmark": 1139,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Extreme X7800 @ 2.60GHz",
      "benchmark": 1138,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2312M @ 2.10GHz",
      "benchmark": 1138,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron J1900 @ 1.99GHz",
      "benchmark": 1137,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II N830 Triple-Core",
      "benchmark": 1137,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Extreme X9000 @ 2.80GHz",
      "benchmark": 1135,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A9-9420e",
      "benchmark": 1135,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom 8450e Triple-Core",
      "benchmark": 1134,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium N3520 @ 2.16GHz",
      "benchmark": 1134,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A8-7050",
      "benchmark": 1129,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X2 B53",
      "benchmark": 1126,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N3350 @ 1.10GHz",
      "benchmark": 1126,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-370M @ 2.40GHz",
      "benchmark": 1126,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-3800 APU",
      "benchmark": 1124,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6750T",
      "benchmark": 1123,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-5345M APU",
      "benchmark": 1122,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-6110 APU",
      "benchmark": 1121,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E8135 @ 2.66GHz",
      "benchmark": 1119,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium A1018 @ 2.10GHz",
      "benchmark": 1117,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-1450 APU",
      "benchmark": 1117,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II P840 Triple-Core",
      "benchmark": 1116,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6762G",
      "benchmark": 1116,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G1820TE @ 2.20GHz",
      "benchmark": 1115,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 8250 Triple-Core",
      "benchmark": 1114,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 260",
      "benchmark": 1113,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G540 @ 2.50GHz",
      "benchmark": 1110,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo P9700 @ 2.80GHz",
      "benchmark": 1109,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II X2 545",
      "benchmark": 1107,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 210e",
      "benchmark": 1105,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G550T @ 2.20GHz",
      "benchmark": 1102,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G530 @ 2.40GHz",
      "benchmark": 1096,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-3420 APU",
      "benchmark": 1094,
      "category": "Desktop"
    },
    {
      "cpu": "AMD PRO A4-4350B",
      "benchmark": 1093,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Extreme X7900 @ 2.80GHz",
      "benchmark": 1093,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 2002E @ 1.50GHz",
      "benchmark": 1091,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium B970 @ 2.30GHz",
      "benchmark": 1091,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-640UM @ 1.20GHz",
      "benchmark": 1090,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E7500 @ 2.93GHz",
      "benchmark": 1090,
      "category": "Desktop"
    },
    {
      "cpu": "MT6795",
      "benchmark": 1088,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G1101 @ 2.27GHz",
      "benchmark": 1086,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm MSM 8939 HUAWEI TEXAS-A1",
      "benchmark": 1085,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom 8250e Triple-Core",
      "benchmark": 1084,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 250",
      "benchmark": 1083,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom 8400 Triple-Core",
      "benchmark": 1079,
      "category": "Desktop"
    },
    {
      "cpu": "MT8173",
      "benchmark": 1077,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X2 245e",
      "benchmark": 1075,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 1005M @ 1.90GHz",
      "benchmark": 1074,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 B24",
      "benchmark": 1073,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E6500 @ 2.93GHz",
      "benchmark": 1073,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E6600 @ 3.06GHz",
      "benchmark": 1072,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung EXYNOS5433",
      "benchmark": 1072,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6755BM",
      "benchmark": 1070,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo P9600 @ 2.66GHz",
      "benchmark": 1069,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II P820 Triple-Core",
      "benchmark": 1068,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6750V/WT",
      "benchmark": 1068,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A4-3400 APU",
      "benchmark": 1066,
      "category": "Desktop"
    },
    {
      "cpu": "AMD GX-412HC",
      "benchmark": 1065,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM 8939 HUAWEI KIW-L24",
      "benchmark": 1065,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium B980 @ 2.40GHz",
      "benchmark": 1064,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E8200 @ 2.66GHz",
      "benchmark": 1064,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6-9200",
      "benchmark": 1062,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-350M @ 2.27GHz",
      "benchmark": 1062,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G6950 @ 2.80GHz",
      "benchmark": 1061,
      "category": "Desktop"
    },
    {
      "cpu": "Rockchip RK3566 BOX DEMO V10 ANDROID Board",
      "benchmark": 1058,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Embedded G-Series GX-215JJ Radeon R2E",
      "benchmark": 1057,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 2980U @ 1.60GHz",
      "benchmark": 1056,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G530T @ 2.00GHz",
      "benchmark": 1056,
      "category": "Desktop"
    },
    {
      "cpu": "MT6592T",
      "benchmark": 1056,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T9600 @ 2.80GHz",
      "benchmark": 1051,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 235e",
      "benchmark": 1049,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-680UM @ 1.47GHz",
      "benchmark": 1046,
      "category": "Laptop"
    },
    {
      "cpu": "MT8783",
      "benchmark": 1039,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD GX-222GC SOC",
      "benchmark": 1038,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom E3845 @ 1.91GHz",
      "benchmark": 1038,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 7850 Dual-Core",
      "benchmark": 1037,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 B22",
      "benchmark": 1036,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N2940 @ 1.83GHz",
      "benchmark": 1035,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM 8939 HUAWEI KIW-L21",
      "benchmark": 1035,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo E8300 @ 2.83GHz",
      "benchmark": 1034,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium G630T @ 2.30GHz",
      "benchmark": 1029,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A6 PRO-7050B APU",
      "benchmark": 1027,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 1000M @ 1.80GHz",
      "benchmark": 1026,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-4400M APU",
      "benchmark": 1026,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 220",
      "benchmark": 1024,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II N660 Dual-Core",
      "benchmark": 1024,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 245",
      "benchmark": 1022,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 2127U @ 1.90GHz",
      "benchmark": 1018,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 3556U @ 1.70GHz",
      "benchmark": 1017,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E5700 @ 3.00GHz",
      "benchmark": 1017,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8937",
      "benchmark": 1017,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T9500 @ 2.60GHz",
      "benchmark": 1016,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium J2850 @ 2.41GHz",
      "benchmark": 1016,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion II Ultra Dual-Core Mobile M640",
      "benchmark": 1016,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-560UM @ 1.33GHz",
      "benchmark": 1015,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8939",
      "benchmark": 1013,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo E6700 @ 2.66GHz",
      "benchmark": 1012,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo P9600 @ 2.53GHz",
      "benchmark": 1012,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II Ultra Dual-Core Mobile M660",
      "benchmark": 1011,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-7000",
      "benchmark": 1010,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E6750 @ 2.66GHz",
      "benchmark": 1010,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E5500 @ 2.80GHz",
      "benchmark": 1010,
      "category": "Desktop"
    },
    {
      "cpu": "MT8168B",
      "benchmark": 1008,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6762V/CA",
      "benchmark": 1006,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-3229Y @ 1.40GHz",
      "benchmark": 1004,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 3558U @ 1.70GHz",
      "benchmark": 1004,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4 Micro-6400T APU",
      "benchmark": 1004,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2930 @ 1.83GHz",
      "benchmark": 1003,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-540UM @ 1.20GHz",
      "benchmark": 1002,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E6300 @ 2.80GHz",
      "benchmark": 1000,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 2117U @ 1.80GHz",
      "benchmark": 998,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-330M @ 2.13GHz",
      "benchmark": 997,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E8235 @ 2.80GHz",
      "benchmark": 995,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 2981U @ 1.60GHz",
      "benchmark": 991,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-9010",
      "benchmark": 991,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Phenom II N620 Dual-Core",
      "benchmark": 990,
      "category": "Laptop"
    },
    {
      "cpu": "Nvidia Tegra T132",
      "benchmark": 990,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium Extreme Edition 965 @ 3.73GHz",
      "benchmark": 987,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x5-E8000 @ 1.04GHz",
      "benchmark": 985,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium B950 @ 2.10GHz",
      "benchmark": 984,
      "category": "Laptop"
    },
    {
      "cpu": "MT6755V/WM",
      "benchmark": 981,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II X2 240e",
      "benchmark": 980,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E7400 @ 2.80GHz",
      "benchmark": 980,
      "category": "Desktop"
    },
    {
      "cpu": "tn8",
      "benchmark": 979,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT8768WD",
      "benchmark": 979,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6750",
      "benchmark": 977,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Phenom X3 8550",
      "benchmark": 976,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2340UE @ 1.30GHz",
      "benchmark": 976,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7800 @ 2.60GHz",
      "benchmark": 976,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8937",
      "benchmark": 973,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 FX-74",
      "benchmark": 972,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-3300 APU",
      "benchmark": 971,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-4300M APU",
      "benchmark": 971,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 1037U @ 1.80GHz",
      "benchmark": 969,
      "category": "Laptop"
    },
    {
      "cpu": "MT6795M",
      "benchmark": 968,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 6400+",
      "benchmark": 967,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II N640 Dual-Core",
      "benchmark": 965,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i7-620UM @ 1.07GHz",
      "benchmark": 964,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E7300 @ 2.66GHz",
      "benchmark": 964,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom C2538 @ 2.40GHz",
      "benchmark": 960,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 215",
      "benchmark": 959,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo P9500 @ 2.53GHz",
      "benchmark": 959,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-9000",
      "benchmark": 958,
      "category": "Laptop"
    },
    {
      "cpu": "Unisoc ums312",
      "benchmark": 958,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo P8700 @ 2.53GHz",
      "benchmark": 956,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A6-9220e",
      "benchmark": 956,
      "category": "Laptop"
    },
    {
      "cpu": "MT6750V/CS",
      "benchmark": 955,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD R-260H APU",
      "benchmark": 954,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-3200 APU",
      "benchmark": 953,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 7750 Dual-Core",
      "benchmark": 951,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung J7 Max LTE SWA board based on MT6757V/WL",
      "benchmark": 950,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo SP9400 @ 2.40GHz",
      "benchmark": 948,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E7200 @ 2.53GHz",
      "benchmark": 947,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 64 FX-62 Dual Core",
      "benchmark": 943,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J1850 @ 1.99GHz",
      "benchmark": 942,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T9400 @ 2.53GHz",
      "benchmark": 941,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo P8800 @ 2.66GHz",
      "benchmark": 940,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T9300 @ 2.50GHz",
      "benchmark": 940,
      "category": "Laptop"
    },
    {
      "cpu": "Octa Core",
      "benchmark": 940,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T9550 @ 2.66GHz",
      "benchmark": 937,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E5400 @ 2.70GHz",
      "benchmark": 936,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 240",
      "benchmark": 935,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron E3500 @ 2.70GHz",
      "benchmark": 935,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Phenom II P650 Dual-Core",
      "benchmark": 933,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron X2 198 Dual-Core",
      "benchmark": 930,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron B840 @ 1.90GHz",
      "benchmark": 930,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 5600+",
      "benchmark": 923,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion II Ultra Dual-Core Mobile M600",
      "benchmark": 923,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-9030",
      "benchmark": 922,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 6000+",
      "benchmark": 919,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 3205U @ 1.50GHz",
      "benchmark": 918,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2920 @ 1.86GHz",
      "benchmark": 918,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6753",
      "benchmark": 916,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion II Dual-Core Mobile M540",
      "benchmark": 912,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 5400+",
      "benchmark": 910,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium B960 @ 2.20GHz",
      "benchmark": 910,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc SDM429",
      "benchmark": 910,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo P9300 @ 2.26GHz",
      "benchmark": 909,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK3566 RK817 TABLET LP4X Board",
      "benchmark": 909,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom x5-Z8350 @ 1.44GHz",
      "benchmark": 909,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT8166B",
      "benchmark": 907,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T8300 @ 2.40GHz",
      "benchmark": 906,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E5300 @ 2.60GHz",
      "benchmark": 906,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i5-520UM @ 1.07GHz",
      "benchmark": 902,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8940",
      "benchmark": 902,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo E6600 @ 2.40GHz",
      "benchmark": 901,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-9120e",
      "benchmark": 899,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium G620T @ 2.20GHz",
      "benchmark": 896,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-2375M @ 1.50GHz",
      "benchmark": 894,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-9120C",
      "benchmark": 894,
      "category": "Laptop"
    },
    {
      "cpu": "UGOOS UT8 Board",
      "benchmark": 894,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo L9600 @ 2.13GHz",
      "benchmark": 892,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8994",
      "benchmark": 890,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung Exynos 7870",
      "benchmark": 890,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 1017U @ 1.60GHz",
      "benchmark": 888,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II P540 Dual-Core",
      "benchmark": 884,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom x5-E3930 @ 1.30GHz",
      "benchmark": 878,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium N3510 @ 1.99GHz",
      "benchmark": 878,
      "category": "Laptop"
    },
    {
      "cpu": "Samsung Exynos 7580",
      "benchmark": 878,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion II N550 Dual-Core",
      "benchmark": 877,
      "category": "Laptop"
    },
    {
      "cpu": "Athlon 64 Dual Core 5600+",
      "benchmark": 875,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E6550 @ 2.33GHz",
      "benchmark": 875,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 5200 Dual-Core",
      "benchmark": 869,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo P7550 @ 2.26GHz",
      "benchmark": 868,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 4450e",
      "benchmark": 867,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E5200 @ 2.50GHz",
      "benchmark": 867,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron P4600 @ 2.00GHz",
      "benchmark": 862,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-68",
      "benchmark": 861,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron E3200 @ 2.40GHz",
      "benchmark": 860,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 7550 Dual-Core",
      "benchmark": 859,
      "category": "Desktop"
    },
    {
      "cpu": "MT6762V/CR",
      "benchmark": 857,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT8161AA",
      "benchmark": 857,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion II N530 Dual-Core",
      "benchmark": 855,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo P8600 @ 2.40GHz",
      "benchmark": 853,
      "category": "Laptop"
    },
    {
      "cpu": "SAMSUNG Exynos7580",
      "benchmark": 851,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium P6100 @ 2.00GHz",
      "benchmark": 850,
      "category": "Laptop"
    },
    {
      "cpu": "Athlon 64 Dual Core 5000+",
      "benchmark": 850,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 3560Y @ 1.20GHz",
      "benchmark": 849,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium P6200 @ 2.13GHz",
      "benchmark": 847,
      "category": "Laptop"
    },
    {
      "cpu": "MT6761V/CBB",
      "benchmark": 846,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-2377M @ 1.50GHz",
      "benchmark": 845,
      "category": "Laptop"
    },
    {
      "cpu": "MT9950",
      "benchmark": 845,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Rockchip RK3566 EVB2 LP4X V10 Board",
      "benchmark": 843,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 2957U @ 1.40GHz",
      "benchmark": 841,
      "category": "Laptop"
    },
    {
      "cpu": "AMD TurionX2 Ultra DualCore Mobile ZM-85",
      "benchmark": 841,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron E3300 @ 2.50GHz",
      "benchmark": 837,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z3580 @ 1.33GHz",
      "benchmark": 837,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i5-430UM @ 1.20GHz",
      "benchmark": 836,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Dual Core 5000B",
      "benchmark": 835,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 5000 Dual-Core",
      "benchmark": 835,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 2955U @ 1.40GHz",
      "benchmark": 835,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium P6300 @ 2.27GHz",
      "benchmark": 834,
      "category": "Laptop"
    },
    {
      "cpu": "BCM2711",
      "benchmark": 834,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-2367M @ 1.40GHz",
      "benchmark": 832,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium B940 @ 2.00GHz",
      "benchmark": 832,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-9000e",
      "benchmark": 832,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II Dual-Core Mobile M520",
      "benchmark": 830,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E4600 @ 2.40GHz",
      "benchmark": 829,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron E3400 @ 2.60GHz",
      "benchmark": 829,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo P8400 @ 2.26GHz",
      "benchmark": 827,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Dual Core 5400B",
      "benchmark": 826,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T7700 @ 2.40GHz",
      "benchmark": 825,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2357M @ 1.30GHz",
      "benchmark": 824,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7500 @ 2.20GHz",
      "benchmark": 823,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Extreme X6800 @ 2.93GHz",
      "benchmark": 823,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom x5-Z8330 @ 1.44GHz",
      "benchmark": 822,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8939",
      "benchmark": 819,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom x5-Z8300 @ 1.44GHz",
      "benchmark": 819,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "AMD A4-4355M APU",
      "benchmark": 818,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II P560 Dual-Core",
      "benchmark": 818,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron P4500 @ 1.87GHz",
      "benchmark": 816,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i3-2365M @ 1.40GHz",
      "benchmark": 815,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II Ultra Dual-Core Mobile M620",
      "benchmark": 814,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 5200+",
      "benchmark": 812,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron B830 @ 1.80GHz",
      "benchmark": 812,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E4700 @ 2.60GHz",
      "benchmark": 811,
      "category": "Desktop"
    },
    {
      "cpu": "MT8165",
      "benchmark": 810,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo E6540 @ 2.33GHz",
      "benchmark": 808,
      "category": "Desktop"
    },
    {
      "cpu": "MT8766B",
      "benchmark": 808,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom Z3735G @ 1.33GHz",
      "benchmark": 806,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8994",
      "benchmark": 805,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8952",
      "benchmark": 804,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon64 X2 Dual Core 4600+",
      "benchmark": 803,
      "category": "Desktop"
    },
    {
      "cpu": "MT8161A",
      "benchmark": 800,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 1007U @ 1.50GHz",
      "benchmark": 798,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 5800+",
      "benchmark": 797,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon Dual Core 5200B",
      "benchmark": 796,
      "category": "Desktop"
    },
    {
      "cpu": "hi6210sft",
      "benchmark": 796,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD A6-4455M APU",
      "benchmark": 795,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK3566 RK817 ZIDOO TABLET LP4X Board",
      "benchmark": 795,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom Z3775D @ 1.49GHz",
      "benchmark": 794,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E2220 @ 2.40GHz",
      "benchmark": 793,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium T4500 @ 2.30GHz",
      "benchmark": 793,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Ultra Dual-Core Mobile ZM-84",
      "benchmark": 793,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo P7370 @ 2.00GHz",
      "benchmark": 790,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II P520 Dual-Core",
      "benchmark": 790,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 7450 Dual-Core",
      "benchmark": 789,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron B820 @ 1.70GHz",
      "benchmark": 789,
      "category": "Laptop"
    },
    {
      "cpu": "MT6761V/CD",
      "benchmark": 784,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8992",
      "benchmark": 782,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6750V/W",
      "benchmark": 779,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron B810 @ 1.60GHz",
      "benchmark": 775,
      "category": "Laptop"
    },
    {
      "cpu": "VIA QuadCore L4700 @ 1.2+ GHz",
      "benchmark": 773,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E6400 @ 2.13GHz",
      "benchmark": 772,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium T4300 @ 2.10GHz",
      "benchmark": 771,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7600 @ 2.33GHz",
      "benchmark": 770,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo P7570 @ 2.26GHz",
      "benchmark": 770,
      "category": "Laptop"
    },
    {
      "cpu": "Athlon Dual Core 4850e",
      "benchmark": 769,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-3310MX APU",
      "benchmark": 769,
      "category": "Laptop"
    },
    {
      "cpu": "MT6761V/WAB",
      "benchmark": 769,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium P6000 @ 1.87GHz",
      "benchmark": 765,
      "category": "Laptop"
    },
    {
      "cpu": "AMD GX-217GA SOC",
      "benchmark": 762,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T4400 @ 2.20GHz",
      "benchmark": 762,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T6600 @ 2.20GHz",
      "benchmark": 761,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3735D @ 1.33GHz",
      "benchmark": 761,
      "category": "Laptop"
    },
    {
      "cpu": "rockchip,rk3328",
      "benchmark": 761,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 5000+",
      "benchmark": 760,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion II Dual-Core Mobile M500",
      "benchmark": 760,
      "category": "Laptop"
    },
    {
      "cpu": "MT6797D",
      "benchmark": 758,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T6670 @ 2.20GHz",
      "benchmark": 756,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core i5-470UM @ 1.33GHz",
      "benchmark": 755,
      "category": "Laptop"
    },
    {
      "cpu": "AMD GX-218GL SOC",
      "benchmark": 754,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3775 @ 1.46GHz",
      "benchmark": 754,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-5150M APU",
      "benchmark": 753,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-3330MX APU",
      "benchmark": 752,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E2200 @ 2.20GHz",
      "benchmark": 752,
      "category": "Desktop"
    },
    {
      "cpu": "Rockchip RK3566 EVB1 DDR4 V10 Board",
      "benchmark": 751,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon Dual Core 5050e",
      "benchmark": 748,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 1047UE @ 1.40GHz",
      "benchmark": 748,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo P7450 @ 2.13GHz",
      "benchmark": 747,
      "category": "Laptop"
    },
    {
      "cpu": "Celeron Dual-Core T3500 @ 2.10GHz",
      "benchmark": 747,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo SL9400 @ 1.86GHz",
      "benchmark": 743,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium D 960 @ 3.60GHz",
      "benchmark": 743,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N2910 @ 1.60GHz",
      "benchmark": 742,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II Neo N54L Dual-Core",
      "benchmark": 741,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T8100 @ 2.10GHz",
      "benchmark": 739,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-62",
      "benchmark": 738,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3770 @ 1.46GHz",
      "benchmark": 738,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Dual Core 5600B",
      "benchmark": 737,
      "category": "Desktop"
    },
    {
      "cpu": "MT8696",
      "benchmark": 736,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon Dual Core 4850e",
      "benchmark": 735,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm APQ 8084 (Flattened Device Tree)",
      "benchmark": 734,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Spreadtrum SC9853I-IA",
      "benchmark": 734,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 2961Y @ 1.10GHz",
      "benchmark": 732,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK3368",
      "benchmark": 731,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion X2 Ultra Dual-Core Mobile ZM-85",
      "benchmark": 730,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Dual Core 4850B",
      "benchmark": 727,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 887 @ 1.50GHz",
      "benchmark": 727,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo P7350 @ 2.00GHz",
      "benchmark": 727,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-3305M APU",
      "benchmark": 727,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-3000 APU",
      "benchmark": 726,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7200 @ 2.00GHz",
      "benchmark": 723,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 4800+",
      "benchmark": 722,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E4500 @ 2.20GHz",
      "benchmark": 718,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T6570 @ 2.10GHz",
      "benchmark": 718,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 4600+",
      "benchmark": 716,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium T4200 @ 2.00GHz",
      "benchmark": 715,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E6420 @ 2.13GHz",
      "benchmark": 714,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6761V/WE",
      "benchmark": 714,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron E1600 @ 2.40GHz",
      "benchmark": 712,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z3560 @ 1.00GHz",
      "benchmark": 710,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 FX-60 Dual Core",
      "benchmark": 709,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T6400 @ 2.00GHz",
      "benchmark": 708,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Dual-Core Mobile RM-75",
      "benchmark": 708,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK3288",
      "benchmark": 708,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron B815 @ 1.60GHz",
      "benchmark": 706,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5870 @ 2.00GHz",
      "benchmark": 705,
      "category": "Laptop"
    },
    {
      "cpu": "MT8735T",
      "benchmark": 704,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T7400 @ 2.16GHz",
      "benchmark": 702,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E2210 @ 2.20GHz",
      "benchmark": 702,
      "category": "Desktop"
    },
    {
      "cpu": "MT5893",
      "benchmark": 702,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core i3-380UM @ 1.33GHz",
      "benchmark": 699,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon Dual Core 4450e",
      "benchmark": 698,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T6500 @ 2.10GHz",
      "benchmark": 696,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Ultra Dual-Core Mobile ZM-86",
      "benchmark": 695,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7300 @ 2.00GHz",
      "benchmark": 693,
      "category": "Laptop"
    },
    {
      "cpu": "MT6738",
      "benchmark": 692,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 4400+",
      "benchmark": 691,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron G470 @ 2.00GHz",
      "benchmark": 691,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion X2 Dual Core Mobile RM-76",
      "benchmark": 691,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3560 @ 1.83GHz",
      "benchmark": 690,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron P4505 @ 1.87GHz",
      "benchmark": 689,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Ultra Dual-Core Mobile ZM-87",
      "benchmark": 689,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7250 @ 2.00GHz",
      "benchmark": 688,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon X2 Dual Core BE-2400",
      "benchmark": 688,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon Dual Core 4450B",
      "benchmark": 684,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion II Neo K685 Dual-Core",
      "benchmark": 684,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-3300M APU",
      "benchmark": 683,
      "category": "Laptop"
    },
    {
      "cpu": "Athlon Dual Core 4450e",
      "benchmark": 681,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium D 950 @ 3.40GHz",
      "benchmark": 679,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II X2 270u",
      "benchmark": 675,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-64",
      "benchmark": 675,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 4200+",
      "benchmark": 672,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium E2180 @ 2.00GHz",
      "benchmark": 671,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron E1400 @ 2.00GHz",
      "benchmark": 671,
      "category": "Desktop"
    },
    {
      "cpu": "Athlon Dual Core 4050e",
      "benchmark": 670,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron J3060 @ 1.60GHz",
      "benchmark": 668,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T5750 @ 2.00GHz",
      "benchmark": 667,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo L9300 @ 1.60GHz",
      "benchmark": 666,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Dual-Core Mobile RM-72",
      "benchmark": 666,
      "category": "Laptop"
    },
    {
      "cpu": "VIA QuadCore U4650 @ 1.0+ GHz",
      "benchmark": 666,
      "category": "Desktop"
    },
    {
      "cpu": "AMD E2-3000M APU",
      "benchmark": 665,
      "category": "Laptop"
    },
    {
      "cpu": "Celeron Dual-Core T3000 @ 1.80GHz",
      "benchmark": 665,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N3060 @ 1.60GHz",
      "benchmark": 664,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 260u",
      "benchmark": 663,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 4000+",
      "benchmark": 661,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion Dual-Core RM-75",
      "benchmark": 659,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5850 @ 2.16GHz",
      "benchmark": 657,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Ultra Dual-Core Mobile ZM-82",
      "benchmark": 654,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5900 @ 2.20GHz",
      "benchmark": 652,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3740 @ 1.33GHz",
      "benchmark": 651,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron E1500 @ 2.20GHz",
      "benchmark": 649,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron B800 @ 1.50GHz",
      "benchmark": 649,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion Dual-Core RM-72",
      "benchmark": 649,
      "category": "Laptop"
    },
    {
      "cpu": "M7221",
      "benchmark": 646,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T5600 @ 1.83GHz",
      "benchmark": 645,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T3400 @ 2.16GHz",
      "benchmark": 645,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T3200 @ 2.00GHz",
      "benchmark": 644,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T7100 @ 1.80GHz",
      "benchmark": 643,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 987 @ 1.50GHz",
      "benchmark": 642,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8974",
      "benchmark": 642,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Samsung EXYNOS5420",
      "benchmark": 642,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 QL-66",
      "benchmark": 641,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-3320M APU",
      "benchmark": 640,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5800 @ 2.00GHz",
      "benchmark": 638,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E2160 @ 1.80GHz",
      "benchmark": 636,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 2129Y @ 1.10GHz",
      "benchmark": 635,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5300 @ 1.73GHz",
      "benchmark": 635,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Dual-Core Mobile RM-77",
      "benchmark": 635,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E4400 @ 2.00GHz",
      "benchmark": 632,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-66",
      "benchmark": 627,
      "category": "Laptop"
    },
    {
      "cpu": "Celeron Dual-Core T3300 @ 2.00GHz",
      "benchmark": 627,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 967 @ 1.30GHz",
      "benchmark": 626,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom C2358 @ 1.74GHz",
      "benchmark": 625,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8974PRO-AB",
      "benchmark": 625,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium U5600 @ 1.33GHz",
      "benchmark": 624,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Dual-Core Mobile RM-70",
      "benchmark": 624,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Dual-Core Mobile RM-74",
      "benchmark": 623,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 957 @ 1.20GHz",
      "benchmark": 622,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 QL-64",
      "benchmark": 622,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3745 @ 1.33GHz",
      "benchmark": 621,
      "category": "Laptop"
    },
    {
      "cpu": "AMD GX-212JC SOC",
      "benchmark": 619,
      "category": "Laptop"
    },
    {
      "cpu": "MT6795MM",
      "benchmark": 618,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon Dual Core 4050e",
      "benchmark": 616,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 877 @ 1.40GHz",
      "benchmark": 615,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z3740D @ 1.33GHz",
      "benchmark": 614,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6761V/WBB",
      "benchmark": 613,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Generic DT based system",
      "benchmark": 612,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 3800+",
      "benchmark": 611,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm MSM8974PRO-AC",
      "benchmark": 611,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 QL-65",
      "benchmark": 609,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo L7700 @ 1.80GHz",
      "benchmark": 607,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II X2 250u",
      "benchmark": 604,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N3000 @ 1.04GHz",
      "benchmark": 604,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Dual Core L510",
      "benchmark": 603,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E1 Micro-6200T APU",
      "benchmark": 600,
      "category": "Laptop"
    },
    {
      "cpu": "AMD TurionX2 Ultra DualCore Mobile ZM-87",
      "benchmark": 599,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Rockchip (Device Tree)",
      "benchmark": 598,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E1-2500 APU",
      "benchmark": 597,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E6320 @ 1.86GHz",
      "benchmark": 597,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 3600+",
      "benchmark": 596,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T5550 @ 1.83GHz",
      "benchmark": 596,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron J1750 @ 2.41GHz",
      "benchmark": 595,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core BE-2300",
      "benchmark": 594,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N3050 @ 1.60GHz",
      "benchmark": 592,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo E6300 @ 1.86GHz",
      "benchmark": 592,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon X2 Dual Core BE-2350",
      "benchmark": 591,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-60",
      "benchmark": 591,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion II Neo N40L Dual-Core",
      "benchmark": 589,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion Dual-Core RM-74",
      "benchmark": 588,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8974PRO-AA",
      "benchmark": 587,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom Z3745D @ 1.33GHz",
      "benchmark": 585,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo U9600 @ 1.60GHz",
      "benchmark": 584,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 847E @ 1.10GHz",
      "benchmark": 584,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom C2338 @ 1.74GHz",
      "benchmark": 584,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E1-7010 APU",
      "benchmark": 582,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 QL-67",
      "benchmark": 582,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8917",
      "benchmark": 582,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron J1800 @ 2.41GHz",
      "benchmark": 581,
      "category": "Desktop"
    },
    {
      "cpu": "MT8766A",
      "benchmark": 581,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron N2840 @ 2.16GHz",
      "benchmark": 580,
      "category": "Laptop"
    },
    {
      "cpu": "Pentium Dual-Core T4200 @ 2.00GHz",
      "benchmark": 578,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 1019Y @ 1.00GHz",
      "benchmark": 576,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo L7500 @ 1.60GHz",
      "benchmark": 575,
      "category": "Laptop"
    },
    {
      "cpu": "MT6761V/CAB",
      "benchmark": 575,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core BE-2350",
      "benchmark": 573,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT8168A",
      "benchmark": 571,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon X2 Dual Core BE-2300",
      "benchmark": 570,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 857 @ 1.20GHz",
      "benchmark": 569,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6737T",
      "benchmark": 568,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 X2 3800+",
      "benchmark": 566,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm MSM 8974 HAMMERHEAD (Flattened Device Tre",
      "benchmark": 566,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion II Neo K625 Dual-Core",
      "benchmark": 565,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 867 @ 1.30GHz",
      "benchmark": 562,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 2650 APU",
      "benchmark": 561,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo E4300 @ 1.80GHz",
      "benchmark": 561,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion Dual-Core RM-70",
      "benchmark": 561,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron U3600 @ 1.20GHz",
      "benchmark": 560,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8929",
      "benchmark": 560,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom Z3735E @ 1.33GHz",
      "benchmark": 557,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 QL-62",
      "benchmark": 553,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium E2140 @ 1.60GHz",
      "benchmark": 549,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium T2390 @ 1.86GHz",
      "benchmark": 547,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6762V/CN",
      "benchmark": 546,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT8163",
      "benchmark": 545,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm APQ8084",
      "benchmark": 544,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom Z3735F @ 1.33GHz",
      "benchmark": 544,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5450 @ 1.66GHz",
      "benchmark": 543,
      "category": "Laptop"
    },
    {
      "cpu": "MT6761V/WD",
      "benchmark": 543,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E1-6015 APU",
      "benchmark": 542,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2830 @ 2.16GHz",
      "benchmark": 542,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium U5400 @ 1.20GHz",
      "benchmark": 538,
      "category": "Laptop"
    },
    {
      "cpu": "mt6762m",
      "benchmark": 538,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium T2330 @ 1.60GHz",
      "benchmark": 536,
      "category": "Laptop"
    },
    {
      "cpu": "AMD TurionX2 Dual Core Mobile RM-70",
      "benchmark": 536,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2808 @ 1.58GHz",
      "benchmark": 532,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 X2 Dual Core 3400+",
      "benchmark": 531,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo T5470 @ 1.60GHz",
      "benchmark": 531,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5670 @ 1.80GHz",
      "benchmark": 530,
      "category": "Laptop"
    },
    {
      "cpu": "MT6739CH",
      "benchmark": 530,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon II Neo K345 Dual-Core",
      "benchmark": 527,
      "category": "Laptop"
    },
    {
      "cpu": "MT8735A",
      "benchmark": 527,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E1-6010 APU",
      "benchmark": 522,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion X2 Ultra Dual-Core Mobile ZM-80",
      "benchmark": 521,
      "category": "Laptop"
    },
    {
      "cpu": "MT6592",
      "benchmark": 521,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Celeron Dual-Core T3100 @ 1.90GHz",
      "benchmark": 519,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron T1600 @ 1.66GHz",
      "benchmark": 519,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 FX-57",
      "benchmark": 517,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo L7400 @ 1.50GHz",
      "benchmark": 516,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T2310 @ 1.46GHz",
      "benchmark": 515,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5500 @ 1.66GHz",
      "benchmark": 513,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom D2701 @ 2.13GHz",
      "benchmark": 511,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo SU9400 @ 1.40GHz",
      "benchmark": 509,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK3288 (Flattened Device Tree)",
      "benchmark": 508,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Sempron 145",
      "benchmark": 505,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z3736F @ 1.33GHz",
      "benchmark": 502,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E2-2000 APU",
      "benchmark": 501,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo U7300 @ 1.30GHz",
      "benchmark": 501,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T2370 @ 1.73GHz",
      "benchmark": 500,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 150",
      "benchmark": 498,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core Duo T2700 @ 2.33GHz",
      "benchmark": 498,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium D 940 @ 3.20GHz",
      "benchmark": 498,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion X2 Dual Core Mobile RM-70",
      "benchmark": 497,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6735",
      "benchmark": 497,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo T5270 @ 1.40GHz",
      "benchmark": 496,
      "category": "Laptop"
    },
    {
      "cpu": "MT8735",
      "benchmark": 495,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron G460 @ 1.80GHz",
      "benchmark": 494,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium D 830 @ 3.00GHz",
      "benchmark": 494,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom D2700 @ 2.13GHz",
      "benchmark": 492,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron E1200 @ 1.60GHz",
      "benchmark": 492,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo L7300 @ 1.40GHz",
      "benchmark": 489,
      "category": "Laptop"
    },
    {
      "cpu": "rockchip,rk3368",
      "benchmark": 489,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom Z3770D @ 1.49GHz",
      "benchmark": 488,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N3010 @ 1.04GHz",
      "benchmark": 486,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2815 @ 1.86GHz",
      "benchmark": 486,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo U9300 @ 1.20GHz",
      "benchmark": 485,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 3100+",
      "benchmark": 484,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i3-330UM @ 1.20GHz",
      "benchmark": 484,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5250 @ 1.50GHz",
      "benchmark": 483,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G465 @ 1.90GHz",
      "benchmark": 480,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N2806 @ 1.60GHz",
      "benchmark": 479,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-58",
      "benchmark": 478,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II Neo N36L Dual-Core",
      "benchmark": 478,
      "category": "Laptop"
    },
    {
      "cpu": "MT8167A",
      "benchmark": 478,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium SU4100 @ 1.30GHz",
      "benchmark": 476,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E1-2200 APU",
      "benchmark": 474,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron U3400 @ 1.07GHz",
      "benchmark": 473,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 140",
      "benchmark": 471,
      "category": "Desktop"
    },
    {
      "cpu": "AMD TurionX2 Dual Core Mobile RM-72",
      "benchmark": 471,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 847 @ 1.10GHz",
      "benchmark": 470,
      "category": "Laptop"
    },
    {
      "cpu": "AMD G-T56N",
      "benchmark": 470,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2820 @ 2.13GHz",
      "benchmark": 469,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium Extreme Edition 955 @ 3.46GHz",
      "benchmark": 469,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Duo L7100 @ 1.20GHz",
      "benchmark": 467,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 FX-59",
      "benchmark": 465,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 64 X2 QL-60",
      "benchmark": 465,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom E3827 @ 1.74GHz",
      "benchmark": 460,
      "category": "Laptop"
    },
    {
      "cpu": "Unisoc SC9832e",
      "benchmark": 457,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8917",
      "benchmark": 456,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc QM215",
      "benchmark": 455,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-56",
      "benchmark": 453,
      "category": "Laptop"
    },
    {
      "cpu": "QCT APQ8064 DEB",
      "benchmark": 453,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core Duo T2600 @ 2.16GHz",
      "benchmark": 450,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2807 @ 1.58GHz",
      "benchmark": 450,
      "category": "Laptop"
    },
    {
      "cpu": "MT8167D",
      "benchmark": 450,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "QCT APQ8064 FLO",
      "benchmark": 449,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron SU2300 @ 1.20GHz",
      "benchmark": 445,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 450 @ 2.20GHz",
      "benchmark": 445,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 925 @ 2.30GHz",
      "benchmark": 444,
      "category": "Laptop"
    },
    {
      "cpu": "SAMSUNG JF",
      "benchmark": 443,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E2-1800 APU",
      "benchmark": 442,
      "category": "Desktop"
    },
    {
      "cpu": "AMD G-T56E",
      "benchmark": 442,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo T5200 @ 1.60GHz",
      "benchmark": 438,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-50",
      "benchmark": 436,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8920",
      "benchmark": 436,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT8161P",
      "benchmark": 434,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom D2560 @ 2.00GHz",
      "benchmark": 433,
      "category": "Desktop"
    },
    {
      "cpu": "AMD A4-1250 APU",
      "benchmark": 432,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6737",
      "benchmark": 432,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion Neo X2 Dual Core L625",
      "benchmark": 431,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon LE-1640",
      "benchmark": 430,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom N2800 @ 1.86GHz",
      "benchmark": 429,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron G440 @ 1.60GHz",
      "benchmark": 426,
      "category": "Desktop"
    },
    {
      "cpu": "Qualcomm MSM8916",
      "benchmark": 424,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium D 915 @ 2.80GHz",
      "benchmark": 423,
      "category": "Desktop"
    },
    {
      "cpu": "AMD E-450 APU",
      "benchmark": 422,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon LE-1620",
      "benchmark": 421,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron N2810 @ 2.00GHz",
      "benchmark": 420,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon LE-1660",
      "benchmark": 416,
      "category": "Desktop"
    },
    {
      "cpu": "AMD G-T48E",
      "benchmark": 416,
      "category": "Laptop"
    },
    {
      "cpu": "Samsung GrandPrimePlus LTE LTN OPEN rev04 board ba",
      "benchmark": 415,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E-350",
      "benchmark": 414,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "AMD Athlon LE-1600",
      "benchmark": 412,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 1640B",
      "benchmark": 412,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 900 @ 2.20GHz",
      "benchmark": 409,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT6739WW",
      "benchmark": 409,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core Duo T2500 @ 2.00GHz",
      "benchmark": 408,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom D2550 @ 1.86GHz",
      "benchmark": 408,
      "category": "Desktop"
    },
    {
      "cpu": "AMD E1-2100 APU",
      "benchmark": 407,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo U7500 @ 1.06GHz",
      "benchmark": 405,
      "category": "Laptop"
    },
    {
      "cpu": "MT8735P",
      "benchmark": 405,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 FX-55",
      "benchmark": 404,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core Duo L2500 @ 1.83GHz",
      "benchmark": 404,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom D510 @ 1.66GHz",
      "benchmark": 404,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core Duo T2450 @ 2.00GHz",
      "benchmark": 404,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E-350 APU",
      "benchmark": 401,
      "category": "Desktop, Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-42",
      "benchmark": 400,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron LE-1300",
      "benchmark": 400,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core i7-2630UM @ 1.60GHz",
      "benchmark": 400,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom D525 @ 1.80GHz",
      "benchmark": 399,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung Exynos 7570",
      "benchmark": 396,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon 64 3700+",
      "benchmark": 394,
      "category": "Desktop"
    },
    {
      "cpu": "VIA Nano X2 U4025 @ 1.2 GHz",
      "benchmark": 393,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 807 @ 1.50GHz",
      "benchmark": 392,
      "category": "Laptop"
    },
    {
      "cpu": "AMD A4-1200 APU",
      "benchmark": 391,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E1-1500 APU",
      "benchmark": 390,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo L2300 @ 1.50GHz",
      "benchmark": 387,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II Neo K325 Dual-Core",
      "benchmark": 387,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom E3825 @ 1.33GHz",
      "benchmark": 385,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 3.73GHz",
      "benchmark": 385,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-44",
      "benchmark": 384,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo T2350 @ 1.86GHz",
      "benchmark": 384,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 X2 Mobile TL-52",
      "benchmark": 384,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T2130 @ 1.86GHz",
      "benchmark": 382,
      "category": "Laptop"
    },
    {
      "cpu": "QCT APQ8064 AWIFI",
      "benchmark": 382,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8916",
      "benchmark": 382,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Athlon X2 Dual Core L310",
      "benchmark": 379,
      "category": "Laptop"
    },
    {
      "cpu": "AMD V140",
      "benchmark": 379,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium D 805 @ 2.66GHz",
      "benchmark": 374,
      "category": "Desktop"
    },
    {
      "cpu": "AMD E1-1200 APU",
      "benchmark": 372,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron D 360 @ 3.46GHz",
      "benchmark": 372,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom 330 @ 1.60GHz",
      "benchmark": 371,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 827E @ 1.40GHz",
      "benchmark": 371,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 440 @ 2.00GHz",
      "benchmark": 368,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 560 @ 2.13GHz",
      "benchmark": 365,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc APQ8017",
      "benchmark": 365,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Sempron 3600+",
      "benchmark": 364,
      "category": "Desktop"
    },
    {
      "cpu": "AMD V120",
      "benchmark": 362,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile MK-38",
      "benchmark": 362,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 3800+",
      "benchmark": 360,
      "category": "Desktop"
    },
    {
      "cpu": "MediaTek MT6739WA",
      "benchmark": 360,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD E-300 APU",
      "benchmark": 359,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II 160u",
      "benchmark": 358,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II 170u",
      "benchmark": 357,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile AMD Athlon 64 3700+",
      "benchmark": 356,
      "category": "Laptop"
    },
    {
      "cpu": "Manta",
      "benchmark": 356,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm Technologies, Inc QCM2150",
      "benchmark": 356,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MediaTek MT6737M",
      "benchmark": 355,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Sempron LE-1200",
      "benchmark": 349,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core Duo T2400 @ 1.83GHz",
      "benchmark": 349,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo L2400 @ 1.66GHz",
      "benchmark": 348,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T2080 @ 1.73GHz",
      "benchmark": 348,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo T2250 @ 1.73GHz",
      "benchmark": 347,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core2 Duo U7700 @ 1.33GHz",
      "benchmark": 345,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 570 @ 2.26GHz",
      "benchmark": 344,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 3.33GHz",
      "benchmark": 344,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc APQ8016",
      "benchmark": 343,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD V160",
      "benchmark": 337,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8928",
      "benchmark": 337,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-40",
      "benchmark": 336,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N570 @ 1.66GHz",
      "benchmark": 335,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron N2805 @ 1.46GHz",
      "benchmark": 335,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 3800+",
      "benchmark": 335,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-37",
      "benchmark": 334,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile MK-36",
      "benchmark": 334,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 2850e",
      "benchmark": 333,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile AMD Athlon 64 3400+",
      "benchmark": 333,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT8167B",
      "benchmark": 332,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm MSM8228",
      "benchmark": 332,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core Duo T2300 @ 1.66GHz",
      "benchmark": 330,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium T2060 @ 1.60GHz",
      "benchmark": 330,
      "category": "Laptop"
    },
    {
      "cpu": "MT8765WB",
      "benchmark": 328,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Pentium 4 3.20GHz",
      "benchmark": 326,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile AMD Athlon 64 3200+",
      "benchmark": 326,
      "category": "Laptop"
    },
    {
      "cpu": "MT6735P",
      "benchmark": 326,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Unisoc SC7731e",
      "benchmark": 324,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom N2600 @ 1.60GHz",
      "benchmark": 323,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 3400+",
      "benchmark": 321,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo T2050 @ 1.60GHz",
      "benchmark": 320,
      "category": "Desktop"
    },
    {
      "cpu": "Rockchip RK3328",
      "benchmark": 319,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Duo U7600 @ 1.20GHz",
      "benchmark": 316,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile MT-37",
      "benchmark": 315,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 3300+",
      "benchmark": 315,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Sempron LE-1100",
      "benchmark": 315,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 3.60GHz",
      "benchmark": 315,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron D 420 @ 1.60GHz",
      "benchmark": 313,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 3.00GHz",
      "benchmark": 313,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile AMD Athlon 64 4000+",
      "benchmark": 313,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 3.80GHz",
      "benchmark": 313,
      "category": "Desktop"
    },
    {
      "cpu": "Samsung GrandPrimePlus LTE CIS rev04 board based o",
      "benchmark": 312,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6739WM",
      "benchmark": 310,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "MT6735M",
      "benchmark": 308,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron M 530 @ 1.73GHz",
      "benchmark": 307,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom E3826 @ 1.46GHz",
      "benchmark": 304,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon 64 3000+",
      "benchmark": 303,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon II Neo K125",
      "benchmark": 302,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 3600+",
      "benchmark": 302,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron LE-1250",
      "benchmark": 301,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 550 @ 2.00GHz",
      "benchmark": 301,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8926",
      "benchmark": 300,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Sempron 3100+",
      "benchmark": 298,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z2760 @ 1.80GHz",
      "benchmark": 298,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon II Neo K145",
      "benchmark": 298,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 3.46GHz",
      "benchmark": 295,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile AMD Sempron 3300+",
      "benchmark": 294,
      "category": "Laptop"
    },
    {
      "cpu": "MediaTek MT8735B",
      "benchmark": 294,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm MSM8626",
      "benchmark": 294,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "UNIVERSAL3475",
      "benchmark": 294,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Celeron 430 @ 1.80GHz",
      "benchmark": 293,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 3.40GHz",
      "benchmark": 293,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Sempron 3400+",
      "benchmark": 292,
      "category": "Desktop"
    },
    {
      "cpu": "AMD G-T40N",
      "benchmark": 292,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 2.10GHz",
      "benchmark": 292,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8216",
      "benchmark": 292,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Qualcomm APQ8026",
      "benchmark": 291,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Mobile AMD Sempron 3500+",
      "benchmark": 290,
      "category": "Laptop"
    },
    {
      "cpu": "AMD G-T40E",
      "benchmark": 289,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 3200+",
      "benchmark": 288,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Sempron SI-40",
      "benchmark": 288,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile MT-32",
      "benchmark": 286,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc APQ8009",
      "benchmark": 286,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-32",
      "benchmark": 285,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 540 @ 1.86GHz",
      "benchmark": 283,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron D 352 @ 3.20GHz",
      "benchmark": 283,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium M 1.80GHz",
      "benchmark": 280,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile MT-34",
      "benchmark": 279,
      "category": "Laptop"
    },
    {
      "cpu": "VIA Nano L2100@1800MHz",
      "benchmark": 279,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-30",
      "benchmark": 277,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-34",
      "benchmark": 277,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 3100+",
      "benchmark": 277,
      "category": "Laptop"
    },
    {
      "cpu": "Rockchip RK3326",
      "benchmark": 277,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom D2500 @ 1.86GHz",
      "benchmark": 275,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon 2650e",
      "benchmark": 274,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium M 2.13GHz",
      "benchmark": 271,
      "category": "Laptop"
    },
    {
      "cpu": "VIA Nano U2250 (1.6GHz Capable)",
      "benchmark": 270,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 2.00GHz",
      "benchmark": 270,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 3000+",
      "benchmark": 269,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 3000+",
      "benchmark": 268,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 743 @ 1.30GHz",
      "benchmark": 268,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 530 @ 1.73GHz",
      "benchmark": 268,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 723 @ 1.20GHz",
      "benchmark": 267,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm Technologies, Inc MSM8909",
      "benchmark": 267,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Atom N550 @ 1.50GHz",
      "benchmark": 265,
      "category": "Laptop"
    },
    {
      "cpu": "Qualcomm MSM8226",
      "benchmark": 265,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Z-60 APU",
      "benchmark": 262,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon XP 3000+",
      "benchmark": 262,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Sempron SI-42",
      "benchmark": 261,
      "category": "Laptop"
    },
    {
      "cpu": "AMD C-50",
      "benchmark": 260,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 2600+",
      "benchmark": 256,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo U2400 @ 1.06GHz",
      "benchmark": 255,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Turion 64 Mobile ML-28",
      "benchmark": 254,
      "category": "Laptop"
    },
    {
      "cpu": "VIA Nano L2007@1600MHz",
      "benchmark": 254,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Solo T1400 @ 1.83GHz",
      "benchmark": 253,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 2600+",
      "benchmark": 253,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core2 Solo U3500 @ 1.40GHz",
      "benchmark": 252,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 1.70GHz",
      "benchmark": 252,
      "category": "Laptop"
    },
    {
      "cpu": "msm8960dt",
      "benchmark": 252,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Sempron LE-1150",
      "benchmark": 251,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron D 356 @ 3.33GHz",
      "benchmark": 251,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 3.06GHz",
      "benchmark": 249,
      "category": "Desktop"
    },
    {
      "cpu": "AMD GX-210JA SOC",
      "benchmark": 248,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron M120",
      "benchmark": 247,
      "category": "Laptop"
    },
    {
      "cpu": "SAMSUNG SERRANO",
      "benchmark": 247,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "AMD Turion 64 Mobile MT-30",
      "benchmark": 246,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 3200+",
      "benchmark": 245,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 2800+",
      "benchmark": 243,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 807UE @ 1.00GHz",
      "benchmark": 241,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon 2500+",
      "benchmark": 241,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 2600+",
      "benchmark": 241,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1.50GHz",
      "benchmark": 240,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1.70GHz",
      "benchmark": 239,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium SU2700 @ 1.30GHz",
      "benchmark": 239,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1.86GHz",
      "benchmark": 238,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 2800+",
      "benchmark": 238,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 3000+",
      "benchmark": 238,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1700MHz",
      "benchmark": 237,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 2200+",
      "benchmark": 237,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 2800+",
      "benchmark": 237,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.80GHz",
      "benchmark": 236,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron 420 @ 1.60GHz",
      "benchmark": 235,
      "category": "Desktop"
    },
    {
      "cpu": "Rockchip RK3229",
      "benchmark": 234,
      "category": "Mobile/Embedded"
    },
    {
      "cpu": "Intel Core2 Solo U2100 @ 1.06GHz",
      "benchmark": 233,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon 4 2400+",
      "benchmark": 233,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 3500+",
      "benchmark": 232,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 3.20GHz",
      "benchmark": 232,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron D 347 @ 3.06GHz",
      "benchmark": 232,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 450 @ 2.00GHz",
      "benchmark": 230,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1.60GHz",
      "benchmark": 229,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 2.26GHz",
      "benchmark": 227,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 2500+",
      "benchmark": 226,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1.40GHz",
      "benchmark": 225,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 2400+",
      "benchmark": 225,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N470 @ 1.83GHz",
      "benchmark": 224,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom D425 @ 1.80GHz",
      "benchmark": 222,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 360 1.40GHz",
      "benchmark": 221,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Duo U2500 @ 1.20GHz",
      "benchmark": 220,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 3.06GHz",
      "benchmark": 220,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 1500MHz",
      "benchmark": 217,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 1.50GHz",
      "benchmark": 216,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.60GHz",
      "benchmark": 215,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 520 @ 1.60GHz",
      "benchmark": 215,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 723 @ 1.20GHz",
      "benchmark": 213,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom 230 @ 1.60GHz",
      "benchmark": 210,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core Solo T1300 @ 1.66GHz",
      "benchmark": 210,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 220 @ 1.20GHz",
      "benchmark": 209,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium M 1400MHz",
      "benchmark": 208,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 2300+",
      "benchmark": 207,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Sempron 2500+",
      "benchmark": 207,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium M 1.73GHz",
      "benchmark": 205,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 2.80GHz",
      "benchmark": 205,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Sempron 2400+",
      "benchmark": 205,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 1.30GHz",
      "benchmark": 205,
      "category": "Laptop"
    },
    {
      "cpu": "VIA Nano U2500@1200MHz",
      "benchmark": 199,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1300MHz",
      "benchmark": 197,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 1300MHz",
      "benchmark": 197,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1.30GHz",
      "benchmark": 196,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 2000+",
      "benchmark": 196,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon XP 1800+",
      "benchmark": 195,
      "category": "Desktop"
    },
    {
      "cpu": "AMD Athlon XP 2000+",
      "benchmark": 195,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium III 1400S @ 1400MHz",
      "benchmark": 194,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Core Solo T1350 @ 1.86GHz",
      "benchmark": 194,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1600MHz",
      "benchmark": 193,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium III 1400 @ 1400MHz",
      "benchmark": 193,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 1800+",
      "benchmark": 193,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon MP-M 2400+",
      "benchmark": 192,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 2.80GHz",
      "benchmark": 190,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 1.60GHz",
      "benchmark": 190,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N2100 @ 1.60GHz",
      "benchmark": 188,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1500MHz",
      "benchmark": 188,
      "category": "Laptop"
    },
    {
      "cpu": "VIA Nano U3500@1000MHz",
      "benchmark": 184,
      "category": "Laptop"
    },
    {
      "cpu": "AMD V105",
      "benchmark": 184,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Sempron 2200+",
      "benchmark": 184,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z530 @ 1.60GHz",
      "benchmark": 183,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Celeron 1333MHz",
      "benchmark": 183,
      "category": "Laptop"
    },
    {
      "cpu": "AMD E-240",
      "benchmark": 182,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 2.66GHz",
      "benchmark": 182,
      "category": "Desktop"
    },
    {
      "cpu": "VIA Nano U2250@1300+MHz",
      "benchmark": 179,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N455 @ 1.66GHz",
      "benchmark": 179,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N475 @ 1.83GHz",
      "benchmark": 179,
      "category": "Laptop"
    },
    {
      "cpu": "AMD C-30",
      "benchmark": 178,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N450 @ 1.66GHz",
      "benchmark": 177,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom D410 @ 1.66GHz",
      "benchmark": 177,
      "category": "Desktop"
    },
    {
      "cpu": "AMD G-T52R",
      "benchmark": 177,
      "category": "Laptop"
    },
    {
      "cpu": "AMD Athlon XP 1700+",
      "benchmark": 176,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom N270 @ 1.60GHz",
      "benchmark": 175,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom N280 @ 1.66GHz",
      "benchmark": 175,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 215 @ 1.33GHz",
      "benchmark": 174,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon MP-M 1800+",
      "benchmark": 173,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 440 @ 1.86GHz",
      "benchmark": 169,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 430 @ 1.73GHz",
      "benchmark": 169,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Athlon XP-M 1600+",
      "benchmark": 169,
      "category": "Laptop"
    },
    {
      "cpu": "VIA Nano L2207@1600MHz",
      "benchmark": 165,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile AMD Sempron 2100+",
      "benchmark": 164,
      "category": "Laptop, Mobile/Embedded"
    },
    {
      "cpu": "Intel Core Solo U1500 @ 1.33GHz",
      "benchmark": 164,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium III Mobile 1133MHz",
      "benchmark": 164,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.53GHz",
      "benchmark": 162,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 2.50GHz",
      "benchmark": 160,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium III Mobile 1066MHz",
      "benchmark": 160,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom E3815 @ 1.46GHz",
      "benchmark": 159,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Atom Z670 @ 1.50GHz",
      "benchmark": 158,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.20GHz",
      "benchmark": 157,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 2.66GHz",
      "benchmark": 157,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium M 1000MHz",
      "benchmark": 156,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium III Mobile 1200MHz",
      "benchmark": 156,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 1200MHz",
      "benchmark": 155,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 3.83GHz",
      "benchmark": 154,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile Intel Celeron 2.40GHz",
      "benchmark": 154,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.26GHz",
      "benchmark": 151,
      "category": "Desktop"
    },
    {
      "cpu": "VIA C7-D 1800MHz",
      "benchmark": 150,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 2.93GHz",
      "benchmark": 150,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 1.00GHz",
      "benchmark": 149,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Celeron 2.20GHz",
      "benchmark": 147,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium III - M 1200MHz",
      "benchmark": 146,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 - M 2.20GHz",
      "benchmark": 143,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium M 900MHz",
      "benchmark": 141,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 420 @ 1.60GHz",
      "benchmark": 139,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 - M 2.40GHz",
      "benchmark": 139,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 - M 2.00GHz",
      "benchmark": 138,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 Mobile 1.90GHz",
      "benchmark": 136,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.00GHz",
      "benchmark": 133,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile Intel Celeron 2.00GHz",
      "benchmark": 133,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 Mobile 2.00GHz",
      "benchmark": 132,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 2.40GHz",
      "benchmark": 131,
      "category": "Desktop"
    },
    {
      "cpu": "Mobile Intel Pentium III - M 933MHz",
      "benchmark": 130,
      "category": "Laptop"
    },
    {
      "cpu": "AMD G-T44R",
      "benchmark": 130,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Solo U1400 @ 1.20GHz",
      "benchmark": 130,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Core Solo U1300 @ 1.06GHz",
      "benchmark": 127,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 443 @ 1.20GHz",
      "benchmark": 125,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 2.00GHz",
      "benchmark": 125,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Celeron M 410 @ 1.46GHz",
      "benchmark": 123,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron M 900MHz",
      "benchmark": 123,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Atom Z520 @ 1.33GHz",
      "benchmark": 122,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Celeron 1.80GHz",
      "benchmark": 121,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 - M 1.70GHz",
      "benchmark": 121,
      "category": "Laptop"
    },
    {
      "cpu": "AMD G-T40R",
      "benchmark": 120,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium III Mobile 800MHz",
      "benchmark": 119,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Pentium 4 - M 1.80GHz",
      "benchmark": 119,
      "category": "Laptop"
    },
    {
      "cpu": "Mobile Intel Celeron 1.70GHz",
      "benchmark": 118,
      "category": "Laptop"
    },
    {
      "cpu": "VIA C7-M 1600MHz",
      "benchmark": 116,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 Mobile 1.60GHz",
      "benchmark": 116,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 1.80GHz",
      "benchmark": 115,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 1800MHz",
      "benchmark": 114,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 Mobile 1.80GHz",
      "benchmark": 114,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron B710 @ 1.60GHz",
      "benchmark": 106,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 1.90GHz",
      "benchmark": 104,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 1700MHz",
      "benchmark": 100,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium III Mobile 866MHz",
      "benchmark": 99,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Celeron 1.80GHz",
      "benchmark": 96,
      "category": "Desktop"
    },
    {
      "cpu": "VIA Eden 1200MHz",
      "benchmark": 93,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 1.50GHz",
      "benchmark": 86,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 1.70GHz",
      "benchmark": 86,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 1.60GHz",
      "benchmark": 84,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 1400MHz",
      "benchmark": 83,
      "category": "Desktop"
    },
    {
      "cpu": "Intel Pentium 4 1500MHz",
      "benchmark": 81,
      "category": "Desktop"
    },
    {
      "cpu": "VIA Eden 1000MHz",
      "benchmark": 80,
      "category": "Laptop"
    },
    {
      "cpu": "Intel Pentium 4 1300MHz",
      "benchmark": 77,
      "category": "Desktop"
    }
  ];

const seedcpu = () => CpuInfo.bulkCreate(cpu);

module.exports = seedcpu;