// product management file
// Theme: Monitor
// tan add template
// donut add products

class Monitor {
    constructor(code, name = "unknown", size = 0, stock = 0, resolution = "1440x1080") {
        this._code = code;
        this._name = name;
        this._size = size;
        this._stock = stock;
        this._resolution = resolution;
        this._imgURL = "URL";
    }

    //set
    //attributes

    //get
    //attributes

    //function
    //add
    //delete
}

// const products = [
// 	{
// 		code: 0,
// 		name: "My Product",
// 		size: 0,
// 		resolution: "1x1",
// 		price: 0,
// 		stock: 0,
// 		imageURL: "link to image",
// 	},
// ];



// add products here
const products = [{
    code: 1,
    name: "BENQ ZOWIE XL2731",
    size: 27,
    resolution: "1920 x 1080",
    price: 9900,
    stock: 0,
    imageURL: "../images/ZOWIE-XL2731"
}, {
    code: 2,
    name: "BENQ MOBIUZ EX3415R",
    size: 34,
    resolution: "3440 x 1440",
    price: 35900,
    stock: 0,
    imageURL: "../images/MOBIUZ-EX3415R"
}, {
    code: 3,
    name: "BENQ MOBIUZ EX2710R",
    size: 27,
    resolution: "2560 x 1440",
    price: 21900,
    stock: 0,
    imageURL: "../images/MOBIUZ-EX2710R"
}, {
    code: 4,
    name: "BENQ EW2780Q",
    size: 27,
    resolution: "2560 x 1440",
    price: 9500,
    stock: 0,
    imageURL: "../images/EW2780Q"
}, {
    code: 5,
    name: "BENQ EW2480",
    size: 24,
    resolution: "1920 x 1080",
    price: 5500,
    stock: 0,
    imageURL: "../images/EW2480"
}, {
    code: 6,
    name: "BENQ EX3203R",
    size: 31.5,
    resolution: "2560 x 1440",
    price: 16900,
    stock: 0,
    imageURL: "../images/EX3203R"
}, {
    code: 7,
    name: "BENQ ZOWIE XL2546",
    size: 24.5,
    resolution: "1920 x 1080",
    price: 15900,
    stock: 0,
    imageURL: "../images/ZOWIE-XL2546"
}, {
    code: 8,
    name: "BENQ GW2780",
    size: 27,
    resolution: "1920 x 1080",
    price: 5900,
    stock: 0,
    imageURL: "../images/GW2780"
}]

// export { products };