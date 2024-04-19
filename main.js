import { ADATLISTA } from "./adatok.js";
import { listaLetrehoz, listaMegjelenites } from "./fuggvenyek.js";

init();



function init() {
    listaMegjelenites(listaLetrehoz(ADATLISTA));
}
