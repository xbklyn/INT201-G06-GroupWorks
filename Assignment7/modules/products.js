// product management file
// Theme: Monitor
// tan add template
// donut add products

import Monitor from "./monitor.js";

const products = [];

products.push(new Monitor(1, "BENQ ZOWIE XL2731", 27, "1920x1080"));
products[0]._price = 9900;
products[0]._stock = 0;
products[0]._imgURL = "./images/ZOWIE-XL2731.jpg";

products.push(new Monitor(2, "BENQ MOBIUZ EX3415R", 34, "3440x1440"));
products[1]._price = 35900;
products[1]._stock = 5;
products[1]._imgURL = "./images/MOBIUZ-EX3415R.jpg";

products.push(new Monitor(3, "BENQ MOBIUZ EX2710R", 27, "2560x1440"));
products[2]._price = 21900;
products[2]._stock = 10;
products[2]._imgURL = "./images/MOBIUZ-EX2710R.jpg";

products.push(new Monitor(4, "BENQ EW2780Q", 27, "2560x1440"));
products[3]._price = 9500;
products[3]._stock = 15;
products[3]._imgURL = "./images/EW2780Q.jpg";

products.push(new Monitor(5, "BENQ EW2480", 24, "1920x1080"));
products[4]._price = 5500;
products[4]._stock = 22;
products[4]._imgURL = "./images/EW2480.jpg";

products.push(new Monitor(6, "BENQ EX3203R", 31.5, "2560x1440"));
products[5]._price = 16900;
products[5]._stock = 2;
products[5]._imgURL = "./images/EX3203R.jpg";

products.push(new Monitor(7, "BENQ ZOWIE XL2546", 24.5, "1920x1080"));
products[6]._price = 15900;
products[6]._stock = 7;
products[6]._imgURL = "./images/ZOWIE-XL2546.jpg";

products.push(new Monitor(8, "BENQ GW2780", 27, "1920x1080"));
products[7]._price = 5900;
products[7]._stock = 0;
products[7]._imgURL = "./images/GW2780.jpg";

export { products as default };
