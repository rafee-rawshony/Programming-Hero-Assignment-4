function findAddress(obj) {
    var p1 = obj.street;
    var p2 = obj.house;
    var p3 = obj.society;
    var result ;
    if(p1!==undefined){
        result=p1+","
    }else{
        result = ","
    }
    if(p2!==undefined){
        result = result+p2+", "
    }else{
        result = result+", "
    }
    if(p3!==undefined){
        result = result+p3
    }else{
        result = result+"__"
    }
    return result;
}


console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" })); 
console.log(findAddress({ street: 10, society: "Earth Perfect" })); 
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 })); 
console.log(findAddress("hello")); 
