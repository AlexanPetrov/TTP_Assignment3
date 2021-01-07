// 1) Select the section with an id of container without using querySelector.
document.getElementById("container")
// 2) Select the section with an id of container using querySelector.
document.querySelector("section")
// 3) Select all of the list items with a class of "second".
document.getElementsByClassName("second")
// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByTagName("OL")[0].getElementsByClassName("third")
// 5) Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = "<p>Hello!</p>"
// 6) Add the class main to the div with a class of footer.
document.getElementsByClassName("footer")[0].classList.add("main")
// 7) Remove the class main on the div with a class of footer.
document.getElementsByClassName("footer")[0].classList.remove("main")
// 8) Create a new li element.
let LIelm = document.createElement("li")
// 9) Give the li the text "four".
let LItxt = document.createTextNode("four")
LIelm.append(LItxt)
// 10) Append the li to the ul element.
document.getElementsByTagName("UL")[0].appendChild(LIelm)
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let OLlst = document.getElementsByTagName("OL")[0].getElementsByTagName("li")
    for (let i in OLlst) { OLlst[i].style.backgroundColor = "green" }
// 13) Remove the div with a class of footer.
let ftr = document.getElementsByClassName("footer")[0]
document.body.removeChild(footer)
