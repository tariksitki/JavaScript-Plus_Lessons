
/////////////  Dom Nedir?

// Document object Model

// Dom bir programming interface dir

// yani html ile js i birbirine baglayabilecegimiz bir interface

// yani bir modeldir  

//  bir internet sayfasi acildiginda yada yenileme yaptigimizda
//  tüm kodlar okunur. iste burada html elementlerimizi DOM 
// objectleri yani nesneleri haline getiriyor
//  bunu saglayan modele interface e dom denir 

// js de hersey bir objecttir. Bu nedenle html ile iletisime
// gecebilmesi icin de dom a ihtiyac duyuyoruz

// dom vasitasi ile html elementlerimizi buluyor, 
/// manipule ediyor ve styling verebiliyoruz

/// kisaca html sayfasini js in anlayabilecegi bir dile ceviriyoruz

// Dom u anlamak icin önce window ve document kavramalari bulunur

// window bizim browser daki ekranin tamami, yani browserdaki webpage

// bugüne kadar ögrendigimiz hersey bu window interface nesnesinin icinde

// window icinde de doc tree dedigimiz agacin root unu olusturan document 
///  object imiz vardir.. Bu bazi yerlerde root node olarak gecer

// dom un en önemli bilesenleri window ve document

// console da ilk acildiginda alinan hatalari göstermemek icin
// sag üstte bulunan default ayarlarda warningleri kapatabiliriz 

// window.localstorage
// window.sessionstorage
// window.cookies

// window global bir ifadedir. bu nedenle aslinda hemen hemen
//  hersey de window bulunur. mesela window.console.log dur asli

// console da baktigimizda kullandigimiz herseyi window da bulabilirz

// console da window.document yazdigimiz zaman bizim web sayfamizi verir

// burada karsimiza su yapi ciikar

//  document 
        // html
        //     head  ve body 
        //             ve bunlarin altinda normal html element ve taglari 

    // bu yapiya dom tree denir bunun root unda document vardir

    // head ve body ayni hiyerarsi de bulunurlar. ve ikisi de html in 
    ///  siblings leridir 

    // dom sayesinde bizim html sayfamiz bir dom tree ye dönüsmüs olur

    // https://fritscher.ch/dom-css/

    // bu web sitesinde sol üstte bulunan kisma html kodlarimizi
     //  yazdigimizda dom tree yi görebiliirz

     // dom vasitasi ile dom tree de bulunan tüm elemanlara erisebiliyoruz

     // internet ve network problemi oldugunda sikinti yasamamak icin 
    // calistigimiz library leri inidrip projemize dahiletmeliyiz

    // 



    // Dom accessing

    /// tüm elemanlara document vasitasi ile ulastigimizdan
    // her bir elemani cagirirken önce basa document yaziyoruz

    // traversing;  dom tree de gezinmektir

    let firstNameById = document.getElementById("first_name");

    console.log(firstNameById);



    // let firstNameByClassName = document.getElementsByClassName("input--style-4");

    // console.log(firstNameByClassName);


    ///  bir html colection geldi
    // burada elements de s takisi vardir

    // bu class lara sahip tüm elementler gelir

    // tek eleman da olsa tel elemanli collection döner 

    // array degildir array ile karistirma 

    ///  class ile cagirdik ama burada tüm elementler geldi.
    //  bu nedenle bir indexlemeye ihtiyacimmiz var


    let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];

    console.log(firstNameByClassName);

    // yani burada collection icerisinden istedigimizi aldik 

    let firstNameByName = document.getElementsByName("first_name");

    console.log(firstNameByName);

    // class; html collection döndürür
    // name ise nodelist döndürür
    // burada tek list eleman olmasina ragmen nodelist döndürdü

    // foreach kullanabilmek icin nodelist yada array olmasi gerekir. collection lar ile foreach calismaz. 

    




    ////////////////  selector ile yakalama
    // kullanim cs varidir
    //  bu da kendi icinde üce ayrilir
    
    /// 1: ID ile
    // basinda # kullaniriz

    let firstNameBySelectorId = document.querySelector("#first_name");

    window.console.log(firstNameBySelectorId);

    // window.console.dir
    // window.alert




    ////  2: class ile:
    // basinda css gibi . kullaniriz

    // aslinda document basinda da var window
    // yani window un altindaki document da bulunan su elemani getir

    // bir sekmedeki her bir web sayfasi window dur

    let firstNameBySelectorClass = window.document.querySelector(".input--style-4");



    ///  query selectorun özelligi;  class ile cagirmamiza ragmen, getelementbyclass gibi bir collection döndürmedi. Aradigimiz sartlara uyan ilk elemani döndürdü

    // getelementbyid den sonra en hizli calisan komutumuz query selector dür 

    


    /// 3: query ve name:

    let firstNameBySelectorName = window.document.querySelector("[name = 'first_name']");

    console.log(firstNameBySelectorName);


    // Burada [] kullaniyoruz =  ve '' kullaniyoruz







    ///////////// With input name:

    // bu yöntem tamamen css gibi. Ilk önce element in tipini yaziyoruz daha sonra key value seklinde degerlerini giriyoruz

    let firstNameBySelectorInputName = document.querySelector("input[name = first_name]");

    console.log(firstNameBySelectorInputName);

    // last_name:

    let lastNameBySelectorInputName2 = document.querySelector("input[name = last_name]");

    console.log(lastNameBySelectorInputName2);


    /// css de birden cok class i bulunan elementler olabilir. burada tüm class lari kullanarak query ile cagirma yapabiliriz





    /////////  query all :

    // burada sartimiza uyan tüm sonuclar return edilir. getelemntbyclass a cok benzer tek farki nedir,  tanimlama esnasinda class oldugu icin css gibi "."  ile baslariz

    // class first_name degil

    let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4");

    console.log(firstNameBySelectorAllClass);

    // all demedigimiz zaman query bu sarta sahip ilk element döner 


    /// all ile tek eleman istiyorsak yine index kullaniriz.

    // firstname
    let firstNameBySelectorAllClass2 = document.querySelectorAll(".input--style-4")[0] ;

    console.log(firstNameBySelectorAllClass2);


    // email:

    let firstNameBySelectorAllClass3 = document.querySelectorAll(".input--style-4")[3] ;

    console.log(firstNameBySelectorAllClass3);

    
    /////////////////////////////////

    // Interview:  Önemli bir detay

    //  getElementByClassName = HTML collection return eder

    // getElementsByName = nodelist return

    // queryselectorall = nodelist



    //  collection, nodelist ve array vardir
    // nodelist ile elemanlari iterate etmeden foreach ile hepsine birden özellik ekleyebiliriz. 
    // nodelist i array gibi kullaniriz ama collection i kullanamayiz

    // yani array func lari kullanmak icin collection da extra bir isleme ihtiyac vardir

    // coolection arrayfrom yada split ile array yapmamiz lazim

    // getElementsByClassName =>  Array.from(HTMLColection).forEach();

// getElementsByName => NodeList.arrayFunc()
// querySelectorAll => NodeList.arrayFunc()
    

    // let a = "1,2,3,4,5";

    // console.log(a);

    // let b = Array.from(a);

    // console.log(b);



    // Note:  nodelist array anlamina gelmez ve array in tüm func lari kullanilmaz. ama array e daha yakin bir yapi

    // Randor süreleri en kisadan en fazla olana dogru:

    // 1: Id + cache 
    // 2: queryselector + cache  
    // 3: Id 
    // 4: ClassName 
    // 5: querySelecetorId
    // 6: querySelector (class path)


    ///  cache bellektir. daha önce girdigimiz bir veri browser tarafindan hafizaya alinir. Bir sonraki giriste bu bilgiyi tekrra hatirlar
    /// cache = önbellek


// document.getElementById(selector)
// document.getElementsByClassName(selector)
// document.getElementsByName(selector)
// document.getElementsByTagName(selector)
// document.querySelector(selector)
// document.querySelectorAll(selector)












/////   property vs. attribute

// attribute __ html  :attribute html elementimizin icerisindeki hersey. mesela id class name type. bunlar html elementinin attributelari

// property ise object lerde olur. 

///  biz dom vasitasi ile elementleri object e cevirdigimiz icin, attributelari manipule edebiliriz

// ancak bazi yerlerde attribute ve property birbirlerinin yerine kullanilir


//property: value
//attribute: name="value"


//  property -> Özellik
//  Attributes -> Öznitelikler






        ////////////  getAttribute

// yukarida yakaldik zaten let firstNameById = document.getElementById("first_name")
// simdi ise bu elementin attribute larini cagiracagiz;

    console.log(firstNameById.getAttribute("id"));


    let classClass = firstNameById.getAttribute("class");
    console.log(classClass);


    let Type = firstNameById.getAttribute("type");
    console.log(Type);






            //////////  set attribute:


        ///  elementlerimizin attribute larini manipule ediyoruz

        // class ini css de daha önce tanimlanmis birsey yapalim

        firstNameById.setAttribute("class", "redColorClass");

        // Dom un mantigi biz birseyi yakaliyorsak bunu manipule de edebilirz




        // firstNameById.setAttribute("type", "radio");

        ///   burada eski type i overwrite ettik. ama birazdan üzerine eklemeyi de ögrenecegiz

        // Note:  dom vasitasi ile sayfanin ana yapisini degistirmiyoruz. sayfa random edildikten sonraki halini degistiriyoruz.. yani html tarafinda bir degisiklik degil dom tarafinda bir degisiklik yapiyoruz.
        //  bu nedenle burada gördügümüz ile html tarafinda gördügümüz farkli olabilir








        /////// //// 
        // inner HTML, innerText, TextContent, value ( value digerlerinden ayrilir. value sadece bir elementte kullanilir. bu da inputtur. inputun icerisindeki degeri almak icin value kullaniyoruz)
        // ama digerleri hemen hemen hersey de kullanilir


        // ilk 3 tanesi input harici olan html elementlerinde kullanilir. 

        // input un verilerini backand e ve database e göndermek icin value kullanilir




        ////  simdi sayfadaki ana baslik ve altindaki alt basligi iceren div i yakaliyoruz:

        // 1. method  : 
        let header = document.getElementById("headerId")
        console.log(header);

        // 2: 
        let headerQueryId = document.querySelector("#headerId");
        console.log(headerQueryId);

        // 3:
        let headerClass = document.getElementsByClassName("headerClass");
        console.log(headerClass);

        //4: 
        let headerClass2 = document.getElementsByClassName("headerClass")[0];
        console.log(headerClass2);

        //5:
        let headerQueryAll = document.querySelectorAll("#headerId");
        console.log(headerQueryAll);

        //6: 
        let headerQueryAll2 = document.querySelectorAll("#headerId")[0];
        console.log(headerQueryAll2);

        //7:
        let headerQueryClass = document.querySelector(".headerClass");
        console.log(headerQueryClass);

        //8:
        let headerTag = document.getElementsByTagName("h2")[0];
        console.log(headerTag);


        /// simdi bu elementimiz bir object e dönüstü. simdi ise bunu bir object gibi kullanmaya basliyoruz



        // inner HTML : html tagleri ile birlikte gelir,  


        let inner_html = header.innerHTML;
        console.log(inner_html);



        /// innerText:  
        // html taglerini görmezden gelir sadece text lerin icerigini alir

        let inner_text = header.innerText;
        console.log(inner_text);



        // TextContent:
        // tag leri algiliyor ancak bunlari bir bosluk gibi whitespace gibi görüyor

    	let text_content = header.textContent;
        console.log(text_content);

        





        //////////  manipulation:
        //  inputlari manipule etmek icin value lari kullanacagiz,  diger elementler de ise innertext 


        firstNameById.value = "Tarik";
        
        
        let lastNameById = document.getElementById("last_name");
        console.log(lastNameById);
        


        // asagidaki 2 satir kod da birincisini aliyor ikinci calismiyor o nedenle commend yaptik

        // lastNameById.value = "Sitki";
        lastNameById.setAttribute("value", "Kennedy");
            // setattribute ile class degisikligi yapmistik. simdi ise diger yöntem
        // lastNameById.className = "new";
        
            // id degisikligi:
        //lastNameById.id = "newnew";

        lastNameById.style.backgroundColor = "red";

        lastNameById.style.color = "white";

        lastNameById.style.textAlign = "center";




        let email = document.getElementById("email");
        console.log(email);
        email.placeholder = "tarik@gmail.com";
        email.setAttribute("class", "redBackground");
        email.setAttribute("placeholder", "setattribute@gmail.com");





        /// innerText:


        titleClass = document.getElementsByClassName("title")[0];
        console.log(titleClass);

        titleClass.innerText = "Apple";
        


            //  tag ile manipule:
        // let titleTag = document.getElementsByTagName("h2")[0];
        // console.log(titleTag);










        //////////////  TASK: Firstname ve last name icerigini alarak fullname yapalim
        // ve kücük harflerle de email yapalim


        // let full_name = document.getElementById("full_name");
        // console.log(full_name);

        let full_name = document.querySelector("#full_name");
        console.log(full_name);
        

        full_name.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`;


        //  2. method:
        // full_name.value = firstNameById.value.toUpperCase() + " " + lastNameById.value.toUpperCase();



        email.setAttribute("value", `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@gmail.com`);


        ///  objectin kendisi uppercase olmaz valuesunu uppercase yapabiliriz. Bu nedenle .value.touppercase








        ////  create  logo element, which no exist;

        let logo = document.createElement("img");
        console.log(logo);

        // yukarida yeni bir element olusturduk, simdi ise bu element i manipule edecegiz:


        // logo.setAttribute("src", "img/logo.png");

        // 2. method:
        logo.src = "img/logo.png";

        logo.className = "nav__logo";

        logo.id = "logo";

        logo.style.width = "50px";
        logo.style.height = "50px";

        // 2. method olarak css de tanimli bir class var. bunun degerlerini kullanmak icin class olarak bu class da verilebilir


        ///  simdi ise olusturdugumuz bu img i yukarida yakaladigimiz header div ine append edecegiz:

            ///  1. Method:

        header.appendChild(logo);
        // header.append(logo);
        //  bu da calisiyor ama farki bulamadim


        /// 2. Method:

        // header.innerHTML += `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />` ;

        ///  burada sadece = kullansaydik sonuc olarak sadece logo alacaktik eskilerini silecekti
        //   append ile += ayni seydir
        // append sözkonusu div in en sonuna ekleme yapar



        //  eger sadece +  kullanacak isek bu durumda div icerisind ebulunmasini istedigimiz tüm elementleri elimizle yazmamiz gerekir. asagida oldugu gibi. ama bu zahmetlidir ve gereksizdir. 
        // bu kullanimda string icinde yazdigimiz icin + kullanimina gerek yoktur.. yada her bir element icin ayri bir string kullanarak aralara + koyabiliriz



        // header.innerHTML = '<h2 class="title">Apple</h2>  <img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />';







        

























    // let headerDiv = document.getElementById("headerId");


    // let logo = document.createElement("img");

    // console.log(logo);


    // logo.setAttribute("src", "img/logo.png");

    //  logo.src ile de ulasilabilir

    // logo.setAttribute("class", "headerLogo");

    // logo.setAttribute("alt", "logo");


    // headerDiv.appendChild(logo);
    // headerDiv.innerHTML = `<img src = "img/logo.png" alt = "Bank  logo" class = "nav__logo" id="logo"/>`;


    /// hocam birden fazla class varsa setAttribute hangisini mutate edecek 
    // bu durumda class kulnacagiz



    ///  += eskisini silmez



    // headerDiv.innerHTML += `<img src = "img/logo.png" alt = "Bank  logo" class = "nav__logo" id="logo"/>`;

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
// firstNameById.setAttribute("value", "Ryan")
// lastNameById.value = "Daniel";

// //  FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

// let fullName = document.querySelector("#full_name");
// fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`;

// let email = document.getElementById("email");
// email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`;

//create logo element
// let headerDiv = document.getElementById("headerId");
// let logo = document.createElement("img");
// console.log(logo);
// logo.setAttribute("src", "img/logo.png");
// logo.setAttribute("class", "headerLogo");

// headerDiv.append(logo); 
// headerDiv.appendChild(logo); 
// headerDiv.innerHTML += '<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />';

