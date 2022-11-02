let greenDrink = document.querySelector(".drink.green");
let pinkDrink = document.querySelector(".drink.pink");
let purpleDrink = document.querySelector(".drink.purple");
let circle = document.querySelector(".circle");
let coffeeCup = document.getElementById("green-drink");

    pinkDrink.addEventListener("click",()=>{
        coffeeCup.src = "./assets/img2.png";
        circle.style.background = "pink";
       
    });
    purpleDrink.addEventListener("click",()=>{
        coffeeCup.src = "./assets/img3.png";
        circle.style.background = "#F792D9";
    });
    greenDrink.addEventListener("click",()=>{
        coffeeCup.src = "./assets/img1.png";
        circle.style.background = "#017143";
    });

