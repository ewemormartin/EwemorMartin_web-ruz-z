import { ADATLISTA } from "./adatok.js";
import { kosar } from "./fuggvenyek.js";


export function tablazatLetrehoz(lista) {
    let adminTXT = "<div><table class='table table-striped' style='width:1000px' class='adatok'>";
    adminTXT += "<thead><tr><th>Kép</th><th>Név</th><th>Ár</th><th></th></tr></thead>";
    adminTXT += "<tbody>";
    lista.forEach((elem) => {
        adminTXT += `<tr>
        <td><img class="card-img-top" id="kepek" src="${elem.kep}" alt="Card image" style="width:10%"></td>
        <td>${elem.termekNev}</td>
        <td>${elem.ar}</td>
        </tr>`;
    });
    adminTXT += "</tbody></table></div>";
    return adminTXT;
}

export function tablazatMegjelenit(adminTXT) {
    $('.adminTartalom').append(adminTXT);
}

export function rendez(lista, kulcs, rIrany) {
    const rlista = lista.sort(function(e1,e2) {
        return e1[kulcs]<e2[kulcs]?-1*rIrany:1*rIrany;
    });
    return rlista;
}

export function rendezArSzerint(lista) {
    const rendezettArLista = kosar.sort(function(a, b){return a - b});  
    return rendezettArLista;
}

