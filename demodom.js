let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundC0lor='green';


const list=document.querySelectorAll('li');
for(let i=0;i<list.length;i++){
    list[i].style.color='red';
}
console.log(list);