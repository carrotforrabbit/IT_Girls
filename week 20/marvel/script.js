let heroes = `[
    {
        "id": "1",
        "name": "Superman",
        "universe": "DC Comics",
        "alter": "Clarc Kent",
        "superpowers": "impenetrability, super strength, flight, self-healing, super vision and super hearing, cool suit",
        "occupation": "Fighter for justice",
        "comments": "Superman is a kind of chameleon from the world of comics. In his first release in 1938, he was just a huge muscle man who could only smash walls and kick doors. Later, the ability to fly was added to his skills. Further, numerous incarnations of Clark, from the teenager in Smallville to the majestic Man of Steel, have a different level and number of superpowers. His weak point remains unchanged - vulnerability to Kryptonite, a radioactive substance from his home planet."
    }, {
        "id": "2",
        "name": "Iron Man",
        "universe": "Marvel Comics",
        "alter": "Tony Stark",
        "superpowers": "high level of intelligence, wide knowledge of science and technology, connection with the world wide web, armored suits",
        "occupation": "Genius, billionaire, playboy, philanthropist",
        "comments": "Perhaps the most popular modern superhero. He has a lot in common with the dark bird of the night Batman: both lost their parents in childhood, became crime fighters without special superpowers, incredibly rich. Only if Batman is admired, then Tony Stark is adored :) Whether it's the chic acting of Robert Downey Jr., who knocked out the role from Nicolas Cage and Tom Cruise, or a well-written character."
    }, {
        "id": "3",
        "name": "Spider-Man",
        "universe": "Marvel Comics",
        "alter": "Piter Parker",
        "superpowers": "superhuman reflexes, spider-sense, ability to stick to solid surfaces, web production",
        "occupation": "Justice fighter, student, photographer",
        "comments": "Spider-Man was born from Marvel Comics' need to create a teenage hero. Other superheroes like Batman and Superman are adult males and were not seen as role models by the target audience. Fifteen-year-old Peter Parker made it clear to all the teenagers of the Earth that it is possible to destroy the villains and marry the beauty. You don't even have to be super handsome to do this! All you need is a spider bite."
    }, {
        "id": "4",
        "name": "Wonder Woman",
        "universe": "DC Comics",
        "alter": "Diana Pirce",
        "superpowers": "superhuman strength and speed, endurance, flight",
        "occupation": "Superheroine, secretary-referent",
        "comments": "it's time to dilute this men's party with a really cool girl :) The Amazon princess was born on the mystical island of Temescyra, located in the center of the Bermuda Triangle, where planes disappear. She received her real name - Diana - in honor of the ancient Greek goddess of the hunt, and her superpowers - from the goddess of love Aphrodite. The heroine was raised in an exclusively female society, so Wonder Woman often appears in culture as a symbol of feminism."
    }]`;

let parsedHeroes = JSON.parse(heroes);

document.addEventListener('DOMContentLoaded', function (event) {
    let container = document.querySelector(".heroes-container");
    
    let heroesContent = '';
    for (let hero of parsedHeroes) {
        heroesContent += 
        `<div class="hero-card">
            <h2 class="hero-card__title">${hero.name}</h2>
            <p class="hero-card__universe"><span>Universe:</span> ${hero.universe}</p>
            <p class="hero-card__alter"><span>Alter Ago:</span> ${hero.alter}</p>
            <p class="hero-card__superpowers"><span>Superpowers:</span> ${hero.superpowers}</p>
            <p class="hero-card__occupation"><span>Occupation:</span> ${hero.occupation}</p>
            <p class="hero-card__comments"><span>Comments:</span> ${hero.comments}</p>
            <p id="ratingResult_${hero.id}">Your Rating:</p>
            <ul class="rating">
                <p class="rating__title"><span>Rate the Hero:</span></p>
                <li class="rating__star"><input type="radio" name="rating" class="rating__input" value="1"><label
                        for="rating__input" class="rating__label">1</label></li>
                <li class="rating__star"><input type="radio" name="rating" class="rating__input" value="2"><label
                        for="rating__input" class="rating__label">2</label></li>
                <li class="rating__star"><input type="radio" name="rating" class="rating__input" value="3"><label
                        for="rating__input" class="rating__label">3</label></li>
                <li class="rating__star"><input type="radio" name="rating" class="rating__input" value="4"><label
                        for="rating__input" class="rating__label">4</label></li>
                <li class="rating__star"><input type="radio" name="rating" class="rating__input" value="5"><label
                        for="rating__input" class="rating__label">5</label></li>
            </ul>
            <button class="button" id="buttonSubmit_${hero.id}" type=button>Submit</button>
        </div>`
    };
container.innerHTML = heroesContent;

for (const hero of parsedHeroes) {
    document.getElementById(`buttonSubmit_${hero.id}`)
                .addEventListener('click', function () {
                        let radios = document.getElementsByName("rating");
                        let selected = Array.from(radios).find(radio => radio.checked);
                        document.getElementById(`ratingResult_${hero.id}`).innerHTML = `Your rating: ${selected.value}/5`;
                        localStorage.setItem(`localRating_${hero.id}`, `${selected.value}/5`);
                    });
                if (localStorage.getItem(`localRating_${hero.id}`) !== null) {
                    document.getElementById(`ratingResult_${hero.id}`).innerHTML = 'Your rating: ' + localStorage.getItem(`localRating_${hero.id}`);
                }
            };
})
