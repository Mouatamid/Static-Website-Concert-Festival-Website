//Search bar focus
let inputSearch = document.getElementById("search");
let searchBar = document.getElementsByClassName("search-bar")[0];
let nav = document.getElementsByTagName("nav")[0];
let logo = document.querySelector("a.logo");
inputSearch.addEventListener("focus", () => {
  searchBar.classList.add("search-barOnfocus");
});
inputSearch.addEventListener("blur", () => {
  searchBar.classList.remove("search-barOnfocus");
});

//Nav on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    if(window.innerWidth < 800){
      nav.classList.remove("smooth-transition-nav");
      logo.style.display = 'none';
    }
    nav.classList.add("navScroll");
  } else {
    nav.classList.remove("navScroll");
    logo.style.display = 'block';
  }
});

//Displaying the nav-list when clicking the menu
let listDisplayed = false;
let clickedMenu = document.querySelector(".hamburger-menu a");
let navList = document.querySelector(".nav-list");
window.addEventListener('resize', ()=>{
  if (window.innerWidth < 1200){
    navList.classList.add('nav-list-mobile');
    listDisplayed = false;
  }
})
clickedMenu.addEventListener("click", () => {
    if (!listDisplayed) {
      navList.classList.remove('nav-list-mobile');
      listDisplayed = true;
      console.log(listDisplayed);
    } else {
      navList.classList.add('nav-list-mobile');
      listDisplayed = false;
      console.log(listDisplayed);
    }
  
});
//Planning

let arrayIndex = ["item-one","item-two","item-three","item-four"];

$(".planning-list a").click((e) => {
  let cont = $("#planning .container .content-container");
  e.preventDefault();
  let img = $('.image-container img');
  console.log(e.target);
  for(let i = 0;i < arrayIndex.length;i++){
    if(e.target.classList.contains(arrayIndex[i])){
      var index = i;
      break;
    }
  }
  cont.fadeOut();
  img.fadeOut(() => {
    img.attr('src',`../Images/recources/planning-event/${index+1}.jpg`);
  });
  
  img.fadeIn();
  
  
  cont.fadeIn();
})

 let planningArray = document.querySelectorAll(".planning-list a");

for(let i = 0;i < planningArray.length; i++){
  planningArray[i].addEventListener('click', e => {
    e.preventDefault();
    for(let j = 0; j<planningArray.length; j++){
      let icon = document.querySelector('.planning-list a i');
      if(planningArray[j].classList.contains('active-item')){planningArray[j].removeChild(icon);}
      planningArray[j].classList.remove('active-item');
    }
    e.target.classList.add('active-item');
    e.target.innerHTML = '<i class="fas fa-circle"></i>' + e.target.innerHTML;
    
  })

}

//Weekly Schedule
$(".main-schedule .slide-text").hide();
$(".main-schedule .slide-text").eq(0).show();
$(".main-schedule .title").on('click', function(e){
  e.preventDefault();
  $(this).next().slideToggle();
})

$(".days div.day").on('click', function(e){
  e.preventDefault();
  $(".days .active-day").removeClass("active-day");
  $(this).addClass("active-day");
  $(".main-schedules").fadeOut(200,function(){
    $(".main-schedules").fadeIn();
  })
})