const cardArray = [
    {
        name:'apple',
        image:'images/apple.png'
    },
    {
        name:'banano',
        image:'images/banano.png'
    },
    {
        name:'berry',
        image:'images/berry.png'
    },
    {
        name:'mango',
        image:'images/mango.png'
    },
    {
        name:'orange',
        image:'images/orange.png'
    },
    {
        name:'pea',
        image:'images/pea.png'
    },
    {
        name:'red',
        image:'images/red.png'
    },
    {
        name:'water',
        image:'images/water.png'
    },
    {
        name:'apple',
        image:'images/apple.png'
    },
    {
        name:'banano',
        image:'images/banano.png'
    },
    {
        name:'berry',
        image:'images/berry.png'
    },
    {
        name:'mango',
        image:'images/mango.png'
    },
    {
        name:'orange',
        image:'images/orange.png'
    },
    {
        name:'pea',
        image:'images/pea.png'
    },
    {
        name:'red',
        image:'images/red.png'
    },
    {
        name:'water',
        image:'images/water.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute('src','images/frutas.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    if(cardsChosen[0]==cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute('src','images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src','images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[cardsChosenIds[0]].setAttribute('src','images/frutas.png')
        cards[cardsChosenIds[1]].setAttribute('src','images/frutas.png')
    }
    document.getElementById('result').innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    if(cardsWon.length === cardArray.length/2){
        document.getElementById('result').innerHTML = "Paranbéns!!!"
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].image)
    if(cardsChosen.length == 2){
        setTimeout(checkMatch,500)
    }

}