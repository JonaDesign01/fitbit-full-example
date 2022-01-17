import document from 'document';
import { switchPage } from '../navigation';

let $buttonNew = null;
let $buttonHam = null;

export function destroy() {
  $buttonNew = null;
  $buttonHam = null;
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
}
