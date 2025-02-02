import document from 'document';
import { getLocationName } from '../commands';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $locationName = null;
let $map = null;

function draw() {
  $locationName.text = getStateItem('location');

  if (getStateItem('map')) {
    $map.href = getStateItem('map');
  }
}

export function destroy() {
  console.log('destroy detail page');
  $locationName = null;
  $button = null;
  $map = null;
  removeStateCallback('detail');
}

export function init() {
  console.log('init detail page');
  $locationName = document.getElementById('location');
  $button = document.getElementById('back-button');
  $map = document.getElementById('map');
  $button.onclick = () => {
    destroy();
    switchPage('index');
  };

  getLocationName();
  setStateCallback('detail', draw);
  // draw();
}
