import document from 'document';
import { switchPage } from '../navigation';
import { setStateCallback, removeStateCallback } from '../state';

let $buttonRood = null;
let $buttonBlauw = null;
let $buttonGeel = null;
let $buttonWit = null;

export function destroy() {
  $buttonRood = null;
  $buttonBlauw = null;
  $buttonGeel = null;
  $buttonWit = null;
  removeStateCallback('startscherm');
}

export function init() {
  $buttonRood = document.getElementById('buttonRood');
  $buttonBlauw = document.getElementById('buttonBlauw');
  $buttonGeel = document.getElementById('buttonGeel');
  $buttonWit = document.getElementById('buttonWit');

  $buttonRood.onclick = () => {
    destroy();
    switchPage('library');
  };

  $buttonBlauw.onclick = () => {
    destroy();
    switchPage('library');
  };
  $buttonGeel.onclick = () => {
    destroy();
    switchPage('library');
  };
  $buttonWit.onclick = () => {
    destroy();
    switchPage('library');
  };

  setStateCallback('startscherm');
}
