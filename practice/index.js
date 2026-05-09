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

// let arr=[2,3,4,5,6,7]

// // arr.forEach(function(item){
// //     console.log(item)
// // })

// let arr2=arr.map(function(item){
//     return item*2;
// })

// console.log(arr2)

// function add(a,b,cb){
//     let result=a/b;
//     cb(result)
// }

// function cb(a){
//     console.log(a)
// }

// add(2,6,cb)

// function createcount(){
//     let count=0;
//     return function(){
//         count++;
//         return count
//     }
// }

// // createcount()
// const counter1=createcount();

// counter1();
// counter1();

useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
