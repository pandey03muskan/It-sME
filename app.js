// studies start

//mouseover
let studiesHeading=document.querySelectorAll(".studiesDescriptionOuter");
let studiesBody=document.querySelector(".studiesjs");
studiesBody.addEventListener('mouseover',function(){
    for(i=0;i<studiesHeading.length;i++){
        studiesHeading[i].style.color="#706C88";
    }   
});
//mouseout
studiesBody.addEventListener('mouseout',function(){
    for(i=0;i<studiesHeading.length;i++){
        studiesHeading[i].style.color="rgb(221, 109, 128)";
    }   
});

// studies end


//coding profile start
let codingProfileBody=document.querySelector(".profilejs");
let eachProfile=document.querySelectorAll(".profile");
codingProfileBody.addEventListener('mouseover',function(){
    for(i=0; i<eachProfile.length;i++){
        eachProfile[i].style.background="#706C88";
    }
});
codingProfileBody.addEventListener('mouseout',function(){
    for(i=0; i<eachProfile.length;i++){
        eachProfile[i].style.background="#d2828a";
    }
});

//Mode changer
let body=document.querySelector("body");
let container=document.querySelector(".innerContainer");
let menu=document.querySelector(".navbar");
let moon=document.querySelector(".moonO");
let sun=document.querySelector(".sunO");
sun.addEventListener('click',function(){
    container.classList.add("innerContainerDark");
    menu.classList.add("navbarDark");
    sun.classList.add("sunDark");
    moon.classList.remove("moonO");
    moon.classList.add("moonDark");
    body.classList.add("bodyDark");
    moon.addEventListener('click',function(){
        sun.classList.remove("sunDark");
        moon.classList.add("moonO");
        moon.classList.remove("moonDark");
        container.classList.remove("innerContainerDark");
        menu.classList.remove("navbarDark");
        body.classList.remove("bodyDark");
    })
});