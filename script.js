//getting heading and shifting it to the center
const headElement = document.getElementById("header-id");
console.log(headElement);
headElement.style.textAlign = "center";
headElement.style.color = "tomato";
//getting div-button and shifting it to the middle of the page
const div_button_id = document.getElementById("button-id");
console.log(div_button_id);
div_button_id.style.textAlign = "center";
div_button_id.style.marginTop = "15rem";

//getting submit btn
const submit_btn = document.getElementById("btn");
console.log(submit_btn);
submit_btn.style.background = "black";
submit_btn.style.color = "white";
submit_btn.style.width = "150px";
submit_btn.style.height = "50px";
submit_btn.style.borderColor = "green";
submit_btn.style.borderWidth = "10px";

//adding event listener on button
submit_btn.addEventListener("click", (event) => {
  event.preventDefault();
  const val = Math.floor(Math.random() * (255 - 10)) + 10;
  console.log(val);
  let colour = `rgb(${val},${val},${val})`;
  document.body.style.background = /*(255,255,255)*/ colour;
});
