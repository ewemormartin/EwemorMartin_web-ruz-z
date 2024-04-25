import { ADATLISTA } from "./adatok.js";
import { kartyaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";
import { Kosarba } from "./fuggvenyek.js";
import { KosarTorles } from "./fuggvenyek.js";
import { osszegSzamol,osszegMegjelenit } from "./fuggvenyek.js";

init();



function init() {
    listaMegjelenites(kartyaLetrehoz(ADATLISTA));
    Kosarba();
    KosarTorles();
    osszegSzamol();
    osszegMegjelenit();

}
