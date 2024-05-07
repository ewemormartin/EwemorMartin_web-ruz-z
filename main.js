import { ADATLISTA } from "./adatok.js";
import { rendezArSzerint } from "./adminFuggvenyek.js";
import { kartyaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";
import { Kosarba } from "./fuggvenyek.js";
import { KosarTorles } from "./fuggvenyek.js";
import { osszegSzamol,osszegMegjelenit } from "./fuggvenyek.js";
import {  } from "./adminFuggvenyek.js";
import { darabSzamFrissites } from "./fuggvenyek.js";
import { rendelGomb } from "./fuggvenyek.js";

init();

rendezArSzerint(ADATLISTA);

function init() {
    listaMegjelenites(kartyaLetrehoz(ADATLISTA));
    Kosarba();
    KosarTorles();
    osszegSzamol();
    osszegMegjelenit();
    darabSzamFrissites();
    rendelGomb();
}



function rendezAr(){
    
}

