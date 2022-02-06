<<<<<<< HEAD
// Dom accessing

let firstNameById = document.getElementById("first_name");


console.log(firstNameById);



let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];

console.log(firstNameByClassName);

// html collection döndürüyor array degil 
// tek eleman bile olsa 


let firstFirstNameByName = document.getElementsByName("first_name");

console.log(firstFirstNameByName);




let firstNameBySelectorId = document.querySelector("#first_name");

window.console.log(firstNameBySelectorId);




//  window ile

let firstNameBySelectorClass = window.document.querySelector(".input--style-4");

window.console.log(firstNameBySelectorClass);


// query selector ilk elemani döndürüyor



let firstNameBySelectorName = document.querySelector("[name = 'first_name']");

console.log(firstNameBySelectorName);




let firstNameBySelectorInputName = document.querySelector("input[name = first_name]");

console.log(firstNameBySelectorInputName);




let firstNameBySelectorAllClass = window.document.querySelectorAll(".input--style-4")[0];

window.console.log(firstNameBySelectorAllClass);


// burada yine index vermek zorundayiz 





// document.getElementById(selector)
// document.getElementsByClassName(selector)
// document.getElementsByName(selector)
// document.getElementsByTagName(selector)
// document.querySelector(selector)
// document.querySelectorAll(selector)




//  getElementsByClassName => array.from ile array haline getirilmeli 
// html collection return eder mülakat sorusu

//  getElementsByName >  nodelist.arrayFunc()

// queryselector de nodelist.arrayFunc()

// foreach arastir
=======
// DOM Accessing
let firstNameById = document.getElementById("first_name");
console.log(firstNameById);

let lastNameById = document.getElementById("last_name");
console.log(lastNameById);

// let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];
// console.log(firstNameByClassName);

// let firstNameByName = document.getElementsByName("first_name")[0];
// console.log(firstNameByName);

// let firstNameBySelectorId = document.querySelector("#first_name");
// console.log(firstNameBySelectorId);

// let firstNameBySelectorClass = document.querySelector(".input--style-4");
// window.console.log(firstNameBySelectorClass);

// let firstNameBySelectorName = document.querySelector("[name='first_name']");
// console.log(firstNameBySelectorName);

// let firstNameBySelectorInputName = document.querySelector("input[name=first_name]");
// console.log(firstNameBySelectorInputName);

// let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4")[0];
// window.console.log(firstNameBySelectorAllClass);
>>>>>>> 2a1e173878522e8d1e93a5c3a1d5342f3fd5d7dd

// getElementsByClassName => Array.from(HTMLCollection).arrayFunc()
// getElementsByName => NodeList.arrayFunc()
// querySelectorAll => NodeList.arrayFunc()

<<<<<<< HEAD

// daha once sayfa yuklenmisse cache olusuyor cache

/// cache = önbellek






/////   property vs. attribute

// attribute __ html
// property object tarafli 


//property: value
//attribute: name="value"



// yukarida yakaldik zaten let firstNameById = document.getElementById("first_name");

    firstNameById.getAttribute("id");

    console.log(firstNameById.getAttribute("id"));

    console.log(firstNameById.getAttribute("class"));

    // firstNameById.setAttribute("class", "redColorClass");

    // firstNameById.setAttribute("type", "radio");

    


//     property -> Özellik
//  Attributes -> Öznitelikler








    //// inner HTML, innerText, TextContent, value


    // (input => value) 

    // js sayfayi dinamik hale getirmeye
    // dom ise html ile js arasinda irtibati saglamaya yariyor





    let headerDiv = document.getElementById("headerId");

    // let headerDiv = document.querySelector("#headerId");

    console.log("innerHTML =>", headerDiv.innerHTML);
    console.log("innerText =>", headerDiv.innerText);
    //  html tagleri görmezden gelir sadece text alir

    console.log("textContent =>", headerDiv.textContent); 
    // tagleri görüyor ve tagler ile birlikte aliyor ama tag kisimlarini white space gibi görüyor 




    /// let firstNameById = document.getElementById("first_name");

    firstNameById.value = "Tarik";
    firstNameById.setAttribute("class", "redColorClass");

    firstNameById.setAttribute("value", "mehmet");



    let lastNameById = document.getElementById("last_name");

    

    lastNameById.value = "Sitki";


    // set attribute ile value degisebiliyor mu hocam






    let fullName = document.querySelector("#full_name");

    fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}
     `;

     let email = document.getElementById("email");

     email.value = `${firstNameById.value.toLowerCase()} ${lastNameById.value.toLowerCase()} @cw.com`;






    // let fullname= document.getElementById('fullName')
// let fullname =firstname.value.toUpperCase() + ' ' + lastname.value.toUpperCase()
// fullname.setAttribute("value",fullname)









////  create  logo element;

    // let headerDiv = document.getElementById("headerId");


    let logo = document.createElement("img");

    console.log(logo);


    logo.setAttribute("src", "img/logo.png");

    //  logo.src ile de ulasilabilir

    logo.setAttribute("class", "headerLogo");

    logo.setAttribute("alt", "logo");


    // headerDiv.appendChild(logo);
    // headerDiv.innerHTML = `<img src = "img/logo.png" alt = "Bank  logo" class = "nav__logo" id="logo"/>`;


    /// hocam birden fazla class varsa setAttribute hangisini mutate edecek 
    // bu durumda class kulnacagiz



    ///  += eskisini silmez



    headerDiv.innerHTML += `<img src = "img/logo.png" alt = "Bank  logo" class = "nav__logo" id="logo"/>`;

    // eskisini silmez üzerine ekler


    // hocam logoyu bir degiskene atamistik
// bu degiskeni kullanarak innerhtml yapamaz misiz
// yani uzun kod kullanmadan

// headerDiv.innerHTML += logo;

// logo burada bir element oldugu icin bu sekilde yapamiyoruz


    // headerDiv.append(logo);

    // headerDiv.appendChild(logo);



    // headerDiv.innerHTML += logo.outerHTML;
    // yusuf hoca

    // headerDiv.innerHTML = ‘<h2 class=“title”>Registration Page</h2>¹ <img src=“img/logo.png” alt=“Bank logo” class=“nav_logo” id=“logo” / >’;

    









=======
// property vs. attribute

// console.log(firstNameById.getAttribute("id"));
// console.log(firstNameById.getAttribute("class"));
// firstNameById.setAttribute("class", "redColorClass");
// firstNameById.setAttribute("type", "radio");

//innerHTML, innerText, textContent, (input=>value)
// let headerDiv = document.getElementById("headerId");
// console.log("innerHTML=>", headerDiv.innerHTML);
// console.log("innerText=>", headerDiv.innerText);
// console.log("textContent=>", headerDiv.textContent);

// firstNameById.value = "Ryan";
firstNameById.setAttribute("value", "Ryan")
lastNameById.value = "Daniel";

// // 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

let fullName = document.querySelector("#full_name");
fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`;

let email = document.getElementById("email");
email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`;

//create logo element
let headerDiv = document.getElementById("headerId");
let logo = document.createElement("img");
console.log(logo);
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");

// headerDiv.append(logo); 
// headerDiv.appendChild(logo); 
headerDiv.innerHTML += '<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />';
>>>>>>> 2a1e173878522e8d1e93a5c3a1d5342f3fd5d7dd
