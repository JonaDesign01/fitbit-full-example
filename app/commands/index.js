import * as messaging from 'messaging';

// get weather
export function getLocationName() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({
      command: 'location',
    });
  }
}
// get list data
export function getListData() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({
      command: 'getListData',
    });
  }
}

// get list item
export function getListItem(id) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({
      command: 'getListItem',
      id: id,
    });
  }
}

// set up
export function init() {
  messaging.peerSocket.addEventListener('open', () => {
    getLocationName();
    getListData();
  });
}
