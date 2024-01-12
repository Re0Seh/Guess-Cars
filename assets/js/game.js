var images = ['Alfa Romeo GT 1600.jpg', 'Alfa Romeo Spider.jpg', 'BMW 7 Series.jpg', 'BMW X5.jpg', 'Cadillac DeVille.jpg', 'Chevy K5 Blazer.jpg', 'Citroen DS.jpg', 'Datsun 240Z.jpg', 'Dodge Monaco.jpg', 'Ferrari Testarossa.jpg', 'Ford Crown Vic.jpg', 'Ford LTD.jpg', 'Ford Model A.jpg', 'Ford Mustang Foxbody.jpg', 'Holden Torana LX.jpg', 'Honda Civic Type R.jpg', 'Hummer H1.jpg', 'Jaguar XJS.jpg', 'Lamborghini Countach.jpg', 'Lexus GS300.jpg', 'Lotus Elan.jpg', 'Mercedes C180.jpg', 'Mini 1275 GT.jpg', 'Mitshubishi Lancer Evo VI.jpg', 'Mitsubishi Pajero.jpg', 'Opel Calibra.jpg', 'Opel Manta.jpg', 'Peugeot 205 GTI.jpg', 'Porsche Carrera GT.jpg', 'Subaru Impreza WRX.jpg', 'Toyota Corolla.jpg', 'Toyota GT86.jpg', 'Toyota Hilux.jpg', 'Volvo 850.jpg', 'VW Golf Mk4.jpg'];

var dropdown = document.querySelector('#carDropdown');
var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');
var selectedCardIndex;

// Add a default option for when nothing is selected
var defaultOption = document.createElement('option');
defaultOption.value = '-1'; // Set string value for compatibility
defaultOption.text = 'Select a car';
dropdown.appendChild(defaultOption);

// Populate the dropdown menu
images.forEach((img, index) => {
    var option = document.createElement('option');
    option.value = index.toString(); // Set string value for compatibility
    option.text = img.split('.')[0];
    dropdown.appendChild(option);
});

// Add event listener to the dropdown menu
dropdown.addEventListener('change', updateCard);

// Initialize the card display with the default image
updateCard();

// Add a button to randomly select a car
var randomButton = document.querySelector('#randomButton');
randomButton.addEventListener('click', function () {
    var randomIndex = Math.floor(Math.random() * images.length);
    dropdown.value = randomIndex.toString(); // Set the selected value in the dropdown
    updateCard();
});

function updateCard() {
    var selectedIndex = parseInt(dropdown.value);

    if (!isNaN(selectedIndex) && selectedIndex !== -1) {
        if (selectedCardIndex !== undefined) {
            // If a card was previously selected, reset its style
            cards.children[selectedCardIndex].classList.remove('selected');
        }

        selectedCardIndex = selectedIndex;
        yourCard.innerHTML = `<img src="./assets/imgs/${images[selectedCardIndex]}"></img><br><h1>${images[selectedCardIndex].split('.')[0]}</h1>`;
        cards.children[selectedCardIndex].classList.add('selected');
    } else {
        // Handle the case when nothing is selected
        yourCard.innerHTML = `<img src="./assets/nothing.jpg"></img><br><h1>Nothing selected</h1>`;

        if (selectedCardIndex !== undefined) {
            cards.children[selectedCardIndex].classList.remove('selected');
        }
        selectedCardIndex = undefined;
    }
}


images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="./assets/imgs/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});



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


