var isstatus = document.querySelector("h5");
var add = document.querySelector("#btn");
var check = 0;
add.addEventListener("click", function(){   
if(check == 0){
    isstatus.innerHTML = "Frinds"
    isstatus.style.color = "Green"
    btn.innerHTML = "Remove friend"
    check = 1
}else{
    isstatus.innerHTML = "Stranger"
    isstatus.style.color = "Red"
    btn.innerHTML = "Add friend"
    check =0
}
})
