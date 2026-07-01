function nextPage(page){


let screens=document.querySelectorAll(".screen");


screens.forEach(screen=>{

screen.classList.remove("active");

});


document.getElementById(page).classList.add("active");


}




function wrong(){


document.getElementById("wrong").style.display="block";


}





function unlock(){


let name=document.getElementById("name").value;


if(name.toLowerCase()=="shrishti"){


nextPage("accessGranted");


setTimeout(()=>{


nextPage("videoPage");


},3000);



}

else{


document.getElementById("wrongName").style.display="block";


}



}