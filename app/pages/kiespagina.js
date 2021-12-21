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
  removeStateCallback('index');
}

export function init() {
  $buttonRood = document.getElementById('buttonRood');
  $buttonBlauw = document.getElementById('buttonBlauw');
  $buttonGeel = document.getElementById('buttonGeel');
  $buttonWit = document.getElementById('buttonWit');

  $buttonRood.onclick = () => {
    destroy();
    switchPage('detail');
  };

  $buttonBlauw.onclick = () => {
    destroy();
    switchPage('detail');
  };
  $buttonGeel.onclick = () => {
    destroy();
    switchPage('detail');
  };
  $buttonWit.onclick = () => {
    destroy();
    switchPage('detail');
  };

  setStateCallback('index');
}
