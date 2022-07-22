const array = [1, 2, 3, 4,200,151,7,27,6];
let number_imp = [];
for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 1){
      number_imp.push(array[i]);   
    }}
console.table(number_imp);

let number_bigger100 = [];
for (let i = 0; i < array.length; i++) {
    if(array[i] > 100){
      number_bigger100.push(array[i]);   
    }}
console.table(number_bigger100);



