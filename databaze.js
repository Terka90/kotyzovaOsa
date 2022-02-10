//ŠABLONA JSON- data, co chci zaznamenávat
        const uzivatele = {
            "username": "dzesspi",
            "firstname": "Tereza",
            "lastname": "Kotyzová",
            "age": 32,
            "administrator": true,
            "action": {
                    "what": "něco co se stalo",
                    "date": "2022-01-01",
                    "typ": ["narození", "úmrtí", "stěhování", "koncert", "kino"]
                    },
            }

//=======třída UŽIVATEL
class Uzivatel{
    constructor(username, firstname, lastname, age, administrator, action) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.administrator = administrator;
    }
}
//======třída UDÁLOST
class Udalost extends Uzivatel{
    constructor(username, firstname, lastname, age, administrator, co, kdy, typ){
        super(username, firstname, lastname, age, administrator);
        this.co = co;
        this.kdy = kdy;
        this.typ = typ;
    }
}

//=================================== V PODSTATĚ JEN VYTVOŘÍ UŽIVATELE, ALE NEEVIDUJE U NĚJ ŽÁDNÉ AKCE
function registruj(){
//userName; fName; lName; age
    let prezdivka = document.getElementById("userName").value;
    let krestni = document.getElementById("fName").value;
    let prijmeni = document.getElementById("lName").value;
    let letapane = document.getElementById("age").value;

// zkontroluje, jestli v inputech nechybí povinné údaje
    if(document.getElementById("userName").value == ""){
        console.log("Je to prázdný!");
    }else if(document.getElementById("fName").value == ""){
                 console.log("Je to prázdný!");
    }else if(document.getElementById("lName").value == ""){
                 console.log("Je to prázdný!");
    }else if(document.getElementById("age").value == ""){
                  console.log("Je to prázdný!");
    }else{
//pokud údaje nechybí, pak vezme to co je v inputech a vloží to do JSON struktury dat
 const uz = {"username": prezdivka, "firstname": krestni, "lastname": prijmeni, "age": letapane, "administrator": false, "action": {"what": null, "date": null, "typ": ["null"]}}

    console.log(JSON.stringify(uz));
console.log("============================");
    console.log(JSON.parse(JSON.stringify(uz)));

//práce s Local Storage
    if (typeof(Storage) !== "undefined") {
      console.log("vytvořeno");
      var stringUz = JSON.stringify(uz);
      localStorage.setItem(prezdivka, stringUz);

    } else {
      console.log("problém");
    }

//vložení dat do souboru    - DODĚLAT!!!
           /* getText("text_data.json");  //zavolám fci, která má nahrát text ze souboru
            async function getText(file) {
              let x = await fetch(file);
              let y = await x.text();
              let vypis = JSON.parse(y);
              console.log(vypis);

              let prezdivka1 = JSON.parse(y);


            }*/


//text ve formuláři nastaví na prázdno
    document.getElementById("userName").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";
}
}

//======================OVĚŘENÍ UŽIVATELE PŘI PŘIHLAŠOVÁNÍ (JESTLI UŽ JE V "DATABÁZI")
function overUzivatele(){
    let prihlasenyUzivatel;


    //nejdřív zkontroluji, jestli mám v textovém okně nějakou hodnotu
    if(document.getElementById("userName").value == ""){
        console.log("Je to prázdný!");


    //pokud tam tu hodnotu mám, tak ji porovnám, jestli už náhodou neexistuje
    }else{
            //==========KONTROLA DAT Z EXTERNÍHO SOUBORU
            let uzivatelZInput = document.getElementById("userName").value;
            getText("text_data.json");  //zavolám fci, která má nahrát text ze souboru
            async function getText(file) {
              let x = await fetch(file);
              let y = await x.text();
              let vypis = JSON.parse(y);
              console.log(vypis);

              let prezdivka = JSON.parse(y, function(key, value){
                                                        this.key = key;
                                                        this.value = value;
                                                    });
              //==VÝPIS VŠECH UŽIVATELŮ V EXTERNÍM SOUBORU
              let pocetUzivateluDB = vypis.length;
              console.log(pocetUzivateluDB);
              let status;

                for(let i = 0; i< pocetUzivateluDB; i++ ){
                            let data = vypis[i].username; //vstup do prvního řádku výpisu na přezdívku uživatele
                            if(uzivatelZInput == data){ //pokud se údaje rovnají, tak dojde k přihlášení
                                    console.log("1. data:" + data + "; input: " + uzivatelZInput);
                                    status = "ok";
                            }else{ console.log("2. data:" + data + "; input: " + uzivatelZInput);}
                      }
                 if(status == "ok"){
                    console.log("Nalezen v externím souboru");

                    localStorage.setItem("prihlasen", uzivatelZInput);
                    window.location.href = "prihlaseno.html";


                        //práce s Local Storage
                        if (typeof(Storage) !== "undefined") {
                          console.log("vytvořeno");

                          //VLEZE DO LOCALSTORAGE A ZJISTÍ DATA UŽIVATELE
                          localStorage.setItem("prihlasen", uzivatelZInput);

                          localStorage.getItem(uzivatelZInput);
                          console.log("Uzivatel z Input: " + uzivatelZInput);

                        } else {
                          console.log("problém");
                        }


//========================================
                 }else{
                   //KONTROLA UŽIVATELE Z LOCAL STORAGE
                                            let uzivZInput = document.getElementById("userName").value;
                                            if (typeof(Storage) !== "undefined") {
                                               console.log("Lezu do LS");
                                                 let uzivZLS = localStorage.getItem(uzivZInput);
                                                 console.log(uzivZLS);
                                                // localStorage.getItem(uzivatelZInput);
                                                 if(uzivZLS == null){
                                                    console.log("uzivatel neznámý");
                                                 }else{
                                                    console.log("nalezen v LS");


                                                    window.location.href = "prihlaseno.html";
                                                    localStorage.setItem("prihlasen", uzivatelZInput);
                                                    }


                                             } else {
                                               console.log("problém");
                                             }

                 }
                }
            }
 }


//=================VLOŽENÍ UDÁLOSTI
function vlozDataUdalosti(){


                //HODNOTY PŘEDVYPLNĚNÉ (PŘEZDÍVKA, JMÉNO, PŘÍJMENÍ, VĚK, ADMINISTRÁTOR)
                //vytažení dat z LocalStorage

                                var udaje = localStorage.getItem("prihlasen"); //tohle vypíše jméno přihlášeného uživatele
                                var udaje2 = localStorage.getItem(udaje); // tohle vypíše data přihlášeného uživatele
                                //console.log(udaje);
                                //console.log(udaje2);
                                //console.log("===================");

                                var datazLS = JSON.parse(udaje2);
                                var pr = datazLS.username;

                                var jme = datazLS.firstname;
                                var pri = datazLS.lastname;
                                var ag = datazLS.age;

   //console.log("uzivatel: " + pr +", "+ jme +", "+ pri +", "+ ag);

                //HODNOTY TAHANÉ Z INPUT FORMULÁŘE (WHAT, DATE, TYP)       //nazevudalosti  ;   datUdalostiOd     ; osa
                            let co = document.getElementById("nazevudalosti").value;
                            let da = document.getElementById("datUdalostiOd").value;

                //výběr typu události
                            var selectU = document.getElementById("osa");
                            var vyberU = selectU.options[selectU.selectedIndex].text;
                            //console.log("typ události: " + vyberU);
                            let typU = vyberU;


 const uzi = {"username": pr, "firstname": jme, "lastname": pri, "age": ag, "administrator": false, "action": {"what": co, "date": da, "typ": vyberU}}


                     if (typeof(Storage) !== "undefined") {

                            let cislo = localStorage.getItem("id_dataLS");
                                    //console.log(cislo);
                            let id_dataLS = localStorage.getItem("id_dataLS"); //do LS vkládám data, na která se pohodlně dostanu a nepřepíšu si je
                                    //console.log("id: " + id_dataLS);


                          if(cislo == null){

                                            //console.log("číslo ještě neexistuje");
                                    cislo = 0;
                                    localStorage.setItem("id_dataLS", cislo);
                                    localStorage.setItem(cislo, JSON.stringify(uzi)); //toto je řetěžec, který se vkládá do LS

                          }else if(cislo == 0){
                                            //console.log("nula už tam je");
                                    cislo = parseInt(cislo) + 1 ;
                                    localStorage.setItem("id_dataLS", cislo);
                                    localStorage.setItem(cislo, JSON.stringify(uzi)); //toto je řetěžec, který se vkládá do LS
                           }else{
                                            //console.log("máme řadu??");
                                   cislo = parseInt(cislo) + 1 ;
                                   localStorage.setItem("id_dataLS", cislo);
                                   localStorage.setItem(cislo, JSON.stringify(uzi)); //toto je řetěžec, který se vkládá do LS
                           }



                        } else {
                           console.log("problém");
                        }


                        
//========================VYMYSLET LEPŠÍ VÝPIS AKCÍ (TAHAT AKCE Z LOCALSTORAGE)
                                const node = document.createElement("li");  //odrážkový seznam
                                const textinput = da + ", "  + co + ", " + typU;
                                const textnode = document.createTextNode(textinput); //hodí do položky text
                                node.appendChild(textnode);  //do odrážkového seznamu hodí text z textnode

                                document.getElementById("udalostivypis").appendChild(node);  //to co je v node tak vypíše v document.getelement

        document.getElementById("nazevudalosti").value = "";


}




//UKÁŽE UDÁLOSTI PODLE TYPU
function ukaz(){

    var selectUd = document.getElementById("osa");
    var vyberUd = selectUd.options[selectUd.selectedIndex].text;
    var pocetTyp = uzivatele.action.typ.length;
    var vyberTypu;

    switch(vyberUd){

        case uzivatele.action.typ[0]: vyberTypu = uzivatele.action.typ[0];
        break;
        case uzivatele.action.typ[1]: vyberTypu = uzivatele.action.typ[1];
        break;
        case uzivatele.action.typ[2]: vyberTypu = uzivatele.action.typ[2];
        break;
        case uzivatele.action.typ[3]: vyberTypu = uzivatele.action.typ[3];
        break;
        case uzivatele.action.typ[4]: vyberTypu = uzivatele.action.typ[4];
        break;
    }

//VLEZU DO LS A VYTÁHNU DATA PŘIHLÁŠENÉHO UŽIVATELE

if (typeof(Storage) !== "undefined") {
let index = localStorage.getItem("id_dataLS");
console.log(index);
    for(let i = 0; i <= index; i++){
                let uzivZLS = localStorage.getItem("prihlasen");
                let cislo = i;
                console.log("přihlášený uživatel: " + uzivZLS);

                //zjistím si jméno přihlášeného uživatele a to jméno potom budu porovnávat se jmény uživatelů v LS
                let prvniUzivatel = localStorage.getItem(cislo); // vrátí stringify prvního uživatele (0)
                let prUz = JSON.parse(prvniUzivatel);
                console.log("stringify username: " + prUz.username);
                if(prUz.username == uzivZLS){
                    if(prUz.action.typ == vyberTypu ){

                            const node = document.createElement("li");  //odrážkový seznam
                            const textinput = vyberTypu +": " + prUz.action["date"] + " - " + prUz.action["what"];
                            const textnode = document.createTextNode(textinput); //hodí do položky text
                            node.appendChild(textnode);  //do odrážkového seznamu hodí text z textnode

                            document.getElementById("udalostivypis").appendChild(node);  //to co je v node tak vypíše v document.getelement

                    }

                }
    }


} else {
     console.log("problém");
}


}


// ODHLÁŠENÍ UŽIVATELE
function odhlasit(){
    window.location.href = "index.html";
}

