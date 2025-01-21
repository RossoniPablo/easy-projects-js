const turnOnOff = document.getElementById('turnOnOff');
const lampada = document.getElementById('lampada')

function isLampadaBroken() {
  return lampada.src.indexOf('quebrada') > -1
}
function lampadaOn() {
  if (!isLampadaBroken()) {
    lampada.src = './img/ligada.jpg'
  }
}

function lampadaOff() {
  if (!isLampadaBroken()) {
    lampada.src = './img/desligada.jpg'
  }
}

function lampadaBroken() {
  lampada.src = './img/quebrada.jpg'
}

function lampadaOnOff() {
  if (turnOnOff.textContent == 'Ligar') {
    lampadaOn()
    turnOnOff.textContent = 'Desligar'
  }
  else {
    lampadaOff()
    turnOnOff.textContent = 'Ligar'
  }

}

turnOnOff.addEventListener('click', lampadaOnOff)
lampada.addEventListener('mouseover', lampadaOn)
lampada.addEventListener('mouseout', lampadaOff)
lampada.addEventListener('dblclick', lampadaBroken)