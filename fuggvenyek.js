
export const kosar = [];
export function kartyaLetrehoz(lista) {
    let txt = ""
    lista.forEach((element,index) => {
        txt += `
        <div class="container mt-3">
            <div class="card" style="width:400px">
                <img class="card-img-top" id="kepek" src="${element.kep}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${element.termekNev}</h4>
                    <p class="card-text">${element.ar}</p>
                    <button href="#" class="btn btn-primary kosarbaRak" id="${index}">Kosárba</button>
                </div>
            </div>
        </div>
        `
    });
    return txt;
}


export function listaMegjelenites(txt){
    $('.tartalom').append(txt);
}
export function Kosarba() {
    
    $('.tartalom').on('click', '.kosarbaRak', function() {
        let kartya = $(this).closest('.card');
        let termekNev = kartya.find('.card-title').text();
        let ar = kartya.find('.card-text').text();
        let kosarTXT = `
            <div class="cart-item">
                <p>${termekNev} - ${ar}</p>
                <button class="btn btn-danger delete-btn">Delete</button>
            </div>
        `;
        $('.kosarTartalom').append(kosarTXT);
        kosar.push(kosarTXT);
        console.log(kosar);
    });
} 

export function KosarTorles() {
    $('.kosarTartalom').on('click', '.delete-btn', function() {
        $(this).closest('.cart-item').remove();
    });
}
export function osszegSzamol(){
    let osszeg;
    kosar.forEach(element => {
        osszeg+=element.ar;
    });
    return osszeg;
}

export function osszegMegjelenit(osszeg){
    $('.kosarOsszeg').append(osszeg);
}
