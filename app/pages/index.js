import document from 'document';
import { switchPage } from '../navigation';

let $buttonDetail = null;
let $buttonReplace = null;
let $buttonLibrary = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonDetail = null;
  $buttonReplace = null;
  $buttonLibrary = null;
}

export function init() {
  console.log('init index page');
  $buttonDetail = document.getElementById('detail-button');
  $buttonReplace = document.getElementById('replace-button');
  $buttonLibrary = document.getElementById('library-button');

  $buttonDetail.onclick = () => {
    switchPage('detail', true);
  };
  $buttonReplace.onclick = () => {
    switchPage('replace');
  };
  $buttonLibrary.onclick = () => {
    switchPage('replace');
  };

  doSomething();
}
