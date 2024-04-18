    /* <div class="container mt-3">
            <div class="card" style="width:400px">
                <img class="card-img-top" src="kepek/" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">Termék neve</h4>
                    <p class="card-text">Lerias</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
                </div>
                
            </div>
        </div>
    */
export function listaLetrehoz(lista) {
    let txt = ""
    lista.forEach(element => {
        txt= `
        <div class="container mt-3">
            <div class="card" style="width:400px">
                <img class="card-img-top" src="${element.kep}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${element.termekNev}</h4>
                    <p class="card-text">${element.ar}</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
                </div>
                
            </div>
        </div>
        `
    });
    return txt;
    
}


export function listaMegjelenites(ADATLISTA){
    

}