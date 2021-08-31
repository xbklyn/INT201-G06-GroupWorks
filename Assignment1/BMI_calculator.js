const bmiMetric = (cm, kg) => {
    let meter = cm / 100;
    return (kg / Math.pow(meter, 2)).toFixed(2);
}
const bmiImperial = (inch, pound) => {
    let cm = inch * 2.54;
    let kg = pound / 2.205;
    return bmiMetric(cm, kg);
}
//metric unit
console.log(`BMI (metric unit): ${bmiMetric(167, 87)}`); // 31.20
console.log(`BMI (metric unit): ${bmiMetric(173, 50)}`); // 16.71
console.log(`BMI (metric unit): ${bmiMetric(151, 45)}`); // 19.74
//imperial unit
console.log(`BMI (imperial unit): ${bmiImperial(39, 36.5)}`); // 16.87
console.log(`BMI (imperial unit): ${bmiImperial(42, 39.45)}`); // 15.72
console.log(`BMI (imperial unit): ${bmiImperial(35, 27.21)}`); // 15.61