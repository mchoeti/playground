// ****************************+
// Modify the Webpage begin
const app = document.getElementById('root');
// Now we create a Logo
const logo = document.createElement('img');
logo.src = 'logo.png';
// Now we create a new div element
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Now we need to display that to the website
app.appendChild(logo);
app.appendChild(container);

// Modify the Webpage End
//*************************** */

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title);
        });
    } else {
        // console log error
        //console.log('error');
        // Front End Error with Marquee
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }

    data.forEach(movie => {
        // Create a div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;
        // Create a p and set the text content to the film's description
        const p = document.createElement('p');
        movie.description = movie.description.substring(0, 300); // Limit to 300 chars
        p.textContent = `${movie.description}...`; // End with an ellipses
        // // Log each movie's title
        // console.log(movie.title);
        // // Log each movie description
        // console.log(movie.description);
        // Append the cards to the container element
        container.appendChild(card);
        // Each card will contain an h1 and a p
        card.appendChild(h1);
        card.appendChild(p);
    });
}


// Send request
request.send();