import { ADATLISTA } from "./adatok.js";
import { kosarbaMegjelenites, listaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";
import { Kosárba } from "./fuggvenyek.js";

init();



function init() {
    listaMegjelenites(listaLetrehoz(ADATLISTA));
    Kosárba();  
    kosarbaMegjelenites(Kosárba());
    console.log(kosarbaMegjelenites()); 
    
}
