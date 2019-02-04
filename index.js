let xhr = new XMLHttpRequest();
const url = "https://www.omdbapi.com/?apikey="

let APIKEY = "1bf03af2";







function submitTY() {
  
    let Title = document.getElementById("T&YForm")["Title"].value;
    let Year = document.getElementById("T&YForm")["Year"].value;
    xhr.open("GET", url + APIKEY + '&s=' + Title + '&y=' + Year);


    xhr.send();
    
    
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
        
    }
    else if (this.status == 404) {
            document.getElementById("error").innerHTML = "<h2>Movie not found! Please try again.</h2>";
        }
        
         else {
           
            document.getElementById("error").innerHTML = "<h2>Movie not found! Please try again.</h2>";
            
        }
};

}








function submitSeries() {
    let Series = document.getElementById("SeriesForm")["Series"].value;
    let Season = document.getElementById("SeriesForm")["Season"].value;
    
    xhr.open("GET", url + APIKEY + '&t=' + Series + '&Season=' + Season);


    xhr.send();
    
    
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displaySeries(this.responseText);
    }
    else if (this.status == 404) {
            document.getElementById("error2").innerHTML = "<h2>Movie not found! Please try again.</h2>";
        }
        
         else {
           
            document.getElementById("error2").innerHTML = "<h2>Movie not found! Please try again.</h2>";
            
        }
};

}




function displaySeries(apiData) {
    apiData = JSON.parse(apiData);
    console.log(apiData);
    let series = apiData.Episodes;
    let output = "";
    
    
       

    
    
    for (let i in series) {
        
       
        
        output += `<div class = 'col-xs-12 col-sm-6 col-md-3 text-center'>
        <div class = 'well text-center'>
             <div class="card border-warning mb-3 " style="max-width: 18rem;">
  <div class="card-header"><strong>Title:</strong> ${series[i].Title}</div>
  <div class="card-body well text-center">
    <h5 class="card-title"> <strong>Episode:</strong> ${series[i].Episode}</h5>
    <p class="card-text"><strong>Released:</strong> ${series[i].Released}</p>
    <p class="card-text"><strong>Rating:</strong> ${series[i].imdbRating}</p>

        
        </div>
        </div>
        
        
   
        
     
        </div>
        </div>
        
        
        
        
       `;
    }
    
    
    
    
    
document.getElementById("series").innerHTML = output;


        
}



function displayNicely(apiData) {
    
    apiData = JSON.parse(apiData);
    console.log(apiData);
    let movies = apiData.Search;
    let output = "";
    
    
       

    
    
    for (let i in movies) {
        
        output += `<div class = 'col-sm-12 col-md-3'>
        <div class = 'well text-center'>
        <img src = "${movies[i].Poster}">
        <h5>${movies[i].Title}</h5>
        <a onclick = "movieSelected('${movies[i].imdbID}')" class = 'btn btn-primary' href = '#'>Movie Details</a>
        
        </div>
        </div>
        
        
        
        
       `;
    }
    
    
    
    
    
document.getElementById("movies").innerHTML = output;



        
}










function movieSelected(id){
    sessionStorage.setItem('movieID', id);
    window.location = 'movie_detail.html';
    return false;
    
}


function getMovie(){
    let movieID = sessionStorage.getItem('movieID');
     xhr.open("GET", url + APIKEY + '&i=' + movieID);


    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayMovie(this.responseText);
        }
        
};

    
}



function displayMovie(movie){
    movie = JSON.parse(movie);
    console.log(movie);
    
    let output = `<div class = 'row'>
    <div class = 'col-md-4'>
    <img src = '${movie.Poster}' alt = 'images/no_image.png' class = 'thumbnail'>
    
        </div>
        <div class = 'col-md-8 ' style = 'text-align:left'>
        <h2>${movie.Title}</h2>
        <ul class = 'list-group'></ul>
        <li class = 'list-group-item'><strong>Genre:</strong> ${movie.Genre}</li>
        <li class = 'list-group-item'><strong>Released:</strong> ${movie.Released}</li>
        <li class = 'list-group-item'><strong>Rated:</strong> ${movie.Rated}</li>
        <li class = 'list-group-item'><strong>ImDB rating:</strong> ${movie.imdbRating}</li>
        <li class = 'list-group-item'><strong>Director:</strong> ${movie.Director}</li>
        <li class = 'list-group-item'><strong>Writer:</strong> ${movie.writer}</li>
        <li class = 'list-group-item'><strong>Actors:</strong> ${movie.actors}</li>
        </div>
        <div class = 'row'>
        <div class = 'col-md-12'>
        &nbsp
        </div>
        </div>
        <div class = 'row'>
        <div class = 'well'>
        
        <h3>Plot</h3>
        <h5>${movie.Plot}</h5>
        <hr>
        <a href = "http://imdb.com/title/${movie.imdbID}" target = 'blank' class = 'btn btn-primary'>View IMDB</a>
        <a href = "index.html" class = "btn btn-secondary" >Go back to Search</a>
        </div>
        </div>`;
    
    
    
document.getElementById("movie").innerHTML = output;   
}





function refreshIndex(){
     window.location = 'index.html';
    
}

function refreshSeries(){
     window.location = 'series.html';
    
}




