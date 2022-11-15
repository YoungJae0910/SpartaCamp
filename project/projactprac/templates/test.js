// // aa = "hello";
// // console.log(aa+2);
// // console.log(typeof aa+2);


// // function a() {
// //     var a = 123;
// //     var b = 124;
// //     return a+b
// // };

// // console.log(100+a());

// // var str5 = 'hello \n Mr.kim'
// // console.log(str5);

// // let a = 3;
// // for (let i = 0; i < 2; i++) {
// //     console.log("1번",a);
// //     console.log("2번",a++ '';;'''g+2);
// // }

// // console.log(++a + 2);

// let num = 10;
// console.log(num%2 == 0);
//     if(num%2 == 0){
//         console.log('true');
//     } else {
//         console.log('false');
//     };




// let a = [0, 1, 2, 3, 4];

// console.log(a[1]*a[3]);

let weight = 100;
let height = 180;

let a = (height-100)*0.9
let bmi = weight / a *100
console.log(bmi)
if (bmi <= 90){
    console.log("체중부족");
} else if (bmi <= 110){
    console.log("정상");
} else if (bmi <= 120){
    console.log("체중과다");
} else if (bmi < 121){
    console.log("비만");
};