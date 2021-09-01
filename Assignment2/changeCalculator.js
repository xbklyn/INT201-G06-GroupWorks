const Notes = {         //สร้าง object notes เพื่อเก็บค่าแบงค์และจำนวนแบงค์ที่มีอยู่
     "500-Notes" : 0,
     "100-Notes" : 0,
     "50-Notes" : 0,
     "20-Notes" : 0,
     "10-Notes" : 0,
     "5-Notes" : 0,
     "2-Notes" : 0,
     "1-Notes" : 0,
     add (key , value) {Notes[`${key}-Notes`] += value;}, //function สำหรับเพิ่มแบงค์ใน Notes
     remove (key) {Notes[`${key}-Notes`] -= 1;}, //function สำหรับนำแบงค์ออกจาก Notes
     check (key) {return Notes[`${key}-Notes`] > 0;}//funtion สำหรับcheckจำนวนแบงค์ที่มีอยู่
}

function changeCalculation(totalPrice, moneyFromCustomer){ //funtion ที่ใช้คำนวณเงินทอนโดยรับค่าราคาสินค้าทั้งหมดและเงินที่ลูกค้าชำระ   // totalPrice = 300 , moneyCustomer = 550;
    let changes = { 
        change : moneyFromCustomer - totalPrice  //change = 250;
    };
    let totalChange = changes.change; // totalChange = 250
    
        if(moneyFromCustomer > totalPrice){    
            let notes = [500,100,50,20,10,5,2];
            for(let note of notes){ //loop#3 note = 50;
                while(totalChange - note >= 0 ){  // 0 - 50 >= 0
                    totalChange -= note;  //totalChange = 0
                    changes[`${note}-Change`] = changes[`${note}-Change`] === undefined ?  1 : changes[`${note}-Change`] += 1 ; 
                    if(Notes.check(note)){Notes.remove(note)} else return `Not enough changes.`
                }

            }
            if(totalChange > 0 ) changes[`1-Change`] = totalChange;
        }else if (moneyFromCustomer == totalPrice){
             return `No change !`
        }else return `Not enough money`
    return changes
}


Notes.add(500 , 100);
Notes.add(100 , 100);
Notes.add(50 , 100);
Notes.add(20 , 100);
Notes.add(10 , 100);
Notes.add(5 , 100);
Notes.add(2 , 100);
Notes.add(1 , 100);
console.log(Notes);

console.log(changeCalculation(1000,2000));
console.log(changeCalculation(120,132));
console.log(changeCalculation(0,132));
console.log(changeCalculation(120,132));
console.log(changeCalculation(20,10));