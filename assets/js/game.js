function readFile() {
    const filePath = 'carnames.txt'; // Assuming the file is in the same directory
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const content = e.target.result;
      const lines = content.split('\n');
      console.log('File content:', content); // Log the entire content
      console.log('Lines array:', lines);
    };
  
    // Read the content of the file at the specified path
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch file. Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => reader.readAsText(new Blob([data])))
      .catch(error => console.error('Error:', error));
  }
  

var images = ['juan.jpeg','toby.jpeg', 'bob.jpeg', 'jenna.jpeg', 'melissa.jpeg', 'jempa.jpeg', 'emma.jpeg', 'emily.jpeg', 'edward.jpeg', 'john.jpeg', 'Courtney.jpeg', '2009toyotacorolla.jpeg', 'william.jpeg', 'venessa.jpeg', 'danielle.jpeg', 'jeff.jpeg', 'susan.jpeg', 'samuel.jpeg', 'bill.jpeg', 'harris.jpeg', 'sarah.jpeg'];

var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="./assets/imgs/people/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

var randomNumber = Math.floor(Math.random() * 24);
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