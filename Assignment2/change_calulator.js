const changeCalculation = (totalPrice, fromCustomer) => {
    const banknotes = new Object; // empty obj for storing the amount of each banknote
    let change = {
        "totalPrice": totalPrice,
        "customerPay": fromCustomer,
        "getChange": fromCustomer - totalPrice
    }; // for displaying the customer's total change with the amount of each banknote

    if (change.getChange < 0) {
        return "Not enough money!";
    } else if (change.getChange == 0) {
        return change;
    } else {
        let tempChange = change.getChange;
        let temp = 0;
        let tempNotes = [500, 100, 50, 20, 10, 5, 2, 1];
        for (const note of tempNotes) {
            // calculating the amount of each banknote that the customer will receive
            // and adding each one to the banknotes obj as a new property
            temp = tempChange % note;
            tempChange = tempChange - temp;
            if ((tempChange / note) > 0) {
                banknotes[note] = tempChange / note;
            }
            tempChange = temp;
        }
        change["change"] = banknotes; // adding the banknotes obj as a new property
    }
    return change;
}

//test section
console.log(changeCalculation(1000, 100));
console.log(changeCalculation(1000, 1000));
console.log(changeCalculation(120, 132));
console.log(changeCalculation(0, 132));
console.log(changeCalculation(1200, 4438));