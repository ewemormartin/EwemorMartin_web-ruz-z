import { ADATLISTA } from "./adatok.js";
import { rendezArSzerint } from "./adminFuggvenyek.js";
import { kartyaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";
import { Kosarba } from "./fuggvenyek.js";
import { KosarTorles } from "./fuggvenyek.js";
import { osszegSzamol,osszegMegjelenit } from "./fuggvenyek.js";
import { rendez } from "./adminFuggvenyek.js";

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
    emberekLISTA.sort(function(e1, e2) {
        return e1.kor - e2.kor;
    });
    console.log(ADATLISTA);
}
rendez();
