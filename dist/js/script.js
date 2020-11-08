const colors =["INDIANRED","RED","SALMON","DARKSALMON","PINK","LIGHTPINK","HOTPINK","GOLD","YELLOW","PURPLE","GREEN","CYAN","SKYBLUE","LIGHTSKYBLUE","BLUE"];
 console.log(parseInt(getRandom()*colors.length));
 const btn1 = document.querySelector("#btnS");
 const btn2 = document.querySelector("#btnH");
 const colorContainer =document.querySelector(".color");
 const color =document.querySelector("#color");

 


  btn1.addEventListener("click",function(){
      let co =colors[parseInt(getRandom()*(colors.length-1))];
    colorContainer.style.backgroundColor=co;
    color.innerHTML=co;
  })

  







function getRandom(){
    return Math.random();
}