var images = ['BMW%207%20Series.jpeg','BMW_X5.jpeg','Cadillac_DeVille.jpeg','Citroen_DS.jpeg','Dodge_Monaco.jpeg','Ferrari_Testarossa.jpeg','Ford_Crown_Vic.jpeg','Ford_LTD.jpeg','Ford_Mustang_Foxbody.jpeg','Honda_Civic_Type_R.jpeg','Hummer_H1.jpeg','Jaguar_XJS.jpeg'];
var carno = 12;

var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="https://raw.githubusercontent.com/Re0Seh/carimages/main/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

var randomNumber = Math.floor(Math.random() * carno);
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="./assets/imgs/people/${images[randomNumber]}"></img><br><h1>${images[randomNumber].split('.')[0]}</h1>`;
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
