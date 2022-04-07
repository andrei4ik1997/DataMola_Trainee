function winCheck(className, field) {
  function check(pos1, pos2, pos3) {
    if (field[pos1].classList.contains(className) && field[pos2].classList.contains(className) && field[pos3].classList.contains(className)) {
      return true;
    }
    return false;
  }
  if (check(0, 3, 6)) return true;
  if (check(1, 4, 7)) return true;
  if (check(2, 5, 8)) return true;
  if (check(0, 1, 2)) return true;
  if (check(3, 4, 5)) return true;
  if (check(6, 7, 8)) return true;
  if (check(0, 4, 8)) return true;
  if (check(2, 4, 6)) return true;

  return false;
}
function init() {
  const game = document.querySelector('.game');
  const title = document.querySelector('.title');
  const reloadButton = document.querySelector('.reload');
  const field = document.querySelectorAll('.item');
  const freeField = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  field.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (field[index].classList.contains('player') || field[index].classList.contains('computer')) {
        return;
      }

      field[index].classList.add('player');

      const spliceAr = freeField.indexOf(index + 1);
      freeField.splice(spliceAr, 1);

      if (winCheck('player', field)) {
        title.innerHTML = 'Победил человек';
        game.classList.add('over');
        return;
      }

      if (freeField.length === 0) {
        title.innerHTML = 'Ничья';
        game.classList.add('over');
        return;
      }

      const random = Math.floor(Math.random() * freeField.length);
      field[freeField[random] - 1].classList.add('computer');

      freeField.splice(random, 1);

      if (winCheck('computer', field)) {
        title.innerHTML = 'Победил компьютер';
        game.classList.add('over');
      }
    });
  });

  reloadButton.addEventListener('click', () => {
    document.location.reload();
  });
}
init();
