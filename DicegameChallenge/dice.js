const text = document.getElementById ('start')
const roll = document.getElementById ('roll')
const newGame = document.getElementById ('new')
const rollNum = document.getElementById('rollNum')
const score = document.getElementById('score')

roll.style.visibility = 'hidden'
newGame.style.visibility = 'hidden'

window.addEventListener('keydown', ()=>{
    text.style.visibility = 'hidden'
    roll.style.visibility = 'visible'
    newGame.style.visibility = 'visible'
        roll.addEventListener('click', ()=> {
            const randomNum = Math.floor(Math.random()*6) + 1
            const diceImage = 'dicepics/dice' + randomNum + '.png'
            document.querySelectorAll('img')[0].style.visibility = 'visible'
            document.querySelectorAll('img')[0].setAttribute('src', diceImage);
            if (randomNum > 1){
                points += randomNum;
                rollNum.innerHTML = `Your roll is ${randomNum}`;
                score.innerHTML = `Your score is ${points}`;
            }
            if (points >= 20) {
                rollNum.innerHTML = `Congratulations, you have won!`;
                score.style.visibility = 'hidden';
                document.getElementById('')
            } else if (randomNum ==1)
            {
                points=0;
                rollNum.innerHTML = `You rolled a 1`;
                score.innerHTML = `You lose!`;
            }
        })
})

rollNum.style.visibility = 'hidden'
score.style.visibility = 'hidden'

let points = 0;

roll.addEventListener('click', ()=> {

    rollNum.style.visibility = 'visible'
    score.style.visibility = 'visible'

})

newGame.addEventListener('click', () => {
    points=0;
    rollNum.innerHTML = '';
    score.innerHTML = '';
    newGame.style.visibility = 'visible'
    roll.style.visibility = 'visible'

})




