"use strict";

const buttonContainer = document.querySelector(".buttoncontainer");
const vendingMach = document.querySelectorAll(".button");
const totalParagraph = document.querySelector(".total");
let total = 0;

// vendingMach.forEach((snack) => {
//   snack.addEventListener("click", (event) => {
//     let amount = Number(snack.getAttribute("data-amount"));
//     total += amount;
//     totalParagraph.innerText = `Total amount ${total}`;
//   });
// });

buttonContainer.addEventListener("click", (e) => {
  if ((event.target.classList.contains = "button"));
  {
    let amount = event.target.getAttribute("data-amount");
    total = +amount;
    totalParagraph.innerText = `Total Cost ${total}`;
  }
});

//==========================================================
const coinCount = document.querySelector(".count");

const coinType = document.querySelector(".cointype");

const questions = document.addEventListener("click", (e) => {
  event.target.classList.contains("count");
  event.target.getAttribute.contains("data");
  let coinDataForm = new form.coincount.data();
  event.target.coinType;
  let quarter = document.createElement("div");
  coinType.append.div;
  quarter.setAttribute("id", "quarters");
});
