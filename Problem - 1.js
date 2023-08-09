function cubeNumber(number) {
    if (typeof number !== 'number' || number <= 0) {
        return "cube";
    }

    return number ** 3;
}

console.log(cubeNumber(11)); 
console.log(cubeNumber(4)); 
console.log(cubeNumber(-2));
console.log(cubeNumber("hello"));