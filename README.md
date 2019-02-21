## OMDB API search engine:
  
 <https://jigsaw.w3.org/css-validator/validator>
  
  
  
## Introduction:
  
  This project is a frontend-only website using technologies learned through my interactive frontend development module. This site calls on the OMDB API to allow its users to search for movies by name and year as well as series by name and season. When a search is submitted, information returned includes details of release date, writer, director etc. 
  
  
  
## UX:
  
  The website I developed for movie and tv lovers, to allow them to search for accurate information on their favourite film and tv series, from release date to oscar nominations. It can also be used to browse for those simply looking for movie-night inspiration. 
  
  * Patrick 47yrs: Im an avid movie fan. Using the OMDB search engine I am able to search for movies new and old that I have yet to see by title and year. As the IMDB rating and award nominations are also given, I can reliably chose which films I will enjoy.  I particularly like to see the original posters for each movie. 
  
* Sarah 19yrs: I love the tv series The Office. As there are over 100 episodes it can be tricky to find the one I want to watch!  Using this site I am able to search for my favourite episodes by season. Once I have the episode number, it is easy to watch the exact episode I want online. 
  
  
***LINK TO WIREFRAME***

Find a link to the large screen wire frame here <https://balsamiq.cloud/s6r726f/pu2bcvm>

Find a link to the mobile view wireframe here <https://balsamiq.cloud/s6r726f/pamaugc>  
 

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
 

## Testing:
 
 * Home Page : 
 ...i.The home page is mobile responsive, the navbar collapses to a dropdown menu accessed via a button button at a width of 990px. 
 ...ii.Some of the images in the gallery are hidden on a small screen.
 
 * Most at Risk : 
 ...i. click on the Most at Risk link in the navbar, it takes you to this page. 
 ...ii. On a large screen, when you hover over each image, white text transitions from the left on a semi-transparent background.
 ...iii. On smaller screens, the text 'click image' appears at the bottom left corner of each image to inform you that you must click the image to reveal the text. 
 ...iv. media icons - on hovering over the media icons, a tooltip informs the user that the site is under construction. 
 ...v. On smaller screens, each article of text lays below the respective image. On larger screens the text lays to the right of the image. 
 ...vi. Again the dropdown menu functions as a navbar on smaller screens on this page. 
 
 * Save the species : 
  ...i. click the save the species link in the navbar, this page opens.
  ...ii. click on each of the links on each card, a modal opens to inform you that the site is under construction. 
  ...iii. click on the X at the top of the modal box, the modal closes.
  ...iv. media icons - on hovering over the media icons, a tooltip informs the user that the site is under construction. 
  
 *Contact Us :
 ...i. click on the contact us link in the navbar to open this page. 
 ...ii. form - click the dropdown menu on the form to chose you query
          - click the submit button and a modal opens to inform the user that this is under construction. 
 ...iii. map - zoom in and out on the map 
 ...iv. media icons - on hovering over the media icons, a tooltip informs the user that the site is under construction. 
 ...v. on smaller screens, the navbar collapses to a dropdown menu. 
 
 * I used W3 schools css validator with no error found. <https://jigsaw.w3.org/css-validator/validator>
 

## Deployment:
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
 
 
 