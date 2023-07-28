let days = []
let sunday = []
sunday[0] = document.querySelector('#one');
sunday[1] = document.querySelector('#one span span');
sunday[2] = document.querySelector('#one img');
days[0] = sunday
let monday = []
monday[0] = document.querySelector('#two');
monday[1] = document.querySelector('#two span span');
monday[2] = document.querySelector('#two img');
days[1] = monday
let tuesday = []
tuesday[0] = document.querySelector('#three');
tuesday[1] = document.querySelector('#three span span');
tuesday[2] = document.querySelector('#three img');
days[2] = tuesday;
let thursday = []
thursday[0] = document.querySelector('#four');
thursday[1] = document.querySelector('#four span span');
thursday[2] = document.querySelector('#four img');
days[3] = thursday;
let whensday = []
whensday[0] = document.querySelector('#five');
whensday[1] = document.querySelector('#five span span');
whensday[2] = document.querySelector('#five img');
days[4] = whensday;
let friday = []
friday[0] = document.querySelector('#six');
friday[1] = document.querySelector('#six span span');
friday[2] = document.querySelector('#six img');
days[5] = friday;
let saturday = []
saturday[0] = document.querySelector('#seven');
saturday[1] = document.querySelector('#seven span span');
saturday[2] = document.querySelector('#seven img');
days[6] = saturday;
let score = document.querySelectorAll('.panelCircle div')[0];
let scorenum = parseInt(score.innerHTML);
let bag = document.querySelector('.panelScore')

refresh()

function fillin() {
    sunday[1].innerHTML = prompt('Sunday?')
    monday[1].innerHTML = prompt('Monday?')
    tuesday[1].innerHTML = prompt('Tuesday?')
    thursday[1].innerHTML = prompt('Whensday?')
    whensday[1].innerHTML = prompt('thursday?')
    friday[1].innerHTML = prompt('friday?')
    saturday[1].innerHTML = prompt('saturday?')
    scorenum = 0
    for (day of days) {
        scorenum += parseInt(day[1].innerHTML)
    }
    scorenum = scorenum / 7
    scorenum = parseInt(scorenum)
    score.innerHTML = scorenum;
}
function refresh() {

    for (day of days) {
        day[0].classList.remove('blue')
        day[0].classList.remove('green')
        day[0].classList.remove('yellow')
        day[0].classList.remove('red')


        if (day[1].innerHTML >= 90) {
            day[0].classList.add('blue')
            day[2].setAttribute('src', 'images/crown.png')
        } else if (day[1].innerHTML >= 70) {
            day[0].classList.add('green')
            day[2].setAttribute('src', 'images/good.png')
        } else if (day[1].innerHTML >= 50) {
            day[0].classList.add('yellow')
            day[2].setAttribute('src', 'images/arrow.png')
        } else {
            day[0].classList.add('red')
            day[2].setAttribute('src', 'images/down.png')
        }

    }
    removeStyle('bgyellow')
    removeStyle('bggreen')
    removeStyle('bgRed')
    if (scorenum >= 80 && scorenum <= 100) {
        bag.children[2].innerHTML = 'Exceptional'
        bag.children[3].innerHTML = 'Flawless week completed, celebrating achievements and aiming higher!'
    }
    if (score.innerHTML === 'NaN' || scorenum > 100 || scorenum < 0) {
        score.innerHTML = 0;
        overallstyle('bgRed', 3)


    } else {
        if (scorenum >= 60 && scorenum < 80) {
            overallstyle('bggreen', 1)

        } else if (scorenum >= 50 && scorenum < 60) {
            overallstyle('bgyellow', 2)
        } else if (scorenum >= 0 && scorenum < 50) {
            overallstyle('bgRed', 3)
        }
    }
}
let btn = document.querySelector('button')
btn.addEventListener('click', () => { fillin(); refresh() })
let btnlist = document.querySelectorAll('a')
let stateofit = true
function hideit() {
    if (stateofit === true) {
        document.querySelector('#firstpage').classList.add('hideit');
        document.querySelector('#secondpage').classList.remove('hideit');
        stateofit = false;
    } else if (stateofit === false) {
        document.querySelector('#firstpage').classList.remove('hideit');
        document.querySelector('#secondpage').classList.add('hideit');
        stateofit = true;
    }

}
for (btn of btnlist) {
    btn.addEventListener('click', hideit);
}
function overallstyle(type, i) {
    let title = ['Exceptional', 'Great', 'Moderate', 'Challenging']
    let comments = ['Flawless week completed, celebrating achievements and aiming higher!'
        , 'Good week, Keep Up the Constant Great work'
        , 'Average week wrapped up, onward to new challenges and accomplishments!'
        , 'Rough week, but remember: <i>brighter days await.</i>']

    bag.classList.add(`${type}`)
    bag.children[1].classList.add(`${type}2`)
    bag.children[0].classList.add(`${type}3`)
    bag.children[3].classList.add(`${type}3`)
    bag.children[3].innerHTML = comments[i]
    bag.children[2].innerHTML = title[i]
}
function removeStyle(name) {
    bag.classList.remove(`${name}`)
    bag.children[1].classList.remove(`${name}2`)
    bag.children[0].classList.remove(`${name}3`)
    bag.children[3].classList.remove(`${name}3`)
}