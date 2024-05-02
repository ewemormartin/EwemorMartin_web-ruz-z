import { ADATLISTA } from "./adatok.js";
import { rendezArSzerint } from "./adminFuggvenyek.js";
import { kartyaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";
import { Kosarba } from "./fuggvenyek.js";
import { KosarTorles } from "./fuggvenyek.js";
import { osszegSzamol,osszegMegjelenit } from "./fuggvenyek.js";
import { rendezArSzerint } from "./adminFuggvenyek.js";

init();

rendezArSzerint(ADATLISTA);

function init() {
    listaMegjelenites(kartyaLetrehoz(ADATLISTA));
    Kosarba();
    KosarTorles();
    osszegSzamol();
    osszegMegjelenit();

}



function rendezAr(){
    
}

