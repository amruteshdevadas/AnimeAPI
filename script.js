// var id = 1;
// function load_anime ()
// {
// fetch(`https://api.jikan.moe/v3`)
// // fetch('https://restcountries.eu/rest/v2/all')
// .then((response) => response.json())
// .then((object)=> loadPictures(object))
// }


// Creating Elemnets 
//1. Header
var header = document.createElement("div");
header.innerHTML=`<h2> ANIME API </h2>
<div class="text">
    (Search for your Favourite Anime)
</div>`
document.body.append(header)


//2. Text and Buttons
var search_cont = document.createElement("div")
search_cont.innerHTML =`
<input class="form-control" type="search" name="search" id="search" placeholder ="Search" class="search">
    <button class = "button" onclick="search()" >Search</button>`
document.body.append(search_cont);

//Function to load the data on to webpage from the search results

function loadPictures(data)
{
   //getting into the Array of required data 
    var animeList = data.results; 

    //creating the outer Container to hold all the small containers or cards
    const outer_container = document.createElement('div')
    outer_container.className = "outer_container"

    // looping through all the data and rendering on the webpage
    animeList.forEach(element => {

       //creating the inner card element to hold the necessary data inside it
        var container = document.createElement("div")
        container.className ="container";
        container.innerHTML =`
        <img class="image" src = "${element.image_url}">
        <div class ="title">${element.title}</div>
        <div class="title"> Start Date :<span class ="date">${new Date(element.start_date).toDateString()} </span> <br> End Date  <span class = "date">${new Date(element.end_date).toDateString()}</span> </div>
        <div class ="title">  Type of Sries: <span class ="date">${element.type}</span> </div>
        <div class = "title">IMDB Rating: <span class = "date"> ${element.score}</span></div>
        `
        // at the end appending the cards to the outercontainer
        outer_container.append(container)
        
    });

    //now appendinging the outerconntainer into the body of the page
   document.body.append(outer_container)   

   // once the search is done clearing the input text field for user to enter the new text
   document.getElementById("search").value=" ";   
         
}
// }

//this fuction is called when the search button is clicked

function search()
{
    //once the search button is clicked we need to remove the existing elements and add the new search results
    refreshList();
    //getting the value of the user input
    var input = document.getElementById("search").value;
    //requesting the api to give us data on the search input
    fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`)
    //the response is now converted into json fornmat
    .then((response) => response.json())
    //the json data is now given to the function loadPictures to render the data on the page
    .then((object) => loadPictures(object))
    
}

//function to refersh the content 
function refreshList()
{
    $(".outer_container").remove();
   
}
       
  //load_anime();
    
      
    
