const Btn = document.getElementById("p_btn");
const p_list = document.querySelectorAll(".proj");

const winHei = window.innerHeight;
const Hei = scr_3.offsetTop;

let currentP = 0;
const handleBtnClick = () =>{
  currentP++;
  if(currentP>1){currentP=0;}
  p_list.forEach((project) => project.classList.remove("active"));
  p_list[currentP].classList.add("active");
}

if(Btn){
  Btn.addEventListener("click", handleBtnClick);
}

window.addEventListener('scroll',e=>{
  let winscy = window.scrollY;
  if(winscy > Hei + winHei/1){
    contact.style = "transform: translateY(-50%);opacity:1;";
  }else{
    contact.style = "transform: translateY(-20%);opacity:0;";
  }
});