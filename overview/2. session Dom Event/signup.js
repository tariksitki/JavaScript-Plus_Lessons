
    //  simdi navbar daki paths item inin text ine ulasmaya calisiyoruz

            /// with nav__item


    // let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;

    // console.log(navbarPathItemText);


        //  innertext in console.log line

    let navbarPathItemText = document.getElementsByClassName("nav__item")[0];

    console.log(navbarPathItemText.innerText);




                /// with nav__link:
        // a tag leri li icerisinde oldugu icin iki sekilde de icerige ulasabilirz

    // navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;

    // console.log(navbarPathItemText2);


                //  inner.Text in console.log line

    navbarPathItemText2 = document.getElementsByClassName("nav__link")[0];

    console.log(navbarPathItemText2.innerText);





            ///  with ul tag:
    // tek eleman da olsa class collection return eder. bu nedenle tek eleman da olsa index lemek gerekir


    ///  children ile yaptigimiz islemler dom traversing kismina aittir


    // navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;

    // console.log(navbarPathItemText3);




            ///   more than one child

    navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].children[0].innerText;

    console.log(navbarPathItemText3);






            ////  4. Method:
        // Note: nav__links de [0]  seklinde indexleme yapmadan, direkt olarak firstchild ini alamiyoruz. Cünkü bize bir navlinks collection i return ediliyor. bunlardan hangisinin child ini alacagimizi secmemiz gerekir

    let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
    // ilk li yi yakaldik ve icerigini aldik

    console.log(navbarPathItemText4);




    /// queryselectorAll and getElementsByName NodeList return eder







    //// paths in, instructors in ve students in li sine ulasmaya calisiyoruz:
    ///  id yoksa query daha mantikli
    /// css mantigi ile calisir

    //  burada ilk li return edildi index lemeye gerek kalmadi

                //// Paths
    // let navbarPatsLi = document.querySelector(".nav__item").innerText;

    // console.log(navbarPatsLi);







                //// Paths  with selectorAll:

    // let navbarPathsLi2 = document.querySelectorAll(".nav__item")[0].firstElementChild.innerText;

    // console.log(navbarPathsLi2);




            ///  query selector and firstChild

    let navbarPathsLi3 = document.querySelectorAll(".nav__item")[0].firstElementChild;
    // burada nav item in child ini aldigimiz icin a tag ini return eder

    console.log(navbarPathsLi3);







                //  instructor
        ///  eger class name önüne query de .  koymaz isek, 0 elemanli bir nodelist return eder

    // let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1].innerText;

    // console.log(navbarInstructorsLi);


    ///  class name collection return eder. collection ile foreach kullanilamaz






            /// students


    let navbarStudentsLi = document.querySelectorAll(".nav__item")[2].innerText;

    console.log(navbarStudentsLi);





        /// DOM traversing kullanabilmek icin, ulasmak istedigimiz tag in babasina ulasiyoruz simdi, ve daha sonra child a gidiyoruz
        // yani ilk önce ul ye ulastik sonra ilk li ye :


        let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;

        console.log("ul => first li", navbarPathsLi2);


        ////// Attention:   children yapisi collection return eder. tüm child lari döndürür.  firstelementchild ise tek bir eleman return eder. yani children kullandigimizda, ekstradan birde indexleme yapmak zorundayiz.




        let navbarPathsLi2Children = document.querySelector(".nav__links").children[0];

        console.log("ul => first li", navbarPathsLi2Children);






            //// last child:
            /// aralardaki child lara css deki nth child yaparak ulasabilirz

        // let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;

        // console.log(navbarSignUpLi);
        // console.log(navbarSignUpLi.innerText);








        ///////////////  Events:


    // Dom html ile js sayfalarinin birbiri ile etkilesime gecmesini sagliyor
    
    // User larin yaptigi islemlerin hemen hemen hepsi bir eventtir.


    //  Kullanicinin yaptigi isleme event denir, bu eventi gerceklestirecek func a da event handler func denir.
    // yani eventi handle ediyor

    //  Birde event listener vardir. Bu da aslinda bir func dir. hazir da bekler ve user bir event tetiklsein diye bekler ve tek görevi bu.

    // syntax:

    // Object.listener(event, handler);


    // total de bir dom object ine event eklemek icin 4 tane yöntem vardir.



    ////  The most used events:

    // 1: onchange : mesela bir combo box da degisiklik yapildiginda tetiklenir
    // 2: onclick: 
    // 3: onmouseover:
    // 4: onmouseout:
    // 5: onkeydown:
    // 6: onload: dom un en üst tarafinda document üzerinde bulunan window yani bizim web sayfamizi temsil eder 


    //  web sayfamiz randor edildiginde dom agaci olusur.

    // ve onload da bir event tanimlamak icin window a tanimlamak gerekir



    /// event in adi load  dir. onload ise load oldugunda calisacak func dir. Bu nedenle burada event kismina load yazariz

    window.addEventListener("load", () => {
        // alert("Web Site onloaded!");
        console.log("Window loaded");
    });

    /// window loaded console da en son gelir. cünkü tüm sayfa randor edildikten sonra olur. yani tüm sayfanin olusmasi beklenir. Window icerisindeki tüm manipulation islemleri tamamlandiktan sonra loaded olur




    /// Notiz:  En cok kullanilan method listener dar ve bu bizi bir adim öne gecirir. ama ikinci method da onload dir. bu klasik yöntemdir.

    // load:  bizim sayfamiz yüklendiginde tetiklenen event demektir. bu sayfalar arasi gecis yada refresh anlamina gelebilir



            /// onload:

        ///  window.onload = func()

    window.onload = () => {
        console.log("window onloaded");
    };








    //////////  click on path and alert:


    let navbarPathsLi = document.querySelector(".nav__item");

    // navbarPathsLi.addEventListener("click", (e) => {
    //     alert(navbarPathsLi.innerText + e.type + " clicked");
        // buraya yazdigimiz e event de olabilir. bunu baska bir yerde kullanabiliriz bu sayede. Bu sekilde type i sonradan yazdigimizda, type olarak event type yani click yaziliyor. asagidaki gibi yaparsak da object cikiyor.
    //})



    // navbarPathsLi.addEventListener("click", (e) => {
    //     alert(navbarPathsLi.innerText + typeof(e) + " clicked");
    //     // buaraya yazdigimiz e event de olabilir. bunu baska bir yerde kullanabiliriz bu sayede
    // })


            /// sade hali:

    // navbarPathsLi.addEventListener("click", () => {
    //     alert(navbarPathsLi.innerText + " clicked");
    //     // buaraya yazdigimiz e event de olabilir. bunu baska bir yerde kullanabiliriz bu sayede
    // })





            /// listener 2. Method:
            /// func i disarida tanimlama:

    // function background() {
    //     navbarPathsLi.style.backgroundColor = "red";
    // }

    // navbarPathsLi.addEventListener("click", (background));




                // onclick:

    // navbarPathsLi.onclick = () => {
    //     navbarPathsLi.style.backgroundColor = "red";

    // }





            // onclick 2. Method:


    function background() {
        navbarPathsLi.style.backgroundColor = "red";
    }

    // navbarPathsLi.onclick = (background);





            /// 3. Method:

            /// HTML onclick:  Html elementinin icerisine argument olarak onclick ekliyoruz. ve bunun icine de js de tanimladigimiz func ismini yaziyourz ve () yapiyoruz.














        //// instructor:

        /////  mouseover and mouseout:


    let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];


    navbarInstructorsLi.addEventListener("mouseover", ()=> {
            navbarInstructorsLi.innerText = "Over Me";
            navbarInstructorsLi.style.fontSize = "18px";
            navbarInstructorsLi.style.color = "red";
        });

    navbarInstructorsLi.addEventListener("mouseout", ()=> {
            navbarInstructorsLi.innerText = "Instructor";
            navbarInstructorsLi.style.fontSize = "18px";
            navbarInstructorsLi.style.color = "black";
        });


        //// fontSize gibi css ile ilgili terimleri burada kullandigimizda,  genellikle birden cok kelimeden olusuyorsa, kelimelerin ilk harfleri büyük oluyor


        /// Her event listener stack te yer kaplayacağından bol keseden kullanmamak gerekir.
        
        







        ////// Task: When we on the student click, change background color all time



                ///  1. method:

        let student = document.querySelectorAll(".nav__item")[2];


            /// random dan sonra () unutmayalim
        function randomNumber() {
            return Math.floor(Math.random() * 255);
        };
            //  bu kod bloku li icin
        student.addEventListener("click", (event)=> {
            event.stopPropagation();
            student.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
        })


        //// Note: mouseenter mouse ile element üzerin e gelince calisir 



                // burasi li nin parenti ul icin

        student.parentElement.addEventListener("click", (event)=> {
            /// stop bubbling
            event.stopPropagation();
            student.parentElement.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
                })





                /// burasi li nin dedesi header icin :

        student.parentElement.parentElement.addEventListener("click", (event)=> {
            student.parentElement.parentElement.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
                })

            

    
                ////////////  bubbling:
                //// Önemli bir kavram:

                // ic ice kutu modelinde, biz en ictekine tikladigimizda aslinda en distakine ve oratadakilere de tiklamisiz demektir. burada tersine bir inheritens var. Bu olayin tam tersine de capturing denir.

                /// Bu durumu sonlandirmak icin, func lar icerisine event gibi bir isim yazarak degiskene atiyorz ve bu degiskeni stopPropagation diyoruz








                /////  2. Method:


        // let student = document.querySelectorAll(".nav__item")[2];

        // student.addEventListener("click", ()=> {
        //     let red = Math.random() * 255;
        //     let green = Math.random() * 255;
        //     let blue = Math.random() * 255;

        //     student.style.backgroundColor = `rgb(${red}, ${green}, ${blue} )`;
        // })






                //// 3. Method  ve hem de onclick ile:

    // let student = document.querySelectorAll(".nav__item")[2];

    // let randomNumber = () => Math.round(Math.random()*255);

    ///  eger asagida her parantez icinde randonnumbr yaninda ()  kullanmazsak func lar cagrilmaz ve func calismaz
    // let randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

    // student.onclick = () => {
    //     student.style.backgroundColor = randomColor();
    // }


                //// onclick 2. method:

    // function onclick2() {
    //     student.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    // };

    // student.onclick = onclick2;







                    ///// Önemli Not: **********

                /// math round hangisine yakin ise

        let mathRound = () => Math.round(Math.random()* 255) ;

        console.log(mathRound());




                //// math ceil (tavana yuvarlar)

        let mathCeil = () => Math.ceil(Math.random()*255)

        console.log(mathCeil());



                //// math floor asagi yuvarlar. 

        let mathFloor = () => Math.floor(Math.random()*255)

        console.log(mathFloor());


                //// func expression:

        let my = function() {
            console.log("hello");
        }
        my();


// e.target.innerText + " clicked" doğru olacak hocam




// sadece lastelementchild var ekstradan

// 1: array 
// 2: nodelist 
// 3: collection 




// let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;

// console.log("ul -> first li", navbarPathsLi.innerText);




// let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;

// console.log("ul -> Last li", navbarSignUpLi.innerText);



///  query selector ilk karsilastigini return eder.  queryselectorall ise o class yada id ye ait tüm elemanlarin icinde olan bir nodelist döndürür











        //////////   events:


        // document.getElementsByClassName, document.getElementsByTagName ==> Html Collection

        // document.getElementsByName, document.querySelectorAll ==> NodeList
        
        // document.getElementById, document.querySelector ==> tek element
        
        





        /////////  Task:  lastname e ulasacagiz ve her bir karakter girildiginde alttaki span de karakter sayilari cikacak:
        // maxlength de 40 olacak bu zaten html de verilmis

        // let lastName = document.getElementsByName("last_name")[0];

        let charSpan = document.getElementById("charCount");
                // 2. method:
        // let lastName = document.querySelector("[name = last_name]");

                ///  3. Method:
        let lastName = document.querySelector("input[name = last_name]");


        console.log(lastName);

        // lastName.addEventListener("keyup", () => {
        //     charSpan.innerText = `${lastName.value.length}/40`;
        // })

        /// input larda value, diger elementlerde ise innertext
    

        //////  keyup: parmagimizi tustan kaldirinca tetikler. ilk kez bastigimizda length 0 dir parmagimizi kaldirdiktan sonra 1 olur. bu nedenle bu yöntem haricindeki diger iki yöntem parmagimizi basar basmaz tetikledigi icin onlarda ilk tusa bastiktan sonra da uzunluk 0 görünür.
        
        ////  keydown:  ilk tiklar tiklamaz

        ///  keypress: basili tuttugumuzda








                //////// Homework:

        // lastname input value 0 oldugunda span görünmesin

        // function empty() {
        //     if (lastName.value.length == 0) {
        //         charSpan.style.display = "none";
        //     }
        // }

        // charSpan.addEventListener("keyup", () => {
        //     if (charSpan.innerText == "0/40") {
        //         charSpan.innerText = "";
        //     }
        // })


                //////////  with if:

        lastName.addEventListener("keyup", ()=> {
            if (lastName.value.length == 0) {
                charSpan.style.display = "none";
            }   else {
                charSpan.style.display = "inline";
                charSpan.innerText = lastName.value.length + "/40";
            }
        })






    // let lastName = document.querySelector("input[name = last_name]");
    // //  input yazmazsak '' lazim

    // let charSpan = document.getElementById("charCount");

    // lastName.addEventListener("keyup", () => {
    //     charSpan.innerText = lastName.value.length + "/40";

    // })











            ////// Task:

    // let birthdayPicker = document.querySelector("[name = birthday]");

    // let birthdayPicker = document.querySelector("[name = 'birthday'] ");

    // let birthdayPicker = document.querySelector("input[name = 'birthday'] ");

    // birthdayPicker.addEventListener("change", ()=> {
    //     // console.log(birthdayPicker.value);
    //     // console.log(typeof(birthdayPicker.value));
    //     // console.log(typeof birthdayPicker.value);
    //     //  burada tarihin veri tipi string dir. cünkü date picker bir input  tur  ve valuesunun veri tipi string dir. o nedenle bir dönüsüm yapacagiz
    //     // new Date ile yapiyoruz dönüsümü ve stringden date objecte dönüstürüyoruz

    //     let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();

    //     alert("You are " + year + " years old");

    //     birthdayPicker.value = "mm/dd/dddd";
    //     // bu da alert yazildiktan sonra tekrar orijinal haline gelmesi icin
    // })



        /// Note: getfullyear lar dan sonra ()  unutursak nan verir

        console.log(new Date); /// bu func bizr su an bulundugumuz ülkeye ait tarih saati detayli bir sekilde verir

        console.log(typeof(new Date())); /// date object


        /// new date in icerisine string verirsek bunu date object e cevirir. eger icine birsey vermezsek de su ani döndürür.






        ///////////  onchange:



        let birthdayPicker = document.querySelector("[name = birthday]");

        birthdayPicker.onchange = () => {
            let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();

            alert("You are " + year + " years old");

            birthdayPicker.value = "mm/dd/yyyy";
        };

        // onchange in anlami, date picker change olmus oldugunda = den sonraki islemi yap demek

        //// listener dan onchange e dönüstürmek icin sadece listener kismini silip onchange yaziyoruz ve burada fazladan = kullaniyoruz




        /// event listener in onchange den en büyük farki,   listener icerisinde sinirsiz sayida func tanimlanabilir


        ///  bir diger ihtimal de, disarida farkli bir yerde func tanimlayip bu func in adini listener icerisindeki paranteze yazmaktir


// https://developer.mozilla.org/en-US/docs/Web/Events#event_listing