// product management file
// Theme: Monitor

import Monitor from "./monitor.js";

const products = [];

products.push(new Monitor(1, "BENQ ZOWIE XL2731", 27, "1920x1080"));
products[0].price = 9900;
products[0].stock = 0;
products[0].imgURL = "./images/ZOWIE-XL2731.jpg";

products.push(new Monitor(2, "BENQ MOBIUZ EX3415R", 34, "3440x1440"));
products[1].price = 35900;
products[1].stock = 59;
products[1].imgURL = "./images/MOBIUZ-EX3415R.jpg";

products.push(new Monitor(3, "BENQ MOBIUZ EX2710R", 27, "2560x1440"));
products[2].price = 21900;
products[2].stock = 104;
products[2].imgURL = "./images/MOBIUZ-EX2710R.jpg";

products.push(new Monitor(4, "BENQ EW2780Q", 27, "2560x1440"));
products[3].price = 9500;
products[3].stock = 156;
products[3].imgURL = "./images/EW2780Q.jpg";

products.push(new Monitor(5, "BENQ EW2480", 24, "1920x1080"));
products[4].price = 5500;
products[4].stock = 222;
products[4].imgURL = "./images/EW2480.jpg";

products.push(new Monitor(6, "BENQ EX3203R", 31.5, "2560x1440"));
products[5].price = 16900;
products[5].stock = 25;
products[5].imgURL = "./images/EX3203R.jpg";

products.push(new Monitor(7, "BENQ ZOWIE XL2546", 24.5, "1920x1080"));
products[6].price = 15900;
products[6].stock = 79;
products[6].imgURL = "./images/ZOWIE-XL2546.jpg";

products.push(new Monitor(8, "BENQ GW2780", 27, "1920x1080"));
products[7].price = 5900;
products[7].stock = 0;
products[7].imgURL = "./images/GW2780.jpg";

export { products as default };
