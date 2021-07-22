
async function load_anime ()
{

    refreshList()
let response = await fetch(`https://api.jikan.moe/v4/anime`)

// fetch('https://restcountries.eu/rest/v2/all')

let object = await response.json()


// list.forEach(element => {

//     if(element.title === "naruto")
//     {
//         console.log(element)
//     }
    
// });
// var input = document.getElementById("search").value;
// let string = input.charAt(0).toUpperCase() + input.slice(1);
//     console.log(string)
loadSeasons(object)

// .then((response) => response.json())
// .then((object)=> loadSeasons(object))
}

function loadSeasons(object)
{
    
    const seasonlist = object.data;
    var input = document.getElementById("search").value;

    // console.log(input)
    // console.log(seasonlist)
    const info = document.createElement('h3')
    info.innerText="Displaying Seasons.."
   
    const outer_container = document.createElement('div')
    outer_container.className = "outer_container"
    document.body.append(info)
    // looping through all the data and rendering on the webpage
    seasonlist.forEach(element => {
        title = element.title;
        let lower_title =title.toLowerCase()
        // console.log(lower_title)
       if(lower_title.includes(input))    
        {

       //creating the inner card element to hold the necessary data inside it
        var container = document.createElement("div")
        container.className ="container";
        container.innerHTML =`
        <img class="image" src = "${element.images.jpg.image_url}">
        <div class ="title">${element.title}</div>
        <div class="title"> Start Date :<span class ="date">${new Date(element.aired.from).toDateString()} </span> <br> End Date  <span class = "date">${new Date(element.aired.to).toDateString()}</span> </div>
        <div class ="title">  Type of Sries: <span class ="date">${element.type}</span> </div>
        <div class = "title">IMDB Rating: <span class = "date"> ${element.score}</span></div>
        `
        // at the end appending the cards to the outercontainer
        outer_container.append(container)
        }

        
    });

    // now appendinging the outerconntainer into the body of the page
   document.body.append(outer_container) 
   document.getElementById("search").value="";   

}


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
search_cont.className ="search_cont"
search_cont.innerHTML =`
<input class="form-control" type="search" name="search" id="search" placeholder ="Search" >
    <button class = "button" onclick="search()" >Load Episodes List</button>
    <button class = "button" onclick ="load_anime()">Load Seasons List </button>
    `
document.body.append(search_cont);

//Function to load the data on to webpage from the search results

function loadPictures(input,data)
{
   //getting into the Array of required data 
    var animeList = data; 
    const info = document.createElement('h3')
    info.innerText =`Displaying ${input} Posters `

    // creating the outer Container to hold all the small containers or cards
    const outer_container = document.createElement('div')
    outer_container.className = "outer_container"
    document.body.append(info)

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

    // now appendinging the outerconntainer into the body of the page
   document.body.append(outer_container)   

   // once the search is done clearing the input text field for user to enter the new text
   document.getElementById("search").value=" ";   
         
}
// }

//this fuction is called when the search button is clicked

 async function search()
{
    //once the search button is clicked we need to remove the existing elements and add the new search results
    refreshList();
    //getting the value of the user input
    var input = document.getElementById("search").value;
    //requesting the api to give us data on the search input
    
    let response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`)
    if(!response.ok)
    {
        throw new Error(`Error in fetching Data from API`)
    }
    // console.log(response.url.results)
   let object = await response.json()
   data = object.results
   loadPictures(input,data)

    // //the response is now converted into json fornmat
    // .then((response) => response.json())
    // //the json data is now given to the function loadPictures to render the data on the page
    // .then((object) => loadPictures(object))
    
}

//function to refersh the content 
function refreshList()
{
    $(".outer_container").remove();
    $("h3").remove()
   
}
       
  //load_anime();
    
      
    
