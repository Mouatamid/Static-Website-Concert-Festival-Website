//Search bar focus
let inputSearch = document.getElementById('search');
let searchBar = document.getElementsByClassName('search-bar')[0];
let nav = document.getElementsByTagName('nav')[0];
inputSearch.addEventListener('focus', () => {
  searchBar.classList.add("search-barOnfocus");
});
inputSearch.addEventListener('blur', () => {
  searchBar.classList.remove("search-barOnfocus");
})

//Nav on scroll
window.addEventListener('scroll', () => {
  if(window.scrollY > 180){
    nav.classList.add("navScroll");
  }
  else{
    nav.classList.remove("navScroll");
  }
})

//Displaying the nav-list when clicking the menu
let listDisplayed = false;
let clickedMenu = document.querySelector(".hamburger-menu a");
let navList = document.querySelector(".nav-list");
clickedMenu.addEventListener('click', () => {
  if(!listDisplayed){
    navList.style.display = "inline-block";
    listDisplayed = true;
    console.log(listDisplayed);
  }
  else{
    navList.style.display = "none";
    listDisplayed = false;
    console.log(listDisplayed);
  }
})