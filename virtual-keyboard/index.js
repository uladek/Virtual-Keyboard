// const allKeys = document.querySelectorAll('.key');

const centralizer = document.createElement('div');
centralizer.className = 'centralizer';
document.body.append(centralizer);

const titleCentralizer = document.createElement('h3');
titleCentralizer.className = 'centralizer__title';
titleCentralizer.innerText = 'RSS Virtual Keyboard';
centralizer.append(titleCentralizer);
const fieldTextarea = document.createElement('textarea');
fieldTextarea.setAttribute('autofocus', 'autofocus');
fieldTextarea.className = 'field-textarea';

centralizer.append(fieldTextarea);

function setFocus() {
  document.querySelector('.field-textarea').focus();
}
setFocus();

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
centralizer.append(keyboard);
// const r0git = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123]; // +кнопка питания??
// // const rowArr0 = ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
// const r1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace']; // + delete(backspace)
// const r2 = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
// const r3 = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
// const r4 = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16];
// const r5 = [17, 18, 91, 32, 93, 18, 37, 38, 40, 39]; // + Fn last 4 стрелки

async function getKeys() {
  const res = await fetch('data.json');
  const data = await res.json();

  const row0 = document.createElement('div');
  row0.className = 'keyboard__row keyboard__row_0';
  keyboard.append(row0);
  const rowArr0 = data.slice(0, 13);

  function getRow0() {
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr0.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row0 key';
      keyboardKey.data = rowArr0[i].keyCode;
      // keyboardKey.dataset.keycode = rowArr0[i].keyCode;
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
  const row1 = document.createElement('div');
  row1.className = 'keyboard__row keyboard__row_1';
  keyboard.append(row1);

  function getRow1() {
    // console.log(data);
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr1.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row1 key key_letter';
      keyboardKey.innerText = rowArr1[i].nameEn.toLowerCase();
      // keyboardKey.style.cursor = 'pointer';
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
      keyboardKey.innerText = rowArr2[i].nameEn.toLowerCase();
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
      keyboardKey.innerText = rowArr3[i].nameEn.toLowerCase();
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
  shiftRightkKey.innerText = data[52].nameEn.toLowerCase();
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
}
getKeys();

async function btnActive() {
  const res = await fetch('data.json');
  const data = await res.json();
 
  document.addEventListener('keydown', (event) => {
    // fieldTextarea.textContent += btnKeys[i].innerText;

    // setFocus();
    const btnKeys = document.querySelectorAll('.key');
    for (let i = 0; i < btnKeys.length; i += 1) {
      fieldTextarea.focus();
      fieldTextarea.selectionStart = fieldTextarea.value.length;
      if (event.code === data[i].code) {
        if (event.key === 'CapsLock') {
          btnKeys.forEach((el, index) => {
          // el.innerText = data[index].key;
            el.innerText = (data[index].nameEn);
            // fieldTextarea.value += el.innerText;
          });
          btnKeys[i].classList.add('key_active');
        } else if (btnKeys[i].textContent === 'delete') {
          // console.log(fieldTextarea.textContent);
          fieldTextarea.value = fieldTextarea.value.slice(0, -1);
          // (fieldTextarea.value).toString.slice(0, -1);
        } else if (btnKeys[i].textContent === 'tab') {
          // fieldTextarea.focus();
          // fieldTextarea.selectionStart = fieldTextarea.value.length;
          console.log('TAB');
          fieldTextarea.value += '\t';
        } else {
          fieldTextarea.focus();
          // fieldTextarea.selectionStart = fieldTextarea.value.length;
          btnKeys[i].classList.add('key_active');
          if (fieldTextarea.textContent.length === 0) {
            fieldTextarea.value += btnKeys[i].innerText.slice(0, -1);
          } else {
            fieldTextarea.value += btnKeys[i].innerText;
          }
        }
      }
    }
  });


  // function keyDisActive() {
  document.addEventListener('keyup', (event) => {
    console.log(event.code);
    const btnKeys = document.querySelectorAll('.key');
    for (let i = 0; i < btnKeys.length; i += 1) {
      if (event.code === data[i].code) {
        if (event.key === 'CapsLock') {
          btnKeys.forEach((el, index) => {
            el.innerText = data[index].nameEn.toLowerCase();
          });
          btnKeys[i].classList.remove('key_active');
        } else {
          btnKeys[i].classList.remove('key_active');
        }
      }
    }
  });
// }
//   keyDisActive();
  // setInterval(keyDisActive, 1000);
}
btnActive();

async function clickButtons() {
  const res = await fetch('data.json');
  const data = await res.json();
  const capsLock = document.querySelector('.key_capslock');

  function capsFunction() {
    capsLock.addEventListener('mousedown', (event) => {
      const allKeys = document.querySelectorAll('.key');
      // console.log(event.target.innerText === 'caps lock' && (!capsLock.classList.contains('key_active')));
      // console.log(capsLock.classList.contains('key_active'));

      for (let b = 0; b < allKeys.length; b += 1) {
      // if (event.target.innerText === 'caps lock') {
      //   btnClick.classList.add('key_active');
      // } else {
        if (!allKeys[b].classList.contains('key_active')) {
          allKeys[b].classList.remove('key_active');
        }
        capsLock.classList.toggle('key_active');
        // allKeys[b].classList.remove('key_active');
        // }
        if (event.target.innerText === 'caps lock' && (capsLock.classList.contains('key_active'))) {
          allKeys.forEach((el, index) => {
            el.innerText = (data[index].nameEn);
            // capsLock.classList.add('key_active');
          });
        } else if (!capsLock.classList.contains('key_active')) {
          allKeys.forEach((el, index) => {
            // capsLock.classList.remove('key_active');
            el.innerText = (data[index].nameEn).toLowerCase();
          });
        }
      }
    });
  }
  capsFunction();

  keyboard.addEventListener('mousedown', (event) => {
    const btnClick = event.target.closest('.key');
    const allKeys = document.querySelectorAll('.key');
    // console.log(fieldTextarea.focus());
    // fieldTextarea.textContent.focus();
    console.log(btnClick.textContent);
    fieldTextarea.focus();
    fieldTextarea.selectionStart = fieldTextarea.value.length;
    // console.log(fieldTextarea.textContent);
    // if (event.target.closest('.key_delete')) {
    if (btnClick.textContent === 'delete') {
      fieldTextarea.value = fieldTextarea.value.slice(0, -1);
    } else if (btnClick.textContent === 'tab') {
      fieldTextarea.value += '\t';
    } else {
      fieldTextarea.value += btnClick.innerText;
    }

    if (event.target.innerText !== 'caps lock') {
      for (let b = 0; b < allKeys.length; b += 1) {
        if (!allKeys[b].classList.contains('key_active')) {
          allKeys[b].classList.remove('key_active');
        }
        btnClick.classList.add('key_active');
      }
    //   // btnClick.classList.add('key_active');
    }
    //  else if (event.target.innerText === 'caps lock') {
    //   capsFunction();
    // }
  });

  keyboard.addEventListener('mouseup', (event) => {
    const btnClick = event.target.closest('.key');
    if (event.target.innerText !== 'caps lock') {
      btnClick.classList.remove('key_active');
    }
    // else if (event.target.innerText === 'caps lock') {
    //   capsFunction();
    //   // btnClick.classList.toggle('key_active');
    // }
  });
}
clickButtons();
