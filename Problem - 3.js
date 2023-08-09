function sortMaker(arr) {
    var a = arr[0];
    var b = arr[1];
    if(a>0 && b>0){
        if(a==b){
            return "equal";
        } else {
            if(a>b){
                return arr;
            } else {
                let temp = a;
                a = b;
                b = temp;
                arr[0] = a;
                arr[1] = b;
                return arr;
            }
        }
    } else {
        return "Invalid Input";
    }
}


console.log(sortMaker([2, 3])); 
console.log(sortMaker([4, 2])); 
console.log(sortMaker([4, 4])); 
console.log(sortMaker([1, 2])); 
console.log(sortMaker([4, -2])); 
console.log(sortMaker("invalid")); 
console.log(sortMaker([1, 0])); 