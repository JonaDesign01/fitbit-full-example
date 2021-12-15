import document from 'document';
import { switchPage } from '../navigation';

let $buttonDetail = null;
let $buttonReplace = null;
let $buttonLibrary = null;

export function destroy() {
  $buttonDetail = null;
  $buttonReplace = null;
  $buttonLibrary = null;
}

export function init() {
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
    switchPage('library');
  };
}
