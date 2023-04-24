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
// const rowArr0 = ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
const r1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace']; // + delete(backspace)
const r2 = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
const r3 = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const r4 = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16];
const r5 = [17, 18, 91, 32, 93, 18, 37, 38, 40, 39]; // + Fn last 4 стрелки

// document.onkeypress = (KeyboardEvent) => {
//   // console.log(event.key);
//   // console.log(event.code);
//   // rowS0.push(event.key);
//   // console.log(rowS0);
//   console.log(KeyboardEvent);
// };
// const arrKeyboard = [];
document.addEventListener('keydown', (event) => {
//   console.log(event.key);
  console.log(event.code);
  console.log(event);
  // arrKeyboard.push(event);
  // console.log(arrKeyboard);
// //   row5.push(event.keyCode);
// //   console.log(row5);
});

const row0 = document.createElement('div');
row0.className = 'keyboard__row keyboard__row-0';
keyboard.append(row0);

// const itemKeys1 = document.querySelectorAll('row-0-key');
// function init() {
// for (let i = 0; i <= r0.lemgth; i += 1) {
//   console.log(r0.length);
//   const keyboardKey = document.createElement('div');
//   keyboardKey.className = 'key';
//   row0.append(keyboardKey);
// }
// }
// init();

async function getKeys() {
  const res = await fetch('data.json');
  const data = await res.json();
  console.log(data.length);

  //  const dataKeys = getKeys();
  const rowArr0 = data.slice(0, 13);
  // console.log(rowArr1);

  function getRow0() {
  // console.log(data);
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr0.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row0 key';
      // console.log(rowArr1[i].key);
      keyboardKey.innerText = rowArr0[i].nameEn;
      fragment.append(keyboardKey);
    }
    return fragment;
  }
  row0.append(getRow0());

  const deleteKey = document.createElement('div');
  deleteKey.className = 'keyboard__key keyboard__key_row0 key key_plus key_delete';
  deleteKey.innerText = data[13].nameEn;
  // deleteKey.innerText = 'delete';

  row0.append(deleteKey);

  const rowArr1 = data.slice(15, 28);
  console.log(rowArr1);
  const row1 = document.createElement('div');
  row1.className = 'keyboard__row keyboard__row-1';
  keyboard.append(row1);

  function getRow1() {
    // console.log(data);
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr1.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row1 key';
      keyboardKey.innerText = rowArr1[i].nameEn;
      fragment.append(keyboardKey);
    }
    return fragment;
  }
  row1.append(getRow1());

  const tabKey = document.createElement('div');
  tabKey.className = 'keyboard__key keyboard__key_row0 key  key_plus key_tab';
  tabKey.innerText = data[14].nameEn;
  row1.prepend(tabKey);

  // return data;
}
getKeys();

