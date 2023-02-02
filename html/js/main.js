// https://imdb-api.com/API/Search/k_ccxkk6gd/k_iek5x25t{filmin adi}


document.getElementById('btn').addEventListener('click' , () => {
    document.getElementById("films").innerHTML = ``
    fetch(`https://imdb-api.com/en/API/Search/k_iek5x25t/ ${document.getElementById('film-input').value}`)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.results);
        for (let film of data.results) {
            console.log(film);
            document.getElementById("films").innerHTML += `
            <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12   " style="width:100%>
                    <div class="item">
                        <img class="filmsekil" src="${film.image}" alt="Card image cap">
                         
                            <h5 class="">${film.title}</h5>
                            <h3 class="">${film.description}</h3>
                         
                    </div>
                </div>
            </div>
        </div>
            `
        }
    })
})




