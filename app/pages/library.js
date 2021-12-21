import document from 'document';
import { switchPage } from '../navigation';
import { setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $button1 = null;
let $button2 = null;
let $item1 = null;
let $item2 = null;

export function destroy() {
  $button1 = null;
  $button2 = null;
  $item1 = null;
  $item2 = null;
  $button = null;
  removeStateCallback('library');
}

export function init() {
  $item1 = document.getElementById('item1');
  $button1 = document.getElementById('button-1');
  $item2 = document.getElementById('item2');
  $button2 = document.getElementById('button-2');
  $button = document.getElementById('back-button');

  //function eliminate() {
  //  let obj = document.getElementById('item1');
  //  obj.remove();
  //  }

  $button.onclick = () => {
    destroy();
    switchPage('index');
  };

  $item1.onclick = () => {};

  $item2.onclick = () => {};

  $button1.onclick = () => {
    //eliminate();
  };

  $button2.onclick = () => {};

  setStateCallback('library');
}
