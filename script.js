// var id = 1;
// function load_anime ()
// {
// fetch(`https://api.jikan.moe/v3`)
// // fetch('https://restcountries.eu/rest/v2/all')
// .then((response) => response.json())
// .then((object)=> loadPictures(object))
// }

function loadPictures(data)
{
   
    var animeList = data.results;
    
    const outer_container = document.createElement('div')
    outer_container.className = "outer_container"


    animeList.forEach(element => {

       
        var container = document.createElement("div")
        container.className ="container";
        container.innerHTML =`
        <img class="image" src = "${element.image_url}">
        <div class ="title">${element.title}</div>
        <div class="title"> Start Date :<span class ="date">${new Date(element.start_date).toDateString()} </span> <br> End Date  <span class = "date">${new Date(element.end_date).toDateString()}</span> </div>
        <div class ="title">  Type of Sries: <span class ="date">${element.type}</span> </div>
        <div class = "title">IMDB Rating: <span class = "date"> ${element.score}</span></div>
        `
        outer_container.append(container)
        
    });
   document.body.append(outer_container)   
   document.getElementById("search").value=" ";   
         
}
// }

function search()
{
    refreshList();
    var input = document.getElementById("search").value;
    console.log(input)

    fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`)
    // fetch(`https://restcountries.eu/rest/v2/name/${input}`)
    .then((response) => response.json())
    .then((object) => loadPictures(object))
    
}

function refreshList()
{
    $(".outer_container").remove();
   
}
       
  //load_anime();
    
      
    
