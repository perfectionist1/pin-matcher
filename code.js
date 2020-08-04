


let newItems = [];

for (var i = 1; i < 5; i++) {
let idx = Math.round(Math.random() * 9);
newItems.push(idx);        
}

let myNum = newItems.join('');
console.log(myNum);