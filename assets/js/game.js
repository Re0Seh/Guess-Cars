var images = ['BMW 7 Series.jpeg','BMW X5.jpeg','Cadillac DeVille.jpeg','Citroen DS.jpeg','Dodge Monaco.jpeg','Ferrari Testarossa.jpeg','Ford Crown Vic.jpeg','Ford LTD.jpeg','Ford Mustang Foxbody.jpeg','Honda Civic Type R.jpeg','Hummer H1.jpeg','Jaguar XJS.jpeg','Lamborghini Countach.jpeg','Lexus GS300.jpeg','Mercedes C180.jpeg','Mitshubishi Lancer Evo VI.jpeg','Opel Manta.jpeg','Peugeot 205 GTI.jpeg','Subaru Impreza WRX.jpeg','Toyota Corolla.jpeg','Toyota GT86.jpeg','Toyota Hilux.jpeg','Volvo 850.jpeg','VW Golf Mk4.jpeg'];
var carno = 24;

var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="./assets/imgs/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

var randomNumber = Math.floor(Math.random() * carno);
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="./assets/imgs/${images[randomNumber]}"></img><br><h1>${images[randomNumber].split('.')[0]}</h1>`;
yourCard.appendChild(personToGuess)
var people = document.querySelectorAll('.card');

document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover')
    }
    element.onclick = function () {
        element.style.transition = 'all 0s'
        element.style.visibility = 'hidden'
    }
})