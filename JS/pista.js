let car1 = document.getElementById('car1');
let car2 = document.getElementById('car2');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let winnerMessage = document.getElementById('winner-message');
let winner = document.getElementById('winner');

let car1Position = 0;
let car2Position = 0;

document.addEventListener('keyup', function (event) {
  if (event.key === 'ArrowLeft') {
    moveCar('car1', 1);
  }
  if (event.key === 'ArrowUp') {
    moveCar('car1', 2);
  }
  if (event.key === 'ArrowRight') {
    moveCar('car1', 3);
  }
});

function moveCar(carId, speed) {
  let car = document.getElementById(carId);
  let position = car.getBoundingClientRect().left;
  let newPosition = position + speed;
  car.style.left = newPosition + 'px';

  if (carId === 'car1') {
    car1Position = newPosition;
    if (car1Position >= window.innerWidth - car.offsetWidth) {
      showWinner('PlayerCar 1');
    }
  } else if (carId === 'car2') {
    car2Position = newPosition;
    if (car2Position >= window.innerWidth - car.offsetWidth) {
      showWinner('PlayerCar 2');
    }
  }
}

function showWinner(winningCar) {
  winner.textContent = winningCar;
  winnerMessage.classList.remove('hidden');
}

function restartRace() {
  car1.style.left = '0';
  car2.style.left = '0';
  winnerMessage.classList.add('hidden');
  car1Position = 0;
  car2Position = 0;
}
