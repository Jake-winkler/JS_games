const cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

cardArray.sort(() => .5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChoseId = [];
const cardsWon = [];

function createBoard () {
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)     
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    //console.log('check for a match')
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoseId[0];
    const optionTwoId = cardsChoseId[1];
    console.log(cardsChosen);
    if(optionOneId == optionTwoId){
        alert('You Clicked the same card!!');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png'); 
    }

    if(cardsChosen[0]===cardsChosen[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        resultDisplay.inner
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png'); 
        alert('You did not find a match!!');

    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = [];
    cardsChoseId = [];
    
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations ytou found them all!!!!'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChoseId.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChoseId);
    cardArray[cardId];
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}





