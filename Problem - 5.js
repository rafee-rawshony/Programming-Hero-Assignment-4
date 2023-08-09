function canPay(changeArray, totalDue) {
    if (changeArray.length > 0) {
        var total = 0;
        for (let i = 0; i < changeArray.length; i++) {
            total = total + changeArray[i];
        }
        if (total >= totalDue) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log("It is an empty array");
    }
}


console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10)); 
console.log(canPay([], 5));
console.log(canPay([10, 20, 50], 40));
