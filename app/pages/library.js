import document from 'document';
import { switchPage } from '../navigation';
import { getListData } from '../commands';
import {
  getStateItem,
  setStateCallback,
  removeStateCallback,
  setStateItem,
} from '../state';
let myList = null;

let $buttonNew = null;
let $buttonHam = null;

function draw() {
  const list = getStateItem('listData');
  myList.delegate = {
    getTileInfo: (index) => {
      return {
        type: 'my-pool',
        value: list[index],
        index: index,
      };
    },
    configureTile: (tile, info) => {
      console.log(`Item: ${info.index}`);
      if (info.type == 'my-pool') {
        tile.getElementById('text').text = `${info.value.name}`;

        let touch = tile.getElementById('touch');
        touch.onclick = function () {
          setStateItem('detailId', info.value.id);
          switchPage('detail', true);
        };
      }
    },
  };

  // length must be set AFTER delegate
  myList.length = list.length;
}

export function destroy() {
  $buttonNew = null;
  $buttonHam = null;
  myList = null;

  removeStateCallback('index');
  removeStateCallback('index', draw);
}

export function init() {
  $buttonNew = document.getElementById('buttonNew');
  $buttonHam = document.getElementById('buttonHam');
  myList = document.getElementById('myList');
  getListData();
  setStateCallback('library', draw);
  $buttonNew.onclick = () => {
    destroy();
    switchPage('kiespagina');
  };

  $buttonHam.onclick = () => {
    destroy();
    switchPage('library');
  };

  setStateCallback('library');
}

/*import document from 'document';
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

  $item1.onclick = () => {
    destroy();
    switchPage('detail');
  };

  $item2.onclick = () => {
    destroy();
    switchPage('detail');
  };

  $button1.onclick = () => {
    //eliminate();
  };

  $button2.onclick = () => {};

  setStateCallback('library');
}*/
