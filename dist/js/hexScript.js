const btn2 = document.querySelector("#btnH");
const colorContainer =document.querySelector(".color");
const color =document.querySelector("#color");

btn2.addEventListener("click",function(){
    let a=9;
   
    let arr = [getTow(getRandom()),getTow(getRandom()),getTow(getRandom())];
    arr=arr.map(elem=>elem.toString(16));
    let co =arr.join('');
    co="#"+co;
    colorContainer.style.backgroundColor=co;
    color.innerHTML=co;
    console.log(arr.join(''));
})

function getRandom(){
    return Math.random();
}
function getTow(num){
    num=parseInt(num*255);
    let a =num.toString(16);
    if(a.length==1){
        a=a+0;
    }
    return a;
}