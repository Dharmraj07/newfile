var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].textContent='Hello World!!';
items[2].style.backgroundColor="green"
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight='bold';
}
