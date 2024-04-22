import { ADATLISTA } from "./adatok.js";
import { listaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";
import { Kosarba } from "./fuggvenyek.js";
import { KosarTorles } from "./fuggvenyek.js";

init();



function init() {
    listaMegjelenites(listaLetrehoz(ADATLISTA));
    Kosarba();
    KosarTorles();
      
    
}
