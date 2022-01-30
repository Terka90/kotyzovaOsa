
    const newUser = {username:"John", firstname:"Terka", lastname:"New York", age:30};


function registruj(){
//userName; fName; lName; age

    newUser["username"] = document.getElementById("userName").value;
    newUser["firstname"] = document.getElementById("fName").value;
    newUser["lastname"] = document.getElementById("lName").value;
    newUser["age"] = document.getElementById("age").value;

    console.log(newUser["username"] + "; " + newUser["firstname"] + "; " + newUser["lastname"] + "; " +  newUser["age"]);


    //text ve formuláři nastaví na prázdno
    document.getElementById("userName").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("age").value = "";

}

function vypisUzivatele(){
    document.getElementById("vypis").innerHTML = newUser["username"];
}


function overUzivatele(){


        //newUser["username"] = document.getElementById("userName").value;



    //nejdřív zkontroluji, jestli mám v textovém okně nějakou hodnotu
    if(document.getElementById("userName").value == ""){
        console.log("Je to prázdný!");


    //pokud tam tu hodnotu mám, tak ji porovnám, jestli už náhodou neexistuje
    }else{
            var uzivatel = newUser["username"];
            var novyUzivatel = document.getElementById("userName").value;

            console.log(uzivatel);
            console.log(novyUzivatel);

            if(uzivatel == novyUzivatel){
                console.log("Vítej " + newUser["username"] + "!");
                window.location.href = "prihlaseno.html";
            }else{
                console.log("Tuto přezdívku neevidujeme. Vytvořte si registraci. ");
            }

    }
}



function odhlasit(){
    window.location.href = "osaobsah.html";
}