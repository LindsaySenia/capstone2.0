
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

const sortingBtn = document.getElementById('hat');
let results = document.getElementById('results-container');


//number between 1 and 4







// function randomResults() {

//   let randomHouse = values[randomH].house
//   let randomPet = values[randomP].pet
//   let randomSpecial = values[randomS].special

//   console.log(`Your house is ${randomHouse}, your pet is ${randomPet} and your specialty is ${randomSpecial}!`)

// }





sortingBtn.addEventListener('click', e => {
    e.preventDefault();
    let randomP = Math.floor(Math.random() * 8);
    let randomS = Math.floor(Math.random() * 8);
    let randomH = Math.floor(Math.random() * 8);
    


    let house = document.getElementById('house')
    let pet = document.getElementById('pet')
    let special = document.getElementById('special')

    let randomHouse = values[randomH].house
    let randomPet = values[randomP].pet
    let randomSpecial = values[randomS].special
   
    house.innerHTML = ''
    pet.innerHTML = ''
    special.innerHTML = ''

    house.append(`Your house is ${randomHouse}!`)
    pet.append(`Your pet is ${randomPet}!`)
    special.append(`Your specialization is ${randomSpecial}`)

    // sortingBtn.addEventListener('click', e => {
    //   alert('You can only get one result per ')
    // })

    // results.textContent = `Your house is ${randomHouse}, your pet is ${randomPet} and your specialty is ${randomSpecial}!`

})

