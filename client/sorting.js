// create an array of objects with key value pairs related to my randomizer
let values = [
    {
      "id": 1,
      "house": "Gryffindor",
      "pet": "Owl",
      "special": "React"
    },
    {
      "id": 2,
      "house": "Hufflepuff",
      "pet": "Rabbit",
      "special": "JavaScript"
    },
    {
      "id": 2,
      "house": "Ravenclaw",
      "pet": "Frog",
      "special": "Java"
    },
    {
      "id": 4,
      "house": "Slytherin",
      "pet": "Snake",
      "special": "Python"
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
      "special": "Web Development"
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
      "special": "Software Engineer"
    }
  ]

  //get button and results container from the DOM
const sortingBtn = document.getElementById('hat');
let results = document.getElementById('results-container');

//create sorting hat click event listener
sortingBtn.addEventListener('click', e => {
    e.preventDefault();

    //logic
    let randomP = Math.floor(Math.random() * 8);
    let randomS = Math.floor(Math.random() * 8);
    let randomH = Math.floor(Math.random() * 8);
    
    //create elements in the DOM
    let house = document.createElement('li')
    let pet = document.createElement('li')
    let special = document.createElement('li')

    //set values for elements
    let randomHouse = values[randomH].house
    let randomPet = values[randomP].pet
    let randomSpecial = values[randomS].special
   
    //make sure the results container is empty
    results.innerHTML = ''

    //set text content for new elements, with a sentence and template literal
    house.textContent = `Your house is ${randomHouse}!`
    pet.textContent = `Your pet is ${randomPet}!`
    special.textContent = `Your specialization is ${randomSpecial}`

    //add new elements to the results container
    results.append(house);
    results.append(pet);
    results.append(special);
});

