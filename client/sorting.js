
let values = [
    {
      "id": 1,
      "house": "G",
      "pet": "Owl",
      "special": "JS"
    },
    {
      "id": 2,
      "house": "H",
      "pet": "Rabbit",
      "special": "QA"
    },
    {
      "id": 2,
      "house": "R",
      "pet": "Frog",
      "special": "Java"
    },
    {
      "id": 4,
      "house": "S",
      "pet": "Snake",
      "special": "Data"
    },
    {
      "id": 5,
      "house": "Gryffindor",
      "pet": "Rat",
      "special": "Quality Analysis"
    },
    {
      "id": 6,
      "house": "Slytherin",
      "pet": "Cat",
      "special": "JavaScript"
    },
    {
      "id": 7,
      "house": "Ravenclaw",
      "pet": "Parrot",
      "special": "Data Solutions"
    },
    {
      "id": 8,
      "house": "Hufflepuff",
      "pet": "Puppy",
      "special": "Java Java"
    }
  ]

const sortingBtn = document.getElementById('hat');


//number between 1 and 4
let randomP = Math.floor(Math.random() * 8);
let randomS = Math.floor(Math.random() * 8);
let randomH = Math.floor(Math.random() * 8);




let randomHouse = values[randomH].house
let randomPet = values[randomP].pet
let randomSpecial = values[randomS].special

console.log(`Your house is ${randomHouse}, your pet is ${randomPet} and your specialty is ${randomSpecial}!`)



sortingBtn.addEventListener('click', e => {
    e.preventDefault();

    console.log('sorting away!')
})