// function binarySearch(arr,target){
// let high = arr.length-1;
// let low = 0;
// // let i = 0
// while(low<=high){
// let mid = Math.floor((low+high)/2);
// if(arr[mid]===target){
//     return 1;
// }
// else if(arr[mid]>target){
//     high = mid-1;
// }
// else{
//     low=mid+1
// }
// }
// return -1;
// };
// let arr1 = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
//     51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//     61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
//     71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
//     81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
//     91, 92, 93, 94, 95, 96, 97, 98, 99, 100
//   ];

const { log } = require("console");

  
// console.log(binarySearch(arr1,100));


// function isSat(date){
//     let arr = date.split("-");
//     let [date1,month,year] = arr;
//     log(date1 , month, year)
//     let chkDate = new Date(arr[2],arr[1]-1,arr[0]);
//     if(chkDate.getDay()!=6){
//         return false;
//     }
//     return true;
// }

// log(isSat("25-05-2024"))

class Rectangle{
    constructor(width,height){
   this.width = width;
   this.height = height;
    }
    get area(){
        return this.width* this.height;
    }
}

const rect = new Rectangle(5,10);

log(rect.area);