const deadLine = '2024-01-24'
const deadLineTwo = '2024-01-01'
const nowruz = '2024-03-21'
const day = '2023-12-08'
const womens = '2024-03-08'
const victory = '2024-05-09'
const space = '2024-05-21'
const childrens = '2024-06-01'
const uzbekistan = '2024-09-01'
const teacher = '2024-10-01'
const defenders = '2024-01-14'
const school = '2024-05-25'

function getDateReaminig(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date())

    const days = Math.floor(t / (1000 *60 *60 *24)),
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
    minutes = Math.floor((t / (1000 *64) % 60)),
    secundes = Math.floor(t / (1000) % 60);


    return {
        total: t,
        days,
        hours,
        minutes,
        secundes
    }
    
}

// console.log(getDateReaminig(deadLine));


let interval;

let d = 0
let h = 0
let m = 0
let s = 0

function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    secundes = timer.querySelector('.secondes'),
    timerInterval = setInterval(updateClock, 1000);

    updateClock()

    function updateClock() {
        const t = getDateReaminig(endTime)
        
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        secundes.innerHTML = t.secundes
        if (t.total === 0) {
            clearInterval(timerInterval)
        }
    }
    
}

let hours = document.querySelector('.hours')

function getZero(num) {
    if (num <= 9) {
        return `0${num}`
    } else {
        return num
    }
}

interval = setInterval(() => {
    // hours
    // hours.innerHTML = getZero(h)
})

setClock('.timer', deadLine)
setClock('.tmer', deadLineTwo)
setClock('.nowruz', nowruz)
setClock('.day', day)
setClock('.womens', womens)
setClock('.victory', victory)
setClock('.space', space)
setClock('.childrens', childrens)
setClock('.uzbekistan', uzbekistan)
setClock('.teacher', teacher)
setClock('.defenders', defenders)
setClock('.school', school)

// console.log(hours);