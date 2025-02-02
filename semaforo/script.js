const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0

const mudar = (event) => {
  ligar[event.target.id]()
}

const nextIndex = () => {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0
}

const mudarCor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex]
  ligar[color]()
  nextIndex()
}

const ligar = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => setInterval(mudarCor, 1000)
}

buttons.addEventListener('click', mudar)