//ŠABLONA - data, co chci zaznamenávat
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


 function vytvorTridu(){
     //let prezdivka = document.getElementById("userName").value;
     //let krestni = document.getElementById("fName").value;
     //let prijmeni = document.getElementById("lName").value;
     //let letapane = document.getElementById("age").value;


        const uz = new Udalost("dzesspi", "terka", "kotyzova", 32, null, "nevim co", "2022-01-03", "narození");
        console.log(uz);

        const zapisUz = JSON.stringify(uz);
        console.log(zapisUz);
 }






// V PODSTATĚ JEN VYTVOŘÍ UŽIVATELE, ALE NEEVIDUJE U NĚJ ŽÁDNÉ AKCE
function registruj(){
//userName; fName; lName; age

    //console.log(JSON.stringify(uzivatele));
        console.log("============================");

    let prezdivka = document.getElementById("userName").value;
    let krestni = document.getElementById("fName").value;
    let prijmeni = document.getElementById("lName").value;
    let letapane = document.getElementById("age").value;

    const uz = {"username": prezdivka, "firstname": krestni, "lastname": prijmeni, "age": letapane, "administrator": false, "action": {"what": null, "date": null, "typ": ["null"]}}

    console.log(JSON.stringify(uz));
console.log("============================");
    console.log(JSON.parse(JSON.stringify(uz)));



//vložení dat do souboru    - DODĚLAT!!!
            getText("text_data.json");  //zavolám fci, která má nahrát text ze souboru
            async function getText(file) {
              let x = await fetch(file);
              let y = await x.text();
              let vypis = JSON.parse(y);
              console.log(vypis);

              let prezdivka1 = JSON.parse(y);


            }


//text ve formuláři nastaví na prázdno
    document.getElementById("userName").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";

}








//vypíše uživatele, který vkládá událost
function vypisUzivatele(){
    document.getElementById("vypis").innerHTML = uzivatelZInput;
}





//======================OVĚŘENÍ UŽIVATELE PŘI PŘIHLAŠOVÁNÍ (JESTLI UŽ JE V "DATABÁZI")
function overUzivatele(){

    //nejdřív zkontroluji, jestli mám v textovém okně nějakou hodnotu
    if(document.getElementById("userName").value == ""){
        console.log("Je to prázdný!");


    //pokud tam tu hodnotu mám, tak ji porovnám, jestli už náhodou neexistuje
    }else{
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
              //console.log(vypis[0]);
              //let data = vypis[0].username;
              //console.log(data);


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
                    console.log("přihlášen");
                    const prihlasenyUzivatel = uzivatelZInput;
                    window.location.href = "prihlaseno.html";
                 }else{alert("nejsi registrován");}
                 }
                }
            }









//UKÁŽE UDÁLOSTI PODLE TYPU
function ukaz(){

    var selectUd = document.getElementById("osa");
    var vyberUd = selectUd.options[selectUd.selectedIndex].text;
    var pocetTyp = uzivatele.action.typ.length;

    document.getElementById("prezdivkaUzivatele").innerHTML = uzivatele.["username"];


    switch(vyberUd){

        case uzivatele.action.typ[0]: document.getElementById("udalostivypis").innerHTML = uzivatele.action.typ[0] +": " + uzivatele.action["date"] + " - " + uzivatele.action["what"];
        break;
        case uzivatele.action.typ[1]: document.getElementById("udalostivypis").innerHTML = uzivatele.action.typ[1] +": " + uzivatele.action["date"] + " - " + uzivatele.action["what"];
        break;
        case uzivatele.action.typ[2]: document.getElementById("udalostivypis").innerHTML = uzivatele.action.typ[2] +": " + uzivatele.action["date"] + " - " + uzivatele.action["what"];
        break;
        case uzivatele.action.typ[3]: document.getElementById("udalostivypis").innerHTML = uzivatele.action.typ[3] +": " + uzivatele.action["date"] + " - " + uzivatele.action["what"];
        break;
        case uzivatele.action.typ[4]: document.getElementById("udalostivypis").innerHTML = uzivatele.action.typ[4] +": " + uzivatele.action["date"] + " - " + uzivatele.action["what"];
        break;


    }



}

//=================VLOŽENÍ UDÁLOSTI
function vlozDataUdalosti(){


                //HODNOTY PŘEDVYPLNĚNÉ (PŘEZDÍVKA, JMÉNO, PŘÍJMENÍ, VĚK, ADMINISTRÁTOR)
                                var pr = uzivatele["username"];
                                var jme = uzivatele["firstname"];
                                var pri = uzivatele["lastname"];
                                var ag = uzivatele["age"];

                //HODNOTY TAHANÉ Z FORMULÁŘE (WHAT, DATE, TYP)       //nazevudalosti  ;   datUdalostiOd     ; osa
                            let co = document.getElementById("nazevudalosti").value;
                            let da = document.getElementById("datUdalostiOd").value;

                //výběr typu události
                            var selectU = document.getElementById("osa");
                            var vyberU = selectU.options[selectU.selectedIndex].text;
                            //console.log(vyberU);
                            let typU = vyberU;


 const uzi = {"username": pr, "firstname": jme, "lastname": pri, "age": ag, "administrator": false, "action": {"what": co, "date": da, "typ": ["typU"]}}



         document.getElementById("prezdivkaUzivatele").innerHTML = uzi["username"];
         //document.getElementById("udalostivypis").innerHTML = uzi.action["what"] + ", " + uzi.action["date"] + ", " + uzi.action["typ"];

                                const node = document.createElement("li");  //odrážkový seznam
                                const textinput = da + ", "  + co + ", " + typU;
                                const textnode = document.createTextNode(textinput); //hodí do položky text
                                node.appendChild(textnode);  //do odrážkového seznamu hodí text z textnode

                                document.getElementById("udalostivypis").appendChild(node);//to co je v node tak vypíše v document.getelement

        document.getElementById("nazevudalosti").value = "";


}




function odhlasit(){
    window.location.href = "osaobsah.html";
}

