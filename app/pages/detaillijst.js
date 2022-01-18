import document from 'document';
import { getLocationName, getListItem } from '../commands';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $locationName = null;
let $map = null;

function draw() {
  const item = getStateItem('listItem');
  if (item) {
    $locationName.text = item.name;
  }

  if (getStateItem('map')) {
    $map.href = getStateItem('map');
  }
}

export function destroy() {
  console.log('destroy detail page');
  $locationName = null;
  $button = null;
  $map = null;
  removeStateCallback('detaillijst');
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
  getListItem(getStateItem('detaillijstId'));
  setStateCallback('detaillijst', draw);
  // draw();
}
