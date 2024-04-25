
export function tablazatLetrehoz(lista){
    let adminTXT = "<div><table class='table table-striped' style='width:1000px'>";
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

export function tablazatMegjelenit(adminTXT){
    $('.adminTartalom').append(adminTXT);
}

export  function arSzerintSorrend(){
    
}
