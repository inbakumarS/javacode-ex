let arr=[5,6,7];

console.log(arr);
console.log(arr.length);


//pushing values
let values=[];

values.push(5);
values.push(6);
console.log(values);

//different datatypes
const data=['navin',5,{tech:'js'},function(){console.log('hello')}];
console.log(data);
data[3]();
data.push('arjun');
data.pop();
data.unshift('water');

//string type
const names=[2,'navin','chiran'];
names[2]='alin';
names.push('arun');
names.shift();
console.log(names);