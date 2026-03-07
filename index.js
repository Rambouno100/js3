//15
  console.log("-------------------15------------------")  

let a = '*'

let i = 1 

while(i <= 9) {
   if(i%2!=0){
  console.log(a.repeat(i))  
  }
  i++   

}


let x = 7 

while(x >= 1) {
   if(x%2!=0){
  console.log(a.repeat(x))  
  }
  x--   
  
}

//14
  console.log("-------------------14------------------")  

let x2 = 9  

while(x2 >= 1) {
   if(x2%2!=0){
  console.log(a.repeat(x2))  
  }
  x2--  
  
}


//13
  console.log("-------------------13------------------")  

let x3 = 1  


while(x3 <= 9) {
   if(x3%2!=0) 
  console.log(a.repeat(x3))  
  
  x3++   

  
}



//12
  console.log("-------------------12------------------")  

let x4 = 5  


while(x4 <= 5 && x4 >= 1) {
  console.log(a.repeat(x4))  
  
  x4-- 
  
}


//11
  console.log("-------------------11------------------")  

let x5 = 1  


while(x5 <= 5 && x5 >= 1) {
  console.log(a.repeat(x5))  
  
  x5++ 
  
}


//10
  console.log("-------------------10------------------")  

let x6 = 6;
let i6 = 1;       
let y6 = 0;       

for (i6; i6 <= x6; i6++) {  
  y6 = y6 + x6 * i6;       
}

console.log(y6);


//9
console.log("-------------------9------------------")

// let contraseña;
// const contra = "java123";

// do {
//   contraseña = prompt("¿Cuál es tu contraseña?");
//   console.log("escribiste:", contraseña);  
// } while (contraseña !== contra);

// console.log("Contraseña correcta ");

//8
console.log("-------------------8------------------")

let x8 = "1234";  

let a8 = 0;

for (const digit of x8) {
  a8 = a8 + Number(digit); 
}

console.log(a8); // 10



// # Ejercicio 1
// for (let i = 1; i <= 10; i++) {
//   console.log(`Valor de i: ${i}`);
// }

// # Ejercicio 2

// let i = 10;

// while (i > 0) {
//   console.log(`valor de i: ${i}`);

//   i = i - 1;
// }

// # Ejercicio 3

// const userNumber = prompt("Ingrese un numero: ");

// for (let i = 1; i <= 12; i++) {
//   console.log(`${userNumber} x ${i} = ${userNumber * i}`);
// }

// # Ejercicio 4

// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//   suma = suma + i;
// }

// console.log(suma);

// # Ejercicio 5

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// # Ejercicio 6

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// # Ejercicio 7

let number = 1234;
let counter = 4;

while (number > 0) {
  number = Math.floor(number / 10);
  counter++;
}

console.log(`Digits: ${counter}`);