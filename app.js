// Skapa variabel 'jokeElement' som pekar på elementet med id 'joke'.
// skapa variabel 'jokeBtn' som pekar på elementet med id 'jokeBtn'.
// Skapa en funktion, 'generateJoke' som genererar skämt.
// Skapa ett objekt 'config' med inställningar för fetch().
// Hämta skämt från API och lägg in i jokeElement.
// Lägg till en onclick funktion i jokeBtn som kör generateJoke.

const jokeElement = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

generateJoke();

async function generateJoke(){
    const config = {
        headers : {
            Accept:'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeElement.innerHTML = data.joke;
        });
}
jokeBtn.addEventListener("click", generateJoke);