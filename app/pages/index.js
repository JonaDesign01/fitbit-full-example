import document from 'document';
import { switchPage } from '../navigation';
import { setStateCallback, removeStateCallback } from '../state';

let $buttonNew = null;
let $buttonHam = null;

export function destroy() {
  $buttonNew = null;
  $buttonHam = null;
  removeStateCallback('index');
}

export function init() {
  $buttonNew = document.getElementById('buttonNew');
  $buttonHam = document.getElementById('buttonHam');

  $buttonNew.onclick = () => {
    destroy();
    switchPage('kiespagina');
  };

  $buttonHam.onclick = () => {
    destroy();
    switchPage('library');
  };

  setStateCallback('index');
}
