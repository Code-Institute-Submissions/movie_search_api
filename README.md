## OMDB API search engine:

Find my site [here](https://caoimhedaly.github.io/movie_search_api/).
  
[Css validated](https://jigsaw.w3.org/css-validator/validator).
  
  
  
## Introduction:
  
  This project is a frontend-only website using technologies learned through my interactive frontend development module. This site calls on the OMDB API to allow its users to search for movies by name and year as well as series by name and season. When a search is submitted, information returned includes details of release date, writer, director etc. 
  
  
  
## UX:
  
  The website I developed for movie and tv series lovers, to allow them to search for accurate information on their favourite film and tv series, from release date to oscar nominations. It can also be used to browse for those simply looking for movie-night inspiration. 
  
  * Patrick 47yrs: Im an avid movie fan. Using the OMDB search engine I am able to search for movies new and old that I have yet to see by title and year. As the IMDB rating and award nominations are also given, I can reliably chose which films I will enjoy.  I particularly like to see the original posters for each movie. 
  
* Sarah 19yrs: I love the tv series The Office. As there are over 100 episodes it can be tricky to find the one I want to watch!  Using this site I am able to search for my favourite episodes by season. Once I have the episode number, it is easy to watch the exact episode I want online. 
  
  
***LINK TO WIREFRAME***

Find a link to the large screen wire frame [here](https://balsamiq.cloud/s6r726f/pu2bcvm)

Find a link to the mobile view wireframe [here](https://balsamiq.cloud/s6r726f/pamaugc)  
 

## FEATURES:

  * Favicon - the site has a favicon (popcorn cartoon) that will allow the user to easily navigate to the site from their desktop.  
  
  * Navigation bar - each page has a collapsible navbar which allows the user to easily navigate the website. The navbar collapses to the same image as the favicon - popcorn cartoon. The 'Movies' and 'Series' links are bold orange, making them stand out against the dark background. When each respective page is open, the link button is filled orange to indicate that the user is on this page, while the other link button is outlined orange. 
  
  
  * Homepage- the homepage consists of a simple search engine set against a dark background. The buttons are bright and obvious. 
 
  * The movie search engine - this allows the user to search for a movie by title and year, or by title alone. The 10 most relevant results will return. If no such movie exists, or if a title is not enetered, an error message is returned - 'Movie not Found! Please try again.'
  
  * Movie Gallery - On submitting a search for a movie, the top 10 most relevant movies are returned and displayed in a gallery. The poster for each movie, if available, stands out against the dark background. Each poster has an opacity of 0.5. On hover image, this transitions to an opacity of 1. The title is diplayed below each poster and a button- 'movie details' which links to a page with more details on the chosen movie. 
  
  
  * Movie_detail.html- this page describes the chosen movie in further detail. The movie poster is rendered if available, title, and information such as release date, writer, director etc. At the bottom of the page, a plot summary is described. Finally, there is a link button to the imdb page for this movie as well as a link button to the home page. 
  
  * series.html - similiar to the homepage, this page has a search engine. The user can search for a tv series by title and season. If a series is found, returned is the title and number of sesons. Each episode in the relevant season is displayed on a card. Each card details the episode title, number, release date and imdb rating. Again there is a button linking to the relevant imdb page. If no series is found on a search, an error message is returned - 'series not found! Please try again.'

 * Clear search - the user is able to clear the search engine using this button. 
  
## Features to implement:
  
...Ideally I would like to be able to paginate the site so that when a search is submitted for a movie, all results can be displayed. 
  
...If I were to redesign this site, I would use a different API that would allow me to search for movies by actor, genre, director etc. Unfortunately the OMDB API does not have this feature. 
  
 

## TECHNOLOGIES USED: 
  
  1. BOOTSTRAP CDN 4.0.0 <https://getbootstrap.com/> - I used the Bootstrap framework as it allowed me to build a mobile-first, responsive website using html, CSS and js. 
  
  ...Cards- bootstrap allowed me to display each series episode as a card. 
  
  ...FORM- the search engine is a simple form using bootstrap.   

  2. Javascript - I used JS to call on the OMDB API and create functions to best display the returned data. 
   
  3. HTML- I used Hypertext markup language to give my content structure and meaning by defining headings, paragraphs, images etc. 
  
  4. CSS3 - I used CSS to allow me to style my HTML documents. CSS allowed me to style text size, color, position. 
  
  ...Movie gallery- css allowed me to style a movie gallery on the home page with on hover transitions. 
 
  ...Margins/Borders/padding - this allowed me to create space on my website for a better user experience and easy using. 
 
  5. OMDB API <http://www.omdbapi.com/> - The site is based around the OMDB API, which allows the user to access the IMDB database. 
 

## Sources:
 
 * I followed a youtube tutorial on accessing the OMDB API, <https://www.youtube.com/watch?v=NE2Uf41Z4Cw> . 

 * I used jigsaw css validator to validate my css <https://jigsaw.w3.org/css-validator/>.
 

## Testing:
 
 * Movies : 
 ...i.The home page is a movie search engine. On submitting a title and year into the search form,  a list of movies will display as a gallery below the search engine, if found. 
 ...ii. The default year is '2019'. It is not possible to enter a letter or symbol into the 'year' input. 
 ...iii. If a year in the future is entered, the error message 'Movie not found!' will be returned. 
 ...iv. If the title input is left blank on form submission, an error message will appear. 
 ...v. You may search for movie by title alone. This will return movie suggestions for all years, beginning with most relevant to title. 
 ...vi. On clicking the 'clear search' button, all results will clear from the page and the input form will clear. 
 ...vii. On hovering over each movie poster displayed, the image transitions from an opacity of 0.5 to 1. 
 ...viii. On mobile view, the navbar collapses to a popcorn navbar-toggler-icon, when clicked drops down to reveal the 'movies' and 'series' links. 
 
 * Movie detail : 
 ...i. On clicking the 'movie detail' button below any movie poster, the movie_detail page is rendered for the relevant movie. 
 ...ii. On clicking the 'View IMDB' button, the relevant IMDB page opens in a new window. 
 ...iii. On clicking the 'back to search' button, the home page is rendered.  
 
 
 * Series : 
  ...i.The series page is a movie search engine. On submitting a title and season into the search form,  a list of episodes will display as a gallery below the search engine, if found. 
 ...ii. If no season is entered, the name of the series and number of seasons will be returned. 
 ...iii. If an unknown title is entered, an error message will display. 
 ...iv. If the title input is left blank on form submission, there will be no return. 
 ...v. On clicking the 'clear search' button, all results will clear from the page and the input form will clear. 
 ...vi. On mobile view, the navbar collapses to a popcorn navbar-toggler-icon, when clicked drops down to reveal the 'movies' and 'series' links. 
 ...vii. On clicking the 'view IMDB' button, the relevant IMDB page is rendered in a new window. 
  

 

## Deployment:

Find my site [here](https://caoimhedaly.github.io/movie_search_api/).

... I deployed my website through github pages. I did this as follows:
1. I logged into my github account
2. I selected my project repository 
3. I clicked on the settings tab. 
4. I scrolled down to github pages
5. On the dropdown menu I chose master branch and clicked save. 
6. I refreshed the page and after a few minutes a link appeared to my deployed project. 
 

## Credits:

 * [OMDB API](http://www.omdbapi.com/)

 * I followed a youtube tutorial on accessing the OMDB API, <https://www.youtube.com/watch?v=NE2Uf41Z4Cw> .

 * Favicon created using [Favicon from pics](http://www.chami.com/html-kit/services/favicon/).


 
### Content:
 
 
* [OMDB API](http://www.omdbapi.com/) - all content and images on the site are returned using the OMDB API. 
 
 

### Media:

 * favicon taken from popcorn time - <https://popcorntime.sh/>
 
### Images:

...
 
 
 