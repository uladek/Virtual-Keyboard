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
      keyboardKey.innerText = rowArr0[i].nameEn;
      fragment.append(keyboardKey);
    }
    return fragment;
  }
  row0.append(getRow0());

  const deleteKey = document.createElement('div');
  deleteKey.className = 'keyboard__key keyboard__key_row0 key key_plus key_delete';
  deleteKey.innerText = data[13].nameEn;

  row0.append(deleteKey);

  const rowArr1 = data.slice(15, 28);
  const row1 = document.createElement('div');
  row1.className = 'keyboard__row keyboard__row_1';
  keyboard.append(row1);

  function getRow1() {
    const fragment = new DocumentFragment();
    for (let i = 0; i < rowArr1.length; i += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.className = 'keyboard__key keyboard__key_row1 key key_letter';
      keyboardKey.innerText = rowArr1[i].nameEn.toLowerCase();
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
  shiftLeftkKey.className = 'keyboard__key keyboard__key_row3 key  key_plus key_shift key_shift_left';
  shiftLeftkKey.innerText = data[41].nameEn;
  row3.prepend(shiftLeftkKey);
  const shiftRightkKey = document.createElement('div');
  shiftRightkKey.className = 'keyboard__key keyboard__key_row3 key  key_plus key_shift key_shift_right';
  shiftRightkKey.innerText = data[52].nameEn.toLowerCase();
  row3.append(shiftRightkKey);

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
  row4.append(keyArrowLeft);
  keyArrowLeft.innerText = String.fromCharCode(data[59].nameEn);
  const wrapperUpDown = document.createElement('div');
  wrapperUpDown.className = 'wrapper-up-down';
  row4.append(wrapperUpDown);

  const keyArrowUp = document.createElement('div');
  keyArrowUp.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowup';
  wrapperUpDown.append(keyArrowUp);
  keyArrowUp.innerText = String.fromCharCode(data[60].nameEn);

  const keyArrowDown = document.createElement('div');
  keyArrowDown.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowdown';
  wrapperUpDown.append(keyArrowDown);
  keyArrowDown.innerText = String.fromCharCode(data[61].nameEn);

  const keyArrowRight = document.createElement('div');
  keyArrowRight.className = 'keyboard__key keyboard__key_row4 key key_plus key_arrow key_arrowright';
  row4.append(keyArrowRight);
  keyArrowRight.innerText = String.fromCharCode(data[62].nameEn);
}
getKeys();

const infoArea = document.createElement('div');
infoArea.className = 'info-area';
centralizer.append(infoArea);
const pInfo = document.createElement('p');
pInfo.className = 'info-area_p';
pInfo.textContent = 'The keyboard was created in the MaxOS';
infoArea.append(pInfo);
const pInfoSwitch = document.createElement('p');
pInfoSwitch.className = 'info-area_p';
pInfoSwitch.textContent = 'To switch between languages press left opt + cmd';
infoArea.append(pInfoSwitch);

async function btnActive() {
  const res = await fetch('data.json');
  const data = await res.json();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
    }

    const btnKeys = document.querySelectorAll('.key');
    const beforeKey = fieldTextarea.value.slice(0, fieldTextarea.selectionStart);
    const afterKey = fieldTextarea.value.slice(fieldTextarea.selectionEnd);
    for (let i = 0; i < btnKeys.length; i += 1) {
      fieldTextarea.focus();
      if (event.code === data[i].code) {
        btnKeys[i].classList.add('key_active');
        if (event.key === 'CapsLock') {
          btnKeys.forEach((el, index) => {
            if (keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameBe);
              } else {
                el.innerText = (data[index].nameBe);
              }
            } else if (!keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameEn);
              } else {
                el.innerText = (data[index].nameEn);
              }
            }
          });
        } else if (btnKeys[i].textContent === 'delete') {
          return fieldTextarea.value;
        } else if (btnKeys[i].textContent === 'tab') {
          const tabKey = '\t';
          fieldTextarea.value = beforeKey + tabKey + afterKey;
          fieldTextarea.selectionEnd = beforeKey.length + 1;
          fieldTextarea.focus();
        } else if (btnKeys[i].textContent === 'return') {
          return fieldTextarea.value;
        } else if (btnKeys[i].textContent === 'shift') {
          const allKeys = document.querySelectorAll('.key');
          allKeys.forEach((el, index) => {
            if (keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].shiftBe);
              } else {
                el.innerText = data[index].shiftBe;
              }
            } else if (!keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].shiftEn);
              } else {
                el.innerText = data[index].shiftEn;
              }
            }
          });
          return fieldTextarea.value;
        } else if (btnKeys[i].textContent === 'control') {
          return fieldTextarea.value;
        } else if (btnKeys[i].textContent === 'option') {
          return fieldTextarea.value;
        } else if (btnKeys[i].textContent === 'command') {
          return fieldTextarea.value;
        } else {
          btnKeys[i].classList.add('key_active');
          if (fieldTextarea.textContent.length === 0) {
            fieldTextarea.value += btnKeys[i].innerText.slice(0, -1);
          } else {
            fieldTextarea.value += btnKeys[i].innerText;
          }
        }
      }
    }
    return fieldTextarea.focus();
  });

  document.addEventListener('keyup', (event) => {
    const btnKeys = document.querySelectorAll('.key');
    for (let i = 0; i < btnKeys.length; i += 1) {
      if (event.code === data[i].code) {
        if (event.key === 'CapsLock') {
          btnKeys.forEach((el, index) => {
            if (keyboard.classList.contains('lang') && (event.key === 'CapsLock')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameBe);
              } else {
                el.innerText = data[index].nameBe.toLowerCase();
              }
            } else if (!keyboard.classList.contains('lang') && (event.key === 'CapsLock')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameEn);
              } else {
                el.innerText = data[index].nameEn.toLowerCase();
              }
            }
          });
          btnKeys[i].classList.remove('key_active');
        } else if (event.key === 'Shift') {
          btnKeys.forEach((el, index) => {
            if (keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].shiftBe);
              } else {
                el.innerText = data[index].nameBe.toLowerCase();
              }
            } else if (!keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].shiftEn);
              } else {
                el.innerText = data[index].nameEn.toLowerCase();
              }
            }
          });
          btnKeys[i].classList.remove('key_active');
        } else if (event.key === 'Meta') {
          btnKeys[i].classList.remove('key_active');
        } else {
          btnKeys[i].classList.remove('key_active');
        }
      }
    }
  });
  fieldTextarea.focus();
}
btnActive();

const switchLang = async () => {
  const res = await fetch('data.json');
  const data = await res.json();
  const btnKeys = document.querySelectorAll('.key');
  const capsKeys = document.querySelector('.key_capslock');

  document.addEventListener('keydown', (event) => {
    if (event.code === 'AltLeft' && !keyboard.classList.contains('lang')) {
      document.addEventListener('keyup', (event2) => {
        if (event2.code === 'MetaLeft') {
          if (capsKeys.classList.contains('key_active')) {
            keyboard.classList.add('lang');
            btnKeys.forEach((el, index) => {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameBe);
              } else {
                el.innerText = data[index].nameBe;
              }
            });
          } else {
            keyboard.classList.add('lang');
            btnKeys.forEach((el, index) => {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameBe);
              } else {
                el.innerText = data[index].nameBe.toLowerCase();
              }
            });
          }
        }
      });
    } else if (event.code === 'AltLeft' && keyboard.classList.contains('lang')) {
      document.addEventListener('keyup', (event2) => {
        if (event2.code === 'MetaLeft') {
          if (capsKeys.classList.contains('key_active')) {
            keyboard.classList.remove('lang');
            btnKeys.forEach((el, index) => {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameEn);
              } else {
                el.innerText = data[index].nameEn;
              }
            });
          } else {
            keyboard.classList.remove('lang');
            btnKeys.forEach((el, index) => {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameEn);
              } else {
                el.innerText = data[index].nameEn.toLowerCase();
              }
            });
          }
        }
      });
    }
  });
};

switchLang();

async function clickButtons() {
  const res = await fetch('data.json');
  const data = await res.json();
  const capsLock = document.querySelector('.key_capslock');

  function capsFunction() {
    capsLock.addEventListener('mousedown', (event) => {
      const allKeys = document.querySelectorAll('.key');
      for (let b = 0; b < allKeys.length; b += 1) {
        capsLock.classList.toggle('key_active');
        if (event.target.innerText === 'caps lock' && capsLock.classList.contains('key_active')) {
          allKeys.forEach((el, index) => {
            if (keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameBe);
              } else {
                el.innerText = (data[index].nameBe);
              }
            } else if (!keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameEn);
              } else {
                el.innerText = (data[index].nameEn);
              }
            }
          });
        } else if (event.target.innerText === 'caps lock' && !capsLock.classList.contains('key_active')) {
          allKeys.forEach((el, index) => {
            if (keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameBe);
              } else {
                el.innerText = data[index].nameBe.toLowerCase();
              }
            } else if (!keyboard.classList.contains('lang')) {
              if (el.classList.contains('key_arrow')) {
                el.innerText = String.fromCharCode(data[index].nameEn);
              } else {
                el.innerText = data[index].nameEn.toLowerCase();
              }
            }
          });
        }
      }
    });
  }
  capsFunction();

  function shiftFunction() {
    const btnShift = document.querySelectorAll('.key_shift');

    btnShift.forEach((elShift) => {
      elShift.addEventListener('mousedown', () => {
        const allKeys = document.querySelectorAll('.key');
        allKeys.forEach((el, index) => {
          if (keyboard.classList.contains('lang')) {
            if (el.classList.contains('key_arrow')) {
              el.innerText = String.fromCharCode(data[index].shiftBe);
            } else {
              el.innerText = data[index].shiftBe;
            }
          } else if (!keyboard.classList.contains('lang')) {
            if (el.classList.contains('key_arrow')) {
              el.innerText = String.fromCharCode(data[index].shiftEn);
            } else {
              el.innerText = data[index].shiftEn;
            }
          }
        });
      });
    });

    btnShift.forEach((elShift) => {
      elShift.addEventListener('mouseup', () => {
        const allKeys = document.querySelectorAll('.key');
        allKeys.forEach((el, index) => {
          if (keyboard.classList.contains('lang')) {
            if (el.classList.contains('key_arrow')) {
              el.innerText = String.fromCharCode(data[index].shiftBe);
            } else {
              el.innerText = data[index].shiftBe.toLowerCase();
            }
          } else if (!el.classList.contains('key_arrow')) {
            if (el.classList.contains('key_arrow')) {
              el.innerText = String.fromCharCode(data[index].shiftEn);
            } else {
              el.innerText = data[index].nameEn.toLowerCase();
            }
          }
        });
      });
    });
    fieldTextarea.value += '';
  }
  shiftFunction();

  keyboard.addEventListener('mousedown', (event) => {
    const btnClick = event.target.closest('.key');
    const beforeKey = fieldTextarea.value.slice(0, fieldTextarea.selectionStart);
    const afterKey = fieldTextarea.value.slice(fieldTextarea.selectionEnd);

    const allKeys = document.querySelectorAll('.key');
    fieldTextarea.focus();

    if (btnClick.textContent === 'delete') {
      fieldTextarea.value = beforeKey.slice(0, -1) + afterKey;
      fieldTextarea.selectionEnd = beforeKey.slice(0, -1).length;
      fieldTextarea.focus();
    } else if (btnClick.textContent === 'tab') {
      const tabKey = '\t';
      fieldTextarea.value = beforeKey + tabKey + afterKey;
      fieldTextarea.selectionEnd = beforeKey.length + 1;
      fieldTextarea.focus();
    } else if (btnClick.textContent === 'caps lock') {
      fieldTextarea.focus();
    } else if (btnClick.textContent === 'return') {
      const returnKey = '\r';
      fieldTextarea.value = beforeKey + returnKey + afterKey;
      fieldTextarea.selectionEnd = beforeKey.length + 1;
      fieldTextarea.focus();
    } else if (btnClick.textContent === 'shift') {
      shiftFunction();
    } else if (btnClick.textContent === 'control') {
      fieldTextarea.focus();
    } else if (btnClick.textContent === 'option') {
      fieldTextarea.focus();
    } else if (btnClick.textContent === 'command') {
      fieldTextarea.focus();
    } else if (btnClick.textContent === ' ') {
      fieldTextarea.value += ' ';
    } else {
      fieldTextarea.value = beforeKey + btnClick.innerText + afterKey;
      fieldTextarea.selectionEnd = beforeKey.length + 1;
      fieldTextarea.focus();
    }
    if (event.target.innerText !== 'caps lock') {
      for (let b = 0; b < allKeys.length; b += 1) {
        if (!allKeys[b].classList.contains('key_active')) {
          allKeys[b].classList.remove('key_active');
        }
        btnClick.classList.add('key_active');
      }
    }
  });

  keyboard.addEventListener('mouseup', (event) => {
    const btnClick = event.target.closest('.key');
    if (event.target.innerText !== 'caps lock') {
      btnClick.classList.remove('key_active');
    }
    fieldTextarea.focus();
  });
}
clickButtons();


