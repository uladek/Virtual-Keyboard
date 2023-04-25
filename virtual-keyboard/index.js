const allKeys = document.querySelectorAll('.key');


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
  console.log(event.code);
  console.log(event);
});

const row0 = document.createElement('div');
row0.className = 'keyboard__row keyboard__row_0';
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
  row1.className = 'keyboard__row keyboard__row_1';
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
  tabKey.className = 'keyboard__key keyboard__key_row1 key  key_plus key_tab';
  tabKey.innerText = data[14].nameEn;
  row1.prepend(tabKey);

  const rowArr2 = data.slice(29, 40);
  const row2 = document.createElement('div');
  row2.className = 'keyboard__row keyboard__row_2';
  keyboard.append(row2);

  function getRow2() {
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr2.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row2 key';
      keyboardKey.innerText = rowArr2[i].nameEn;
      fragment.append(keyboardKey);
    }
    return fragment;
  }
  row2.append(getRow2());

  const capsLockKey = document.createElement('div');
  capsLockKey.className = 'keyboard__key keyboard__key_row2 key  key_plus key_capslock';
  capsLockKey.innerText = data[28].nameEn;
  row2.prepend(capsLockKey);
  const enterKey = document.createElement('div');
  enterKey.className = 'keyboard__key keyboard__key_row2 key  key_plus key_enter';
  enterKey.innerText = data[40].nameEn;
  row2.append(enterKey);

  const rowArr3 = data.slice(42, 52);
  const row3 = document.createElement('div');
  row3.className = 'keyboard__row keyboard__row_3';
  keyboard.append(row3);
  function getRow3() {
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr3.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row3 key';
      keyboardKey.innerText = rowArr3[i].nameEn;
      fragment.append(keyboardKey);
    }
    return fragment;
  }
  row3.append(getRow3());

  const shiftLeftkKey = document.createElement('div');
  shiftLeftkKey.className = 'keyboard__key keyboard__key_row3 key  key_plus key_shiftleft';
  shiftLeftkKey.innerText = data[41].nameEn;
  row3.prepend(shiftLeftkKey);
  const shiftRightkKey = document.createElement('div');
  shiftRightkKey.className = 'keyboard__key keyboard__key_row3 key  key_plus key_shiftright';
  shiftRightkKey.innerText = data[52].nameEn;
  row3.append(shiftRightkKey);

  // const rowArr4 = data.slice(53, 59);
  const row4 = document.createElement('div');
  row4.className = 'keyboard__row keyboard__row_4';
  keyboard.append(row4);

  const keyControl = document.createElement('div');
  keyControl.className = 'keyboard__key keyboard__key_row4 key key_plus key_control';
  keyControl.innerText = data[53].nameEn;
  row4.append(keyControl);

  const keyOptionLeft = document.createElement('div');
  keyOptionLeft.className = 'keyboard__key keyboard__key_row4 key key_plus key_option key_optionleft';
  keyOptionLeft.innerText = data[54].nameEn;
  row4.append(keyOptionLeft);

  const keyCommandLeft = document.createElement('div');
  keyCommandLeft.className = 'keyboard__key keyboard__key_row4 key key_plus key_command key_commandleft';
  keyCommandLeft.innerText = data[55].nameEn;
  row4.append(keyCommandLeft);

  const keySpace = document.createElement('div');
  keySpace.className = 'keyboard__key keyboard__key_row4 key key_plus key_space';
  keySpace.innerText = data[56].nameEn;
  row4.append(keySpace);

  const keyOptionRight = document.createElement('div');
  keyOptionRight.className = 'keyboard__key keyboard__key_row4 key key_plus key_command key_commandright';
  keyOptionRight.innerText = data[57].nameEn;
  row4.append(keyOptionRight);

  const keyCommandRight = document.createElement('div');
  keyCommandRight.className = 'keyboard__key keyboard__key_row4 key key_plus key_option key_optionrightt';
  keyCommandRight.innerText = data[58].nameEn;
  row4.append(keyCommandRight);

  const keyArrowLeft = document.createElement('div');
  keyArrowLeft.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowleft';
  // keyArrowLeft.innerText = data[59].nameEn;
  row4.append(keyArrowLeft);

  const wrapperUpDown = document.createElement('div');
  wrapperUpDown.className = 'wrapper-up-down';
  row4.append(wrapperUpDown);

  const keyArrowUp = document.createElement('div');
  keyArrowUp.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowup';
  wrapperUpDown.append(keyArrowUp);
  const keyArrowDown = document.createElement('div');
  keyArrowDown.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowdown';
  wrapperUpDown.append(keyArrowDown);

  const keyArrowRight = document.createElement('div');
  keyArrowRight.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowright';
  // keyArrowLeft.innerText = data[59].nameEn;
  row4.append(keyArrowRight);

  
  // function getRow4() {
  //   const fragment = new DocumentFragment();
  //   for (let i = 0; i < rowArr4.length; i += 1) {
  //     const keyboardKey = document.createElement('div');
  //     keyboardKey.className = 'keyboard__key keyboard__key_row4 key key_plus';
  //     keyboardKey.innerText = rowArr4[i].nameEn;
  //     fragment.append(keyboardKey);
  //   }
  //   return fragment;
  // }
}
getKeys();
