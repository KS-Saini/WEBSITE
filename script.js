burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
   rightNav.classList.toggle('v-class');
   navList.classList.toggle('v-class');
   navbar.classList.toggle('h-nav-resp');
})

serachBtn = document.querySelector('.searchbtn');
serachBtn.addEventListener('click', () => {
   alert("HI! THE NEXT PROCESS WILL BE DOING BY THIS WEBSITE DESINER");
});


subscribeBtn = document.querySelector('.subscribebtn');
subscribeBtn.addEventListener('click', () => {
   alert("HI! THE NEXT PROCESS WILL BE DOING BY THIS WEBSITE DESINER");
});

watchBtn = document.querySelector('.watchbtn');
watchBtn.addEventListener('click', () => {
   alert("HI! THE NEXT PROCESS WILL BE DOING BY THIS WEBSITE DESINER");
});

contactBtn = document.querySelector('.contactbtn');
contactBtn.addEventListener('click', () => {
   alert("HI! THIS VALIDATION FORM DEMO FOR THE WEBSITE");
});