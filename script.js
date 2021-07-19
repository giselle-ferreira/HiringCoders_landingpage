// ----------- Countdown -----------

const dayElement = document.getElementById('day')
const hourElement = document.getElementById('hour')
const minElement = document.getElementById('min')
const secElement = document.getElementById('sec')

const bFriday = '30 Jul 2021'

function countdown() {
  const bFridayDate = new Date(bFriday)
  const currentDate = new Date()

  const totalSeconds = (bFridayDate - currentDate) / 1000

  const day = Math.floor(totalSeconds / 3600 / 24)
  const hour = Math.floor(totalSeconds / 3600) % 24
  const min = Math.floor(totalSeconds / 60) % 60
  const sec = Math.floor(totalSeconds) % 60

  dayElement.innerHTML = day
  hourElement.innerHTML = formatTime(hour)
  minElement.innerHTML = formatTime(min)
  secElement.innerHTML = formatTime(sec)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)

// ----------- Storing objects in local Storage -----------

function cadastrarEmail() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.listaEmail) {
      localStorage.listaEmail = Number(localStorage.listaEmail) + 1
    } else {
      localStorage.listaEmail = 1
    }

    var novoCadastro =
      document.getElementById('nome').value +
      ' ; ' +
      document.getElementById('email').value
    localStorage.setItem(
      'novoCadastro_' + localStorage.listaEmail,
      novoCadastro
    )
  } else {
  }
}

//----------- Toggle Menu -----------

function toggleMenu() {
  const menuToggle = document.querySelector('.toggle')
  const navigation = document.querySelector('.navigation')

  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}
