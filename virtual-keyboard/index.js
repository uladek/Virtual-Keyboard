const centralizer = document.createElement('div');
centralizer.className = 'centralizer';
document.body.append(centralizer);

const titleCentralizer = document.createElement('h3');
titleCentralizer.className = 'centralizer__title';
titleCentralizer.innerText = 'RSS Virtual Keyboard';
centralizer.append(titleCentralizer);
const fieldTextarea = document.createElement('textarea');
fieldTextarea.className = 'field-textarea';
centralizer.append(fieldTextarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
centralizer.append(keyboard);
const r0git = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123]; // +кнопка питания??
const row0 =  ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
const row1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace']; // + delete(backspace)
const row2 = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
const row3 = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const row4 = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16];
const row5 = [17, 18, 91, 32, 93, 18, 37, 38, 40, 39]; // + Fn last 4 стрелки
// document.onkeypress = (event) => {
//   console.log(event.key);
//   console.log(event.code);
//   rowS0.push(event.key);
//   console.log(rowS0);
// };
document.addEventListener('keydown', (event) => {
//   console.log(event.key);
//   console.log(event.code);
  console.log(event);
  row0.push(event.key);
  console.log(row0);
// //   row5.push(event.keyCode);
// //   console.log(row5);
});

// function init() {
// //   let out = '';
//   for (let i = 0; i < row0.length; i += 1) {
//     // console.log(i.event.key);
//     console.log(row0[i]);

//     // out += `<div class="k-key">`+ String.fromKeyCode(row0(i))+ `</div>`
//   }
// }
// init();
// document.addEventListener('keydown', n(event));
// document.addEventListener('click', (event) => {
//   console.log('Произошло событие', event.type);
// });
