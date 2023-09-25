// getElementById()
// const title = document.getElementById("main-heading");
// console.log(title);

// getElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// getElementByTag()
// const listItem = document.getElementsByTagName("li");
// console.log(listItem);

// querySelector()
// const container = document.querySelector("div");
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll("div");
// console.log(container);

////////////////////////////////////////////////////////////////////
// DOM Manipulation

// ************   styling elements    //********************* */
// const title = document.querySelector("#main-heading");

// title.style.color = "red";

// console.log(title);

// const listItems = document.querySelectorAll(".list-items");
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "13px";
// }
// console.log(listItems);

// ***************    Creating Elements  // **************** */
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// **************    Adding Elements   // ************** */

// ul.append(li);

// *************  Modifying the text // ************** */

// const firstListItem = document.querySelector(".list-items");

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
// li.innerText = "X-man";

// ************* Modifying Attributes & classes

li.setAttribute("id", "main-heading");
li.removeAttribute("id");
li.classList.add("list-items");
li.classList.remove("list-items");

console.log(li.classList.contains("list-items"));

// *************    Traverse the DOM      *****************/

// *************  parent Node Traversal ****************/

let ul = document.querySelector("ul");

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

// *************  child Node Traversal  ****************/

// ************   sibling Node Traversal ***************/
