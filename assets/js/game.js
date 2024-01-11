var images = ['Alfa Romeo GT 1600.jpg','Alfa Romeo Spider.jpg','BMW 7 Series.jpg','BMW X5.jpg','Cadillac DeVille.jpg','Chevy K5 Blazer.jpg','Citroen DS.jpg','Datsun 240Z.jpg','Dodge Monaco.jpg','Ferrari Testarossa.jpg','Ford Crown Vic.jpg','Ford LTD.jpg','Ford Model A.jpg','Ford Mustang Foxbody.jpg','Holden Torana LX.jpg','Honda Civic Type R.jpg','Hummer H1.jpg','Jaguar XJS.jpg','Lamborghini Countach.jpg','Lexus GS300.jpg','Lotus Elan.jpg','Mercedes C180.jpg','Mini 1275 GT.jpg','Mitshubishi Lancer Evo VI.jpg','Mitsubishi Pajero.jpg','Opel Calibra.jpg','Opel Manta.jpg','Peugeot 205 GTI.jpg','Porsche Carrera GT.jpg','Subaru Impreza WRX.jpg','Toyota Corolla.jpg','Toyota GT86.jpg','Toyota Hilux.jpg','Volvo 850.jpg','VW Golf Mk4.jpg'];
var carno = 35;

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
        if (element.classList.contains('grayed-out')) {
            // If the card is already grayed out, revert to its original state
            element.classList.remove('grayed-out');
        } else {
            // If the card is not grayed out, apply the grayed-out effect
            element.classList.add('grayed-out');
        }
    }
});


