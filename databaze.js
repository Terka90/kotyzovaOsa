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
                    }
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


//text ve formuláři nastaví na prázdno
    document.getElementById("userName").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";

}

function vypisUzivatele(){
    document.getElementById("vypis").innerHTML = newUser["username"];
}





//OVĚŘENÍ UŽIVATELE PŘI PŘIHLAŠOVÁNÍ (JESTLI UŽ JE V "DATABÁZI")
function overUzivatele(){

    //nejdřív zkontroluji, jestli mám v textovém okně nějakou hodnotu
    if(document.getElementById("userName").value == ""){
        console.log("Je to prázdný!");


    //pokud tam tu hodnotu mám, tak ji porovnám, jestli už náhodou neexistuje
    }else{
            var stUzivatel = uzivatele.username;
            console.log(stUzivatel);

            var novyUzivatel = document.getElementById("userName").value;
            console.log(novyUzivatel);

            if(stUzivatel == novyUzivatel){
                console.log("Vítej " + uzivatele["username"] + "!");
                window.location.href = "prihlaseno.html";
            }else{
                console.log("Tuto přezdívku neevidujeme. Vytvořte si registraci. ");
            }
    }
}

// FUNKCE PRO VÝPIS OPTION V MENU PRO VÝBĚR TYPU AKCE
     function vyberTyp(){

        var pocetHodnot = uzivatele.action.typ.length;



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

