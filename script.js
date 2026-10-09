const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/上智涌现.jpg") {
    myImage.setAttribute("src", "images/2.jpg");
  } else {
    myImage.setAttribute("src", "images/上智涌现.jpg");
  }
};


let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");


function setUserName(){
    const myName=prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }else{
        localStorage.getItem("name",myName);
        myHeading.textContent=`Cool, ${myName}`;
    }
}

myButton.onclick = function () {
  setUserName();
};
