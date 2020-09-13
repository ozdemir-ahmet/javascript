/*function getCard () {
    let randValue = Math.floor(Math.random()*13)+1;
    let randDeck = Math.floor(Math.random()*4)+1;

    

    switch (randValue) {
        case 1:
            randValue = 'A';
            break;
        case 11:
            randValue = 'J';
            break;
        case 12:
            randValue = 'D';
            break;
        case 13:
            randValue = 'K';
            break;
    }

    switch (randDeck) {
        case 1:
            randDeck = 'Clubs';
            break;
        case 2:
            randDeck = 'Spades';
            break;
        case 3:
            randDeck = 'Hearts';
            break;
        case 4:
            randDeck = 'Diamonds';
            break;
    }

return `Your Card is: ${randDeck} - ${randValue}`;
}

let sum = function (x,y){
    return x+y;
}

const btn = document.querySelector('button');
btn.addEventListener('click', function (){
    alert('Why did you click me')
})

const numbers = [20,21,22,23,24,25,201,297,223,247,289];

console.log(numbers.map(function (num){
    return num * 2;
}));

const EvenOrOdd = numbers.map (function (n) {
    return {
        number: n,
        isEven : n%2 ===0
    }
});

console.log(EvenOrOdd);

const multiply = (x,y) => x * y;

const isEven = num => num % 2 === 0;

const evenOdd = numbers.map (n => n % 2 === 0 ? 'Even' : 'Odd')

console.log (evenOdd);

const number = numbers.find (n => n>26);

const evens = numbers.filter (num => num % 2 === 0);

const odds = numbers.filter (num => num % 2 !==  0);

const allTwenties = numbers.every( num => (
    num /20 >= 1 && num /20 < 1.5 
    ));

console.log (evens);
console.log(odds);

console.log(numbers.slice().sort());
console.log(numbers.slice().sort((x,y) => x-y));
console.log(numbers.slice().sort((x,y) => y-x));
console.log(numbers);

const sumArry = numbers.reduce((acc, value)=> {
    return acc+value;
});
// console.log (sumArry);

const product = numbers.reduce ((prod, curVal)=>{
    return prod * curVal ;
});

const maxVal = numbers.reduce((max, curVal)=>{
    return max>curVal ? max : curVal ;
});

const minVal = numbers.reduce((min, curVal)=>Math.min(min,curVal)) ;

const votes = ['y','n','y','y','n','n','y','n','n'];

const results = votes.reduce ((tally, val)=>{
    if (tally[val]) tally[val]++;
    else tally[val] = 1;
    return tally;
},{}); 

const results2 = votes.reduce ((tally, val)=>{
    (tally[val])=(tally[val]||0)+1;
    return tally;
},{}); 

const books =[
    {
        title : "A",
        rating : 3.45
    },
    {
        title : "B",
        rating : 2.45
    },
    {
        title : "C",
        rating : 4.45
    },
    {
        title : "D",
        rating : 3.65
    },
    {
        title : "E",
        rating : 4.55
    },
    {
        title : "F",
        rating : 4.95
    }
];

const groupedBooks = books.reduce ((group,book)=>{
    const key = Math.floor(book.rating);
    if (!group[key]) group[key] = [];
    group[key].push(book);
    return group;
} ,{});

function multiply2 (x=1,y=1) {
    return x*y;
}

function greet (name, word = 'Hi!') {
    return word+' '+name;
}

const greet2 = ((person, greeting = 'Hi') => `${greeting} ${person}`);



const multiply = (...nums) => nums.reduce((total,curVal)=> total*curVal);

const getStats = (arr) => {
    const max = Math.max(arr);
    const min = Math.min(arr);
    const sum = arr.reduce ((sum, val) => sum+val);
    const avg = sum/arr.length;
    return {
        max,
        min,
        sum,
        avg
    }
}

const numbers = [2,3,4,5,6,7,8];

const stats= getStats(numbers);


function multiply (x,y){
    return x*y;
}

const numbers = [2,3,4,5,6,7,8];

const multiply = (x,y) => {
    return x*y
} ;

const arr = [...'abcdefg', ..."Hello!!"];

const doubles = numbers.map(n=> 2 *n);

numbers.forEach (n => console.log(2*n));

function sum (...nums) {
    return nums.reduce ((total,n)=> total + n);
};

function sumAll () {
    const args =  [...arguments];
    console.log (args);
}

const multiply2 = (...nums) => nums.reduce ((total,val)=> total * val);

const getStats = (arry) => {
    const max = Math.max(...arry);
    const min = Math.min(...arry);
    const sum = arry.reduce((sum,n)=>sum+n);
    const avg = sum/arry.length;
    return {
        max,
        min,
        sum,
        avg
    }
};

const math = {
    numbers:  [1,2,3,4,5,6,7,8,9],
    add(...nums){
        return nums.reduce ((sum,n) => sum + n)
    },
    multiply(...nums) {
        return nums.reduce ((prod,n) => prod * n)
    }
}

*/

const myDeck = {
    deck : [],
    drawnCards : [],
    suits : ['hearths','diamonds', 'spades', 'clubs'],
    values : '2,3,4,5,6,7,8,9,10,J,D,K,A',
    initializeDeck () {
        const {suits, values, deck} = this;
        for (let value of values.split(',')){
            for (let suit of suits){
                deck.push({
                    value,
                    suit
                })
            }
        }
    },
    
    drawCard () {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },

    drawMultiple (num) {
        const cards = [];
        for (let n = 0 ; n < num ; n++){
            cards.push(this.drawCard());
        }
        return cards;
    },

    shufleDeck () {
        for (let i = this.deck.length-1; i>0; i--){
            let j = Math.floor(Math.random() * (i+1));
            [this.deck[i],this.deck[j]] = [this.deck[j],this.deck[i]];
        }
    }
}