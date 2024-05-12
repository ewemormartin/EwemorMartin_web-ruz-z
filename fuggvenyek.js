
export const kosar = [];
export function kartyaLetrehoz(lista) {
    let txt = ""
    lista.forEach((element,index) => {
        txt += `
        <div class="container mt-3">
            <div class="card bg-dark text-white" style="width:400px">
                <img class="card-img-top" id="kepek" src="${element.kep}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${element.termekNev}</h4>
                    <p class="card-text">${element.ar}ft </p>
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
        let kosarTXT = 
        `
            <div class="cart-item">
                <p>${termekNev} - ${ar}</p>
                <button class="btn btn-danger delete-btn">Delete</button>
            </div>
        `;
        $('.kosarTartalom').append(kosarTXT);
        kosar.push({ termekNev, ar }); 
        osszegMegjelenit(osszegSzamol());
        darabSzamFrissites(); 
    });
}
 

export function KosarTorles() {
    $('.kosarTartalom').on('click', '.delete-btn', function() {
        let index = $(this).closest('.cart-item').index();
        $(this).closest('.cart-item').remove();
        kosar.splice(index, 1);
        osszegMegjelenit(osszegSzamol());
        darabSzamFrissites();
    });
}

export function osszegSzamol(){
    let osszeg = 0;
    kosar.forEach(element => {
        osszeg += parseInt(element.ar);
    });
    return osszeg;
}



export function osszegMegjelenit(){
    let osszeg = osszegSzamol();
    $('#kosarOsszeg').empty().append(osszeg);
}

export function darabSzamFrissites() {
    let darab = kosar.length;
    $('.darabSzam').text(`db: ${darab}`);
}


export function rendelGomb() {
    $(document).ready(function() {
        $("#rendel").click(function() {
            alert("Rendelés elküldve az alábbi cimre 😎😎😎😎!");
        });
    });
}

export function keresesSzuro() {
    $('#kereses').on('input', function(event) {
        let szoveg = $(event.currentTarget).val().toLowerCase();
        $('.tartalom .container').each(function() {
            let termekNev = $(this).find('.card-title').text().toLowerCase();
            if (termekNev.indexOf(szoveg) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
}

$(document).ready(function() {
    keresesSzuro();
});