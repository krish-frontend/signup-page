// for (i=0; i<20; i++){
//     console.log(i)
// }

// let i=10;

// while(i>9){
//     console.log(i);
//     break
// }

// for(i=0; i<10; i++){
//     if(i<5){
//         break;
//     }
//     console.log(i);
    
// }

// let arr=[2,3,4,5,6]

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i].toString());
// }

let arr=[2,3,4,5,6,7]

arr.forEach(function(item){
    let arr2=item*2;
    return arr2;
})
console.log(arr2)