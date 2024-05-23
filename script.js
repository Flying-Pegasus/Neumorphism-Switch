const butt = document.querySelector("h1").style;
const butt1 = document.querySelector("h1");
let present = "clicked"

const Clicked =()=>{
  butt.backgroundColor = "whitesmoke";
  butt.color = "green";
  butt.boxShadow = "inset 8px 8px 10px rgba(0, 0, 0,0.7)";
}
const notClicked =()=>{
  butt.backgroundColor = "black";
  butt.color = "white"; 
  // butt.border = "0.01px solid whitesmoke";
  butt.boxShadow = "8px 8px 10px rgba(85, 85, 85,0.6)";
}


butt1.addEventListener("click",()=>{
  if (present==="notClicked"){
    present= "clicked";
    Clicked();
    window.location.href = 'https://youtu.be/Y_oAw6VVizc/';
  }
  else if (present==="clicked"){
    present= "notClicked";
    notClicked();
  }
});