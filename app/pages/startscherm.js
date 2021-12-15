import document from 'document';
import { switchPage } from '../navigation';
import { setStateCallback, removeStateCallback } from '../state';

let $buttonNew = null;
let $buttonHam = null;

export function destroy() {
  $buttonNew = null;
  $buttonHam = null;
  removeStateCallback('startscherm');
}

export function init() {
  $buttonNew = document.getElementById('buttonNew');
  $buttonHam = document.getElementById('buttonHam');

  $buttonNew.onclick = () => {};

  $buttonHam.onclick = () => {
    destroy();
    switchPage('library');
  };

  setStateCallback('startscherm');
}
