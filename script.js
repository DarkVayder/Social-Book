var settingsmenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
darkBtn.onclick = function(){
    darkbtn.classList.toggle("dark-bt.dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "dark");
    }
    

}
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-button-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-button-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light")
}

localStorage.setItem("theme", "light");
localStorage.getItem("theme");