$( 'document' ).ready(function() {

    const velicina = 4; // velicina puzzle

    red = velicina;
    stup = velicina;
    praznina = red * stup - 1;
    pocetak = 0;
    ploca = [];
    prikaz = $('#ploca'); 

    kreiraj(); // onload kreira igru
});



function kreiraj() {


    ploca = [];
    
    for (var pozicija = 0; pozicija < red; pozicija++) {
        
        ploca[pozicija] = []; 
        //console.log(ploca);
        for (var brojac = 0; brojac < stup; brojac++) {

            var provjera = pozicija * stup + brojac;
            //alert(provjera);
            if (provjera < praznina){
                ploca[pozicija][brojac] = provjera + 1;
            } else {
                ploca[pozicija][brojac] = pocetak;
            }
        }
    }

    var pokretiArray = ['r', 'l', 'd', 'u'];
    for (var z = 0; z < 100; z++) {
        tipkeOnpress(pokretiArray[parseInt(Math.random() * 4,10)], false);
    }
    console.log(ploca);

    osvjezi();
}

function osvjezi() {
    
    prikaz.empty();
    
    var noviPrikaz = '';
    
    for (var pozicija = 0; pozicija < red; pozicija++) {
        noviPrikaz += '<tr>';
        
        for (var brojac = 0; brojac < stup; brojac++) {

            if (ploca[pozicija][brojac] != pocetak) {

                noviPrikaz += '<td onClick="naKlik();" id="' + "test" + '"'  + 'class="num">' + ploca[pozicija][brojac] + '</td>';
            } else {

                noviPrikaz += '<td class="praznoPolje">&nbsp;</td>';
            }

        }
        
        noviPrikaz += '</tr>';
    }
    
    prikaz.html(noviPrikaz);
}



function kraj() {

    for (var pozicija = 0; pozicija < red; pozicija++) {
        
        for ( var brojac = 0; brojac < stup; brojac++) {
            var provjera = pozicija * stup + brojac + 1;
             //alert(provjera);
            if (pozicija * stup + brojac < red * stup - 1) {

                if (ploca[pozicija][brojac] != provjera) {
                    return;
                }
            }
        }
    }
    
    if(confirm('Uspješno rješeno! \nZapočeti novu igru?')){
        window.location.reload();
    }
}


function pomak(na) {
 
    ploca[parseInt(praznina / red, 10)][praznina % stup] = ploca[parseInt(na / red, 10)][na % stup];
    //console.log(ploca[parseInt(na / red, 10)][na % red] BUG
    ploca[parseInt(na / red, 10)][na % stup] = pocetak;

    praznina = na;
    //alert(praznina); 1+
    osvjezi();
}

function tipkeOnpress(d, provjeraa) {

    console.log(d); // ok
    switch (d) {
        case 'r':
                if (praznina % stup > 0){
                    pomak(praznina - 1);
                }
                break;
        case 'l':
                if (praznina % stup < stup - 1){
                    pomak(praznina + 1);
                }
                break;
        case 'd':
                if (parseInt(praznina / red, 10) > 0) {
                    pomak(praznina - stup);
                }
                break;
        case 'u':
                if (parseInt(praznina / red, 10) < red - 1) {
                    pomak(praznina + stup);
                }
                break;
        default:
            //ako je miš u pitanju
            pomak(praznina + 1); // bug
    }

    if (provjeraa) {
        kraj();
    }
}

$(document).keydown(function (e) {

    switch (e.which) {
        case 37:
            tipkeOnpress('l', true);
            break;
        case 38:
            tipkeOnpress('u', true);
            break;
        case 39:
            tipkeOnpress('r', true);
            break;
        case 40:
            tipkeOnpress('d', true);
            break;
    }

});

    
function mix() {

    location.reload();
}

function naKlik() {

    var na = document.getElementById ( "test" ).innerText;
    tipkeOnpress(na); // ?? 

}


function pozadina(path) {
    var e = document.getElementById("pozadinaa");
    var odabranaPozadina = e.options[e.selectedIndex].value;
    var putanja = 'img/' + odabranaPozadina;

    $('#ploca').css('background-image', 'url(' + putanja + ')');
}