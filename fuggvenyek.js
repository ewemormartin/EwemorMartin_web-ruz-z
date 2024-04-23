export function listaLetrehoz(lista) {
    let txt = ""
    lista.forEach(element => {
        txt += `
        <div class="container mt-3">
            <div class="card" style="width:400px">
                <img class="card-img-top" id="kepek" src="${element.kep}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${element.termekNev}</h4>
                    <p class="card-text">${element.ar}</p>
                    <a href="#" class="btn btn-primary" id="kosarbaRak">Kosárba</a>
                </div>
                <div class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Méretek
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Link 1</a></li>
                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                </ul>
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
    $('.tartalom').on('click', '#kosarbaRak', function() {
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
    });
} 
export function KosarTorles() {
    $('.kosarTartalom').on('click', '.delete-btn', function() {
        $(this).closest('.cart-item').remove();
    });
}
