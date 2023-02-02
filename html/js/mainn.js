// // https://imdb-api.com/API/Search/k_ccxkk6gd/k_iek5x25t{filmin adi}


// document.getElementById('btn').addEventListener('click' , () => {
//     document.getElementById("films").innerHTML = ``
//     fetch(`https://imdb-api.com/en/API/Search/k_iek5x25t/ ${document.getElementById('film-input').value}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//         // console.log(data.results);
//         for (let film of data.results) {
//             console.log(film);
//             document.getElementById("films").innerHTML += `
//             <div class="container-fluid">
//             <div class="row">
//                 <div class="col-lg-12  col-sm-" style="width:100%>
//                     <div class="item">
//                         <img class="filmsekil" src="${film.image}" alt="Card image cap">
                         
//                             <h5 class="">${film.title}</h5>
//                             <p class="">${film.description}</p>
                         
//                     </div>
//                 </div>
//             </div>
//         </div>
//             `
//         }
//     })
// })

document.getElementById('btn').addEventListener('click' , () => {
        document.getElementById("uni").innerHTML = ``
        fetch(`http://universities.hipolabs.com/search?country=${document.getElementById('uni-input').value}`)
        .then((resp) => resp.json())
        .then((data) => {
        //    console.log(data);
           for (let uni of data){
               
            console.log(uni);
             document.getElementById("uni").innerHTML += `
            
            <div> 

                <p  ${uni.country} </p>
                <p  ${uni.name} </p>
                <p  ${uni.domains} </p>
            </div>
            
             ` 
           }
        })
    })